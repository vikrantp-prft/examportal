using System;
using System.Linq;
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
            _client = new MongoClient ("mongodb://ZIL395:27017");
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

        /// <summary>
        /// Save Entity
        /// </summary>
        /// <param name="TEntity">Entity Object</param>
        /// <param name="strCollectionName"></param>
        /// <typeparam name="T">Void</typeparam>
        public void Save<T> (T TEntity, string strCollectionName) {
            _db.GetCollection<T> (strCollectionName).InsertOneAsync (TEntity);
        }

        /// <summary>
        /// Update Entities
        /// </summary>
        /// <param name="filterDefinition"></param>
        /// <param name="updateDefinition"></param>
        /// <param name="strCollectionName"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public  bool  UpdateOne<T> (FilterDefinition<T> filterDefinition,  UpdateDefinition<T> updateDefinition,  string  strCollectionName) {
            var  updateResult  =  _db.GetCollection<T> (strCollectionName).UpdateOne (filterDefinition, updateDefinition,  new  UpdateOptions { IsUpsert  =  false });
            if (updateResult.ModifiedCount  >  0  ||  updateResult.IsAcknowledged) {
                return  true;
            }
            return  false;
        }
        #endregion
    }
}