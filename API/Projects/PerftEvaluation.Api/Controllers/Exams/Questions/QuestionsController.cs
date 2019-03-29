using System;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using Microsoft.AspNetCore.Hosting;
using System.Threading.Tasks;
using Microsoft.Extensions.Primitives;
using System.Net.Http;
using System.Net;
using System.Net.Http.Headers;

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

        protected readonly ILogger<MasterController> _logger;
        private readonly IHostingEnvironment _hostingEnvironment;

        public QuestionsController(IQuestionsService questionsService,
                                    IHostingEnvironment hostingEnvironment,
                                    ILogger<MasterController> logger = null)
        {
            this._questionService = questionsService;
            this._hostingEnvironment = hostingEnvironment;
            this.responseModel = new ResponseModel();
            if (null != logger)
            {
                this._logger = logger;
            }
        }

        //GET api/exams/questionsByExamId
        /// <summary>
        /// Get list of all Questions depending upon Exam ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route("ListQuestionsByExamId")]
        public IActionResult GetQuestions(RequestModel requestModel)
        {
            try
            {
                return Ok(this._questionService.GetQuestionsByExamId(requestModel.Id, requestModel));
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
                //ToDo : Validate model before sending it to database layer.
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

        // POST api/exams/DeleteQuestion
        /// <summary>
        /// Delete Exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("DeleteQuestion")]
        public IActionResult DeleteQuestion(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._questionService.DeleteQuestions(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Questions/ImportCsv
        /// <summary>
        /// Import CSV
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>

        [HttpPost]

        [Route("ImportQuestions")]
        //[Consumes("multipart/form-data")]
        public async Task<IActionResult> Post()
        {
            bool isSuccess = false;
            StringValues formValues;
            string examId = String.Empty;
            
            try
            {
                #region Validate Model

                if (Request.Form.Files.Count < 0 && Request.Form.Files[0] == null)
                {
                    return NoContent();
                }

                if (!Request.Form.TryGetValue("examId", out formValues))
                {
                    return BadRequest(formValues);
                }

                if (formValues.Count == 0 || String.IsNullOrEmpty(formValues[0]))
                {
                    return BadRequest(formValues);
                }
                examId = formValues[0];

                IFormFile file = Request.Form.Files[0];

                if (!file.FileName.Contains(".xlsx"))
                {
                    return new UnsupportedMediaTypeResult();
                }

                #endregion Validate Model

                using (Stream fileStream = new MemoryStream())
                {
                    await file.CopyToAsync(fileStream);
                    isSuccess = _questionService.ExcelUpload(fileStream, examId);
                }
            }
            catch (Exception ex)
            {
                // _logger.LogInformation($"MESSAGE: {ex.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(ex));
            }

            return Ok(isSuccess);
        }

        [HttpPost]
        [Route("ExportQuestions")]
        public IActionResult ExportQuestions(string examId)
        {
            Stream allQuestionsStream = _questionService.ExportQuestions(examId);

            return File(allQuestionsStream, "application/octet-stream","AllQuestions.xlsx");
        }
    }
}