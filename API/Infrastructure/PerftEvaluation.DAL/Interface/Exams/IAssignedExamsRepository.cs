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

        /// <summary>
        /// Assigned Exams to an Employee
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool ActiveExamAssigned(string examId);

        /// <summary>
        /// Unassigned Exams to an Employee
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool InactiveExamAssigned(string examId);
    }
}
