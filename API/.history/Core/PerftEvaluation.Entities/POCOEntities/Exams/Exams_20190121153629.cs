using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities.Exams
{
    public class Exams : BaseEntity 
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "exams"; } }

        [BsonElement("title")]
        public string Title { get; set; }

        // [BsonElement("teamId"), BsonRepresentation(BsonType.ObjectId)]

         [BsonElement("teamId"), BsonRepresentation(BsonType.ObjectId)]
        public string TeamId { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("examDurationHours")]
        public DateTime? ExamDurationHours { get; set; }
    }
}