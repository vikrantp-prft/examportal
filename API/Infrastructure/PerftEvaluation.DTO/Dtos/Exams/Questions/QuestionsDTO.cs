using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Questions Entity's DTO class
    /// </summary>
    public class QuestionsDTO {
        public string Id { get; set; }

        [Required]
        public string ExamId { get; set; }

        [Required]
        public string CategoryId { get; set; }

        [Required]
        public QuestionsEnum QuestionType { get; set; }

        [Required]
        public string Question { get; set; }

        public bool IsActive { get; set; }

        public List<OptionsDTO> Options { get; set; }
        public bool IsDeleted { get; set; }

        public MastersDTO Category { get; set; }
    }

    public class OptionsDTO {
        public string OptionId { get; set; }

        [Required]
        public string Option { get; set; }

        public string Description { get; set; }

        public bool IsCorrect { get; set; }
    }
}