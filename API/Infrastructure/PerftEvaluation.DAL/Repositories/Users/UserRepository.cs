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
                return _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Select (x => x).ToList ();
            } catch (Exception ex) {
                throw ex;
            }
        }

        /// <summary>
        /// Save the users record
        /// </summary>
        /// <param name="users"></param>
        /// <returns>bool</returns>
        public bool SaveUser (Users users) {
            try {
                _db.Save<Users> (users, Users.CollectionName);
                return true;
            } catch (Exception ex) {
                throw ex;
            }
        }

        /// <summary>
        /// Get the user detail by its id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns>Users</returns>
        public Users GetUserById (string Id) {
            try {
                return _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Where (x => x.Id == Id).FirstOrDefault ();
            } catch (Exception ex) {
                throw ex;
            }
        }
        #endregion
    }
}