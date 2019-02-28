using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories
{
    /// <summary>
    /// Result's Repository class
    /// </summary>
    public class ResultsRepository : IResultsRepository
    {
        protected readonly DBHelper _db = null;

        protected readonly AttemptedQuestionsRepository _attemptedQuestionsRepository;
        public ResultsRepository(AttemptedQuestionsRepository attemptedQuestionsRepository)
        {
            this._db = new DBHelper();
            this._attemptedQuestionsRepository = attemptedQuestionsRepository;
        }

        /// <summary>
        /// Delete Results
        /// </summary>
        /// <returns></returns>
        public bool DeleteResultsByExamId(string examId)
        {
            var filter = Builders<Results>.Filter;
            var filterDef = filter.Eq(c => c.Id, examId);
            var updateQuery = Builders<Results>.Update
                .Set(c => c.IsDeleted, true);

            return _db.UpdateOne<Results>(filterDef, updateQuery, Results.CollectionName);
        }

        /// <summary>
        /// Get Results By Exams Id
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Results> GetResultsByExamsId(string examId)
        {
            try
            {
                return _db.GetCollection<Results>(Results.CollectionName).AsQueryable().Where(x => x.IsDeleted == false && x.ExamId == examId).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get Results by User ID
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>

        public IEnumerable<Results> GetResultsByUsersId(string userId)
        {
            try
            {
                return _db.GetCollection<Results>(Results.CollectionName).AsQueryable().Where(x => x.IsActive == true && x.UserId == userId).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Save Results
        /// </summary>
        /// <param name="results"></param>
        /// <returns></returns>
        public bool SaveResults(Results results)
        {
            try
            {
                results.IsDeleted = false;
                results.IsActive = true;
                results.CreatedDate = DateTime.Now;
                results.ModifiedDate = DateTime.Now;

                _db.Save<Results>(results, Results.CollectionName);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// Generate Results
        /// </summary>
        /// <param name="results"></param>
        /// <returns></returns>
        public Results GenerateResults(string userId, string examId)
        {
            try
            {
                var attemptedQuestionsList = _db.GetCollection<AttemptedQuestions>(AttemptedQuestions.CollectionName).AsQueryable().Where(x => x.ExamId == examId && x.UserId == userId).ToList();

                Results generate = new Results();
                generate.ExamId = examId;
                generate.UserId = userId;
                generate.QuestionsAttempted = attemptedQuestionsList.Count();
                generate.ObtainedMarks = attemptedQuestionsList.Where(x => x.IsCorrect == true).Count();
                generate.TotalMarks = _db.GetCollection<Questions>(Questions.CollectionName).AsQueryable().Where(x => x.ExamId == examId && x.IsActive == true && x.IsDeleted == false).Count();
                generate.IsDeleted = false;
                generate.IsActive = true;

                if (this.SaveResults(generate))
                {
                    return generate;
                }
                else
                {
                    return null;
                }



            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
