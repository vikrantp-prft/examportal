using System;
using MongoDB.Bson.Serialization.Attributes;

namespace PerfiEvaluation.DAL.POCOEntities
{
    [BsonIgnoreExtraElements]
    public class Users
    {
        [BsonExtraElements]
        public static string CollectionName { get {return "users";} }

        [BsonId]
        [BsonElement("_id")]
        public string Id { get; set; }
        
        [BsonElement("firstName")]
        public string FirstName { get; set; }
        
        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("dob")]
        public DateTime? DOB { get; set; }

        [BsonDefaultValue(true)]
        [BsonElement("isActive")]
        public bool IsActive { get; set; }
    }
}
