using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class UserRoleModel : IUserRoleModel
    {
        [Required]
        [EmailAddress]
        public string Username { get; set; }

        [Required]
        public string RoleName { get; set; }
    }
}
