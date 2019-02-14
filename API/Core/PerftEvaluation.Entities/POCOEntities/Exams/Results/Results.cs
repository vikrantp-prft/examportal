using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities
{
    /// <summary>
    /// Result Model Class
    /// </summary>
    public class Results : BaseEntity
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "results"; } }

        [BsonElement("examId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string ExamId { get; set; }

        [BsonElement("userId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string UserId { get; set; }

        [BsonElement("questionsAttempted")]
        [Required]
        public int QuestionsAttempted { get; set; }

        [BsonElement("totalMarks")]
        public int TotalMarks { get; set; }

        [BsonElement("obtainedMarks")]
        [Required]
        public int ObtainedMarks { get; set; }

        [BsonElement("duration")]
        public int Duration { get; set; }

        [BsonElement("timeConsumed")]
        [Required]
        public int TimeConsumed { get; set; }
        

        [BsonElement("startTime")]
        public DateTime? StartTime { get; set; }


        [BsonElement("endTime")]
        public DateTime? EndTime { get; set; }

        public List<AttemptedQuestion> AttemptedQuestions { get; set; }
    }

    public class AttemptedQuestion
    {

        [BsonElement ("AttemptedQuestionId"), BsonRepresentation (BsonType.ObjectId)]
        public string AttemptedQuestionId { get; set; }


        [BsonElement("QuestionsId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string QuestionsId { get; set; }


        [BsonElement("selectedOptionId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string selectedOptionId { get; set; }
        

        [BsonElement("isCorrect")]
        public bool IsCorrect { get; set; }


        [BsonElement("marks")]
        [Required]
        public int Marks { get; set; }


        [BsonElement("isAttempted")]
        public bool IsAttempted { get; set; }
    }
}