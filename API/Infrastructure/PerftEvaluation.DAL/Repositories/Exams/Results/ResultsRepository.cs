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
        public ResultsRepository()
        {
            this._db = new DBHelper();
        }

        /// <summary>
        /// Delete Results
        /// </summary>
        /// <returns></returns>
        public bool DeleteResultsByExamId(string examId)
        {
            var filter = Builders<Results>.Filter;
            var filterDef = filter.Eq (c => c.Id, examId);
            var updateQuery = Builders<Results>.Update
                .Set (c => c.IsDeleted, true);

            return _db.UpdateOne<Results> (filterDef, updateQuery, Masters.CollectionName);
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
            try{
                results.IsDeleted = false;
                results.IsActive = true;
                results.CreatedDate = DateTime.Now;
                results.ModifiedDate = DateTime.Now;

                if (results.AttemptedQuestions != null)
                {
                    results.AttemptedQuestions.Where(c => c.AttemptedQuestionId == null).ToList().ForEach(c => c.AttemptedQuestionId = ObjectId.GenerateNewId().ToString());
                }

                _db.Save<Results>(results, Results.CollectionName);
                return true;
            }
            catch(Exception ex){
                throw ex;
            }
        }
    }
}
