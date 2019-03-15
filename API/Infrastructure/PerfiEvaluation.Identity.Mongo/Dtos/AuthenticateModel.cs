using System;

namespace PerfiEvaluation.Identity.Mongo
{
    public class AuthenticateModel
    {
        public string[] UserRole { get; set; }

        public string UserId { get; set; }

        public string UserName { get; set; }

        public string Token { get; set; }
    }
}
