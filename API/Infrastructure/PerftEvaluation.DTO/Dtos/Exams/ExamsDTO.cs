using System;

namespace PerftEvaluation.DTO.Dtos
{
    public class ExamsDTO
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string TeamId { get; set; }
        public string Description { get; set; }
        public int ExamDurationHours { get; set; }
        public int ExamDurationMinutes { get; set; }
        public int PassingMarks { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public bool IsActive { get; set; }
        public bool ShowResultInFront { get; set; }
        public bool ShuffleQuestions { get; set; }
        public bool ShuffleOptions { get; set; }
        public bool IsPaperPublic { get; set; }
        public int TotalQuestions { get; set; }
    }
}
