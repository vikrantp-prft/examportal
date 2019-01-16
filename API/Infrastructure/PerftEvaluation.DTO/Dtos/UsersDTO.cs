using System;

namespace PerftEvaluation.DTO.Dtos
{
    /// <summary>
    /// User DTO
    /// </summary>
    public class UsersDTO {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsActive { get; set; }
    }
}
