using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces.ExamSession;
using PerftEvaluation.DTO.Dtos.ExamSession;
using System.Security.Claims;

namespace PerftEvaluation.Api.Controllers.ExamSession
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExamSessionManager : ControllerBase
    {
        private readonly IExamSessionService _examSessionService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        Claim claim;

        public ExamSessionManager(IExamSessionService examSessionService, IHttpContextAccessor httpContextAccessor)
        {
            _examSessionService = examSessionService;
            _httpContextAccessor = httpContextAccessor;
            claim = _httpContextAccessor.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier);
        }

        [HttpGet, Route("InitiateNewExamSession")]
        public IActionResult InitiateNewExamSession(string examId)
        {
            bool isSuccess = false;
            var userId = "123"; //claim.Value;
            isSuccess = _examSessionService.CreateNewSession(userId, examId);

            if (isSuccess)
                return Ok(userId);
            else
                return BadRequest(userId);
        }

        [HttpGet, Route("GetUserExamSession")]
        public IActionResult GetUserExamSession(string examId)
        {
            var userId = "123"; //claim.Value;
            ExamUserSession examUserSession = _examSessionService.GetUserExamSession(userId, examId);

            return Ok(examUserSession);
        }
    }
}