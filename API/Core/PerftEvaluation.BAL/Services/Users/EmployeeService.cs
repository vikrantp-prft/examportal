using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services
{
    /// <summary>
    /// Service for Users
    /// </summary>
    public class EmployeeService : IEmployeeService
    {
        #region Declaration
        protected readonly IEmployeeRepository _employeeRepository;
        protected readonly IMasterRepository _masterRepository;
        protected readonly IMasterService _masterService;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="EmployeeRepository"></param>
        public EmployeeService(IEmployeeRepository EmployeeRepository, IMasterService masterService, IMasterRepository masterRepository, IMapper mapper)
        {
            this._employeeRepository = EmployeeRepository;
            this._mapper = mapper;
            this._masterRepository = masterRepository;
            this._masterService = masterService;
        }
        #endregion

        #region Class Method 
        /// <summary>
        /// Get Employees List
        /// </summary>
        /// <value></value>
        public ResponseModel GetEmployees(RequestModel requestModel)
        {

            //Add filter query
            var filteredEmployees = this._employeeRepository.GetEmployees().AsQueryable().SortAndFilter(requestModel, DbFilters.UserFilters);
            //Manage the pagnation & joins 

            var pagedEmployees = filteredEmployees.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<EmployeesDTO> employeeJoin = new List<EmployeesDTO>();
            foreach (var item in pagedEmployees)
            {
                EmployeesDTO employeesDTO = new EmployeesDTO();
                employeesDTO.Id = item.Id;
                employeesDTO.FirstName = item.FirstName;
                employeesDTO.MiddleName = item.MiddleName;
                employeesDTO.LastName = item.LastName;
                employeesDTO.Email = item.Email;
                employeesDTO.Interest = item.Interest;
                employeesDTO.IsActive = item.IsActive;
                employeesDTO.Password = item.Password;
                employeesDTO.DOB = item.DOB;
                employeesDTO.Address1 = item.Address1;
                employeesDTO.Address2 = item.Address2;
                employeesDTO.City = item.City;
                employeesDTO.StateId = item.StateId;
                employeesDTO.Pincode = item.Pincode;
                employeesDTO.CurrentAddress1 = item.CurrentAddress1;
                employeesDTO.CurrentAddress2 = item.CurrentAddress2;
                employeesDTO.CurrentCity = item.CurrentCity;
                employeesDTO.CurrentPincode = item.CurrentPincode;
                employeesDTO.CurrentStateId = item.CurrentStateId;
                employeesDTO.Mobile = item.Mobile;
                employeesDTO.TeamId = item.TeamId;
                employeesDTO.Team = item.TeamId != null ? _masterService.GetMasterById(item.TeamId) : null;
                employeesDTO.Note = item.Note;
                employeesDTO.IsDeleted = item.IsDeleted;
                employeesDTO.IsEmployee = item.IsEmployee;
                employeesDTO.CreatedDate = item.CreatedDate;
                employeesDTO.ModifiedDate = item.ModifiedDate;
                employeesDTO.EducationDetails = item.EducationDetails.Select(x => new EducationDetailsDTO()
                {
                    EducationDetailsId = x.EducationDetailsId,
                    CourseId = x.CourseId,
                    Course = x.CourseId != null ? _masterService.GetMasterById(x.CourseId) : null,
                    Institution = x.Institution,
                    YearOfPassing = x.YearOfPassing,
                    Percentage = x.Percentage
                }).ToList();

                employeeJoin.Add(employeesDTO);
            }

            //return object
            return CommonResponse.OkResponse(requestModel, employeeJoin, (filteredEmployees.Count() < 100 ? filteredEmployees.Count() : 100));
        }

        /// <summary>
        /// Save Employee Detail
        /// </summary>
        /// <param name="employeesDTO"></param>
        /// <returns></returns>
        public bool SaveEmployee(EmployeesDTO employeesDTO)
        {
            Users users = new Users();
            users = this._mapper.Map<Users>(employeesDTO);
            return this._employeeRepository.SaveEmployee(users);
        }

        /// <summary>
        /// Get Employee Detail By Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public EmployeesDTO GetEmployeeById(string Id)
        {
            var employee = this._employeeRepository.GetEmployeeById(Id);

            EmployeesDTO employeesDTO = new EmployeesDTO();
            employeesDTO.Id = employee.Id;
            employeesDTO.FirstName = employee.FirstName;
            employeesDTO.MiddleName = employee.MiddleName;
            employeesDTO.LastName = employee.LastName;
            employeesDTO.Email = employee.Email;
            employeesDTO.Interest = employee.Interest;
            employeesDTO.IsActive = employee.IsActive;
            employeesDTO.Password = employee.Password;
            employeesDTO.DOB = employee.DOB;
            employeesDTO.Address1 = employee.Address1;
            employeesDTO.Address2 = employee.Address2;
            employeesDTO.City = employee.City;
            employeesDTO.StateId = employee.StateId;
            employeesDTO.Pincode = employee.Pincode;
            employeesDTO.CurrentAddress1 = employee.CurrentAddress1;
            employeesDTO.CurrentAddress2 = employee.CurrentAddress2;
            employeesDTO.CurrentCity = employee.CurrentCity;
            employeesDTO.CurrentPincode = employee.CurrentPincode;
            employeesDTO.CurrentStateId = employee.CurrentStateId;
            employeesDTO.Mobile = employee.Mobile;
            employeesDTO.TeamId = employee.TeamId; employeesDTO.Team = employee.TeamId != null ? _masterService.GetMasterById(employee.TeamId) : null;
            employeesDTO.Note = employee.Note;
            employeesDTO.IsDeleted = employee.IsDeleted;
            employeesDTO.IsEmployee = employee.IsEmployee;
            employeesDTO.CreatedDate = employee.CreatedDate;
            employeesDTO.ModifiedDate = employee.ModifiedDate;
            employeesDTO.EducationDetails = employee.EducationDetails.Select(x => new EducationDetailsDTO()
            {
                EducationDetailsId = x.EducationDetailsId,
                CourseId = x.CourseId,
                Course = x.CourseId != null ? _masterService.GetMasterById(x.CourseId) : null,
                Institution = x.Institution,
                YearOfPassing = x.YearOfPassing,
                Percentage = x.Percentage
            }).ToList();

            return employeesDTO;
        }

        /// <summary>
        /// Activated Employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        public bool ActivateEmployee(string employeeId)
        {
            return this._employeeRepository.ActiveEmployee(employeeId);
        }

        /// <summary>
        /// Deactivate employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        public bool InactivateEmployee(string employeeId)
        {
            return this._employeeRepository.InactivateEmployee(employeeId);
        }

        /// <summary>
        /// Delete Employee record
        /// </summary>
        /// <param name="employeeId"></param>
        /// <returns></returns>
        public bool DeleteEmployee(string employeeId)
        {
            return this._employeeRepository.DeleteEmployee(employeeId);
        }

        /// <summary>
        /// Update Employee record
        /// </summary>
        /// <returns></returns>
        public bool UpdateEmployee(EmployeesDTO employeesDTO)
        {
            return this._employeeRepository.UpdateEmployee(this._mapper.Map<Users>(employeesDTO));
        }
        #endregion

    }
}