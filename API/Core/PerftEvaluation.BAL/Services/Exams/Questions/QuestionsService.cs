using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services {
    /// <summary>
    /// Questions Service
    /// </summary>
    public class QuestionsService : IQuestionsService {
        protected readonly IQuestionsRepository _questionsRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        public QuestionsService (IQuestionsRepository questionsRepository, IMapper mapper) {
            this._questionsRepository = questionsRepository;
            this._mapper = mapper;
        }
        public ResponseModel GetQuestionsByExamId (string examId, RequestModel requestModel) {
            //Filter & sort the data
            var filteredQuestions = this._questionsRepository.GetQuestionsByExamId (examId).AsQueryable ().SortAndFilter (requestModel, DbFilters.QuestionFilters);
            //Integrate pagination
            var questions = filteredQuestions.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, this._mapper.Map<IEnumerable<QuestionDTO>> (questions), (filteredQuestions.Count () < 100 ? filteredQuestions.Count () : 100));
        }

        public bool ActiveQuestions (string questionId) {
            return this._questionsRepository.ActiveQuestion (questionId);
        }

        public QuestionsDTO GetQuestionById (string questionsId) {
            return this._mapper.Map<QuestionsDTO> (this._questionsRepository.GetQuestionsById (questionsId));
        }

        public bool InactiveQuestions (string questionId) {
            return this._questionsRepository.InactivateQuestion (questionId);
        }

        public bool SaveQuestions (QuestionsDTO questionsDTO) {
            return this._questionsRepository.SaveQuestions (this._mapper.Map<Questions> (questionsDTO));
        }

        public bool UpdateQuestion (QuestionsDTO questionsDTO) {
            return this._questionsRepository.UpdateQuestions (this._mapper.Map<Questions> (questionsDTO));
        }

        public bool DeleteQuestions (string questionId) {
            return this._questionsRepository.DeleteQuestion (questionId);
        }
    }
}