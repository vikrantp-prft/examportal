using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces
{
    
    /// <summary>
    /// Exam's Questions Service
    /// </summary>
    public interface IQuestionsService
    {
        /// <summary>
        /// Get list Exams
        /// </summary>
        /// <value></value>
        IEnumerable<QuestionsDTO> GetQuestionsByExamId(string examId, RequestModel requestModel);

        /// <summary>
        /// Save Questions
        /// </summary>
        /// <value></value> 
        bool SaveQuestions(QuestionsDTO questionsDTO);

        /// <summary>
        /// Get Question by ID
        /// </summary>
        /// <value></value> 
        QuestionsDTO GetQuestionById(string questionsId);

        /// <summary>
        /// Update Question
        /// </summary>
        /// <value></value> 
        bool UpdateQuestion(QuestionsDTO questionsDTO);

        /// <summary>
        ///Active Questions
        /// </summary>
        /// <value></value> 
        bool ActiveQuestions(string questionId);

        /// <summary>
        ///Inactive Questions
        /// </summary>
        /// <value></value> 
        bool InactiveQuestions(string questionId);

        /// <summary>
        /// Delete Questions
        /// </summary>
        /// <param name="questionId"></param>
        /// <returns></returns>
        bool DeleteQuestions (string questionId);
    }
}
