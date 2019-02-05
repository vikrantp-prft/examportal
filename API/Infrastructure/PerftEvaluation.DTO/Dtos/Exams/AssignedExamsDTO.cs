using System;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos
{
    public class AssignedExamsDTO
    {
        public string Id { get; set; }
        
        [Required]
        public string ExamId { get; set; }

        [Required]
        public string UserId { get; set; }

        public bool IsAttempted { get; set; }

        public ExamsDTO Exam { get; set; }
    }
}
