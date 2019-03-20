using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers.Users {
    [Route ("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Employee API Controller
    /// </summary>
    public class EmployeeController : ControllerBase {
        #region Declaration
        protected readonly IEmployeeService _employeeService;
        private ResponseModel responseModel = null;
        protected readonly ILogger<EmployeeController> _logger;

        public EmployeeController (IEmployeeService EmployeeService, ILogger<EmployeeController> logger = null) {
            this._employeeService = EmployeeService;
            this.responseModel = new ResponseModel ();
            if (null != logger) {
                this._logger = logger;
            }
        }
        #endregion

        #region Class Methods
        //GET api/Employee/Get
        /// <summary>
        /// Get list of all employees
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("GetEmployees")]
        public IActionResult Get (RequestModel requestModel) {
            try {
                return Ok (this._employeeService.GetEmployees (requestModel));
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
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
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.SaveEmployee (employeeDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
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
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.ActivateEmployee (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
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
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.InactivateEmployee (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
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
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.GetEmployeeById (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/Employee/DeleteEmployee
        /// <summary>
        /// Delete user
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("DeleteEmployee")]
        public IActionResult DeleteEmployee (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.DeleteEmployee (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/Employee/UpdateEmployee
        /// <summary>
        /// Update Employee
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("UpdateEmployee")]
        public IActionResult UpdateEmployee (EmployeesDTO employeesDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._employeeService.UpdateEmployee (employeesDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }


                // POST api/Questions/ImportCsv
        /// <summary>
        /// Import CSV
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>

        [HttpPost]

        [Route("ImportEmployees")]
        //[Consumes("multipart/form-data")]
        public async Task<IActionResult> Post()
        {
            bool isSuccess = false;
            StringValues formValues;
            
            try
            {
                #region Validate Model

                if (Request.Form.Files.Count < 0 && Request.Form.Files[0] == null)
                {
                    return NoContent();
                }

                IFormFile file = Request.Form.Files[0];

                if (!file.FileName.Contains(".xlsx"))
                {
                    return new UnsupportedMediaTypeResult();
                }

                #endregion Validate Model

                using (Stream fileStream = new MemoryStream())
                {
                    await file.CopyToAsync(fileStream);
                    isSuccess = _employeeService.ExcelUpload(fileStream);
                }
            }
            catch (Exception ex)
            {
                // _logger.LogInformation($"MESSAGE: {ex.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(ex));
            }

            return Ok(isSuccess);
        }

        #endregion
    }
}