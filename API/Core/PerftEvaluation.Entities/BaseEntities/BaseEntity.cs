using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PerftEvaluation.Entities.BaseEntities {
    /// <CreatedBy>Sumit S</CreatedBy>
    /// <CreatedDate>15 Jan 2019</CreatedDate>
    /// <summary>
    /// Base Entity with common properties
    /// </summary>
    public class BaseEntity {
        [BsonId]
        [BsonElement ("_id"), BsonRepresentation (BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonDefaultValue (true)]
        [BsonElement ("isActive")]
        public bool IsActive { get; set; }
    }
}