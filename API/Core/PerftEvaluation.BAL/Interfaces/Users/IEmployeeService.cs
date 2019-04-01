using System;
using System.Collections.Generic;
using System.IO;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Interfaces {
    /// <summary>
    /// User Service Interface 
    /// </summary>
    public interface IEmployeeService {
        /// <summary>
        /// Get Employees list
        /// </summary>
        /// <value>List of User in DTO</value>
        ResponseModel GetEmployees (RequestModel requestModel);

        /// <summary>
        /// Save Employee Details
        /// </summary>
        /// <param name="employeeDTO"></param>
        /// <returns></returns>
        RequestModel SaveEmployee (EmployeesDTO employeeDTO);

        /// <summary>
        /// Update Employee details
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool UpdateEmployee (EmployeesDTO employeesDTO);

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

        /// <summary>
        /// Delete Employee
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool DeleteEmployee (string employeeId);
    }
}