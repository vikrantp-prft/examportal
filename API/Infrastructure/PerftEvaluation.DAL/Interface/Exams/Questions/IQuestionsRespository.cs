using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface
{

    /// <summary>
    /// Questions Repository Interface
    /// </summary>
    public interface IQuestionsRepository
    {
        /// <summary>
        /// List of Questions
        /// </summary>
        /// <returns>Questions List</returns>
        IEnumerable<Questions> GetQuestionsByExamId(string examId);

        /// <summary>
        /// Save Questions
        /// </summary>
        /// <param name="exams"></param>
        /// <returns></returns>
        bool SaveQuestions(Questions questions);

        /// <summary>
        /// Get Questions Details by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        Questions GetQuestionsById(string questionId);

        /// <summary>
        /// Update Questions details
        /// </summary>
        /// <param name="questions"></param>
        /// <returns></returns>
        bool UpdateQuestions(Questions questions);

        /// <summary>
        /// Inactivate Questions
        /// </summary>
        /// <param name="questionId"></param>
        /// <returns></returns>
        bool InactivateQuestion(string questionId);

        /// <summary>
        /// Active Question
        /// </summary>
        /// <param name="questionId"></param>
        /// <returns></returns>
        bool ActiveQuestion(string questionId);

        /// <summary>
        /// Deleted Questions detail
        /// </summary>
        /// <param name="questionId"></param>
        /// <returns></returns>
        bool DeleteQuestion (string questionId);


        /// <summary>
        /// Upload Excel
        /// </summary>
       bool UploadExcel(string filesname);
    }
}
