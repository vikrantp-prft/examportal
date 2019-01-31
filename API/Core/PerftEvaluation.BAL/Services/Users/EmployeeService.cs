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

            var employees = from p in pagedEmployees
                            join o in _masterRepository.GetAllMasters().AsQueryable() on p.TeamId equals o.Id
                            select new EmployeesDTO()
                            {
                                Id = p.Id,
                                Team = new MastersDTO() { Id = o.Id, Name = o.Name, Description = o.Description },
                                FirstName = p.FirstName,
                                MiddleName = p.MiddleName,
                                LastName = p.LastName,
                                Email = p.Email,
                                Interest = p.Interest,
                                IsActive = p.IsActive,
                                Password = p.Password,
                                DOB = p.DOB,
                                Address1 = p.Address1,
                                Address2 = p.Address2,
                                City = p.City,
                                StateId = p.StateId,
                                Pincode = p.Pincode,
                                CurrentAddress1 = p.CurrentAddress1,
                                CurrentAddress2 = p.CurrentAddress2,
                                CurrentCity = p.CurrentCity,
                                CurrentPincode = p.CurrentPincode,
                                CurrentStateId = p.CurrentStateId,
                                Mobile = p.Mobile,
                                TeamId = p.TeamId,
                                Note = p.Note,
                                IsEmployee = p.IsEmployee,
                                CreatedDate = p.CreatedDate,
                                ModifiedDate = p.ModifiedDate,
                                EducationDetails = p.EducationDetails != null ?
                                    p.EducationDetails.Select(e => new EducationDetailsDTO
                                    {
                                        CourseId = e.CourseId,
                                        Course = _masterRepository.GetAllMasters().AsQueryable().Where(c => c.Id == e.CourseId).Select(c => new MastersDTO { Id = c.Id, Name = c.Name, MasterType = c.MasterType }).FirstOrDefault()

                                    }).ToList()
                                    : null
                            };

            //return object
            return CommonResponse.OkResponse(requestModel, employees, (filteredEmployees.Count() < 100 ? filteredEmployees.Count() : 100));
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
            return this._mapper.Map<EmployeesDTO>(this._employeeRepository.GetEmployeeById(Id));
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