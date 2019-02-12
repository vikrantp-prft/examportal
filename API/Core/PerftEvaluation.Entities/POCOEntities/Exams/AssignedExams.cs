using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities
{
    public class AssignedExams : BaseEntity
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "assignedExams"; } }


        [BsonElement ("examId"), BsonRepresentation (BsonType.ObjectId)]
        [Required]
        public string ExamId { get; set; }


        [BsonElement ("userId"), BsonRepresentation (BsonType.ObjectId)]
        [Required]
        public string UserId { get; set; }


        [BsonDefaultValue(false)]
        [BsonElement ("isAttempted")]
        public bool IsAttempted { get; set; }

        
        [BsonDefaultValue(false)]
        [BsonElement ("isExamAssignedToEmployee")]
        public bool IsExamAssignedToEmployee { get; set; }


        
        [BsonDefaultValue(false)]
        [BsonElement ("isEmployeeAssignedToExam")]
        public bool IsEmployeeAssignedToExam { get; set; }
    }
}
