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
        /// Assigned Exams to an Employee
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool ActiveExamAssigned(string examId)
        {
            var filter = Builders<AssignedExams>.Filter;
            var filterDef = filter.Eq(c => c.Id, examId);
            var updateQuery = Builders<AssignedExams>.Update
                .Set(c => c.IsActive, true);

            return _db.UpdateOne<AssignedExams>(filterDef, updateQuery, AssignedExams.CollectionName);
        }


        /// <summary>
        /// List of Exams by User ID
        /// </summary>
        /// <returns>Exams List</returns>
        public IEnumerable<AssignedExams> GetAssignedExamsByUserId(string userId)
        {
            try
            {
                return _db.GetCollection<AssignedExams>(AssignedExams.CollectionName).AsQueryable().Where(x => x.UserId == userId).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// List of Employees by Exam ID
        /// </summary>
        /// <returns>Employee List</returns>
        public IEnumerable<AssignedExams> GetAssignedUsersByExamId(string examId)
        {
            try
            {
                return _db.GetCollection<AssignedExams>(AssignedExams.CollectionName).AsQueryable().Where(x => x.ExamId == examId).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        /// <summary>
        /// Unassigned Exams to an Employee
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool InactiveExamAssigned(string examId)
        {
            var filter = Builders<AssignedExams>.Filter;
            var filterDef = filter.Eq(c => c.Id, examId);
            var updateQuery = Builders<AssignedExams>.Update
                .Set(c => c.IsActive, false);

            return _db.UpdateOne<AssignedExams>(filterDef, updateQuery, AssignedExams.CollectionName);
        }
    }
}
