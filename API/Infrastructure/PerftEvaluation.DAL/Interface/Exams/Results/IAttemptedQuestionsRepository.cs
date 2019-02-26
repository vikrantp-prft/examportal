using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface
{
    /// <summary>
    /// Attempted Questions Interfce Class
    /// </summary>
    public interface IAttemptedQuestionsRepository
    {
        /// <summary>
        /// List of Attempted Questions by Exam ID
        /// </summary>
        /// <returns>Results List</returns>
        IEnumerable<AttemptedQuestions> GetAttemptedQuestionsByExamsId(string examId);

        /// <summary>
        /// Save AttemptedQuestions
        /// </summary>
        /// <param name="attemptedQuestions"></param>
        /// <returns></returns>
        bool SaveAttemptedQuestions(AttemptedQuestions attemptedQuestions);


        /// <summary>
        /// Deleted Attempted Questions detail
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        bool DeleteAttemptedQuestionsByExamId (string examId);


        /// <summary>
        /// Update Exams details
        /// </summary>
        /// <param name="attemptedQuestions"></param>
        /// <returns></returns>
        bool UpdateAttemptedQuestions(AttemptedQuestions attemptedQuestions);
    }
}
