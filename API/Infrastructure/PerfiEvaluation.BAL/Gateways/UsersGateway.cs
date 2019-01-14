using System;
using System.Linq;
using System.Collections.Generic;
using PerfiEvaluation.BusinessEntities;
using PerfiEvaluation.DAL.Repositories;

namespace PerfiEvaluation.BAL.Gateways
{

    public class UsersGateway
    {

        public IEnumerable<UsersEntity> GetUsers()
        {
            UsersRepository usersRepository = new UsersRepository();
            var users = usersRepository.GetUsers().Select(c =>  new UsersEntity{
            //TO DO SUMIT
            });    
            return users;
        }
    }
}
