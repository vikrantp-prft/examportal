using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.Entities.POCOEntities;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.Api.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase {
        protected readonly IUserService userService;

        public ValuesController (IUserService UserService) {
            this.userService = UserService;
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<UsersDTO> Get () {
            return this.userService.GetUsers;
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public ActionResult<string> Get (int id) {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post ([FromBody] string value) { }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public void Put (int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public void Delete (int id) { }

    }
}