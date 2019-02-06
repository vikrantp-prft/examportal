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
    /// List of exams that has been assgined to user
    /// </summary>
    public class AssignedExamsRepository : IAssignedExamsRepository
    {
        protected readonly DBHelper _db = null;

        public AssignedExamsRepository()
        {
            this._db = new DBHelper();
        }



        /// <summary>
        /// List of Exams by User ID
        /// </summary>
        /// <returns>Exams List</returns>
        public IEnumerable<AssignedExams> GetAssignedExamsByUserId(string userId)
        {
            try
            {
                return _db.GetCollection<AssignedExams>(AssignedExams.CollectionName).AsQueryable().Where(x => x.Id == userId).ToList();
            }
            catch (Exception ex)
            { 
                throw ex;
            }
        }
    }
}
