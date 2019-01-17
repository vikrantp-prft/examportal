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
    }
}
