using System;
using System.Collections.Generic;
using System.IO;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces {

    /// <summary>
    /// Exam's Questions Service
    /// </summary>
    public interface IQuestionsService {
        /// <summary>
        /// Get list Exams
        /// </summary>
        /// <value></value>
        ResponseModel GetQuestionsByExamId (string examId, RequestModel requestModel);

        /// <summary>
        /// Save Questions
        /// </summary>
        /// <value></value> 
        bool SaveQuestions (QuestionsDTO questionsDTO);

        /// <summary>
        /// Get Question by ID
        /// </summary>
        /// <value></value> 
        QuestionsDTO GetQuestionById (string questionsId);

        /// <summary>
        /// Update Question
        /// </summary>
        /// <value></value> 
        bool UpdateQuestion (QuestionsDTO questionsDTO);

        /// <summary>
        ///Active Questions
        /// </summary>
        /// <value></value> 
        bool ActiveQuestions (string questionId);

        /// <summary>
        ///Inactive Questions
        /// </summary>
        /// <value></value> 
        bool InactiveQuestions (string questionId);

        /// <summary>
        /// Delete Questions
        /// </summary>
        /// <param name="questionId"></param>
        /// <returns></returns>
        bool DeleteQuestions (string questionId);

        /// <summary>
        /// Uploads the bulk of questions information from file to database for the mentioned exam 
        /// </summary>
        /// <param name="fileStream">Binary stream of xlsx file with the redefined template.</param>
        /// <param name="examId">Id of exam record against which these questions will be uploaded.</param>
        /// <returns></returns>
        bool ExcelUpload(Stream fileStream, string examId);


        /// <summary>
        /// Get List of corrected option by Question Id
        /// </summary>
        /// <param name="questionId"></param>
        /// <returns></returns>
        string[] GetCorrectOptionsByQuestionId (string questionId);

        int GetQuestionsCountByExamId(string ExamId);
    }
}