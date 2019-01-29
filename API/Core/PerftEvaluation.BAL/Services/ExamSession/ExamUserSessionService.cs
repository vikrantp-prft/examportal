using System;
using PerftEvaluation.BAL.Interfaces.Exams.ExamSession;
using PerftEvaluation.BAL.Interfaces.ExamSession;
using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Services.ExamSession
{
    public class ExamUserSessionService : IExamSessionService
    {
        private readonly IExamUserSessionStorage _sessionStore;

        public ExamUserSessionService(IExamUserSessionStorage sessionStore)
        {
            this._sessionStore = sessionStore;
        }
        public bool CreateNewSession(string userId, string examId)
        {
            bool isSuccess = false;
            if (String.IsNullOrEmpty(userId) || String.IsNullOrEmpty(examId))
            {
                throw new ArgumentNullException("userId or examId", $"User Name={userId}, Exam Id={examId}");
            }

            ExamUserSession examUserSession = new ExamUserSession();

            examUserSession.UserId = userId;
            examUserSession.ExamId = examId;
            examUserSession.StartTime = DateTime.Now;
            examUserSession.EndTime = examUserSession.StartTime.AddMinutes(10); //get this value from MongoDb

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