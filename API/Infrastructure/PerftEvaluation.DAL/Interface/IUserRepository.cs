using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface {
    /// <summary>
    /// User repository Interface
    /// </summary>
    public interface IUserRepository {
        /// <summary>
        /// List of users
        /// </summary>
        /// <returns>Users List</returns>
        IEnumerable<Users> GetUsers ();

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
    }
}