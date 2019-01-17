using System;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
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
        //api/masters
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

        // POST api/values
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

        //api/master/getmasterbytype
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
        #endregion
    }
}