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
    /// User API Controller
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
        //GET api/Employee
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

         // POST api/Employee
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

        // POST api/user/ActivateEmployee
        /// <summary>
        /// Activate user
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

         // POST api/user/InactivateMaster
        /// <summary>
        /// Deactivate uset
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

        // POST api/user/GetEmployeeById
        /// <summary>
        /// Get user by id
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
