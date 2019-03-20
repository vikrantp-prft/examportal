using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using static PerftEvaluation.DTO.Common.CommonEnums;

namespace PerftEvaluation.DTO.Dtos
{
    public class ImportEmployeesDTO
    {
        public string Id { get; set; }

        [Required]
        [StringLength(100)]
        public string FirstName { get; set; }
        public string MiddleName { get; set; }

        [Required]
        [StringLength(100)]
        public string LastName { get; set; }
        
        public bool IsActive { get; set; }

        [Required]
        public string Email { get; set; }

        public string Address1 { get; set; }
        public string Address2 { get; set; }

        [Required]
        public string City { get; set; }


        [Required]
        public string StateId { get; set; }


        [Required]
        public string Pincode { get; set; }


        [Required]
        public string Mobile { get; set; }


        [Required]
        public string TeamId { get; set; }


        public bool IsDeleted { get; set; }

        // [Required]
        // public UsersEnum UserType { get; set; }
    }
}