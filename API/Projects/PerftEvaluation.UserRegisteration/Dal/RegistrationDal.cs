using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using PerftEvaluation.UserRegisteration.BMEntities;
using PerftEvaluation.UserRegisteration.Interfaces;

namespace PerftEvaluation.UserRegisteration.Dal
{
    public class RegistrationDal : IRegistrationDal
    {
        private readonly IConfiguration _config;
        MongoClient client;
        private readonly IMongoCollection<User> _users;
        public RegistrationDal(IConfiguration config)
        {
            this._config = config;
            client = new MongoClient(_config.GetConnectionString("RegistrationPortalDb"));

            var database = client.GetDatabase("RegistrationPortalDb");

            _users = database.GetCollection<User>("Users");
        }

        public async void RegisterNewUser(User user)
        {
            await _users.InsertOneAsync(user);
        }

    }
}