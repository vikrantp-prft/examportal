using System;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Employee API Controller
    /// </summary>
    public class EmployeeController : ControllerBase
    {
        #region Declaration
        protected readonly IEmployeeService _employeeService;
        private ResponseModel responseModel = null;

        public EmployeeController(IEmployeeService EmployeeService)
        {
            this._employeeService = EmployeeService;
            this.responseModel = new ResponseModel();
        }
        #endregion

        #region Class Methods
        //GET api/Employee/Get
        /// <summary>
        /// Get list of all employees
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.GetEmployees;

                return Ok(responseModel);
            }
            catch (Exception ex)
            {
                return BadRequest(CommonResponse.ExceptionResponse(ex));
            }
        }

         // POST api/Employee/Post
        /// <summary>
        /// Save employee detail
        /// </summary>
        /// <param name="employeeDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post (EmployeesDTO employeeDTO) {
            try {
                return Ok (this._employeeService.SaveEmployee (employeeDTO));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/Employee/ActivateEmployee
        /// <summary>
        /// Activate Employee
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("ActivateEmployee")]
        public IActionResult ActivateEmployee (RequestModel requestModel) {
            try {
                return Ok (this._employeeService.ActivateEmployee(requestModel.Id));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

         // POST api/Employee/InactivateEmployee
        /// <summary>
        /// Deactivate employee
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("InactivateEmployee")]
        public IActionResult InactivateEmployee (RequestModel requestModel) {
            try {
                return Ok (this._employeeService.InactivateEmployee (requestModel.Id));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/Employee/GetEmployeeById
        /// <summary>
        /// Get employee by id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("GetEmployeeById")]
        public IActionResult GetEmployeeById (RequestModel requestModel) {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.GetEmployeeById (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        #endregion
    }
}
