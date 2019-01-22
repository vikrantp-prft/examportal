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
        bool SaveExams (Exams exams);
    }
}
