using System;
using MongoDbGenericRepository;
using MongoDB.Driver;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Context {
    /// <summary>
    /// Manage database connection with MongoDB
    /// </summary>
    public class DBHelper {
        #region--Variable declaration--
        /// <summary>
        /// The IMongoClient from the official MongoDB driver
        /// </summary>
        public MongoClient _client { get; }

        public IMongoDatabase _db;

        /// <summary>
        /// Class Constructor
        /// </summary>
        public DBHelper () {
            _client = new MongoClient ("mongodb://localhost:27017");
            _db = _client.GetDatabase ("PerftEvaluation");
        }
        #endregion

        #region--Method Evecution--
        /// <summary>
        /// Get collection
        /// </summary>
        /// <param name="strCollectionName"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns>list</returns>
        public IMongoCollection<T> GetCollection<T> (string strCollectionName) {
            return _db.GetCollection<T> (strCollectionName);
        }
        #endregion
    }
}