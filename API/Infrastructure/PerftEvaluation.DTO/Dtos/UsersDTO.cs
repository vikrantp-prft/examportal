using System;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// User entities DTO's
    /// </summary>
    public class UsersDTO {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsActive { get; set; }
        public string Password { get; set; }
        public DateTime? DOB { get; set; }
        public string Address1 { get; set; }
        public int Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Pincode { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Group { get; set; }
        public string Designation { get; set; }
        public string Team { get; set; }
        public string Note { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}