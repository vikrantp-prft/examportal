using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PerfiEvaluation.Identity.Mongo.Entities;

namespace PerfiEvaluation.Identity.Mongo.DAL
{
    public interface IIdentityRoleCollection<TRole> where TRole : IdentityRole
    {
        Task<TRole> FindByNameAsync(string normalizedName);
	    Task<TRole> FindByIdAsync(string roleId);
	    Task<IEnumerable<TRole>> GetAllAsync();
	    Task<TRole> CreateAsync(TRole obj);
	    Task UpdateAsync(TRole obj);
	    Task DeleteAsync(TRole obj);
    }
}
