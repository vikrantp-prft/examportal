using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// Result's Service Interface
    /// </summary>
    public interface IResultsService
    {
        /// <summary>
        /// Get Result's list by Exam ID
        /// </summary>
        /// <value></value>
        IEnumerable<ResultsDTO> GetResultsByExamId (string examId, RequestModel requestModel);


        /// <summary>
        /// Get Result's list by User ID
        /// </summary>
        /// <value></value>
        IEnumerable<ResultsDTO> GetResultsByUserId (string userId, RequestModel requestModel);


        /// <summary>
        /// Save Results
        /// </summary>
        /// <value></value> 
        bool SaveResults(ResultsDTO resultsDTO);


        /// <summary>
        /// Delete Results
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteResultsByExamId (string examId);
    }
}
