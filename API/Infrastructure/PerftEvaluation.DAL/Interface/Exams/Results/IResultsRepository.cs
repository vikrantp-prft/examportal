using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface
{
    /// <summary>
    /// Result Repository Interfce Class
    /// </summary>
    public interface IResultsRepository
    {
        /// <summary>
        /// List of Results by Exam ID
        /// </summary>
        /// <returns>Results List</returns>
        IEnumerable<Results> GetResultsByExamsId(string examId);

        /// <summary>
        /// List of Results by User ID
        /// </summary>
        /// <returns>Results List</returns>
        IEnumerable<Results> GetResultsByUsersId(string userId);

        /// <summary>
        /// Save Results
        /// </summary>
        /// <param name="results"></param>
        /// <returns></returns>
        bool SaveResults(Results results);


        /// <summary>
        /// Deleted Results detail
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteResultsByExamId (string examId);

        Results GenerateResults(string userId, string examId);
    }
}
