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
    /// Master API Controller
    /// </summary>
    public class MasterController : ControllerBase {
        #region Declaration
        protected readonly IMasterService _masterService;
        private ResponseModel responseModel = null;
        protected readonly ILogger<MasterController> _logger;

        public MasterController (IMasterService MasterService, ILogger<MasterController> logger = null) {
            this._masterService = MasterService;
            this.responseModel = new ResponseModel ();
             if (null != logger) {
                this._logger = logger;
            }
        }
        #endregion

        #region Class Methods
        // GET api/masters
        /// <summary>
        /// Get list of all the masters
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("GetMasters")]
        public IActionResult Get (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.GetMasters(requestModel);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/master
        /// <summary>
        /// Save master details
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post (MastersDTO mastersDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.SaveMaster (mastersDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/Master/Update
        /// <summary>
        /// Update master details
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        [HttpPost, Route ("Update")]
        public IActionResult UpdateMaster (MastersDTO mastersDTO) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.UpdateMaster (mastersDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/master/getmasterbytype
        /// <summary>
        /// Get master by type
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("GetMasterByType")]
        public IActionResult GetMasterByType (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.GetMasterByType (requestModel.Filter);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/master/ActivateMaster
        /// <summary>
        /// Activate master
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("ActivateMaster")]
        public IActionResult ActivateMaster (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.ActivateMaster (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/master/InactivateMaster
        /// <summary>
        /// Deactivate master
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("InactivateMaster")]
        public IActionResult InactivateMaster (RequestModel requestModel) {
            try {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.InactivateMaster (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                _logger.LogInformation ($"MESSAGE: {exception.Message}");
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }


        // POST api/master/DeleteMaster
        /// <summary>
        /// Delete Master
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route("DeleteMaster")]
        public IActionResult DeleteMaster(RequestModel requestModel)
        {
            try
            {
                responseModel.StatusCode = 200;
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.DeleteMaster(requestModel.Id);

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                _logger.LogInformation($"MESSAGE: {exception.Message}");
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }
        #endregion
    }
}