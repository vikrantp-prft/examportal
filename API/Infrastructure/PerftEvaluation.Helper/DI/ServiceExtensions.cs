using System;
using Microsoft.Extensions.DependencyInjection;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DAL.Repositories;
using PerftEvaluation.ExcelUtility;
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
            services.AddTransient<IEmployeeService, EmployeeService>();
            services.AddTransient<IExamsService, ExamsService>();
            services.AddTransient<IQuestionsService, QuestionsService>();
            services.AddTransient<IResultsService, ResultsService>();
            services.AddTransient<IAssignedExamsService, AssignedExamsService >();
            services.AddScoped<IQuestionsImportExport, ExcelOperations>();
            services.AddScoped<IAttemptedQuestionsService, AttemptedQuestionsService>();

            //Projects Repositories
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IMasterRepository, MasterRepository>();
            services.AddTransient<IEmployeeRepository, EmployeeRepository>();
            services.AddTransient<IExamsRepository, ExamsRepository>();
            services.AddTransient<IQuestionsRepository, QuestionsRepository>();
            services.AddTransient<IResultsRepository, ResultsRepository>();
            services.AddTransient<IAssignedExamsRepository, AssignedExamsRepository>();
            services.AddTransient<IAttemptedQuestionsRepository, AttemptedQuestionsRepository>();
            //Cache helpers
            services.AddTransient<ICache, Cache>();
            //services.AddTransient<IFilterExtensions, FilterExtensions>();

            // Add all other services here.
            return services;
        }
    }
}