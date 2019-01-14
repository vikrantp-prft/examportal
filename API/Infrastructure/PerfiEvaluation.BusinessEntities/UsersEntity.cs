using System;

namespace PerfiEvaluation.BusinessEntities
{
    public class UsersEntity
    {
        public string UserId { get; set; }
        
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }

        public string Password { get; set; }

        public DateTime? DOB { get; set; }

        public bool IsActive { get; set; }
    }
}
