using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

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
        public Questions QuestionType { get; set; }


    }
}
