using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace PerfiEvaluation.Identity.Mongo.Entities
{
    public class IdentityRole
    {
        [BsonRepresentation(BsonType.ObjectId)]
	    public string Id { get; set; }

        public IdentityRole()
		{
		}

		public IdentityRole(string name)
		{
			Name = name;
			NormalizedName = name.ToUpperInvariant();
		}

		public string Name { get; set; }
		public string NormalizedName { get; set; }

		public override string ToString()
		{
			return Name;
		}
    }
}
