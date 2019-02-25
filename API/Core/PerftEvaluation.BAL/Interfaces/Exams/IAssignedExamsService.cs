using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces {
    /// <summary>
    /// Assigned Exams Interface Class
    /// </summary>
    public interface IAssignedExamsService {
        /// <summary>
        /// List of exams that has been assigned to user
        /// </summary>
        ResponseModel GetExamsByUserId (RequestModel requestModel);

        /// <summary>
        /// List of Employees that has been assigned to Exam
        /// </summary>
        ResponseModel GetUsersByExamId (RequestModel requestModel);

        /// <summary>
        /// Assigned Exams to an Employee
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool ActiveExamAssigned (string examId);

        /// <summary>
        /// Unassigned Exams to an Employee
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool InactiveExamAssigned (string examId);

        /// <summary>
        /// Add assignment between users and exams
        /// </summary>
        /// <param name="assignedExamsDTOs"></param>
        /// <returns>true/false</returns>
        bool ExamAssignment (List<AssignedExamsDTO> assignedExamsDTOs);
    }
}