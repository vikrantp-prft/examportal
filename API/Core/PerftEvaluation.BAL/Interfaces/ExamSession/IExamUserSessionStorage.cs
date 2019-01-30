using System.Collections.Generic;
using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Interfaces.Exams.ExamSession
{
    public interface IExamUserSessionStorage
    {
        List<ExamUserSession> GetExamSessionCollection();
        ExamUserSession GetUserExamSession(string userId, string examId);
        bool CreateNewSession(ExamUserSession newUserSessionEntry);
        bool UpdateCollection(List<ExamUserSession> userSessionsCollection);
        bool DeleteSessionEntry(string userId, string examId);
    }
}