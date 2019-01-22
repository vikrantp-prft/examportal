using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.Entities.POCOEntities.Exams.Questions
{
    public class Questions : BaseEntity
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "questions"; } }

        [BsonElement("examId"), BsonRepresentation(BsonType.ObjectId)]
        public string ExamId { get; set; }

        [BsonElement("categoryId"), BsonRepresentation(BsonType.ObjectId)]
        public string CategoryId { get; set; }

        [BsonElement("questionType")]
        public QuestionsEnum QuestionType { get; set; }

        [BsonElement("question")]
        public string Question { get; set; }
    }

    public class Options
    {
        [BsonElement("QuestionsId"), BsonRepresentation(BsonType.ObjectId)]
        public string CategoryId { get; set; }

        [BsonElement("yearOfPassing")] 
        public int YearOfPassing { get; set; }

        [BsonElement("institution")] 
        public string Institution { get; set; }

        [BsonElement("percentage")] 
        public double Percentage { get; set; }
     }
}
