using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.UserRegisteration.BMEntities;

namespace PerftEvaluation.UserRegisteration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Registration: ControllerBase
    {
        [HttpPost("register")]
        public void RegisterUser([FromBody] User user)
        {
            // ToDo : Logic to store user information to MongoDb.
        }

         // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }
    }
}