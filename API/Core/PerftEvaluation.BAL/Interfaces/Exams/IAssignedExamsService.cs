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
        /// Check whether an exam is assigned to any employee
        /// </summary>
        /// <value></value> 
        bool IsExamAssigned(string examId);
    }
}
