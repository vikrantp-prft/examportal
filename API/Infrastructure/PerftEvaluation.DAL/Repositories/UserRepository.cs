using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories {
    /// <summary>
    /// Manage CRUD of Users Entity
    /// </summary>
    public class UserRepository : IUserRepository {
        #region Declaration
        protected readonly DBHelper _db = null;

        public UserRepository () {
            this._db = new DBHelper ();
        }
        #endregion

        #region Class Methods 
        /// <summary>
        /// Get the list of all the active users
        /// </summary>
        /// <returns>Users List</returns>
        public IEnumerable<Users> GetUsers () {
            try {
                var test = _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Select (x => x).ToList ();
                return test;
            } catch (Exception ex) {
                throw ex;
            }
        }
        #endregion

    }
}