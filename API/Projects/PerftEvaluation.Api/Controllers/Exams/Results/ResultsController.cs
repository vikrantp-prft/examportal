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
    /// Results API controller
    /// </summary>
    public class ResultsController : ControllerBase
    {
        public readonly IResultsService _resultsService;

        private ResponseModel responseModel = null;

        protected readonly ILogger<ResultsController> _logger;

        public ResultsController(IResultsService resultsService, ILogger<ResultsController> logger = null)
        {
            this._resultsService = resultsService;
            this.responseModel = new ResponseModel();
            if (null != logger)
            {
                this._logger = logger;
            }
        }

        //GET api/exams/resultsByExamId
        /// <summary>
        /// Get list of all Exams depending upon Exam ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route("listResultsByExamId")]
        public IActionResult GetResultsByExamId(RequestModel requestModel)
        {
            try
            {
                return Ok(this._resultsService.GetResultsByExamId(requestModel));
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        //GET api/exams/resultsByExamId
        /// <summary>
        /// Get list of all Exams depending upon Exam ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route("listResultsByUserId")]
        public IActionResult GetResultsByUserId(ResultsDTO resultsDTO)
        {
            try
            {
                return Ok(this._resultsService.GetIndividualResults(resultsDTO));
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/exams/postResults
        /// <summary>
        /// Save Results
        /// </summary>
        /// <param name="resultsDTO"></param>
        /// <returns></returns>
        [HttpPost, Route("saveResults")]
        public IActionResult Post(ResultsDTO resultsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._resultsService.SaveResults(resultsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/exams/DeleteResults
        /// <summary>
        /// Delete Results
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("DeleteResult")]
        public IActionResult DeleteResult(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._resultsService.DeleteResultsByExamId(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        /// <summary>
        /// Generate Results
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("GenerateResult")]
        public IActionResult GenerateResult(ResultsDTO resultsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._resultsService.GenerateResults(resultsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

    }
}