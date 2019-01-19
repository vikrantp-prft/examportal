using System;
using System.Collections.Generic;
using AutoMapper;
using Microsoft.Extensions.Caching.Memory;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Helper.Interfaces;

namespace PerftEvaluation.Helper.Common
{
    public class Cache : ICache
    {
        #region Declarations
        
        IMemoryCache _memoryCache;
        private readonly IMapper _mapper;
        protected readonly IMasterService _masterService;
        #endregion
        
        public Cache(IMemoryCache MemoryCache, IMasterService MasterService, IMapper Mapper)
        {
            this._memoryCache = MemoryCache;
            this._masterService = MasterService;
            this._mapper = Mapper;
        }


        /// <summary>
        /// Get cached data for all masters dropdowns
        /// </summary>
        /// <params>cacheKey - Master name</params>
        public IEnumerable<DropdownsDTO> GetDropdownMasterCache(string cacheKey, string masterName)
        {
            IEnumerable<MastersDTO> cacheMaster;

            // Look for cache key.
            if (!_memoryCache.TryGetValue(cacheKey, out cacheMaster))
            {
                cacheMaster = this._masterService.GetMasterByType(masterName);

                // Set cache options.
                // var cacheEntryOptions = new MemoryCacheEntryOptions()
                //     // Keep in cache for this time, reset time if accessed.
                //     .SetSlidingExpiration(TimeSpan.FromSeconds(3));

                // Save data in cache.
                _memoryCache.Set(cacheKey, cacheMaster, DateTime.Now.AddHours(1));
            }
            return this._mapper.Map<IEnumerable<DropdownsDTO>>(cacheMaster);
        }


    }


    /// <summary>
    /// Put all keys here which need to be cached.static It should be unique cache key.
    /// </summary>
    /// <params>cacheKey - Master name</params>
    public static class CacheKeys
    {
        public static string GroupMaster { get { return "GroupMaster"; } }
        public static string DepartmentMaster { get { return "DepartmentMaster"; } }
    }
}
