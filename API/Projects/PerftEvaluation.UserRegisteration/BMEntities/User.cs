using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PerftEvaluation.UserRegisteration.BMEntities
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("FirstName")]
        public string FirstName { get; set; }

        [BsonElement("LastName")]
        public string LastName { get; set; }
    }
}