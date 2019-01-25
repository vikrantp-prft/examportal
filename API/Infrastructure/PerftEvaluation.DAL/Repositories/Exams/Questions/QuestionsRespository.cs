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
    /// Questions Repository Class
    /// /// </summary>
    public class QuestionsRepository : IQuestionsRepository
    {
        protected readonly DBHelper _db = null;

        public QuestionsRepository()
        {
            this._db = new DBHelper();
        }

        /// <summary>
        /// Get list of active Questions
        /// </summary>
        /// <value></value>
        public bool ActiveQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var UpdateQuery = Builders<Questions>.Update.Set(s => s.IsActive, true);
            return _db.UpdateOne<Questions>(filterDef, UpdateQuery, Questions.CollectionName);
        }

        /// <summary>
        /// Get list Questions
        /// </summary>
        /// <value></value>
        public IEnumerable<Questions> GetQuestionsByExamId(string examId)
        {
            return _db.GetCollection<Questions>(Questions.CollectionName).AsQueryable().Where(x => x.IsActive == true && x.ExamId == examId).ToList();
        }

        /// <summary>
        /// Get Question By ID
        /// </summary>
        /// <value></value>
        public Questions GetQuestionsById(string questionId)
        {
            try
            {
                return _db.GetCollection<Questions>(Questions.CollectionName).AsQueryable().Where(x => x.IsActive == true).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get Inactive Questions
        /// </summary>
        /// <value></value>
        public bool InactivateQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var updateQuery = Builders<Questions>.Update
                .Set(c => c.IsActive, false);

            return _db.UpdateOne<Questions>(filterDef, updateQuery, Questions.CollectionName);
        }

        /// <summary>
        /// Save Questions
        /// </summary>
        /// <value></value>
        public bool SaveQuestions(Questions questions)
        {
            try
            {
                questions.CreatedDate = DateTime.UtcNow;
                questions.ModifiedDate = DateTime.UtcNow;
                if(questions.Options != null)
                {
                   //TO DO - Generate Option id for newly inserted document
                }

                _db.Save<Questions>(questions, Questions.CollectionName);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Update Questions
        /// </summary>
        /// <value></value>
        public bool UpdateQuestions(Questions questions)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questions.Id);

            var updateQuery = Builders<Questions>.Update
                                .Set(s => s.CategoryId, questions.CategoryId)
                                .Set(s => s.IsActive, questions.IsActive)
                                .Set(s => s.Options, questions.Options)
                                .Set(s => s.Question, questions.Question)
                                .Set(s => s.QuestionType, questions.QuestionType);

            return _db.UpdateOne<Questions>(filterDef, updateQuery, Questions.CollectionName);
        }
    }
}
