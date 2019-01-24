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
    /// Question's API Controller
    /// </summary>
    public class QuestionsController : ControllerBase
    {
        protected readonly IQuestionsService _questionService;
        private ResponseModel responseModel = null;

         public QuestionsController(IQuestionsService questionsService)
        {
            this._questionService = questionsService;
            this.responseModel = new ResponseModel();
        }

        //GET api/exams/questionsByExamId
        /// <summary>
        /// Get list of all Questions depending upon Exam ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route("listQuestionsByExamId")]
        public IActionResult GetQuestions(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.GetQuestionsByExamId(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/exams/postQuestions
        /// <summary>
        /// Save questions detail
        /// </summary>
        /// <param name="questionsDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(QuestionsDTO questionsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.SaveQuestions(questionsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }


        // POST api/exams/UpdateQuestions
        /// <summary>
        /// Update Questions details
        /// </summary>
        /// <param name="questionsDTO"></param>
        /// <returns></returns>
        [HttpPost, Route("UpdateQuestions")]
        public IActionResult UpdateQuestions(QuestionsDTO questionsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.UpdateQuestion(questionsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/exams/ActivateQuestions
        /// <summary>
        /// Activate Questions
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("ActiveQuestions")]
        public IActionResult ActivateQuestions(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.ActiveQuestions(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }


        // POST api/exams/InactivateQuestions
        /// <summary>
        /// Deactivate Questions
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("InactivateQuestion")]
        public IActionResult InactivateQuestions(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.InactiveQuestions(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

         // POST api/exams/GetQuestionById
        /// <summary>
        /// Get Question by id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("GetQuestionById")]
        public IActionResult GetQuestionById(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.GetQuestionById(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }
    }
}
