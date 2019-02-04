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
        /// Get the list of all the actived users
        /// </summary>
        /// <returns>Users List</returns>
        public IEnumerable<Users> GetUsers () {
            try {
                return _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Where (x => x.IsDeleted == false && x.IsEmployee == false).AsQueryable ();
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
                users.CreatedDate = DateTime.UtcNow;
                users.ModifiedDate = DateTime.UtcNow;
                _db.Save<Users> (users, Users.CollectionName);
                return true;
            } catch (Exception ex) {
                throw ex;
            }
        }

        /// <summary>
        /// Update the user details
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        public bool UpdateUser (Users users) {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq (c => c.Id, users.Id);

            var updateQuery = Builders<Users>.Update
                .Set (c => c.IsActive, users.IsActive)
                .Set (c => c.LastName, users.LastName)
                .Set (c => c.Mobile, users.Mobile)
                .Set (c => c.ModifiedDate, users.ModifiedDate)
                .Set (c => c.Note, users.Note)
                .Set (c => c.Password, users.Password)
                .Set (c => c.Pincode, users.Pincode)
                .Set (c => c.StateId, users.StateId)
                .Set (c => c.TeamId, users.TeamId)
                .Set (c => c.Address1, users.Address1)
                .Set (c => c.Address2, users.Address2)
                .Set (c => c.City, users.City)
                .Set (c => c.CreatedDate, users.CreatedDate)
                .Set (c => c.DOB, users.DOB)
                .Set (c => c.DesignationId, users.DesignationId)
                .Set (c => c.Email, users.Email)
                .Set (c => c.FirstName, users.FirstName)
                .Set (c => c.GroupId, users.GroupId);

            return _db.UpdateOne<Users> (filterDef, updateQuery, Users.CollectionName);
        }

        /// <summary>
        /// Inactive users
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool InactivateUsers (string userId) {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq (c => c.Id, userId);
            var updateQuery = Builders<Users>.Update
                .Set (c => c.IsActive, false);

            return _db.UpdateOne<Users> (filterDef, updateQuery, Users.CollectionName);
        }

        /// <summary>
        /// Active users
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool ActiveUsers (string userId) {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq (c => c.Id, userId);
            var updateQuery = Builders<Users>.Update
                .Set (c => c.IsActive, true);

            return _db.UpdateOne<Users> (filterDef, updateQuery, Users.CollectionName);
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

        /// <summary>
        /// Get the total count of users
        /// </summary>
        /// <returns></returns>
        public int UsersCount () {
            try {
                return _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Where (x => x.IsActive == true).ToList ().Count ();
            } catch (Exception exception) {
                throw exception;
            }
        }

        /// <summary>
        /// Delete users
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool DeleteUsers (string userId) {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq (c => c.Id, userId);
            var updateQuery = Builders<Users>.Update
                .Set (c => c.IsDeleted, true);

            return _db.UpdateOne<Users> (filterDef, updateQuery, Users.CollectionName);
        }

        /// <summary>
        /// Check if the email is already exist
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public bool IsEmailExist (string email) {
            return (_db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Where (x => x.Email == email).Count () > 0 ? true : false);
        }
        #endregion
    }
}