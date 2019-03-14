using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services
{
    /// <summary>
    /// Result's Service class
    /// </summary>
    public class ResultsService : IResultsService
    {
        protected readonly IResultsRepository _resultsRepository;

        protected readonly IExamsRepository _examsRepository;

        protected readonly IAttemptedQuestionsRepository _attemptedQuestionsRepository;

        protected readonly IExamsService _examsService;

        protected readonly IEmployeeRepository _employeeRepository;
        protected readonly IEmployeeService _employeeService;

        protected readonly IQuestionsService _questionsService;

        protected readonly IQuestionsRepository _questionsRepository;

        protected readonly IMasterService _masterService;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        public ResultsService(IResultsRepository resultsRepository,
                               IMapper mapper,
                               IExamsRepository examsRepository,
                               IExamsService examsService,
                               IEmployeeRepository employeeRepository,
                               IEmployeeService employeeService,
                               IQuestionsService questionsService,
                               IAttemptedQuestionsRepository attemptedQuestionsRepository,
                               IQuestionsRepository questionsRepository,
                               IMasterService masterService)
        {
            this._resultsRepository = resultsRepository;
            this._mapper = mapper;
            this._examsRepository = examsRepository;
            this._examsService = examsService;
            this._employeeRepository = employeeRepository;
            this._employeeService = employeeService;
            this._questionsService = questionsService;
            this._attemptedQuestionsRepository = attemptedQuestionsRepository;
            this._questionsRepository = questionsRepository;
            this._masterService = masterService;
        }

        /// <summary>
        /// Delete Results By Exam Id
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool DeleteResultsByExamId(string examId)
        {
            return this._resultsRepository.DeleteResultsByExamId(examId);
        }

        /// <summary>
        /// Get Result's list by Exam ID
        /// </summary>
        /// <value></value>
        public ResponseModel GetResultsByExamId(RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredResults = this._resultsRepository.GetResultsByExamsId(requestModel.Id).AsQueryable().SortAndFilter(requestModel, DbFilters.ResultFilters);
            //Integrate pagination
            var results = filteredResults.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            //return object
            List<ResultsDTO> resultJoin = new List<ResultsDTO>();
            foreach (var item in results)
            {
                ResultsDTO resultsDTO = new ResultsDTO();
                resultsDTO.Id = item.Id;
                resultsDTO.UserId = item.UserId;
                resultsDTO.ExamId = item.ExamId;
                resultsDTO.QuestionsAttempted = item.QuestionsAttempted;
                resultsDTO.TotalMarks = item.TotalMarks;
                resultsDTO.ObtainedMarks = item.ObtainedMarks;
                resultsDTO.Duration = item.Duration;
                resultsDTO.TimeConsumed = item.TimeConsumed;
                resultsDTO.StartTime = item.StartTime;
                resultsDTO.EndTime = item.EndTime;
                resultsDTO.IsDeleted = item.IsDeleted;
                resultsDTO.IsActive = item.IsActive;
                resultsDTO.Exam = _examsService.GetExamsById(item.ExamId);
                resultsDTO.PassingMarks = resultsDTO.Exam.PassingMarks;
                resultsDTO.Percentage = item.Percentage;
                resultsDTO.Employee = _employeeService.GetEmployeeById(item.UserId);
                resultJoin.Add(resultsDTO);
            }

            //return object
            return CommonResponse.OkResponse(requestModel, resultJoin, (filteredResults.Count() < 100 ? filteredResults.Count() : 100));

        }

        /// <summary>
        /// Get the list of question as per the exam id per user
        /// </summary>
        /// <param name="ExamId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public List<UserAttemptedQuestionsDTO> GetIndividualResults(string ExamId, string UserId)
        {
            try
            {
                List<UserAttemptedQuestionsDTO> userAttemptedQuestionsList = new List<UserAttemptedQuestionsDTO>();
                var questions = _questionsRepository.GetQuestionsByExamId(ExamId);

                foreach (var item in questions)
                {
                    UserAttemptedQuestionsDTO userAttemptedQuestionsDTO = new UserAttemptedQuestionsDTO();
                    userAttemptedQuestionsDTO.ExamId = item.ExamId;
                    userAttemptedQuestionsDTO.QuestionId = item.Id;
                    userAttemptedQuestionsDTO.UserId = UserId;
                    userAttemptedQuestionsDTO.Exams = _examsService.GetExamsById(item.ExamId);
                    userAttemptedQuestionsDTO.Users = _employeeService.GetEmployeeById(UserId);
                    userAttemptedQuestionsDTO.Question = _questionsService.GetQuestionById(item.Id);
                    var percentage = _resultsRepository.GetResultsByExamsId(ExamId).FirstOrDefault();
                    userAttemptedQuestionsDTO.Percentage = percentage.Percentage;
                    var attemptedQuestions = _attemptedQuestionsRepository.GetAttemptedQuestionsByExamsId(ExamId).Where(x => x.UserId == UserId && x.QuestionsId == item.Id).FirstOrDefault();
                    if (attemptedQuestions != null)
                    {
                        userAttemptedQuestionsDTO.SelectedOptionId = attemptedQuestions.SelectedOptionId;
                        userAttemptedQuestionsDTO.IsAttempted = attemptedQuestions.IsAttempted;
                        userAttemptedQuestionsDTO.IsCorrect = attemptedQuestions.IsCorrect;
                        userAttemptedQuestionsDTO.SubjectiveAnswer = attemptedQuestions.SubjectiveAnswer;
                    }
                    userAttemptedQuestionsList.Add(userAttemptedQuestionsDTO);
                }

                return userAttemptedQuestionsList;

            }
            catch (Exception exception)
            {
                throw exception;
            }
        }

        /// <summary>
        /// Save Results
        /// </summary>
        /// <value></value>
        public bool SaveResults(ResultsDTO resultsDTO)
        {
            return this._resultsRepository.SaveResults(this._mapper.Map<Results>(resultsDTO));
        }

        public ResultsDTO GenerateResults(ResultsDTO resultsDTO)
        {
            var result = this._resultsRepository.GenerateResults(resultsDTO.UserId, resultsDTO.ExamId);
            return this._mapper.Map<ResultsDTO>(result);
        }
    }
}