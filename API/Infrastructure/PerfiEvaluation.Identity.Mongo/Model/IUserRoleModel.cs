using System;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public interface IUserRoleModel
    {
        string Username { get; set; }
        string RoleName { get; set; }
    }
}
