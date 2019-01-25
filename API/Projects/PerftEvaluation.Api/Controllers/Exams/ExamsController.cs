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
    /// Exams API Controller
    /// </summary>
    public class ExamsController : ControllerBase
    {
        protected readonly IExamsService _examService;
        private ResponseModel responseModel = null;

        public ExamsController(IExamsService examsService)
        {
            this._examService = examsService;
            this.responseModel = new ResponseModel();
        }


        //GET api/exams
        /// <summary>
        /// Get list of all Exams
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.GetExams;

                return Ok(responseModel);
            }
            catch (Exception ex)
            {
                return BadRequest(CommonResponse.ExceptionResponse(ex));
            }
        }

        // POST api/exams
        /// <summary>
        /// Save exams detail
        /// </summary>
        /// <param name="examsDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(ExamsDTO examsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.SaveExams(examsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/exams/Update
        /// <summary>
        /// Update exams details
        /// </summary>
        /// <param name="examsDTO"></param>
        /// <returns></returns>
        [HttpPost, Route("Update")]
        public IActionResult UpdateExams(ExamsDTO examsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.UpdateExam(examsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        
        // POST api/exams/ActivateMaster
        /// <summary>
        /// Activate exams
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("ActiveExam")]
        public IActionResult ActivateExam(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.ActiveExams(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        
        // POST api/exams/InactivateMaster
        /// <summary>
        /// Deactivate exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("InactivateExam")]
        public IActionResult InactivateExam(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.InactiveExams(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        
        // POST api/exams/GetUserById
        /// <summary>
        /// Get user by id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("GetExamById")]
        public IActionResult GetExamById(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._examService.GetExamsById(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }
    }       
}