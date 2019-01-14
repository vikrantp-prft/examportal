using System;
using MongoDB.Driver;

namespace PerfiEvaluation.DAL.Utilities
{
    public static class DBHelper
    {
        static MongoClient _client;
        static IMongoDatabase _db;
       
        static DBHelper()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _db = _client.GetDatabase("PerfiEvaluation");      
        }
 
        public static IMongoCollection<T> GetCollection<T>(string strCollectionName)
        {
            return _db.GetCollection<T>(strCollectionName);
        }
        
        
    }
}
