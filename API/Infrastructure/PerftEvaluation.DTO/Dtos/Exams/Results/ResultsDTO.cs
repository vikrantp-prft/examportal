using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Result's DTO Class
    /// </summary>
    public class ResultsDTO {

        public string Id { get; set; }
        
        [Required]
        public string ExamId { get; set; }


        [Required]
        public string UserId { get; set; }


        [Required]
        public int QuestionsAttempted { get; set; }

        
        public int TotalMarks { get; set; }

        
        [Required]
        public int ObtainedMarks { get; set; }

        
        public int Duration { get; set; }

        
        [Required]
        public int TimeConsumed { get; set; }

        
        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsActive { get; set; }

        public ExamsDTO Exam { get; set; }

        public EmployeesDTO Employee { get; set; }
    }
}