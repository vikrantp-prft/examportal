using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface {
    /// <summary>
    /// User repository Interface
    /// </summary>
    public interface IUserRepository {

        /// <summary>
        /// Get the list of all the actived users, employees and aspirants
        /// </summary>
        /// <returns>Complete Users List</returns>
        IEnumerable<Users> GetAllUsers ();

        /// <summary>
        /// List of users
        /// </summary>
        /// <returns>Users List</returns>
        IEnumerable<Users> GetUsers ();


        /// <summary>
        /// List of Contributors
        /// </summary>
        /// <returns>Contributors List</returns>
        IEnumerable<Users> GetContributors ();

        /// <summary>
        /// Save User Detail
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        bool SaveUser (Users users);

        /// <summary>
        /// Get User Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        Users GetUserById (string Id);

        /// <summary>
        /// Update users details
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        bool UpdateUser (Users users);

        /// <summary>
        /// Inactivate the users detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool InactivateUsers (string userId);

        /// <summary>
        /// Active the user detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool ActiveUsers (string userId);

        /// <summary>
        /// Deleted users detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool DeleteUsers (string userId);

        /// <summary>
        /// Get the count of users
        /// </summary>
        /// <returns></returns>
        int UsersCount ();

        /// <summary>
        /// Check if the email is already exist
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        bool IsEmailExist (string email);

        /// <summary>
        /// Mark user as a admin
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>true/false</returns>
        bool MarkUserAsAdmin (string userId);

        /// <summary>
        /// Remove the User as a admin access
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>true/false</returns>
        bool RemoveUserAdminAccess (string userId);
    }
}