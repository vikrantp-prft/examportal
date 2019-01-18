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
        #region Declaration
        protected readonly IMasterService _masterService;
        private readonly IMapper _mapper;
        public Dropdown(IMasterService MasterService, IMapper mapper)
        {
            this._masterService = MasterService;
            this._mapper = mapper;
        }
        #endregion

        /// <summary>
        /// Get dropdown for departments
        /// </summary>
        public IEnumerable<DropdownsDTO> Departments
        {
            get
            {
                var departments = this._masterService.GetMasterByType(Enums.MasterTypes.Department.ToString());

                return this._mapper.Map<IEnumerable<DropdownsDTO>>(departments);
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
    }
}
