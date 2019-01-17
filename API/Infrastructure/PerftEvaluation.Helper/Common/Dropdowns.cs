using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Common;
using PerftEvaluation.BAL.Interfaces;

namespace PerftEvaluation.Helper.Common
{
    public class Dropdown
    {
        #region Declaration
        protected readonly IMasterService _masterService;
        
        public Dropdown(IMasterService iMasterService) {
            this._masterService = iMasterService;
        }
        #endregion
        // public IEnumerable<DropdownsDTO> Departments()
        // {
        //     //this._masterService.GetMasterByType()
        // }
    }
}
