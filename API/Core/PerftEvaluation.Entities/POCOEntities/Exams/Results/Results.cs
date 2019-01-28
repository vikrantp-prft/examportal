using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
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
        public string ExamId { get; set; }


        [BsonElement("userId"), BsonRepresentation(BsonType.ObjectId)]
        public string UserId { get; set; }


        [BsonElement("questionsAttempted")]
        public int QuestionsAttempted { get; set; }


        [BsonElement("totalMarks")]
        public int TotalMarks { get; set; }


        [BsonElement("obtainedMarks")]
        public int ObtainedMarks { get; set; }


        [BsonElement("duration")]
        public int Duration { get; set; }


        [BsonElement("timeConsumed")]
        public int TimeConsumed { get; set; }


        [BsonElement("startTime")]
        public DateTime? StartTime { get; set; }


        [BsonElement("endTime")]
        public DateTime? EndTime { get; set; }


        public List<Question> Question {get; set;}
    }

    public class Question
    {
        [BsonElement("questionId"), BsonRepresentation(BsonType.ObjectId)]
        public string QuestionId { get; set; }


        [BsonElement("marks")]
        public int Marks { get; set; }


        [BsonElement("isCorrect")]
        public bool IsCorrect { get; set; }


        [BsonElement("isAttempted")]
        public bool IsAttempted { get; set; }
    }
}
