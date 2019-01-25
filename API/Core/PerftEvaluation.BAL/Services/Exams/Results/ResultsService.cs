using System;
using System.Collections.Generic;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
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

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        public ResultsService(IResultsRepository resultsRepository, IMapper mapper)
        {
            this._resultsRepository = resultsRepository;
            this._mapper = mapper;
        }

        /// <summary>
        /// Get Result's list by Exam ID
        /// </summary>
        /// <value></value>
        public IEnumerable<ResultsDTO> GetResultsByExamId(string examId)
        {
            return this._mapper.Map<IEnumerable<ResultsDTO>>(this._resultsRepository.GetResultsByExamsId(examId));
        }

        /// <summary>
        /// Get Result's list by User ID
        /// </summary>
        /// <value></value>
        public IEnumerable<ResultsDTO> GetResultsByUserId(string userId)
        {
            return this._mapper.Map<IEnumerable<ResultsDTO>>(this._resultsRepository.GetResultsByUsersId(userId));
        }

        /// <summary>
        /// Save Results
        /// </summary>
        /// <value></value>
        public bool SaveResults(ResultsDTO resultsDTO)
        {
            return this._resultsRepository.SaveResults(this._mapper.Map<Results>(resultsDTO));
        } 
    }
}
