using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface
{
    /// <summary>
    /// Aspirants repository Interface
    /// </summary>
    public interface IAspirantsRepository
    {
         /// <summary>
        /// List of Aspirants
        /// </summary>
        /// <returns>Aspirants List</returns>
        IEnumerable<Users> GetAspirants ();

        /// <summary>
        /// Save Aspirants Detail
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        bool SaveAspirants (Users users);

        /// <summary>
        /// Get Aspirants Details by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        Users GetAspirantById (string Id);

        /// <summary>
        /// Update Aspirants details
        /// </summary>
        /// <param name="users"></param>
        /// <returns></returns>
        bool UpdateAspirants (Users users);

        /// <summary>
        /// Inactivate the Aspirants detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool InactivateAspirants (string userId);

        /// <summary>
        /// Deleted Aspirant detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool DeleteAspirant (string userId);

        /// <summary>
        /// Active the Aspirant detail
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool ActiveAspirant (string userId);
    }
}
