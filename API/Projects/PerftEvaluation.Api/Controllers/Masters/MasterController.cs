using System;
using Microsoft.AspNetCore.Mvc;
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

        public MasterController (IMasterService MasterService) {
            this._masterService = MasterService;
            this.responseModel = new ResponseModel ();
        }
        #endregion

        #region Class Methods
        // GET api/masters
        /// <summary>
        /// Get list of all the masters
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get () {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.GetMasters;

                return Ok (responseModel);
            } catch (Exception exception) {
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
                return Ok (this._masterService.SaveMaster (mastersDTO));
            } catch (Exception exception) {
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
                return Ok (this._masterService.UpdateMaster (mastersDTO));
            } catch (Exception exception) {
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
                responseModel.Message = "Success";
                responseModel.Data = this._masterService.GetMasterByType (requestModel.Filter);

                return Ok (responseModel);
            } catch (Exception exception) {
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
                return Ok (this._masterService.ActivateMaster (requestModel.Id));
            } catch (Exception exception) {
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
                return Ok (this._masterService.InactivateMaster (requestModel.Id));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
        #endregion
    }
}