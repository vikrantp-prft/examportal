using System;
using Microsoft.Extensions.DependencyInjection;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DAL.Repositories;

namespace PerftEvaluation.Helper.DI {
    /// <summary>
    /// Dependency Injection Extension Class
    /// </summary>
    public static class ServiceExtensions {
        /// <summary>
        /// Register all the dependency classes
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection RegisterServices (
            this IServiceCollection services) {
            //Projects Services 
            services.AddTransient<IUserService, UserService> ();

            //Projects Repositories
            services.AddTransient<IUserRepository, UserRepository> ();
            services.AddTransient<IMasterRepository, MasterRepository> ();

            // Add all other services here.
            return services;
        }
    }
}