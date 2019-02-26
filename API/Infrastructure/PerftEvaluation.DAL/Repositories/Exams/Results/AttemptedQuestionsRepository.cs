using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories
{
    /// <summary>
    /// Attempted Questions Repository class
    /// </summary>
    public class AttemptedQuestionsRepository : IAttemptedQuestionsRepository
    {
        protected readonly DBHelper _db = null;
        public AttemptedQuestionsRepository()
        {
            this._db = new DBHelper();
        }

        /// <summary>
        /// Delete Attempted Questions
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool DeleteAttemptedQuestionsByExamId(string examId)
        {
            var filter = Builders<AttemptedQuestions>.Filter;
            var filterDef = filter.Eq(c => c.Id, examId);
            var updateQuery = Builders<AttemptedQuestions>.Update
                .Set(c => c.IsDeleted, true);

            return _db.UpdateOne<AttemptedQuestions>(filterDef, updateQuery, AttemptedQuestions.CollectionName);
        }


        /// <summary>
        /// Get Attempted Questions List By Exam Id
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public IEnumerable<AttemptedQuestions> GetAttemptedQuestionsByExamsId(string examId)
        {
            try
            {
                return _db.GetCollection<AttemptedQuestions>(AttemptedQuestions.CollectionName)
                                                            .AsQueryable().Where(x => x.IsDeleted == false 
                                                                                    && x.IsAttempted == true 
                                                                                    && x.IsActive == true 
                                                                                    && x.ExamId == examId)
                                                            .ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Save Attempted Questions
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool SaveAttemptedQuestions(AttemptedQuestions attemptedQuestions)
        {
             try{
                attemptedQuestions.IsDeleted = false;
                attemptedQuestions.IsActive = true;
                attemptedQuestions.CreatedDate = DateTime.Now;
                attemptedQuestions.ModifiedDate = DateTime.Now;

                _db.Save<AttemptedQuestions>(attemptedQuestions, AttemptedQuestions.CollectionName);
                return true;
            }
            catch(Exception ex){
                throw ex;
            }
        }

        /// <summary>
        /// Update Exams details
        /// </summary>
        /// <param name="attemptedQuestions"></param>
        /// <returns></returns>
        public bool UpdateAttemptedQuestions(AttemptedQuestions attemptedQuestions)
        {
            var filter = Builders<AttemptedQuestions>.Filter;
            var filterDef = filter.Eq(c => c.Id, attemptedQuestions.Id);

            var updateQuery = Builders<AttemptedQuestions>.Update
                .Set(c => c.ExamId, attemptedQuestions.ExamId)
                .Set(c => c.QuestionsId, attemptedQuestions.QuestionsId)
                .Set(c => c.selectedOptionId, attemptedQuestions.selectedOptionId)
                .Set(c => c.IsCorrect, attemptedQuestions.IsCorrect)
                .Set(c => c.Marks, attemptedQuestions.Marks)
                .Set(c => c.IsAttempted, attemptedQuestions.IsAttempted)
                .Set(c => c.IsActive, attemptedQuestions.IsActive)
                .Set(c => c.IsDeleted, attemptedQuestions.IsDeleted);   

            return _db.UpdateOne<AttemptedQuestions>(filterDef, updateQuery, AttemptedQuestions.CollectionName);
        }
    }
}
