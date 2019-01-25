using System;
using System.Collections.Generic;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services {
    /// <summary>
    /// Service for Users
    /// </summary>
    public class EmployeeService : IEmployeeService {
        #region Declaration
        protected readonly IEmployeeRepository _employeeRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="EmployeeRepository"></param>
        public EmployeeService (IEmployeeRepository EmployeeRepository, IMapper mapper) {
            this._employeeRepository = EmployeeRepository;
            this._mapper = mapper;
        }
        #endregion

        #region Class Method 
        /// <summary>
        /// Get Employees List
        /// </summary>
        /// <value></value>
        public IEnumerable<EmployeesDTO> GetEmployees {
            get {
                return this._mapper.Map<IEnumerable<EmployeesDTO>> (this._employeeRepository.GetEmployees ());
            }
        }

        /// <summary>
        /// Save Employee Detail
        /// </summary>
        /// <param name="employeesDTO"></param>
        /// <returns></returns>
        public bool SaveEmployee (EmployeesDTO employeesDTO) {
            Users users = new Users ();
            users = this._mapper.Map<Users> (employeesDTO);
            return this._employeeRepository.SaveEmployee (users);
        }

        /// <summary>
        /// Get Employee Detail By Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public EmployeesDTO GetEmployeeById (string Id) {
            return this._mapper.Map<EmployeesDTO> (this._employeeRepository.GetEmployeeById (Id));
        }

        /// <summary>
        /// Activated Employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        public bool ActivateEmployee (string employeeId) {
            return this._employeeRepository.ActiveEmployee (employeeId);
        }

        /// <summary>
        /// Deactivate employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        public bool InactivateEmployee (string employeeId) {
            return this._employeeRepository.InactivateEmployee (employeeId);
        }
        #endregion

    }
}