using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Common;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.BAL.Interfaces;
using AutoMapper;
using PerftEvaluation.Helper.Interfaces;

namespace PerftEvaluation.Helper.Common
{
    public class Dropdown : IDropdown
    {
        #region Declarations
        protected readonly IMasterService _masterService;
        private readonly IMapper _mapper;

        private readonly ICache _cache;
        #endregion

        public Dropdown(IMasterService MasterService, IMapper mapper, ICache Cache)
        {
            this._masterService = MasterService;
            this._mapper = mapper;
            this._cache = Cache;
        }
        

        /// <summary>
        /// Get dropdown for departments
        /// </summary>
        public IEnumerable<DropdownsDTO> Departments
        {
            get
            {
               return _cache.GetDropdownMasterCache(CacheKeys.DepartmentMaster, Enums.MasterTypes.Department.ToString());
            }
        }

        /// <summary>
        /// Get dropdown for Teams (.NET, JAVA, etc)
        /// </summary>
        public IEnumerable<DropdownsDTO> Teams
        {
            get
            {
                var teams = this._masterService.GetMasterByType(Enums.MasterTypes.Team.ToString());

                return this._mapper.Map<IEnumerable<DropdownsDTO>>(teams);
            }
        }

        /// <summary>
        /// Get dropdown for Groups
        /// </summary>
        public IEnumerable<DropdownsDTO> Groups
        {
            get
            {
                var departments = this._masterService.GetMasterByType(Enums.MasterTypes.Group.ToString());

                return this._mapper.Map<IEnumerable<DropdownsDTO>>(departments);
            }
        }

        /// <summary>
        /// Get dropdown for Designations
        /// </summary>
        public IEnumerable<DropdownsDTO> Designations
        {
            get
            {
                var designations = this._masterService.GetMasterByType(Enums.MasterTypes.Designation.ToString());

                return this._mapper.Map<IEnumerable<DropdownsDTO>>(designations);
            }
        }

        /// <summary>
        /// Get dropdown for Degrees
        /// </summary>
        public IEnumerable<DropdownsDTO> Degrees
        {
            get
            {
                var degree = this._masterService.GetMasterByType(Enums.MasterTypes.Degree.ToString());

                return this._mapper.Map<IEnumerable<DropdownsDTO>>(degree);
            }
        }

        /// <summary>
        /// Get dropdown for States
        /// </summary>
        public IEnumerable<DropdownsDTO> States
        {
            get
            {
                var state = this._masterService.GetMasterByType(Enums.MasterTypes.State.ToString());

                return this._mapper.Map<IEnumerable<DropdownsDTO>>(state);
            }
        }

    }
}
