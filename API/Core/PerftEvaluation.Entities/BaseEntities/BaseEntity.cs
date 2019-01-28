using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PerftEvaluation.Entities.BaseEntities
{
    /// <summary>
    /// Base Entity with common properties
    /// </summary>
    public class BaseEntity
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonDefaultValue(true)]
        [BsonElement("isActive")]
        public bool IsActive { get; set; }

        [BsonDefaultValue(false)]
        [BsonElement("isDeleted")]
        public bool IsDeleted { get; set; }

        [BsonElement("createdDate")]
        public DateTime? CreatedDate { get; set; }

        [BsonElement("modifiedDate")]
        public DateTime? ModifiedDate { get; set; }
    }
}