using System;
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
    }
}
