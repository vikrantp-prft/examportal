using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase {
        protected readonly IUserService _userService;
        private ResponseModel responseModel = null;

        public ValuesController (IUserService UserService) {
            this._userService = UserService;
            this.responseModel = new ResponseModel ();
        }

        //GET api/values
        [HttpGet]
        public IActionResult Get () {
            try {
                responseModel.Message = "Success";
                responseModel.Data = this._userService.GetUsers;

                return Ok (responseModel);
            } catch (Exception ex) {
                return BadRequest (CommonResponse.ExceptionResponse(ex)); 
            }
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public IActionResult Get (string Id) {
            responseModel.Message = "Success";
            responseModel.Data = this._userService.GetUserById (Id);

            return Ok (responseModel);
        }

        // POST api/values
        [HttpPost]
        public bool Post (UsersDTO usersDTO) {
            return this._userService.SaveUsers (usersDTO);
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) { }

    }
}