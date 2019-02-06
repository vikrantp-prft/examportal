using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.EmailServer;
using PerftEvaluation.EmailServer.Interfaces;

namespace PerftEvaluation.Identity.Controllers
{
    /// <summary>
    /// Values Controller Class
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        protected readonly IEmailService _emailService;
        
        public ValuesController(IEmailService EmailService)
        {
            this._emailService = EmailService;
        }
        //[Authorize(Roles = "Administrator")]
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            EmailDTO emailDTO = new EmailDTO();
            emailDTO.Body = "<b>This is</b> test email";
            emailDTO.Subject = "Test email subject line";
            emailDTO.ToEmails = new List<string>(){"pallavi.koramkar@perficient.com"};
            emailDTO.IsHtmlBody = true;
            
            this._emailService.Send(emailDTO);
            

            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value) { }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value) { }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id) { }
    }
}