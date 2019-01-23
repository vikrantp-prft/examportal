using System;
using System.Collections.Generic;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories.Exams
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
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public bool UpdateExams(Entities.POCOEntities.Exams exams)
        {
            throw new NotImplementedException();
        }
    }
}
