using System;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities {
    /// <summary>
    /// User POCO Entity
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Users : BaseEntity {
        [BsonExtraElements]
        public static string CollectionName { get { return "users"; } }

        [BsonElement ("firstName")]
        public string FirstName { get; set; }

        [BsonElement ("lastName")]
        public string LastName { get; set; }

        // [BsonElement ("password")]
        // public string Password { get; set; }

        // [BsonElement ("dob")]
        // public DateTime? DOB { get; set; }
    }
}