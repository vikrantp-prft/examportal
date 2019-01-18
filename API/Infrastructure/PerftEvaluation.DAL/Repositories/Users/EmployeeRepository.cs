using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories {
    public class EmployeeRepository : IEmployeeRepository { 
        #region Declaration
        protected readonly DBHelper _db = null;

        public EmployeeRepository()
        {
            this._db = new DBHelper();
        }
        #endregion

        #region Class Methods 
        /// <summary>
        /// Get the list of all the actived Employee
        /// </summary>
        /// <returns>Employees List</returns>
        public IEnumerable<Users> GetEmployees()
        {
            try
            {
                return _db.GetCollection<Users>(Users.CollectionName).AsQueryable().Where(x => x.IsActive == true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        #endregion
    }
}