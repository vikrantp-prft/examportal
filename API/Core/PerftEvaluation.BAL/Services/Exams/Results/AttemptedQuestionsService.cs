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
        public readonly IMapper _mapper;
        public AttemptedQuestionsService(IAttemptedQuestionsRepository attemptedQuestionsRepository,
                                        IMapper mapper,
                                        IQuestionsService questionsService)
        {
            this._attemptedQuestionsRepository = attemptedQuestionsRepository;
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
            var filteredAttemptedQuestions = this._attemptedQuestionsRepository.GetAttemptedQuestionsByExamsId(requestModel.Id).AsQueryable().SortAndFilter(requestModel, DbFilters.ResultFilters);
            //Integrate pagination
            var attemptedQuestions = filteredAttemptedQuestions.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            //return object
            List<AttemptedQuestionsDTO> attemptedQuestionsJoin = new List<AttemptedQuestionsDTO>();
            foreach (var item in attemptedQuestions)
            {
                AttemptedQuestionsDTO attemptedQuestionsDTO = new AttemptedQuestionsDTO();
                attemptedQuestionsDTO.Id = item.Id;
                attemptedQuestionsDTO.QuestionsId = item.QuestionsId;
                attemptedQuestionsDTO.selectedOptionId = item.selectedOptionId;
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
                return this._attemptedQuestionsRepository.SaveAttemptedQuestions(this._mapper.Map<AttemptedQuestions>(attemptedQuestionsDTO));
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }

        /// <summary>
        /// Update Attempted details
        /// </summary>
        /// <param name="attemptedQuestions"></param>
        /// <returns></returns>
        public bool UpdateAttemptedQuestions(AttemptedQuestionsDTO attemptedQuestionsDTO)
        {
            try
            {
                return this._attemptedQuestionsRepository.UpdateAttemptedQuestions(this._mapper.Map<AttemptedQuestions>(attemptedQuestionsDTO));
            }
            catch (Exception ex)
            {
                throw (ex);
            }
        }
    }
}
