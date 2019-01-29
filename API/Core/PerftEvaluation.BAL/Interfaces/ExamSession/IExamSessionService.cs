using PerftEvaluation.DTO.Dtos.ExamSession;

namespace PerftEvaluation.BAL.Interfaces.ExamSession
{
    public interface IExamSessionService
    {
        ExamUserSession GetUserExamSession(string userId, string examId);
        bool CreateNewSession(string userId, string examId);
        bool DeleteSessionEntry(string userId, string examId);
    }
}