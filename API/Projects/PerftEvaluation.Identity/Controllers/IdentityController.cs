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
using PerfiEvaluation.Identity.Mongo;

namespace PerftEvaluation.Identity.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    // For testing purpose only - To execute below actions without any restriction, uncomment below line
    //[AllowAnonymous]
    public class IdentityController : ControllerBase
    {
        readonly UserManager<PerfiUser> _userManager;
        readonly SignInManager<PerfiUser> _signInManager;
        private readonly RoleManager<PerfiRole> _roleManager;
        readonly IConfiguration _configuration;
        readonly private string[] examRoles;
        readonly private string[] adminRoles;

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

            this.examRoles = GetConfigArray("AllowedRoles:ExamRoles");
            this.adminRoles = GetConfigArray("AllowedRoles:AdminRoles");
        }

        #region - Currently no in use but may need in future, Make it 'Public' to use -
        [AllowAnonymous]
        [HttpPost]
        [Route("getidentitytoken")]
        private async Task<IActionResult> CreateToken([FromBody] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                var loginResult = await _signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, isPersistent: false, lockoutOnFailure: false);

                if (!loginResult.Succeeded)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Login failed. Please check your credentials."));
                }

                var user = await _userManager.FindByNameAsync(loginModel.Username);

                return Ok(ResponseDTO.OkResponse(GetToken(user)));
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));

        }

        // Reset password directly
        [AllowAnonymous]
        [HttpPost]
        [Route("resetpassword")]
        private async Task<IActionResult> ResetPassword([FromBody] LoginModel resetPasswordModel)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(resetPasswordModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User doest not exist."));
                }

                string token = await _userManager.GeneratePasswordResetTokenAsync(user);
                var result = await _userManager.ResetPasswordAsync(user, token, resetPasswordModel.Password);
                if (result.Succeeded)
                {
                    return Ok(ResponseDTO.OkResponse($"Password reset to '{resetPasswordModel.Password}'"));
                }
                else
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Password reset failed. Please try again.", result.Errors));
                }
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));

        }
        #endregion

        [AllowAnonymous]
        [HttpPost]
        [Route("LoginUser")]
        public async Task<IActionResult> LoginUser([FromBody] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(loginModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User doese not exist. Please contact system administrator."));
                }

                var isEligible = false;
                foreach (var item in this.examRoles)
                {
                    var result = await _userManager.IsInRoleAsync(user, item);
                    if (result) { isEligible = true; break; }

                }

                if (isEligible)
                {
                    var loginResult = await _signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, isPersistent: false, lockoutOnFailure: false);

                    if (!loginResult.Succeeded)
                    {
                        return BadRequest(ResponseDTO.ExceptionResponse("Login failed. Please check your credentials."));
                    }

                    return Ok(ResponseDTO.OkResponse(GetToken(user)));
                }
                else
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Sorry, You are not allowed to access this portal."));
                }

            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));

        }

        [AllowAnonymous]
        [HttpPost]
        [Route("LoginAdministrator")]
        public async Task<IActionResult> LoginAdministrator([FromBody] LoginModel loginModel)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(loginModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User doese not exist. Please contact system administrator."));
                }

                var isEligible = false;
                foreach (var item in this.adminRoles)
                {
                    var result = await _userManager.IsInRoleAsync(user, item);
                    if (result) { isEligible = true; break; }

                }

                if (isEligible)
                {
                    var loginResult = await _signInManager.PasswordSignInAsync(loginModel.Username, loginModel.Password, isPersistent: false, lockoutOnFailure: false);

                    if (!loginResult.Succeeded)
                    {
                        return BadRequest(ResponseDTO.ExceptionResponse("Login failed. Please check your credentials."));
                    }

                    return Ok(ResponseDTO.OkResponse(GetToken(user)));
                }
                else
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Sorry, You are not allowed to access this portal."));
                }

            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));

        }

        [Authorize]
        [HttpGet]
        [Route("refreshidentitytoken")]
        public async Task<IActionResult> RefreshIdentityToken()
        {
            var user = await _userManager.FindByNameAsync(
                User.Identity.Name ??
                User.Claims.Where(c => c.Properties.ContainsKey("unique_name")).Select(c => c.Value).FirstOrDefault()
                );
            return Ok(ResponseDTO.OkResponse(GetToken(user)));

        }

        [Authorize]
        [HttpGet]
        [Route("destroyidentitytoken")]
        public async Task<IActionResult> DestroyIdentityToken()
        {
            await _signInManager.SignOutAsync();
            return Ok(ResponseDTO.OkResponse("Token destroyed."));

        }

        // Reset password with reset code
        [AllowAnonymous]
        [HttpPost]
        [Route("resetpasswordwithtoken")]
        public async Task<IActionResult> ResetPasswordWithToken([FromBody] ResetPasswordModel resetPasswordModel)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(resetPasswordModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User doest not exist."));
                }

                var result = await _userManager.ResetPasswordAsync(user, resetPasswordModel.ResetCode, resetPasswordModel.Password);
                if (result.Succeeded)
                {
                    return Ok(ResponseDTO.OkResponse($"Password reset to '{resetPasswordModel.Password}'"));
                }
                else
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Password reset failed. Please try again.", result.Errors));
                }
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));

        }

        // Reset password request
        [AllowAnonymous]
        [HttpPost]
        [Route("RequestResetPassword")]
        public async Task<IActionResult> RequestResetPassword([FromBody] UsernameModel usernameModel)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(usernameModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User doest not exist."));
                }

                // TODO: Send Email with reset link
                return Ok(ResponseDTO.OkResponse(await _userManager.GeneratePasswordResetTokenAsync(user)));
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));

        }

        #region Private Methods
        private AuthenticateModel GetToken(PerfiUser user)
        {
            AuthenticateModel responseModel = new AuthenticateModel();
            var utcNow = DateTime.UtcNow;

            var claims = new List<Claim>(new[]
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
                var role = _roleManager.FindByNameAsync(roleName);
                if (role != null)
                {
                    // Convert Identity to claim and add 
                    var roleClaim = new Claim("Roles", role.Result.Name);
                    claims.Add(roleClaim);
                }
            }
            responseModel.UserRole = user.Roles.ToArray();
            responseModel.UserId = user.Id;
            responseModel.UserName = user.UserName;

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

            responseModel.Token = new JwtSecurityTokenHandler().WriteToken(jwt);

            return responseModel;

        }

        private string[] GetConfigArray(string configName)
        {
            var examRoleSection = this._configuration.GetSection(configName);
            IEnumerable<IConfigurationSection> examRoleMembers = examRoleSection.GetChildren();

            return (from c in examRoleMembers select c.Value).ToArray();
        }
        #endregion

        #region User Related Admin Actions
        [HttpPost]
        [Route("registeruser")]
        [Authorize(Roles = "Administrator")]
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
                    return Ok(ResponseDTO.OkResponse($"User '{registerModel.Username}' created with Password '{registerModel.Password}' and assigned Role '{registerModel.RoleName}'"));
                }
                else
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Registration failed, Please try again.", identityResult.Errors));
                }
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));
        }
        #endregion

        #region Role Related Admin Actions
        [HttpPost]
        [Authorize(Roles = "Administrator")]
        [Route("createrole")]
        public async Task<IActionResult> CreateRole([FromBody] RoleModel model)
        {
            if (ModelState.IsValid)
            {
                var role = new PerfiRole { Name = model.RoleName };
                var result = await _roleManager.CreateAsync(role);
                if (result.Succeeded)
                {
                    return Ok(ResponseDTO.OkResponse($"'{model.RoleName}' Role created."));
                }
                else
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("Role creation failed, Please try again.", result.Errors));
                }
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        [Route("assignrole")]
        public async Task<IActionResult> AssignRole([FromBody] UserRoleModel userRoleModel)
        {
            if (ModelState.IsValid)
            {
                var user = await this._userManager.FindByEmailAsync(userRoleModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User does not exist."));

                }
                else
                {
                    await _userManager.AddToRoleAsync(user, userRoleModel.RoleName);
                    return Ok(ResponseDTO.OkResponse($"'{userRoleModel.RoleName}' role assigned to user '{userRoleModel.Username}'"));
                }
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        [Route("removerole")]
        public async Task<IActionResult> RemoveRole([FromBody] UserRoleModel userRoleModel)
        {
            if (ModelState.IsValid)
            {
                var user = await this._userManager.FindByEmailAsync(userRoleModel.Username);
                if (user == null)
                {
                    return BadRequest(ResponseDTO.ExceptionResponse("User does not exist."));

                }
                else
                {
                    await _userManager.RemoveFromRoleAsync(user, userRoleModel.RoleName);
                    return Ok(ResponseDTO.OkResponse($"'{userRoleModel.RoleName}' role removed from user '{userRoleModel.Username}'"));
                }
            }
            return BadRequest(ResponseDTO.ExceptionResponse("Entered data does not satisfy validations.", ModelState));
        }
        #endregion 
        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }

        [HttpGet]
        [Route("GeneratePassword")]
        public string GeneratePassword()
        {
            var options = _userManager.Options.Password;

            int length = 10;

            bool nonAlphanumeric = options.RequireNonAlphanumeric;
            bool digit = options.RequireDigit;
            bool lowercase = options.RequireLowercase;
            bool uppercase = options.RequireUppercase;

            StringBuilder password = new StringBuilder();
            Random random = new Random();

            while (password.Length < length)
            {
                char c = (char)random.Next(32, 126);

                password.Append(c);

                if (char.IsDigit(c))
                    digit = false;
                else if (char.IsLower(c))
                    lowercase = false;
                else if (char.IsUpper(c))
                    uppercase = false;
                else if (!char.IsLetterOrDigit(c))
                    nonAlphanumeric = false;
            }

            if (nonAlphanumeric)
                password.Append((char)random.Next(33, 48));
            if (digit)
                password.Append((char)random.Next(48, 58));
            if (lowercase)
                password.Append((char)random.Next(97, 123));
            if (uppercase)
                password.Append((char)random.Next(65, 91));

            return password.ToString();
        }

    }
}
