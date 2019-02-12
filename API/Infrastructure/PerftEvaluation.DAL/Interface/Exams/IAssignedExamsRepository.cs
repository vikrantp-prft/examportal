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
        /// List of Exams by Employee ID
        /// </summary>
        /// <returns>Exams List</returns>
        IEnumerable<AssignedExams> GetAssignedExamsByUserId(string userId);


        /// <summary>
        /// List of Employees by Exam ID
        /// </summary>
        /// <returns>Employee List</returns>
        IEnumerable<AssignedExams> GetAssignedUsersByExamId(string examId);



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
