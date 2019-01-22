using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities.Exams;

namespace PerftEvaluation.DAL.Interface.Exams
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
        IEnumerable<Exams> GetExams ();
    }
}
