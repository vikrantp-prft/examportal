using System;
using System.Collections.Generic;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Questions Entity's DTO class
    /// </summary>
    public class QuestionsDTO {
        public string ExamId { get; set; }

        public string CategoryId { get; set; }

        public QuestionsEnum QuestionType { get; set; }

        public string Question { get; set; }

        public bool IsActive { get; set; }

        public List<OptionsDTO> Options { get; set; }
        public bool IsDeleted { get; set; }
    }

    public class OptionsDTO {
        public string OptionsId { get; set; }

        public string Option { get; set; }

        public string Description { get; set; }

        public bool IsCorrect { get; set; }
    }
}