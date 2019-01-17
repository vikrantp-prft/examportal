using System;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities {
    /// <summary>
    /// Master POCO Entity
    /// </summary>         
    [BsonIgnoreExtraElements]
    public class Masters : BaseEntity {
        [BsonExtraElements]
        public static string CollectionName { get { return "masters"; } }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("masterType")]
        public string MasterType { get; set; }

    }
}