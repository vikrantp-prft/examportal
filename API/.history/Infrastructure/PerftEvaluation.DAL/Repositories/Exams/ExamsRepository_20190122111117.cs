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
            throw new NotImplementedException();
        }

        public bool InactivateExams(string examId)
        {
            throw new NotImplementedException();
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

        public bool UpdateExams(Entities.POCOEntities.Exams exams)
        {
            throw new NotImplementedException();
        }
    }
}
