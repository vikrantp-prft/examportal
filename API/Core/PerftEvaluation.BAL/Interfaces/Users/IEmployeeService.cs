using System;
using System.Collections.Generic;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// User Service Interface 
    /// </summary>
    public interface IEmployeeService
    {
        /// <summary>
        /// Get Users list
        /// </summary>
        /// <value>List of User in DTO</value>
        IEnumerable<EmployeesDTO> GetEmployees { get; }

        /// <summary>
        /// Save User Details
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool SaveEmployee (EmployeesDTO employeeDTO);

         /// <summary>
        /// Get Employee Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        EmployeesDTO GetEmployeeById (string Id);

        /// <summary>
        /// Activate employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        bool ActivateEmployee (string employeeId);

        /// <summary>
        /// Inactive employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        bool InactivateEmployee (string employeeId);
    }
}
