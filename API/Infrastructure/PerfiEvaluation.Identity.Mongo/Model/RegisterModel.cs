using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class RegisterModel : IRegisterModel
    {
         [Required]
        [EmailAddress]
        public string Username { get; set; }
        
        public string Password { get; set; }

        public string RoleName{get;set;}

        [Required]
        public string UserId { get; set; }

    }
}
