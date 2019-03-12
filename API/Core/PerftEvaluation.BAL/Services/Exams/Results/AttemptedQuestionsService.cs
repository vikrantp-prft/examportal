using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using MongoDB.Driver;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services
{

    /// <summary>
    /// Attempted Questions Service Class
    /// </summary>
    public class AttemptedQuestionsService : IAttemptedQuestionsService
    {
        public readonly IAttemptedQuestionsRepository _attemptedQuestionsRepository;
        public readonly IQuestionsService _questionsService;
        public readonly IQuestionsRepository _questionsRepository;
        public readonly IMasterService _masterService;
        public readonly IMapper _mapper;
        public AttemptedQuestionsService(IAttemptedQuestionsRepository attemptedQuestionsRepository,
            IMapper mapper, IQuestionsRepository questionsRepository, IMasterService masterService, IQuestionsService questionsService)
        {
            this._attemptedQuestionsRepository = attemptedQuestionsRepository;
            this._questionsRepository = questionsRepository;
            this._masterService = masterService;
            this._mapper = mapper;
            this._questionsService = questionsService;
        }

        /// <summary>
        /// Delete Attempted Questions
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool DeleteAttemptedQuestionsByExamId(string examId)
        {
            try
            {
                return this._attemptedQuestionsRepository.DeleteAttemptedQuestionsByExamId(examId);
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        /// <summary>
        /// Get Attempted Questions list by Exam ID
        /// </summary>
        ///<param name="requestModel"></param>
        /// <value></value>
        public ResponseModel GetAttemptedQuestionsByExamsId(RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredAttemptedQuestions = this._attemptedQuestionsRepository.GetAttemptedQuestionsByExamsId(requestModel.Id).AsQueryable().SortAndFilter(requestModel, DbFilters.ExamFilters);
            //Integrate pagination
            var attemptedQuestions = filteredAttemptedQuestions.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            //return object
            List<AttemptedQuestionsDTO> attemptedQuestionsJoin = new List<AttemptedQuestionsDTO>();
            foreach (var item in attemptedQuestions)
            {
                AttemptedQuestionsDTO attemptedQuestionsDTO = new AttemptedQuestionsDTO();
                attemptedQuestionsDTO.Id = item.Id;
                attemptedQuestionsDTO.QuestionsId = item.QuestionsId;
                attemptedQuestionsDTO.SelectedOptionId = item.SelectedOptionId;
                attemptedQuestionsDTO.SubjectiveAnswer = item.SubjectiveAnswer;
                attemptedQuestionsDTO.UserId = item.UserId;
                attemptedQuestionsDTO.ExamId = item.ExamId;
                attemptedQuestionsDTO.Marks = item.Marks;
                attemptedQuestionsDTO.IsCorrect = item.IsCorrect;
                attemptedQuestionsDTO.IsAttempted = item.IsAttempted;
                attemptedQuestionsDTO.IsActive = item.IsActive;
                attemptedQuestionsDTO.IsDeleted = item.IsDeleted;
                attemptedQuestionsDTO.QuestionsDetails = _questionsService.GetQuestionById(item.QuestionsId);
                attemptedQuestionsJoin.Add(attemptedQuestionsDTO);
            }

            //return object
            return CommonResponse.OkResponse(requestModel, attemptedQuestionsJoin, (filteredAttemptedQuestions.Count() < 100 ? filteredAttemptedQuestions.Count() : 100));
        }

        /// <summary>
        /// Save Attempted Questions
        /// </summary>
        /// <value></value> 
        public bool SaveAttemptedQuestions(AttemptedQuestionsDTO attemptedQuestionsDTO)
        {
            try
            {

                string[] correctedOptions = _questionsService.GetCorrectOptionsByQuestionId(attemptedQuestionsDTO.QuestionsId);

                string[] selectedOptions = attemptedQuestionsDTO.SelectedOptionId;

                foreach (var options in selectedOptions)
                {
                    foreach (var val in correctedOptions)
                    {
                        if (options == val)
                        {
                            attemptedQuestionsDTO.IsCorrect = true;
                        }
                    }
                }

                return this._attemptedQuestionsRepository.SaveAttemptedQuestions(this._mapper.Map<AttemptedQuestions>(attemptedQuestionsDTO));

            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        /// <summary>
        /// Get the list of question as per the exam id
        /// </summary>
        /// <param name="ExamId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public List<UserQuestionsDTO> GetQuestionsByAssignedExam(string ExamId, string UserId)
        {
            try
            {
                List<UserQuestionsDTO> userQuestionsDTOList = new List<UserQuestionsDTO>();
                var questions = _questionsRepository.GetQuestionsByExamId(ExamId);

                foreach (var item in questions)
                {
                    UserQuestionsDTO userQuestionsDTO = new UserQuestionsDTO();
                    userQuestionsDTO.ExamId = item.ExamId;
                    userQuestionsDTO.QuestionId = item.Id;
                    userQuestionsDTO.UserId = UserId;
                    userQuestionsDTO.QuestionType = item.QuestionType;
                    userQuestionsDTO.CategoryId = item.CategoryId;
                    userQuestionsDTO.Question = item.Question;
                    userQuestionsDTO.Category = _masterService.GetMasterById(item.CategoryId);
                    userQuestionsDTO.Options = this._mapper.Map<List<UserOptionsDTO>>(item.Options);
                    var attemptedQuestions = _attemptedQuestionsRepository.GetAttemptedQuestionsByExamsId(ExamId).Where(x => x.UserId == UserId && x.QuestionsId == item.Id).FirstOrDefault();
                    if (attemptedQuestions != null)
                    {
                        userQuestionsDTO.SelectedOptionId = attemptedQuestions.SelectedOptionId;
                        foreach (var options in userQuestionsDTO.Options)
                        {
                            if (userQuestionsDTO.SelectedOptionId.Contains(options.OptionId))
                            {
                                options.IsSelected = true;
                            }

                        }
                        userQuestionsDTO.IsAttempted = attemptedQuestions.IsAttempted;
                        userQuestionsDTO.SubjectiveAnswer = attemptedQuestions.SubjectiveAnswer;
                    }
                    userQuestionsDTOList.Add(userQuestionsDTO);
                }

                return userQuestionsDTOList;

            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
    }
}