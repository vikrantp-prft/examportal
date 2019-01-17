using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;

namespace PerftEvaluation.Helper.Interfaces
{
    /// <summary>
    /// Dropdowns Interface
    /// </summary>
    public interface IDropdown
    {
        /// <summary>
        /// Get dropdown for departments
        /// </summary>
        /// <value></value>
        IEnumerable<DropdownsDTO> Departments{get;}
    }
}
