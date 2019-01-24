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
        public bool ActiveQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var UpdateQuery = Builders<Questions>.Update.Set(s => s.IsActive, true);
            return _db.UpdateOne<Questions>(filterDef, UpdateQuery, Questions.CollectionName);
        }

        public IEnumerable<Questions> GetQuestionsByExamId(string examId)
        {
            var s = _db.GetCollection<Questions>(Questions.CollectionName).AsQueryable().Where(x => x.IsActive == true && x.ExamId == examId).ToList();
            return s;
        }

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

        public bool InactivateQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var updateQuery = Builders<Questions>.Update
                .Set(c => c.IsActive, false);

            return _db.UpdateOne<Questions>(filterDef, updateQuery, Exams.CollectionName);
        }

        public bool SaveQuestions(Questions questions)
        {
            try
            {
                _db.Save<Questions>(questions, Questions.CollectionName);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

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

            return _db.UpdateOne<Questions>(filterDef, updateQuery, Exams.CollectionName);
        }
    }
}
