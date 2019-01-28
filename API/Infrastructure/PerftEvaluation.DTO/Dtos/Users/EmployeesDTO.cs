using System;
using System.Collections.Generic;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Employee DTO class
    /// </summary>
    public class EmployeesDTO {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public bool IsActive { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime? DOB { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string StateId { get; set; }
        public string Pincode { get; set; }
        public string CurrentAddress1 { get; set; }
        public string CurrentAddress2 { get; set; }
        public string CurrentCity { get; set; }
        public string CurrentStateId { get; set; }
        public string CurrentPincode { get; set; }
        public string Mobile { get; set; }
        public string TeamId { get; set; }
        public string Note { get; set; }
        public string[] Interest { get; set; }
        public List<EducationDetailsDTO> EducationDetails;

        public bool IsEmployee { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsDeleted { get; set; }

        public MastersDTO Team { get; set; }
    }

    public class EducationDetailsDTO {
        public string Course { get; set; }
        public int YearOfPassing { get; set; }
        public string Institution { get; set; }
        public double Percentage { get; set; }
    }
}