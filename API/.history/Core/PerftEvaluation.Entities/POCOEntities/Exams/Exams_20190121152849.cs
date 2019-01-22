using MongoDB.Bson.Serialization.Attributes;

namespace PerftEvaluation.Entities.POCOEntities.Exams
{
    public class Exams : BaseEntities 
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "exams"; } }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("teamId"), BsonRepresentation(BsonType.ObjectId)]


    }
}