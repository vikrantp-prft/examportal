using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Interface {
    /// <summary>
    /// Master repository interface
    /// </summary>
    public interface IMasterRepository {
        /// <summary>
        /// Get all masters detail
        /// </summary>
        /// <returns></returns>
        IEnumerable<Masters> GetAllMasters ();

        /// <summary>
        /// Save master detail
        /// </summary>
        /// <param name="masters"></param>
        /// <returns></returns>
        bool SaveMaster (Masters masters);

        /// <summary>
        /// Get master list by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        IEnumerable<Masters> GetMastersByType (string masterType);
    }
}