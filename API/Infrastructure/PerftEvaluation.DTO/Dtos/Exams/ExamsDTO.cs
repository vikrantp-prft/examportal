using System;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos {
    public class ExamsDTO {
        public string Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string TeamId { get; set; }
        public string Description { get; set; }

        [Required]
        public int ExamDurationHours { get; set; }

        [Required]
        public int ExamDurationMinutes { get; set; }

        [Required]
        public int PassingMarks { get; set; }

        [Required]
        public DateTime? FromDate { get; set; }

        [Required]
        public DateTime? ToDate { get; set; }
        public bool IsActive { get; set; }
        public bool ShowResultInFront { get; set; }
        public bool ShuffleQuestions { get; set; }
        public bool ShuffleOptions { get; set; }
        public bool IsPaperPublic { get; set; }
        public bool IsFeedback { get; set; }

        public int TotalQuestions { get; set; }
        public bool IsDeleted { get; set; }

        public MastersDTO Team { get; set; }
    }
}