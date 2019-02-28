using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using PerftEvaluation.BAL.Interfaces.Exams.ExamSession;
using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Services.ExamSession
{
    public class TimedHostedService : IHostedService, IDisposable
    {
        // https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-2.2
        private Timer _timer;
        private readonly ILogger _logger;
        private static IExamUserSessionStorage _storageHandler;

        private const int TIME_TRIGGER_SECONDS = 5;
        public TimedHostedService(IExamUserSessionStorage storageHandler, ILogger<TimedHostedService> logger)
        {
            _storageHandler = storageHandler;
             _logger = logger;
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Background Service is starting.");

            _timer = new Timer(DoWork, null, TimeSpan.Zero,
                TimeSpan.FromSeconds(TIME_TRIGGER_SECONDS));

            return Task.CompletedTask;
        }

        private void DoWork(object state)
        {
            _logger.LogInformation("Timed Background Service is working.");

            List<ExamUserSession> userExamSessions = _storageHandler.GetExamSessionCollection();

            foreach (ExamUserSession examTimer in userExamSessions)
            {
                examTimer.TimeElampsed = examTimer.TimeElampsed - TIME_TRIGGER_SECONDS;
            }

            _storageHandler.UpdateCollection(userExamSessions);
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            _logger.LogInformation("Timed Background Service is stopping.");

            _timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        public void Dispose()
        {
            _timer?.Dispose();
        }
    }
}