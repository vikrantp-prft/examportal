using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities
{
    public class AttemptedQuestions : BaseEntity
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "attemptedQuestions"; } }

        [BsonElement("ExamId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string ExamId { get; set; }

        [BsonElement("QuestionsId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string QuestionsId { get; set; }


        [BsonElement("selectedOptionId")]
        public string[] SelectedOptionId { get; set; }


        [BsonElement("subjectiveAnswer")]
        public string SubjectiveAnswer { get; set; }


        [BsonElement("userId"), BsonRepresentation(BsonType.ObjectId)]
        [Required]
        public string UserId { get; set; }
        

        [BsonElement("isCorrect")]
        public bool IsCorrect { get; set; }


        [BsonElement("marks")]
        [Required]
        public int Marks { get; set; }


        [BsonElement("isAttempted")]
        public bool IsAttempted { get; set; }
    }
}
