using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using PerfiEvaluation.Identity.Mongo.Entities;
using PerfiEvaluation.Identity.Mongo.Model;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace PerftEvaluation.Identity.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class IdentityController : ControllerBase
    {
         readonly UserManager<PerfiUser> _userManager;
        readonly SignInManager<PerfiUser> _signInManager;
        private readonly RoleManager<PerfiRole> _roleManager;
        readonly IConfiguration _configuration;


        public IdentityController(
           UserManager<PerfiUser> userManager,
           SignInManager<PerfiUser> signInManager,
           RoleManager<PerfiRole> roleManager,
           IConfiguration configuration)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._roleManager = roleManager;
            this._configuration = configuration;
        }


        [HttpPost]
        [Route("gettoken")]
        public async Task<IActionResult> CreateToken([FromBody] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                var loginResult = await _signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, isPersistent: false, lockoutOnFailure: false);

                if (!loginResult.Succeeded)
                {
                    return BadRequest();
                }

                var user = await _userManager.FindByNameAsync(loginModel.Username);

                return Ok(GetToken(user));
            }
            return BadRequest(ModelState);

        }

        [Authorize]
        [HttpPost]
        [Route("refreshtoken")]
        public async Task<IActionResult> RefreshToken()
        {
            var user = await _userManager.FindByNameAsync(
                User.Identity.Name ??
                User.Claims.Where(c => c.Properties.ContainsKey("unique_name")).Select(c => c.Value).FirstOrDefault()
                );
            return Ok(GetToken(user));

        }


        [HttpPost]
        [Route("registeruser")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody] RegisterModel registerModel)
        {
            if (ModelState.IsValid)
            {
                var user = new PerfiUser
                {
                    //TODO: Use Automapper instaed of manual binding

                    UserName = registerModel.Username,
                    Email = registerModel.Username
                };

                var identityResult = await this._userManager.CreateAsync(user, registerModel.Password);
                if (identityResult.Succeeded)
                {
                   await _userManager.AddToRoleAsync(user, registerModel.RoleName);
                   return Ok();
                }
                else
                {
                    return BadRequest(identityResult.Errors);
                }
            }
                return BadRequest(ModelState);
            
            
        }

        //private String GetToken(IdentityUser user)
        private String GetToken(PerfiUser user)
        {
            var utcNow = DateTime.UtcNow;

            var claims = new List<Claim>( new[]
            {
                        new Claim(JwtRegisteredClaimNames.Sub, user.Id),
                        new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, utcNow.ToString())
            });

             // Add user role, they are converted to claims
            foreach (var roleName in user.Roles)
            {
                // Find IdentityRole by name
                var role =  _roleManager.FindByNameAsync(roleName);
                if (role != null)
                {
                    // Convert Identity to claim and add 
                    var roleClaim = new Claim("Roles", role.Result.Name);
                    claims.Add(roleClaim);
                }
            }

            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this._configuration.GetValue<String>("TokenAuthentication:SecretKey")));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(
                signingCredentials: signingCredentials,
                claims: claims,
                notBefore: utcNow,
                expires: utcNow.AddSeconds(this._configuration.GetValue<int>("TokenAuthentication:Lifetime")),
                audience: this._configuration.GetValue<String>("TokenAuthentication:Audience"),
                issuer: this._configuration.GetValue<String>("TokenAuthentication:Issuer")
                );

            return new JwtSecurityTokenHandler().WriteToken(jwt);

        }

        [HttpPost]
        [AllowAnonymous]
        [Route("createrole")]
         public async Task<IActionResult> CreateRole([FromBody] RoleModel model)
        {
            if (ModelState.IsValid)
            {
                var role = new PerfiRole { Name = model.RoleName };
                var result = await _roleManager.CreateAsync(role);
                if (result.Succeeded)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest(result.Errors);
                }
            }
           return BadRequest(ModelState);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("assignrole")]
         public async Task<IActionResult> AssignRole([FromBody] RegisterModel registerModel)
        {
            if (ModelState.IsValid)
            {
                var user = await this._userManager.FindByEmailAsync(registerModel.Username);
                if (user == null)
                {
                    return BadRequest("User does not exist !!!");
                   
                }
                else
                {
                    await _userManager.AddToRoleAsync(user, registerModel.RoleName);
                   return Ok();                    
                }
            }
           return BadRequest(ModelState);
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
    }
}
