using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities {
    public class Exams : BaseEntity {
        [BsonExtraElements]
        public static string CollectionName { get { return "exams"; } }

        [BsonElement ("title")]
        [Required]
        public string Title { get; set; }

        [BsonElement ("teamId"), BsonRepresentation (BsonType.ObjectId)]
        [Required]
        public string TeamId { get; set; }

        [BsonElement ("description")]
        public string Description { get; set; }

        [BsonElement ("examDurationHours")]
        [Required]
        public int ExamDurationHours { get; set; }

        [BsonElement ("examDurationMinutes")]
        [Required]
        public int ExamDurationMinutes { get; set; }

        [BsonElement ("passingMarks")]
        [Required]
        public int PassingMarks { get; set; }

        [BsonElement ("fromDate")]
        [Required]
        public DateTime? FromDate { get; set; }

        [BsonElement ("toDate")]
        [Required]
        public DateTime? ToDate { get; set; }

        [BsonElement ("showResultInFront")]
        public bool ShowResultInFront { get; set; }

        [BsonElement ("shuffleQuestions")]
        public bool ShuffleQuestions { get; set; }

        [BsonElement ("shuffleOptions")]
        public bool ShuffleOptions { get; set; }

        [BsonElement ("isPaperPublic")]
        public bool IsPaperPublic { get; set; }

        [BsonElement ("totalQuestions")]

        public int TotalQuestions { get; set; }

        [BsonElement ("isFeedback")]
        public bool IsFeedback { get; set; }
    }
}