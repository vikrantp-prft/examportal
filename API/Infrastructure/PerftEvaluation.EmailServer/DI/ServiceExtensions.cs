using System;
using Microsoft.Extensions.DependencyInjection;
using PerftEvaluation.EmailServer.Interfaces;
using PerftEvaluation.EmailServer;

namespace PerftEvaluation.EmailServer.DI
{
    /// <summary>
    /// Dependency Injection Extension Class
    /// </summary>
    public static class ServiceEmailExtensions
    {
        /// <summary>
        /// Register all the dependency classes
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection RegisterServices(
            this IServiceCollection services)
        {
            //In Project services
            services.AddTransient<IEmailService, EmailService>();
           

            // Add all other services here.
            return services;
        }
    }
}