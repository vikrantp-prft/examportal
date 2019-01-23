using MongoDB.Bson.Serialization.Attributes;

namespace PerftEvaluation.Entities.POCOEntities.Exams
{
    public class Exams
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "exams"; } }
    }
}