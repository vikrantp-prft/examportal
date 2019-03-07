using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Exams API Controller
    /// </summary>
    public class ExamsController : ControllerBase {
        protected readonly IExamsService _examService;
        private ResponseModel responseModel = null;

        protected readonly ILogger<MasterController> _logger;

        public ExamsController (IExamsService examsService, ILogger<MasterController> logger = null) {
            this._examService = examsService;
            this.responseModel = new ResponseModel ();
            if (null != logger) {
                this._logger = logger;
            }
        }

        //GET api/exams
        /// <summary>
        /// Get list of all Exams
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("GetExams")]
        public IActionResult Get (RequestModel requestModel) {
            try {
                return Ok (this._examService.GetExams (requestModel));
            } catch (Exception ex) {
                return BadRequest (CommonResponse.ExceptionResponse (ex));
            }
        }


        //GET api/exams
        /// <summary>
        /// Get list of all Exams
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("GetExamsCreatedByContributor")]
        public IActionResult GetExamsCreatedByContributor (RequestModel requestModel) {
            try {
                return Ok (this._examService.GetExamsCreatedByContributor (requestModel.Id));
            } catch (Exception ex) {
                return BadRequest (CommonResponse.ExceptionResponse (ex));
            }
        }


        // POST api/exams
        /// <summary>
        /// Save exams detail
        /// </summary>
        /// <param name="examsDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post (ExamsDTO examsDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.SaveExams (examsDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exams/Update
        /// <summary>
        /// Update exams details
        /// </summary>
        /// <param name="examsDTO"></param>
        /// <returns></returns>
        [HttpPost, Route ("Update")]
        public IActionResult UpdateExams (ExamsDTO examsDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.UpdateExam (examsDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exams/ActivateMaster
        /// <summary>
        /// Activate exams
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("ActiveExam")]
        public IActionResult ActivateExam (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.ActiveExams (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exams/InactivateMaster
        /// <summary>
        /// Deactivate exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("InactivateExam")]
        public IActionResult InactivateExam (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.InactiveExams (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exams/GetUserById
        /// <summary>
        /// Get user by id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("GetExamById")]
        public IActionResult GetExamById (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.GetExamsById (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/exam/DeleteExam
        /// <summary>
        /// Delete Exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("DeleteExam")]
        public IActionResult DeleteExam (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.DeleteExams (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }


        [HttpPost, Route("SetActiveInactiveExams")]
        public IActionResult DelSetActiveInactiveExamseteExam (ExamsDTO examsDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.SetActiveInactive (examsDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
    }
}