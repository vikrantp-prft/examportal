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
    /// Result's Service class
    /// </summary>
    public class ResultsService : IResultsService {
        protected readonly IResultsRepository _resultsRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        public ResultsService (IResultsRepository resultsRepository, IMapper mapper) {
            this._resultsRepository = resultsRepository;
            this._mapper = mapper;
        }

        /// <summary>
        /// Delete Results By Exam Id
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool DeleteResultsByExamId (string examId) {
            return this._resultsRepository.DeleteResultsByExamId (examId);
        }

        /// <summary>
        /// Get Result's list by Exam ID
        /// </summary>
        /// <value></value>
        public ResponseModel GetResultsByExamId (RequestModel requestModel) {
            //Filter & sort the data
            var filteredResults = this._resultsRepository.GetResultsByExamsId (requestModel.Id).AsQueryable ().SortAndFilter (requestModel, DbFilters.ResultFilters);
            //Integrate pagination
            var results = filteredResults.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, this._mapper.Map<IEnumerable<ResultsDTO>> (results), (filteredResults.Count () < 100 ? filteredResults.Count () : 100));
        }

        /// <summary>
        /// Get Result's list by User ID
        /// </summary>
        /// <value></value>
        public ResponseModel GetResultsByUserId (RequestModel requestModel) {
            //Filter & sort the data
            var filteredResults = this._resultsRepository.GetResultsByUsersId (requestModel.Id).AsQueryable ().SortAndFilter (requestModel, DbFilters.ResultFilters);
            //Integrate pagination
            var results = filteredResults.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, this._mapper.Map<IEnumerable<ResultsDTO>> (results), (filteredResults.Count () < 100 ? filteredResults.Count () : 100));
        }

        /// <summary>
        /// Save Results
        /// </summary>
        /// <value></value>
        public bool SaveResults (ResultsDTO resultsDTO) {
            return this._resultsRepository.SaveResults (this._mapper.Map<Results> (resultsDTO));
        }
    }
}