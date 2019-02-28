using System;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.BAL.Interfaces.Exams.ExamSession;
using PerftEvaluation.BAL.Interfaces.ExamSession;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Services.ExamSession
{
    public class ExamUserSessionService : IExamSessionService
    {
        private readonly IExamUserSessionStorage _sessionStore;
        private readonly IExamsService _examsService;

        public ExamUserSessionService(IExamUserSessionStorage sessionStore, IExamsService examsService)
        {
            this._sessionStore = sessionStore;
            this._examsService = examsService;
        }
        public bool CreateNewSession(string userId, string examId)
        {
            bool isSuccess = false;
            if (String.IsNullOrEmpty(userId) || String.IsNullOrEmpty(examId))
            {
                throw new ArgumentNullException("userId or examId", $"User Name={userId}, Exam Id={examId}");
            }

            ExamsDTO examsDto = _examsService.GetExamsById(examId);

            if (examsDto == null)
            {
                throw new ArgumentNullException("examId", "No exam found with Id = " + examId);
            }

            TimeSpan endtimeDuration = new TimeSpan(examsDto.ExamDurationHours, examsDto.ExamDurationMinutes, 0);
            ExamUserSession examUserSession = new ExamUserSession();

            examUserSession.UserId = userId;
            examUserSession.ExamId = examId;
            examUserSession.StartTime = DateTime.Now;
            // examUserSession.EndTime = examUserSession.StartTime.AddMinutes(10); //ToDo : get this value from MongoDb
            examUserSession.EndTime = examUserSession.StartTime + endtimeDuration;
            examUserSession.TimeElampsed = endtimeDuration.Seconds;

            isSuccess = _sessionStore.CreateNewSession(examUserSession);

            return isSuccess;
        }

        public bool DeleteSessionEntry(string userId, string examId)
        {
            if (String.IsNullOrEmpty(userId) || String.IsNullOrEmpty(examId))
            {
                throw new ArgumentNullException("userId or examId", $"User Name={userId}, Exam Id={examId}");
            }

            _sessionStore.DeleteSessionEntry(userId, examId);
            throw new System.NotImplementedException();
        }

        public ExamUserSession GetUserExamSession(string userId, string examId)
        {
            if (String.IsNullOrEmpty(userId) || String.IsNullOrEmpty(examId))
            {
                throw new ArgumentNullException("userId or examId", $"User Name={userId}, Exam Id={examId}");
            }

            return _sessionStore.GetUserExamSession(userId, examId);
        }
    }
}