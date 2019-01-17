using System;
using System.Collections.Generic;
using MongoDB.Bson;
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
        public string Address2 { get; set; }

        [BsonElement("city")]
        public string City { get; set; }

        [BsonElement("stateId"), BsonRepresentation(BsonType.ObjectId)]
        public string StateId { get; set; }

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
        
        [BsonElement("userName")]
        public string UserName { get; set; }

        [BsonElement("state")]    
        public string State { get; set; }

        [BsonElement("currentAddress1")]
        public string CurrentAddress1 { get; set; }

        [BsonElement("currentAddress2")]
        public string CurrentAddress2 { get; set; }

        [BsonElement("currentCity")]
        public string CurrentCity { get; set; }

        [BsonElement("currentState")]
        public string CurrentState { get; set; }

        [BsonElement("currentPincode")]
        public string CurrentPincode { get; set; }

        [BsonElement("interest")]       
        public string Interest { get; set; }
        public List<EducationDetails> EducationDetails{get;set;}
          
    }

    public class EducationDetails
    {
        [BsonElement("course")] 
        public string Course { get; set; }

        [BsonElement("yearOfPassing")] 
        public int YearOfPassing { get; set; }

        [BsonElement("institution")] 
        public string Institution { get; set; }

        [BsonElement("percentage")] 
        public double Percentage { get; set; }
    }
}