using System;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// Attempted Questions Service Interface
    /// </summary>

    public interface IAttemptedQuestionsService
    {
        /// <summary>
        /// Get Attempted Questions list by Exam ID
        /// </summary>
        /// <value></value>
        ResponseModel GetAttemptedQuestionsByExamsId(RequestModel requestModel);

        /// <summary>
        /// Save Attempted Questions
        /// </summary>
        /// <value></value> 
        bool SaveAttemptedQuestions(AttemptedQuestionsDTO attemptedQuestionsDTO);

        /// <summary>
        /// Delete Attempted Questions
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteAttemptedQuestionsByExamId(string examId);


        /// <summary>
        /// Update Attempted Questions details
        /// </summary>
        /// <param name="attemptedQuestions"></param>
        /// <returns></returns>
        bool UpdateAttemptedQuestions(AttemptedQuestionsDTO attemptedQuestionsDTO);
    }
}
