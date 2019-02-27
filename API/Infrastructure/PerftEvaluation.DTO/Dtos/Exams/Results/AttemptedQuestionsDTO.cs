using System;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos
{
    public class AttemptedQuestionsDTO
    {
        public string Id { get; set; }

        [Required]
        public string QuestionsId { get; set; }

        public string[] SelectedOptionId { get; set; }

        public string SubjectiveAnswer { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public string ExamId {get; set;}

        [Required]
        public int Marks { get; set; }

        public bool IsCorrect { get; set; }

        public bool IsAttempted { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsActive { get; set; }

        public QuestionsDTO QuestionsDetails { get; set; }
    }

}
