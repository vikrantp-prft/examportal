using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces {
    /// <summary>
    /// Attempted Questions Service Interface
    /// </summary>

    public interface IAttemptedQuestionsService {
        /// <summary>
        /// Get Attempted Questions list by Exam ID
        /// </summary>
        /// <value></value>
        ResponseModel GetAttemptedQuestionsByExamsId (RequestModel requestModel);

        /// <summary>
        /// Save Attempted Questions
        /// </summary>
        /// <value></value> 
        bool SaveAttemptedQuestions (AttemptedQuestionsDTO attemptedQuestionsDTO);

        /// <summary>
        /// Delete Attempted Questions
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteAttemptedQuestionsByExamId (string examId);
        
        /// <summary>
        /// List of question as per the exam id
        /// </summary>
        /// <param name="ExamId"></param>
        /// <param name="UserId"></param>
        /// <returns></returns>
        List<UserQuestionsDTO> GetQuestionsByAssignedExam (string ExamId, string UserId);
    }
}