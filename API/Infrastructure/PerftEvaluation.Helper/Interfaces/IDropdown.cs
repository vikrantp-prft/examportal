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

         /// <summary>
        /// Get dropdown for user groups
        /// </summary>
        /// <value></value>

        IEnumerable<DropdownsDTO> Groups{get;}

        /// <summary>
        /// Get dropdown for Teams
        /// </summary>
        /// <value></value>

        IEnumerable<DropdownsDTO> Teams{get;}

         /// <summary>
        /// Get dropdown for Designations of user/employee
        /// </summary>
        /// <value></value>

        IEnumerable<DropdownsDTO> Designations{get;}

          /// <summary>
        /// Get dropdown for Degree of user/employee
        /// </summary>
        /// <value></value>

        IEnumerable<DropdownsDTO> Degrees{get;}

        /// <summary>
        /// Get dropdown for States list
        /// </summary>
        /// <value></value>

        IEnumerable<DropdownsDTO> States{get;}
    }
}
