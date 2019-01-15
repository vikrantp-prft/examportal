using System;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities {
    /// <CreatedBy>Sumit S</CreatedBy>
    /// <CreatedDate>15 Jan 2019</CreatedDate>
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