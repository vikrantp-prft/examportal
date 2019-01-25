using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
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
                return _db.GetCollection<Users>(Users.CollectionName).AsQueryable().Where(x => x.IsActive == true && x.IsEmployee == true).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Save the employee record
        /// </summary>
        /// <param name="users"></param>
        /// <returns>bool</returns>

        public bool SaveEmployee(Users users)
        {
            try
            {
                users.IsEmployee = true;
                users.CreatedDate = DateTime.Now;
                users.ModifiedDate = DateTime.Now;
                _db.Save<Users>(users, Users.CollectionName);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Inactive employee
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool InactivateEmployee(string userId)
        {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq(c => c.Id, userId);
            var updateQuery = Builders<Users>.Update
                .Set(c => c.IsActive, false);

            return _db.UpdateOne<Users>(filterDef, updateQuery, Users.CollectionName);
        }

        /// <summary>
        /// Active users
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool ActiveEmployee(string userId)
        {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq(c => c.Id, userId);
            var updateQuery = Builders<Users>.Update
                .Set(c => c.IsActive, true);

            return _db.UpdateOne<Users>(filterDef, updateQuery, Users.CollectionName);
        }

        /// <summary>
        /// Get the user detail by its id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>Users</returns>
        public Users GetEmployeeById(string Id)
        {
            try
            {
                return _db.GetCollection<Users>(Users.CollectionName).AsQueryable().Where(x => x.Id == Id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        #endregion
    }
}