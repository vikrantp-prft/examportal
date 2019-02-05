using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface
{
    /// <summary>
    /// Assigned Exams Repository Interfce Class
    /// </summary>
    public interface IAssignedExamsRepository
    {
        /// <summary>
        /// List of Exams by User ID
        /// </summary>
        /// <returns>Exams List</returns>
        IEnumerable<AssignedExams> GetAssignedExamsByUserId(string userId);

    }
}
