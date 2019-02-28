using System;
using PerftEvaluation.BAL.Interfaces.ExamSession;
using PerftEvaluation.BAL.Services.ExamSession;
using Xunit;
using PerftEvaluation.BAL.Interfaces.Exams.ExamSession;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;
using PerftEvaluation.DTO.Dtos.ExamSession;
using System.Threading;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.BAL.Services;

namespace PerftEvaluation.Test
{
    public class ExamUserSessionTests
    {
        [Fact]
        public void CreateNewSession_Tests_Success()
        {
            //Given
            string userId = "123";
            string examId = "456";

            IOptions<MemoryCacheOptions> options = new MemoryCacheOptions();
            IMemoryCache memoryCache = new MemoryCache(options);

            IExamUserSessionStorage examUserSessionStorage = new ExamUserSessionCacheStore(memoryCache);
            IExamsService examService = new ExamsService(null, null, null, null);
            //When
            IExamSessionService examSessionService = new ExamUserSessionService(examUserSessionStorage, examService);

            bool success = examSessionService.CreateNewSession(userId, examId);
            ExamUserSession examUserSession;

            if (success)
            {
                examUserSession = examSessionService.GetUserExamSession(userId, examId);

                Thread.Sleep(5000);

                examUserSession = examSessionService.GetUserExamSession(userId, examId);
            }
            //Then
            Assert.True(success);
        }
    }
}
