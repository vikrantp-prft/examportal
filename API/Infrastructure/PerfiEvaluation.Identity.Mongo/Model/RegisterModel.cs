using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class RegisterModel : IRegisterModel
    {
         [Required]
        [EmailAddress]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string RoleName{get;set;}

    }
}
