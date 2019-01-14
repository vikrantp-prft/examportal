using System;
using System.Linq;
using System.Collections.Generic;
using PerfiEvaluation.DAL.POCOEntities;
using PerfiEvaluation.DAL.Utilities;
using MongoDB.Driver;
using MongoDB.Driver.Linq;

namespace PerfiEvaluation.DAL.Repositories
{
    public class UsersRepository
    {
        public IEnumerable<Users> GetUsers()
        {
            var docCollection = DBHelper.GetCollection<Users>(Users.CollectionName);
                     var lstTeamMaster = (from c in docCollection.AsQueryable()
                     where c.IsActive == true
                     select c
                     );
                    
            return lstTeamMaster;
        }

    }
}
