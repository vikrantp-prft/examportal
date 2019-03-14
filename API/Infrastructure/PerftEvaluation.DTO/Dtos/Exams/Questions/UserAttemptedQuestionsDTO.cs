using System;
using System.Collections.Generic;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DTO.Dtos
{
    public class UserAttemptedQuestionsDTO
    {
        public string QuestionId { get; set; }
        
        public string ExamId { get; set; }

        public string UserId { get; set; }

        public string[] SelectedOptionId { get; set; }

        public string SubjectiveAnswer { get; set; }

        public bool IsAttempted { get; set; }


        public double Percentage { get; set; }

        public bool IsCorrect { get; set; }

        public ExamsDTO Exams { get; set; }

        public EmployeesDTO Users { get; set; }

        public QuestionsDTO Question { get; set; }
    }
}
