using System;
using System.ComponentModel.DataAnnotations;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class RoleModel : IRoleModel
    {
        [Required]
        public string RoleName{get;set;}
    }
}
