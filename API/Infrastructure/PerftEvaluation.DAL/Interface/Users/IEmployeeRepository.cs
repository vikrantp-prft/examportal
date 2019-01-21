using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface {
    /// <summary>
    /// User repository Interface
    /// </summary>
    public interface IEmployeeRepository { 
        /// <summary>
        /// List of Employee
        /// </summary>
        /// <returns>Employee List</returns>
        IEnumerable<Users> GetEmployees ();

        /// <summary>
        /// Save Employee Detail
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        bool SaveEmployee (Users users);

        /// <summary>
        /// Get Employee Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        Users GetEmployeeById (string Id);

        /// <summary>
        /// Update Employee details
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        //bool UpdateEmployee (Users users);

        /// <summary>
        /// Inactivate the employee detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool InactivateEmployee (string userId);

        /// <summary>
        /// Active the employee detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool ActiveEmployee (string userId);

    }
}