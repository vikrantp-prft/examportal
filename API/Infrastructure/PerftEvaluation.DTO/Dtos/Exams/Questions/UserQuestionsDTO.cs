using System;
using System.Collections.Generic;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DTO.Dtos {
    public class UserQuestionsDTO {
        public string QuestionId { get; set; }
        public string ExamId { get; set; }
        public string UserId { get; set; }
        public string CategoryId { get; set; }
        public MastersDTO Category { get; set; }
        public QuestionsEnum QuestionType { get; set; }
        public List<UserOptionsDTO> Options { get; set; }
        public string[] SelectedOptionId { get; set; }
        public string SubjectiveAnswer { get; set; }
        public bool IsAttempted { get; set; }
        public string Question { get; set; }
    }

    public class UserOptionsDTO {
        public string OptionId { get; set; }
        public string Option { get; set; }
        public bool IsSelected { get; set; }
    }
}