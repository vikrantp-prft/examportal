using System;
using Microsoft.AspNetCore.Mvc;
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

        public ResultsController(IResultsService resultsService)
        {
            this._resultsService = resultsService;
            this.responseModel = new ResponseModel();
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
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._resultsService.GetResultsByExamId(requestModel.Id);

                return Ok(responseModel);
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
        public IActionResult GetResultsByUserId(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._resultsService.GetResultsByUserId(requestModel.Id);

                return Ok(responseModel);
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

    }
}
