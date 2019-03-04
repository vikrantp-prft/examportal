using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// Result's Service Interface
    /// </summary>
    public interface IResultsService
    {
        /// <summary>
        /// Get Result's list by Exam ID
        /// </summary>
        /// <value></value>
        ResponseModel GetResultsByExamId(RequestModel requestModel);


        /// <summary>
        /// Save Results
        /// </summary>
        /// <value></value> 
        bool SaveResults(ResultsDTO resultsDTO);

        /// <summary>
        /// Delete Results
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteResultsByExamId(string examId);

        ResultsDTO GenerateResults(ResultsDTO resultsDTO);


        /// <summary>
        /// Get the list of question as per the exam id per user
        /// </summary>
        /// <param name="ExamId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        List<UserAttemptedQuestionsDTO> GetIndividualResults(string ExamId, string UserId);
    }
}