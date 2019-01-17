using System;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;

namespace PerftEvaluation.Entities.POCOEntities
{
    /// <summary>
    /// User POCO Entity
    /// </summary>
    [BsonIgnoreExtraElements]
    public class Users : BaseEntity
    {
        [BsonExtraElements]
        public static string CollectionName { get { return "users"; } }

        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("dob")]
        public DateTime? DOB { get; set; }

        [BsonElement("address1")]
        public string Address1 { get; set; }

        [BsonElement("address2")]
        public int Address2 { get; set; }

        [BsonElement("city")]
        public string City { get; set; }

        [BsonElement("state")]
        public string State { get; set; }

        [BsonElement("pincode")]
        public string Pincode { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("mobile")]
        public string Mobile { get; set; }

        [BsonElement("group")]
        public string Group { get; set; }

        [BsonElement("designation")]
        public string Designation { get; set; }

        [BsonElement("team")]
        public string Team { get; set; }

        [BsonElement("note")]
        public string Note { get; set; }
    }
}