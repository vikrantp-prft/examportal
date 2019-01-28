using System;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using PerfiEvaluation.Identity.Mongo.Entities;

namespace PerfiEvaluation.Identity.Mongo.Helper
{
    public static class Mapping
    {
        public static void Setup()
		{
			BsonClassMap.RegisterClassMap<IdentityUser>(cm =>
			{
				cm.AutoMap();
				cm.MapIdMember(c => c.Id).SetIdGenerator(GuidGenerator.Instance);
				cm.MapField(c => c.PasswordHash).SetIgnoreIfNull(true);
				cm.MapField(c => c.Roles).SetIgnoreIfNull(true);
				cm.MapField(c => c.Claims).SetIgnoreIfNull(true);
				cm.MapField(c => c.Logins).SetIgnoreIfNull(true);
				cm.MapField(c => c.Tokens).SetIgnoreIfNull(true);
				cm.MapField(c => c.RecoveryCodes).SetIgnoreIfNull(true);
			});

			BsonClassMap.RegisterClassMap<IdentityRole>(cm =>
			{
				cm.AutoMap();
				cm.MapIdMember(c => c.Id).SetIdGenerator(GuidGenerator.Instance);
			});
		}
    }
}
