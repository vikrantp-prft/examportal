using System;
using System.Collections.Generic;

namespace PerftEvaluation.DTO.Dtos
{
    /// <summary>
    /// Result's DTO Class
    /// </summary>
    public class ResultsDTO
    {
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

        public List<QuestionDTO> Question { get; set; }
    }


    public class QuestionDTO
    { 
        public string QuestionId { get; set; }

        public int Marks { get; set; }
        
        public bool IsCorrect { get; set; }

        public bool IsAttempted { get; set; }
    }
    
}
