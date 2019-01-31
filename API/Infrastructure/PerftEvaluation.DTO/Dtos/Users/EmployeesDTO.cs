using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Employee DTO class
    /// </summary>
    public class EmployeesDTO {
        public string Id { get; set; }

        [Required]
        [StringLength (100)]
        public string FirstName { get; set; }
        public string MiddleName { get; set; }

        [Required]
        [StringLength (100)]
        public string LastName { get; set; }
        public bool IsActive { get; set; }

        [Required]
        [EmailAddress (ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public DateTime? DOB { get; set; }

        [Required]
        public string Address1 { get; set; }
        public string Address2 { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string StateId { get; set; }

        [Required]
        public string Pincode { get; set; }
        public string CurrentAddress1 { get; set; }
        public string CurrentAddress2 { get; set; }
        public string CurrentCity { get; set; }
        public string CurrentStateId { get; set; }
        public string CurrentPincode { get; set; }

        [Required]
        public string Mobile { get; set; }

        [Required]
        public string TeamId { get; set; }
        public string Note { get; set; }

        [Required]
        public string[] Interest { get; set; }

        public List<EducationDetailsDTO> EducationDetails;

        public bool IsEmployee { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool IsDeleted { get; set; }

        public MastersDTO Team { get; set; }

    }

    public class EducationDetailsDTO {

        public string EducationDetailsId { get; set; }

        [Required]
        public string CourseId { get; set; }
        public MastersDTO Course { get; set; }

        [Required]
        public int YearOfPassing { get; set; }

        [Required]
        public string Institution { get; set; }

        [Required]
        public double Percentage { get; set; }
    }
}