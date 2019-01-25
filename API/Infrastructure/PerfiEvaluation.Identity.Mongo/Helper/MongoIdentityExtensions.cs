using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using PerfiEvaluation.Identity.Mongo.BAL;
using PerfiEvaluation.Identity.Mongo.DAL;
using PerfiEvaluation.Identity.Mongo.Entities;

namespace PerfiEvaluation.Identity.Mongo.Helper
{
    public static class MongoIdentityExtensions
    {
        public static IServiceCollection AddIdentityMongoDbProvider<TUser>(this IServiceCollection services) where TUser : IdentityUser
	    {
	        return AddIdentityMongoDbProvider<TUser, IdentityRole>(services, x => { });
	    }

        public static IServiceCollection AddIdentityMongoDbProvider<TUser>(this IServiceCollection services,
	        Action<MongoIdentityOptions> setupDatabaseAction) where TUser : IdentityUser
	    {
	        return AddIdentityMongoDbProvider<TUser, IdentityRole>(services, setupDatabaseAction);
	    }

        public static IServiceCollection AddIdentityMongoDbProvider<TUser, TRole>(this IServiceCollection services,
			Action<MongoIdentityOptions> setupDatabaseAction) where TUser : IdentityUser
			where TRole : IdentityRole
        {
            return AddIdentityMongoDbProvider<TUser, TRole>(services, x => { }, setupDatabaseAction);
        }

	    public static IServiceCollection AddIdentityMongoDbProvider<TUser>(this IServiceCollection services,
	        Action<IdentityOptions> setupIdentityAction, Action<MongoIdentityOptions> setupDatabaseAction) where TUser : IdentityUser
	    {
	        return AddIdentityMongoDbProvider<TUser, IdentityRole>(services, setupIdentityAction, setupDatabaseAction);
        }

        public static IServiceCollection AddIdentityMongoDbProvider<TUser, TRole>(this IServiceCollection services,
			Action<IdentityOptions> setupIdentityAction, Action<MongoIdentityOptions> setupDatabaseAction) where TUser : IdentityUser
			where TRole : IdentityRole
		{
			services.AddIdentity<TUser, TRole>(setupIdentityAction ?? (x => { }))
				.AddRoleStore<RoleStore<TRole>>()
				.AddUserStore<UserStore<TUser, TRole>>()
				.AddDefaultTokenProviders();

			var dbOptions = new MongoIdentityOptions();
			setupDatabaseAction(dbOptions);

			var userCollection = new IdentityUserCollection<TUser>(dbOptions.ConnectionString, dbOptions.UsersCollection);
			var roleCollection = new IdentityRoleCollection<TRole>(dbOptions.ConnectionString, dbOptions.RolesCollection);

            services.AddTransient<IIdentityUserCollection<TUser>>(x => userCollection);
            services.AddTransient<IIdentityRoleCollection<TRole>>(x => roleCollection);

            // Identity Services
            services.AddTransient<IUserStore<TUser>>(x => new UserStore<TUser, TRole>(userCollection, roleCollection, x.GetService<ILookupNormalizer>()));
			services.AddTransient<IRoleStore<TRole>>(x => new RoleStore<TRole>(roleCollection));
			return services;
		}
    }
}
