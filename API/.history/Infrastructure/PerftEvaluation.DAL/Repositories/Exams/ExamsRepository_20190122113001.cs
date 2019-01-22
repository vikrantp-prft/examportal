using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories
{
    public class ExamsRepository : IExamsRepository
    {
        protected readonly DBHelper _db = null;

        public ExamsRepository()
        {
            this._db = new DBHelper();
        }

        public bool ActiveExams(string examId)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Get Exams List
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Entities.POCOEntities.Exams> GetExams()
        {
            try
            {
                return _db.GetCollection<Exams>(Exams.CollectionName).AsQueryable().Where(x => x.IsActive == true && x.IsEmployee==true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Users GetExamsById(string Id)
        {
             try
            {
                return _db.GetCollection<Exams>(Exams.CollectionName).AsQueryable().Where(x => x.Id == Id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool InactivateExams(string examId)
        {
            var filter = Builders<Exams>.Filter;
            var filterDef = filter.Eq(c => c.Id, examId);
            var updateQuery = Builders<Exams>.Update
                .Set(c => c.IsActive, false);

            return _db.UpdateOne<Exams>(filterDef, updateQuery, Exams.CollectionName);
        }

        public bool SaveExams(Entities.POCOEntities.Exams exams)
        {
            try
            {
                _db.Save<Exams>(exams, Exams.CollectionName);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool UpdateExams(Exams exams)
        {
            var filter = Builders<Exams>.Filter;
            var filterDef = filter.Eq (c => c.Id, exams.Id);

            var updateQuery = Builders<Exams>.Update
                .Set (c => c.IsActive, exams.IsActive)
                .Set (c => c.CreatedDate, exams.CreatedDate)
                .Set (c => c.Description, exams.Description)
                .Set (c => c.ExamDurationHours, exams.ExamDurationHours)
                .Set (c => c.ExamDurationMinutes, exams.ExamDurationMinutes)
                .Set (c => c.FromDate, exams.FromDate)
                .Set (c => c.ToDate, exams.ToDate)
                .Set (c => c.IsPaperPublic, exams.IsPaperPublic)
                .Set (c => c.ModifiedDate, exams.ModifiedDate)
                .Set (c => c.PassingMarks, exams.PassingMarks)
                .Set (c => c.ShowResultInFront, exams.ShowResultInFront)
                .Set (c => c.ShuffleOptions, exams.ShuffleOptions)
                .Set (c => c.ShuffleQuestions, exams.ShuffleQuestions)
                .Set (c => c.TeamId, exams.TeamId)
                .Set (c => c.Title, exams.Title);

            return _db.UpdateOne<Exams> (filterDef, updateQuery, Exams.CollectionName);
        }
    }
}
