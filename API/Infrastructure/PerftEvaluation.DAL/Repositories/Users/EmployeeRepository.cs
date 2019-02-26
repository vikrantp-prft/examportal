using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DAL.Repositories {
    public class EmployeeRepository : IEmployeeRepository {
        #region Declaration
        protected readonly DBHelper _db = null;

        public EmployeeRepository () {
            this._db = new DBHelper ();
        }
        #endregion

        #region Class Methods 
        /// <summary>
        /// Get the list of all the actived Employee
        /// </summary>
        /// <returns>Employees List</returns>
        public IEnumerable<Users> GetEmployees () {
            try {
                return _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Where (x => x.IsDeleted == false & x.UserType == UsersEnum.Employee).ToList ();
            } catch (Exception ex) {
                throw ex;
            }
        }

        /// <summary>
        /// Save the employee record
        /// </summary>
        /// <param name="users"></param>
        /// <returns>bool</returns>

        public bool SaveEmployee (Users users) {
            try {
                users.UserType = UsersEnum.Employee;
                users.IsActive = true;
                users.CreatedDate = DateTime.Now;
                users.ModifiedDate = DateTime.Now;

                if (users.EducationDetails != null) {
                    users.EducationDetails.Where (c => c.EducationDetailsId == null).ToList ().ForEach (c => c.EducationDetailsId = ObjectId.GenerateNewId ().ToString ());
                }

                _db.Save<Users> (users, Users.CollectionName);
                return true;
            } catch (Exception ex) {
                throw ex;
            }
        }

        /// <summary>
        /// Inactive employee
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool InactivateEmployee (string userId) {
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
        public bool ActiveEmployee (string userId) {
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
        public Users GetEmployeeById (string Id) {
            try {
                return _db.GetCollection<Users> (Users.CollectionName).AsQueryable ().Where (x => x.Id == Id).FirstOrDefault ();
            } catch (Exception ex) {
                throw ex;
            }
        }

        public bool DeleteEmployee (string userId) {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq (c => c.Id, userId);
            var updateQuery = Builders<Users>.Update
                .Set (c => c.IsDeleted, true);

            return _db.UpdateOne<Users> (filterDef, updateQuery, Users.CollectionName);
        }

        /// <summary>
        /// Update the user details
        /// </summary>
        /// <returns></returns>
        public bool UpdateEmployee (Users users) {
            var filter = Builders<Users>.Filter;
            var filterDef = filter.Eq (c => c.Id, users.Id);
            var updateQuery = Builders<Users>.Update
                .Set (c => c.FirstName, users.FirstName)
                .Set (c => c.MiddleName, users.MiddleName)
                .Set (c => c.LastName, users.LastName)
                .Set (c => c.Email, users.Email)
                .Set (c => c.Password, users.Password)
                .Set (c => c.DOB, users.DOB)
                .Set (c => c.Address1, users.Address1)
                .Set (c => c.Address2, users.Address2)
                .Set (c => c.City, users.City)
                .Set (c => c.Pincode, users.Pincode)
                .Set (c => c.StateId, users.StateId)
                .Set (c => c.CurrentAddress1, users.CurrentAddress1)
                .Set (c => c.CurrentAddress2, users.CurrentAddress2)
                .Set (c => c.CurrentCity, users.CurrentCity)
                .Set (c => c.CurrentPincode, users.CurrentPincode)
                .Set (c => c.CurrentStateId, users.CurrentStateId)
                .Set (c => c.Mobile, users.Mobile)
                .Set (c => c.TeamId, users.TeamId)
                .Set (c => c.Email, users.Email)
                .Set (c => c.Note, users.Note)
                .Set (c => c.Interest, users.Interest)
                .Set (c => c.EducationDetails, users.EducationDetails)
                .Set (c => c.TeamId, users.TeamId);

            try {
                //users.IsEmployee = true;
                users.ModifiedDate = DateTime.Now;
                if (users.EducationDetails != null) {
                    users.EducationDetails.Where (c => c.EducationDetailsId == null).ToList ().ForEach (c => c.EducationDetailsId = ObjectId.GenerateNewId ().ToString ());
                }

                _db.UpdateOne<Users> (filterDef, updateQuery, Users.CollectionName);
                return true;
            } catch (Exception ex) {
                throw ex;
            }
        }

        #endregion
    }
}