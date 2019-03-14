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
                                                            .AsQueryable().Where(x => x.ExamId.Equals(examId))
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
            try
            {
                attemptedQuestions.CreatedDate = DateTime.Now;
                attemptedQuestions.ModifiedDate = DateTime.Now;
                var attemptedQuestionCheck = _db.GetCollection<AttemptedQuestions>(AttemptedQuestions.CollectionName)
                                            .AsQueryable()
                                            .Where(x => x.ExamId == attemptedQuestions.ExamId
                                                   && x.UserId == attemptedQuestions.UserId
                                                   && x.QuestionsId == attemptedQuestions.QuestionsId)
                                            .FirstOrDefault();
                if (attemptedQuestionCheck != null)
                {
                    var filter = Builders<AttemptedQuestions>.Filter;
                    var filterDef = filter.Eq(c => c.Id, attemptedQuestionCheck.Id);

                    var updateQuery = Builders<AttemptedQuestions>.Update
                        .Set(c => c.SelectedOptionId, attemptedQuestions.SelectedOptionId)
                        .Set(c => c.SubjectiveAnswer, attemptedQuestions.SubjectiveAnswer)
                        .Set(c => c.IsCorrect, attemptedQuestions.IsCorrect);

                    return _db.UpdateOne<AttemptedQuestions>(filterDef, updateQuery, AttemptedQuestions.CollectionName);
                }
                else
                {
                    _db.Save<AttemptedQuestions>(attemptedQuestions, AttemptedQuestions.CollectionName);
                    return true;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public List<AttemptedQuestions> GetAttemptedQuestions (string userId, string examId){
            try
            {
                return _db.GetCollection<AttemptedQuestions>(AttemptedQuestions.CollectionName)
                                                            .AsQueryable()
                                                            .Where(x => x.ExamId == examId && x.UserId == userId)
                                                            .ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
