using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PerfiEvaluation.Identity.Mongo.Entities;

namespace PerfiEvaluation.Identity.Mongo.DAL
{
    public interface IIdentityUserCollection<TUser> where TUser : IdentityUser
    {
        Task<TUser> FindByEmailAsync(string normalizedEmail);
	    Task<TUser> FindByUserNameAsync(string username);
	    Task<TUser> FindByNormalizedUserNameAsync(string normalizedUserName);
	    Task<TUser> FindByLoginAsync(string loginProvider, string providerKey);
	    Task<IEnumerable<TUser>> FindUsersByClaimAsync(string claimType, string claimValue);
	    Task<IEnumerable<TUser>> FindUsersInRoleAsync(string roleName);
	    Task<IEnumerable<TUser>> GetAllAsync();
	    Task<TUser> CreateAsync(TUser obj);
	    Task UpdateAsync(TUser obj);
	    Task DeleteAsync(TUser obj);
	    Task<TUser> FindByIdAsync(string itemId);
    }
}
