using System;
using PerftEvaluation.DTO;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// Assigned Exams Interface Class
    /// </summary>
    public interface IAssignedExamsService
    {
        /// <summary>
        /// List of exams that has been assigned to user
        /// </summary>
        ResponseModel GetExamsByUserId (RequestModel requestModel);

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
