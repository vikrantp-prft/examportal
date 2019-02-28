using System;

namespace PerftEvaluation.DTO.Dtos.ExamSession
{
    public class ExamUserSession
    {
        // private string sessionId;
        // public ExamUserSession(string userId, string examId)
        // {
        //     sessionId = userId + "_" + examId;
        // }
        // public string SessionId
        // {
        //     get
        //     {
        //         return sessionId;
        //     }
        // }
        public string SessionId { get; set; }
        public string ExamId { get; set; }
        public string UserId { get; set; }
        public int TimeElampsed { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }
}