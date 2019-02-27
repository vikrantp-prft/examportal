using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Assigned Exams to User
    /// </summary>
    public class AssignedExamsController : ControllerBase {
        #region Declaration
        protected readonly IAssignedExamsService _assignedExamsService;
        private ResponseModel responseModel = null;

        protected readonly ILogger<MasterController> _logger;

        public AssignedExamsController (IAssignedExamsService assignedExamsService, ILogger<MasterController> logger = null) {
            this._assignedExamsService = assignedExamsService;
            this.responseModel = new ResponseModel ();
            if (null != logger) {
                this._logger = logger;
            }
        }
        #endregion

        #region Class Methods
        //POST api/exams/GetExamsByUserId
        /// <summary>
        /// Get list of all Exams depending upon User ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("ListExamsByUserId")]
        public IActionResult GetExamsByUserId (RequestModel requestModel) {
            try {
                return Ok (this._assignedExamsService.GetExamsByUserId (requestModel));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        //POST api/exams/GetUsersByExamId
        /// <summary>
        /// Get list of all Employees depending upon Exam ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("ListEmployeesByExamId")]
        public IActionResult GetUsersByExamId (RequestModel requestModel) {
            try {
                return Ok (this._assignedExamsService.GetUsersByExamId (requestModel));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exams/ActiveExamAssigned
        /// <summary>
        /// Assigned exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("ActiveExamAssigned")]
        public IActionResult IsExamAssigned (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = _assignedExamsService.ActiveExamAssigned (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exams/InactiveExamAssigned
        /// <summary>
        /// Assigned exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("InactiveExamAssigned")]
        public IActionResult InactiveExamAssigned (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = _assignedExamsService.InactiveExamAssigned (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
        // POST api/exams/examassignment
        /// <summary>
        /// Add assignment between users and exams 
        /// </summary>
        /// <param name="assignedExamsDTOs"></param>
        /// <returns></returns>
        [HttpPost, Route ("ExamAssignment")]
        public IActionResult ExamAssignment (List<AssignedExamsDTO> assignedExamsDTOs) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = _assignedExamsService.ExamAssignment (assignedExamsDTOs);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
        #endregion
    }
}