using System;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public interface ILoginModel
    {
        string Username { get; set; }
        string Password { get; set; }
    }
}
