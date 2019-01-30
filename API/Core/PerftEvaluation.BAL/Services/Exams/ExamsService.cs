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
    public class ExamsService : IExamsService {
        /// <summary>
        /// Exam Service class
        /// </summary>
        protected readonly IExamsRepository _examsRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        public ExamsService (IExamsRepository ExamsRepository, IMapper mapper) {
            this._examsRepository = ExamsRepository;
            this._mapper = mapper;
        }

        /// <summary>
        /// Get list Exams
        /// </summary>
        /// <value></value>
        public ResponseModel GetExams (RequestModel requestModel) {
            //Filter & sort the data
            var filteredExams = this._examsRepository.GetExams ().AsQueryable ().SortAndFilter (requestModel, DbFilters.ExamFilters);
            //Integrate pagination
            var exams = filteredExams.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, this._mapper.Map<IEnumerable<ExamsDTO>> (exams), (filteredExams.Count () < 100 ? filteredExams.Count () : 100));
        }

        /// <summary>
        /// Get Active Exams
        /// </summary>
        /// <value></value>
        public bool ActiveExams (string examId) {
            return this._examsRepository.ActiveExams (examId);
        }

        /// <summary>
        /// Delete exam
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool DeleteExams (string examId) {
            return this._examsRepository.DeleteExam (examId);
        }

        /// <summary>
        /// Get User By ID
        /// </summary>
        /// <value></value>
        public ExamsDTO GetExamsById (string examId) {
            return this._mapper.Map<ExamsDTO> (this._examsRepository.GetExamsById (examId));
        }

        /// <summary>
        /// Get Inactive Exams
        /// </summary>
        /// <value></value>
        public bool InactiveExams (string examId) {
            return this._examsRepository.InactivateExams (examId);
        }

        /// <summary>
        /// Save Exams
        /// </summary>
        /// <value></value>
        public bool SaveExams (ExamsDTO examsDTO) {
            return this._examsRepository.SaveExams (this._mapper.Map<Exams> (examsDTO));
        }

        /// <summary>
        /// Update Exams
        /// </summary>
        /// <value></value>
        public bool UpdateExam (ExamsDTO examsDTO) {
            return this._examsRepository.UpdateExams (this._mapper.Map<Exams> (examsDTO));
        }
    }
}