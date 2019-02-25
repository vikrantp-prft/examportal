using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using PerftEvaluation.Entities.BaseEntities;
using static PerftEvaluation.DTO.Common.CommonEnums;

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

        [Required]
        [StringLength(100)]
        [BsonElement("firstName")]
        public string FirstName { get; set; }

        [BsonElement("middleName")]
        public string MiddleName { get; set; }

        [Required]
        [StringLength(100)]
        [BsonElement("lastName")]
        public string LastName { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("dob")]
        public DateTime? DOB { get; set; }

        [Required]
        [BsonElement("address1")]
        public string Address1 { get; set; }

        [BsonElement("address2")]
        public string Address2 { get; set; }

        [Required]
        [BsonElement("city")]
        public string City { get; set; }

        [Required]
        [BsonElement("stateId"), BsonRepresentation(BsonType.ObjectId)]
        public string StateId { get; set; }

        [Required]
        [BsonElement("pincode")]
        public string Pincode { get; set; }

        [Required]
        [BsonElement("email")]
        public string Email { get; set; }

        [Required]
        [BsonElement("mobile")]
        public string Mobile { get; set; }

        [BsonElement("groupId")]
        public string GroupId { get; set; }

        [BsonElement("designationId")]
        public string DesignationId { get; set; }

        [Required]
        [BsonElement("teamId"), BsonRepresentation(BsonType.ObjectId)]
        public string TeamId { get; set; }

        [BsonElement("note")]
        public string Note { get; set; }

        [BsonElement("userName")]
        public string UserName { get; set; }

        [BsonElement("currentAddress1")]
        public string CurrentAddress1 { get; set; }

        [BsonElement("currentAddress2")]
        public string CurrentAddress2 { get; set; }

        [BsonElement("currentCity")]
        public string CurrentCity { get; set; }

        [BsonElement("currentStateId")]
        public string CurrentStateId { get; set; }

        [BsonElement("currentPincode")]
        public string CurrentPincode { get; set; }

        [BsonElement("interest")]
        public string[] Interest { get; set; }

        [BsonElement("isAdmin")]
        public bool IsAdmin { get; set; }


        [BsonElement("isContributor")]
        public bool IsContributor { get; set; }


        [BsonElement("userType")]
        [Required]
        public UsersEnum UserType { get; set; }


        [BsonElement("educationDetails")]
        public List<EducationDetails> EducationDetails { get; set; }

        public List<JobExperiences> JobExperiences { get; set; }
    }

    public class EducationDetails
    {
        [BsonElement("educationDetailsId"), BsonRepresentation(BsonType.ObjectId)]
        public string EducationDetailsId { get; set; }

        [Required]
        [BsonElement("courseId"), BsonRepresentation(BsonType.ObjectId)]
        public string CourseId { get; set; }

        [BsonElement("yearOfPassing")]
        public int YearOfPassing { get; set; }

        [Required]
        [BsonElement("institution")]
        public string Institution { get; set; }

        [BsonElement("percentage")]
        public double Percentage { get; set; }
    }

    public class JobExperiences
    {
        [BsonElement("jobsExperienceId"), BsonRepresentation(BsonType.ObjectId)]
        public string JobsExperienceId { get; set; }

        [BsonElement("yearsOfExperience")]
        public int YearsOfExperience { get; set; }

        [BsonElement("companyName")]
        public string CompanyName { get; set; }

        [BsonElement("startDate")]
        public DateTime StartDate { get; set; }

        [BsonElement("endDate")]
        public DateTime EndDate { get; set; }
    }
}