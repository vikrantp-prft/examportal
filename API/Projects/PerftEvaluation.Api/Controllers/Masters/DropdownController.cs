using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.Helper.Common;
using PerftEvaluation.Helper.Interfaces;

namespace PerftEvaluation.Api.Controllers.Masters {
    /// <summary>
    /// All dropdown API Controller
    /// </summary>
    [Route ("api/[controller]")]
    [ApiController]

    public class DropdownController : ControllerBase {

        #region Declarations
        private ResponseModel responseModel = null;
        protected readonly IDropdown _dropdown;
        private readonly IMapper _mapper;
        protected readonly ILogger<DropdownController> _logger;
        #endregion

        public DropdownController (IDropdown Dropdown, IMapper Mapper, ILogger<DropdownController> logger = null) {
            this._mapper = Mapper;
            this._dropdown = Dropdown;
            responseModel = new ResponseModel ();
            if (null != logger) {
                this._logger = logger;
            }
        }

        // GET api/dropdown/departments
        /// <summary>
        /// Get dropdown for department master
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("Departments")]
        public IActionResult Departments () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Departments;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // GET api/dropdown/groups
        /// <summary>
        /// Get dropdown for user groups master
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("Groups")]
        public IActionResult Groups () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Groups;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        [HttpGet, Route ("Categories")]
        public IActionResult Categories () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Category;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // GET api/dropdown/teams
        /// <summary>
        /// Get dropdown for teams
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("Teams")]
        public IActionResult Teams () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Teams;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // GET api/dropdown/designations
        /// <summary>
        /// Get dropdown for Designations of user/employee
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("Designations")]
        public IActionResult Designations () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Designations;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // GET api/dropdown/Degrees
        /// <summary>
        /// Get dropdown for Degrees of user/employee
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("Degrees")]
        public IActionResult Degrees () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Degrees;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // GET api/dropdown/States
        /// <summary>
        /// Get dropdown for States
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("States")]
        public IActionResult States () {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.States;

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
    }
}