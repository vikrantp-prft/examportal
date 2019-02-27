using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Attempted Questions API controller
    /// </summary>
    public class AttemptedQuestionsController : ControllerBase
    {
        public readonly IAttemptedQuestionsService _attemptedQuestions;

        private ResponseModel responseModel = null;

        protected readonly ILogger<AttemptedQuestionsController> _logger;
        public AttemptedQuestionsController(IAttemptedQuestionsService attemptedQuestions,
                                            ILogger<AttemptedQuestionsController> logger = null)
        {
            this._attemptedQuestions = attemptedQuestions;
            this.responseModel = new ResponseModel();
            if (null != logger)
            {
                this._logger = logger;
            }
        }

        //GET api/attemptedQuestions
        /// <summary>
        /// Get list of all Attempted Questions By ExamsId
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route("GetAttemptedQuestionsByExamsId")]
        public IActionResult GetAttemptedQuestionsByExamsId(RequestModel requestModel)
        {
            try
            {
                return Ok(this._attemptedQuestions.GetAttemptedQuestionsByExamsId(requestModel));
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/attemptedQuestions/DeleteAttemptedQuestions
        /// <summary>
        /// Delete Attempted Questions
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("DeleteAttemptedQuestionsById")]
        public IActionResult DeleteAttemptedQuestionsById(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._attemptedQuestions.DeleteAttemptedQuestionsByExamId(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }


        // POST api/attemptedQuestions/SaveAttemptedQuestions
        /// <summary>
        /// Save exams detail
        /// </summary>
        /// <param name="examsDTO"></param>
        /// <returns></returns>
        [HttpPost, Route("SaveAttemptedQuestionsById")]
        public IActionResult SaveAttemptedQuestionsById(AttemptedQuestionsDTO attemptedQuestionsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._attemptedQuestions.SaveAttemptedQuestions(attemptedQuestionsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }


        // POST api/attemptedQuestions/UpdateAttemptedQuestions
        /// <summary>
        /// Update Attempted Questions details
        /// </summary>
        /// <param name="examsDTO"></param>
        /// <returns></returns>
        [HttpPost, Route ("UpdateAttemptedQuestions")]
        public IActionResult UpdateAttemptedQuestions (AttemptedQuestionsDTO attemptedQuestionsDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._attemptedQuestions.UpdateAttemptedQuestions (attemptedQuestionsDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
    }
}
