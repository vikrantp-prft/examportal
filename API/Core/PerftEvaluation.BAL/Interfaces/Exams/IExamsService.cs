using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.DTO.Dtos.Dashboard;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// Exams Service Interface
    /// </summary>

    public interface IExamsService
    {
        /// <summary>
        /// Get list Exams
        /// </summary>
        /// <value></value>
        ResponseModel GetExams (RequestModel requestModel);

        /// <summary>
        /// Save Exams
        /// </summary>
        /// <value></value> 
        bool SaveExams(ExamsDTO examsDTO);

        /// <summary>
        /// Get Exams by ID
        /// </summary>
        /// <value></value> 
        ExamsDTO GetExamsById(string examId);

        /// <summary>
        /// Update Exams
        /// </summary>
        /// <value></value> 
        bool UpdateExam(ExamsDTO examsDTO);

        /// <summary>
        ///Active Exams
        /// </summary>
        /// <value></value> 
        bool ActiveExams(string examId);

        /// <summary>
        ///Inactive Exams
        /// </summary>
        /// <value></value> 
        bool InactiveExams(string examId);


        /// <summary>
        /// Delete Exams
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteExams (string examId);


        /// <summary>
        /// Get the dashboard count and content
        /// </summary>
        /// <returns></returns>
        // DashboardDTO GetDashboardInfo();
    }
}