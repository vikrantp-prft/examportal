using System;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// User entities DTO's
    /// </summary>
    public class UsersDTO {
        public string Id { get; set; }

        [Required]
        [StringLength (100)]
        public string FirstName { get; set; }

        [Required]
        [StringLength (100)]
        public string LastName { get; set; }
        public bool IsActive { get; set; }

        public string Password { get; set; }

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

        [Required]
        [EmailAddress (ErrorMessage = "Invalid email address")]
        public string Email { get; set; }

        [Required]
        public string Mobile { get; set; }

        [Required]
        public string GroupId { get; set; }

        [Required]
        public string DesignationId { get; set; }

        [Required]
        public string TeamId { get; set; }
        public string Note { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public bool IsDeleted { get; set; }
        public MastersDTO Team { get; set; }

        public MastersDTO  Group { get; set; }

        public MastersDTO  Designation { get; set; }
    }
}