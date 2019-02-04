using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class UsernameModel : IUsernameModel
    {
        [Required]
        [EmailAddress]
        public string Username { get; set; } 
    }
}
