using System;
using Microsoft.Extensions.DependencyInjection;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DAL.Repositories;
using PerftEvaluation.Helper.Common;
using PerftEvaluation.Helper.Interfaces;

namespace PerftEvaluation.Helper.DI
{
    /// <summary>
    /// Dependency Injection Extension Class
    /// </summary>
    public static class ServiceExtensions
    {
        /// <summary>
        /// Register all the dependency classes
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            //Projects Services 
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IMasterService, MasterService>();
            services.AddTransient<IDropdown, Dropdown>();
            services.AddTransient<IEmployeeService,EmployeeService>();

            //Projects Repositories
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IMasterRepository, MasterRepository>();
            services.AddTransient<IEmployeeRepository,EmployeeRepository>();
            // Add all other services here.
            return services;
        }
    }
}