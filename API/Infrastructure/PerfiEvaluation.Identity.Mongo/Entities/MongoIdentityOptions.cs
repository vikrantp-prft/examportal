using System;

namespace PerfiEvaluation.Identity.Mongo.Entities
{
    public class MongoIdentityOptions
    {
        public string ConnectionString { get; set; } = "mongodb://localhost/default";
        public string UsersCollection { get; set; } = "IdentityUsers";
		public string RolesCollection { get; set; } = "IdentityRoles";
    }
}
