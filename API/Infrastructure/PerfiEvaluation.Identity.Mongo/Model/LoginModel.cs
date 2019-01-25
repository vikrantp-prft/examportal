using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class LoginModel
    {
         [Required]
        [EmailAddress]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
