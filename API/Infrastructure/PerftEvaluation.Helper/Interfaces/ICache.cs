using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;

namespace PerftEvaluation.Helper.Interfaces
{
    /// <summary>
    /// Interface for caching resourses
    /// </summary>
    public interface ICache
    {

        
        /// <summary>
        /// Get cached data for all masters dropdowns
        /// </summary>
        IEnumerable<DropdownsDTO> GetDropdownMasterCache(string cacheKey, string masterName);
    }
}
