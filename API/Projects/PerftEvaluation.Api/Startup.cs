using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using PerftEvaluation.Helper.DI;
using PerftEvaluation.Helper.Mapper;
using Swashbuckle.AspNetCore.Swagger;

namespace PerftEvaluation.Api {
    /// <summary>
    /// Startup for API project
    /// </summary>
    public class Startup {

        #region Declaration
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        //Configuration Object
        public IConfiguration Configuration { get; }
        #endregion

        #region Configuration Service
        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.AddMvc ().SetCompatibilityVersion (CompatibilityVersion.Version_2_2);

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen (c => {
                c.SwaggerDoc ("V1.0.0", new Info { Title = "PerftEvaluation API", Version = "V1.0.0" });
            });

            // Auto Mapper Configurations
            var mappingConfig = new MapperConfiguration (mc => {
                mc.AddProfile (new MappingProfile ());
            });

            IMapper mapper = mappingConfig.CreateMapper ();
            services.AddSingleton (mapper);

            //Dependency Injection Declaration
            services.RegisterServices ();

            //CORS Declaration
            services.AddCors ();
        }
        #endregion

        #region Configure
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            } else {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts ();
            }

            app.UseHttpsRedirection ();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger ();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/V1.0.0/swagger.json", "PerftEvaluation API V1.0.0");
            });

            // Shows UseCors with CorsPolicyBuilder.
            app.UseCors (builder => {
                builder.WithOrigins ("*").AllowAnyMethod ().AllowAnyHeader ();
            });

            app.UseMvc ();
        }
        #endregion
    }
}