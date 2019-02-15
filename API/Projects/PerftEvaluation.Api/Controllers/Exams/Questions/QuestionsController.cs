using System;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using Microsoft.AspNetCore.Hosting;

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

        [HttpGet]
        [Route("ImportCsv")]
        public IActionResult Post()
        {
            // ToDo-Kapil:Do not save file to any folder, store direct stream to database. 
            try
            {
                IFormFile file = Request.Form.Files[0];
                string contentRootPath = "";
                var ActualFileName = Path.GetFileName(file.FileName);
                string ext = Path.GetExtension(ActualFileName);
                if (ext == ".csv" || ext == ".xls" || ext == ".xlsx" || ext == ".ods")
                {
                    var fileName = DateTime.Now.ToString("yymmddhhss") + ActualFileName;
                    var PathWithFolderName = "/Uploads/QuestionUploads";
                    if (!Directory.Exists(PathWithFolderName))
                    {
                        // Try to create the directory.
                        DirectoryInfo di = Directory.CreateDirectory(PathWithFolderName);
                    }
                    if (file.Length > 0)
                    {
                        string path = _hostingEnvironment.WebRootPath;
                        contentRootPath = _hostingEnvironment.ContentRootPath;
                        var paths = contentRootPath + PathWithFolderName + '/' + fileName;
                        // var filePath = filepath + PathWithFolderName + '/' + fileName;
                        using (FileStream fileStream = new FileStream(paths, FileMode.Create))
                        {
                            file.CopyTo(fileStream);
                        }
                        // ToDo - use overload function to pass stream.
                        var res = this._questionService.ExcelUpload(paths);
                    }
                }
            }
            catch (Exception ex)
            {
                throw (ex);
            }
            return null;
        }
    }
}