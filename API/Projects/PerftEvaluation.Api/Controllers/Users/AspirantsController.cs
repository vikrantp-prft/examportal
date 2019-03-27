using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Primitives;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers.Users
{
    [Route("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Employee API Controller
    /// </summary>
    public class AspirantsController : ControllerBase
    {
        #region Declaration
        protected readonly IAspirantsService _aspirantsService;
        private ResponseModel responseModel = null;
        protected readonly ILogger<AspirantsController> _logger;

        public AspirantsController(IAspirantsService AspirantsService, ILogger<AspirantsController> logger = null)
        {
            this._aspirantsService = AspirantsService;
            this.responseModel = new ResponseModel();
            if (null != logger)
            {
                this._logger = logger;
            }
        }
        #endregion

        #region Class Methods
        //GET api/Aspirants/Get
        /// <summary>
        /// Get list of all aspirants
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route("GetAspirants")]
        public IActionResult Get(RequestModel requestModel)
        {
            try
            {
                return Ok(this._aspirantsService.GetAspirants(requestModel));
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/Post
        /// <summary>
        /// Save aspirants detail
        /// </summary>
        /// <param name="aspirantsDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(AspirantsDTO aspirantsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._aspirantsService.SaveAspirants(aspirantsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/ActivateAspirants
        /// <summary>
        /// Activate Aspirants
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("ActiveAspirant")]
        public IActionResult ActiveAspirant(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._aspirantsService.ActiveAspirant(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/InactivateAspirants
        /// <summary>
        /// Deactivate Aspirants
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("InactivateAspirants")]
        public IActionResult InactivateAspirants(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._aspirantsService.InactivateAspirants(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/GetAspirantById
        /// <summary>
        /// Get Aspirant by id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("GetAspirantById")]
        public IActionResult GetAspirantById(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._aspirantsService.GetAspirantById(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/DeleteAspirants
        /// <summary>
        /// Delete user
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("DeleteAspirant")]
        public IActionResult DeleteAspirant(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._aspirantsService.DeleteAspirant(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/UpdateAspirants
        /// <summary>
        /// Update Aspirants
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("UpdateAspirants")]
        public IActionResult UpdateAspirants(AspirantsDTO aspirantsDTO)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._aspirantsService.UpdateAspirants(aspirantsDTO);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }

        // POST api/Aspirants/ImportCsv
        /// <summary>
        /// Import CSV
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>

        [HttpPost]

        [Route("ImportAspirants")]
        //[Consumes("multipart/form-data")]
        public async Task<IActionResult> Post()
        {
            bool isSuccess = false;
            StringValues formValues;

            try
            {
                #region Validate Model

                if (Request.Form.Files.Count < 0 && Request.Form.Files[0] == null)
                {
                    return NoContent();
                }

                IFormFile file = Request.Form.Files[0];

                if (!file.FileName.Contains(".xlsx"))
                {
                    return new UnsupportedMediaTypeResult();
                }

                #endregion Validate Model

                using (Stream fileStream = new MemoryStream())
                {
                    await file.CopyToAsync(fileStream);
                    isSuccess = _aspirantsService.ExcelUpload(fileStream);
                }
            }
            catch (Exception ex)
            {
                // _logger.LogInformation($"MESSAGE: {ex.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(ex));
            }

            return Ok(isSuccess);
        }

        #endregion
    }
}
