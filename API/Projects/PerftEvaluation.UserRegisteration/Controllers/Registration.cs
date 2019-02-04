using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.UserRegisteration.BMEntities;
using PerftEvaluation.UserRegisteration.Interfaces;

namespace PerftEvaluation.UserRegisteration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Registration: ControllerBase
    {
        private readonly IRegistrationBal _bal;

        public Registration(IRegistrationBal bal)
        {
            this._bal = bal;
        }
        [HttpPost("register")]
        public void RegisterUser([FromBody] User user)
        {
            // ToDo : Logic to store user information to MongoDb.
            _bal.RegisterNewUser(user);
        }

        //  // GET api/values
        // [HttpGet]
        // public ActionResult<IEnumerable<string>> Get()
        // {
        //     return new string[] { "value1", "value2" };
        // }
    }
}