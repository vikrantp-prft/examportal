using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface
{
    /// <summary>
    /// Exams Repository Interface
    /// </summary>
    public interface IExamsRepository
    {
        /// <summary>
        /// List of Exams
        /// </summary>
        /// <returns>Exams List</returns>
        IEnumerable<Exams> GetExams();

        /// <summary>
        /// Save Exams
        /// </summary>
        /// <param name="exams"></param>
        /// <returns></returns>
        bool SaveExams(Exams exams);

        /// <summary>
        /// Get Exams Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        Users GetExamsById(string Id);

        /// <summary>
        /// Update Exams details
        /// </summary>
        /// <param name="exams"></param>
        /// <returns></returns>
        bool UpdateExams(Exams exams);

        /// <summary>
        /// Inactivate Exams
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool InactivateExams (string examId);

        /// <summary>
        /// Active Exams
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool ActiveExams (string examId);
    }
}
