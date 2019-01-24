using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PerfiEvaluation.Identity.Mongo.Entities;
using PerfiEvaluation.Identity.Mongo.Helper;
using Swashbuckle.AspNetCore.Swagger;

namespace PerftEvaluation.Identity {
    /// <summary>
    /// Project Startup file
    /// </summary>
    public class Startup {

        #region Declaration 
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        //Configuration object
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

             #region Mongo Provider
            services.AddIdentityMongoDbProvider<PerfiUser, PerfiRole>(options =>
                {
                    options.ConnectionString = this.Configuration["ConnectionStrings:MongoConnection"];
                });
            #endregion

            #region Add Authentication
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["TokenAuthentication:SecretKey"]));
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(config =>
            {
                config.RequireHttpsMetadata = false;
                config.SaveToken = true;
                config.TokenValidationParameters = new TokenValidationParameters()
                {
                    IssuerSigningKey = signingKey,
                    ValidateAudience = true,
                    ValidAudience = this.Configuration["TokenAuthentication:Audience"],
                    ValidateIssuer = true,
                    ValidIssuer = this.Configuration["TokenAuthentication:Issuer"],
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true
                };
            });
            #endregion

             #region Add CORS
            services.AddCors(options => options.AddPolicy("Cors", builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            }));
            #endregion
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

            //app.UseHttpsRedirection ();

            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger ();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
            // specifying the Swagger JSON endpoint.
            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/V1.0.0/swagger.json", "PerftEvaluation API V1.0.0");
            });

            app.UseMvc ();

            app.UseCors("Cors"); 
        }
        #endregion
    }
}