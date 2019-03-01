using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos
{
    /// <summary>
    /// Result's DTO Class
    /// </summary>
    public class ResultsDTO
    {

        public string Id { get; set; }

        public string ExamId { get; set; }

        public string UserId { get; set; }

        public int QuestionsAttempted { get; set; }


        public int TotalMarks { get; set; }

        public int ObtainedMarks { get; set; }


        public int Duration { get; set; }


        public int TimeConsumed { get; set; }


        public DateTime? StartTime { get; set; }

        public DateTime? EndTime { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsActive { get; set; }

        public ExamsDTO Exam { get; set; }

        public EmployeesDTO Employee { get; set; }

        public List<AttemptedQuestionsDTO> AttemptedQuestions { get; set; }
    }
}