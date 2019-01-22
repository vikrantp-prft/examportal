using System;
using System.Collections.Generic;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DTO.Dtos.Exams.Questions
{
    /// <summary>
    /// Questions Entity's DTO class
    /// </summary>
    public class QuestionsDTO
    {     
        public string ExamId { get; set; }

        public string CategoryId { get; set; }

        public QuestionsEnum QuestionType { get; set; }
        
        public string Question { get; set; }

         public List<Options> Options {get;set;}
    }

    public class Options
    {
        public string QuestionsId { get; set; }
 
        public string Option { get; set; }
        
        public string Description { get; set; }
     }
}
