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
    }
}