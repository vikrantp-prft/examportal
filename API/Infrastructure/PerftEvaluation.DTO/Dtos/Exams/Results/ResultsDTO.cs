using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Result's DTO Class
    /// </summary>
    public class ResultsDTO {
        [Required]
        public string ExamId { get; set; }

        [Required]
        public string UserId { get; set; }

        public int QuestionsAttempted { get; set; }

        [Required]
        public int TotalMarks { get; set; }

        [Required]
        public int ObtainedMarks { get; set; }

        public int Duration { get; set; }

        [Required]
        public int TimeConsumed { get; set; }

        [Required]
        public DateTime? StartTime { get; set; }

        [Required]
        public DateTime? EndTime { get; set; }

        public bool IsDeleted { get; set; }

        public List<QuestionDTO> Question { get; set; }
    }

    public class QuestionDTO {
        [Required]
        public string QuestionId { get; set; }

        [Required]
        public int Marks { get; set; }

        public bool IsCorrect { get; set; }

        public bool IsAttempted { get; set; }
    }

}