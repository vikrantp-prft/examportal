using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class ResetPasswordModel : IResetPasswordModel
    {
        [Required]
        [EmailAddress]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public string ResetCode {get; set;}
    }
}
