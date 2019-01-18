using System;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    /// <summary>
    /// User API Controller
    /// </summary>
    public class UserController : ControllerBase {
        #region Declaration
        protected readonly IUserService _userService;
        private ResponseModel responseModel = null;

        public UserController (IUserService UserService) {
            this._userService = UserService;
            this.responseModel = new ResponseModel ();
        }
        #endregion

        #region Class Methods
        //GET api/user
        /// <summary>
        /// Get list of all users
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get () {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.GetUsers;

                return Ok (responseModel);
            } catch (Exception ex) {
                return BadRequest (CommonResponse.ExceptionResponse (ex));
            }
        }

        // POST api/user
        /// <summary>
        /// Save user detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post (UsersDTO usersDTO) {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.SaveUsers (usersDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/users/Update
        /// <summary>
        /// Update users details
        /// </summary>
        /// <param name="userDTO"></param>
        /// <returns></returns>
        [HttpPost, Route ("Update")]
        public IActionResult UpdateUser (UsersDTO userDTO) {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.UpdateUser (userDTO);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/user/ActivateMaster
        /// <summary>
        /// Activate user
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("ActivateUser")]
        public IActionResult ActivateUser (RequestModel requestModel) {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.ActivateUser (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/user/InactivateMaster
        /// <summary>
        /// Deactivate uset
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("InactivateUser")]
        public IActionResult InactivateUser (RequestModel requestModel) {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.InactivateUser (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/user/GetUserById
        /// <summary>
        /// Get user by id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        [HttpPost, Route ("GetUserById")]
        public IActionResult GetUserById (RequestModel requestModel) {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.GetUserById (requestModel.Id);

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }

        // POST api/user/GetUserById
        /// <summary>
        /// Get dashboard count and required content
        /// </summary>
        /// <returns></returns>
        [HttpGet, Route ("GetDashboardContent")]
        public IActionResult GetDashboardContent () {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.GetDashboardInfo ();

                return Ok (responseModel);
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
        #endregion
    }
}