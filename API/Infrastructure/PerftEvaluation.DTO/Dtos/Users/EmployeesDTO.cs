using System;
using System.Collections.Generic;

namespace PerftEvaluation.DTO.Dtos.Users
{
    public class EmployeesDTO
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public bool IsActive { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime? DOB { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }
        public string CurrentAddress1 { get; set; }
        public string CurrentAddress2 { get; set; }
        public string CurrentCity { get; set; }
        public string CurrentState { get; set; }
        public string CurrentPincode { get; set; }
        public string Mobile { get; set; }
        public string Team { get; set; }
        public string Note { get; set; }
        public string Interest { get; set; }
        public List<EducationDetails> EducationDetails;
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }

    public class EducationDetails
    {
        public string Cource { get; set; }
        public int YearOfPassing { get; set; }
        public string Institution { get; set; }
        public double Percentage { get; set; }
    }
}
