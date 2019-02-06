using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;

namespace PerftEvaluation.Api.Controllers
{
    [Route ("api/[controller]")]
    [ApiController]
    /// <summary>
    /// Assigned Exams to User
    /// </summary>
    public class AssignedExamsController : ControllerBase
    {
        protected readonly IAssignedExamsService _assignedExamsService;
        private ResponseModel responseModel = null;

        protected readonly ILogger<MasterController> _logger;

        public AssignedExamsController(IAssignedExamsService assignedExamsService, ILogger<MasterController> logger = null)
        {
            this._assignedExamsService = assignedExamsService;
            this.responseModel = new ResponseModel ();
            if (null != logger) {
                this._logger = logger;
            }
        }

        //POST api/exams/GetExamsByUserId
        /// <summary>
        /// Get list of all Exams depending upon User ID
        /// </summary>
        /// <returns></returns>
        [HttpPost, Route ("ListExamsByUserId")]
        public IActionResult GetExamsByUserId (RequestModel requestModel) {
            try {
                return Ok (this._assignedExamsService.GetExamsByUserId (requestModel));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }


        // POST api/exams/IsExamAssigned
        /// <summary>
        /// Assigned exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("IsExamAssigned")]
        public IActionResult IsExamAssigned (RequestModel requestModel) {
            try {
                return Ok (_assignedExamsService.IsExamAssigned (requestModel.Id));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
    }
}
