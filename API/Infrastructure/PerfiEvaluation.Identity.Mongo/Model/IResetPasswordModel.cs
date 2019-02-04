using System;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public interface IResetPasswordModel
    {
        string Username { get; set; }
        string Password { get; set; }
        string ResetCode {get; set;}
    }
}
