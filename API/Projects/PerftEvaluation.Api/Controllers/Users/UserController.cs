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
                return Ok(this._userService.SaveUsers (usersDTO));
            } catch (Exception exception) {
                return BadRequest (CommonResponse.ExceptionResponse (exception));
            }
        }
        #endregion
    }
}