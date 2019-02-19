using System;
using System.Linq;
using System.Reflection;
using MongoDbGenericRepository;
using MongoDB.Driver;
using PerftEvaluation.Entities.POCOEntities;
using System.Threading.Tasks;

namespace PerftEvaluation.DAL.Context
{
    /// <summary>
    /// Manage database connection with MongoDB
    /// </summary>
    public class DBHelper
    {
        #region--Variable declaration--
        /// <summary>
        /// The IMongoClient from the official MongoDB driver
        /// </summary>
        public MongoClient _client { get; }

        public IMongoDatabase _db;

        /// <summary>
        /// Class Constructor
        /// </summary>
        public DBHelper()
        {
            //access db without username and password
            // _client = new MongoClient ("mongodb://ZIL395:27017");
            //// _client = new MongoClient ("mongodb://localhost:27017");
            // _db = _client.GetDatabase ("PerftEvaluation");

            //Connection with username and password
            string username = "mDbAdmin";
            string password = "mDbAdmin@321";
            string mongoHost = "ZIL189";
            string mongoDbAuthMechanism = "SCRAM-SHA-1";

            //Development Database
            string dbName = "PerftEvaluation";

            //Production Database
            //string dbName = "PerftEvaluation_Prod";

            MongoInternalIdentity internalIdentity =
                new MongoInternalIdentity("admin", username);
            PasswordEvidence passwordEvidence = new PasswordEvidence(password);
            MongoCredential mongoCredential =
                new MongoCredential(mongoDbAuthMechanism,
                    internalIdentity, passwordEvidence);

            MongoClientSettings settings = new MongoClientSettings();
            // comment this line below if your mongo doesn't run on secured mode
            settings.Credential = mongoCredential;

            MongoServerAddress address = new MongoServerAddress(mongoHost);
            settings.Server = address;
            // _client = new MongoClient("mongodb://locahost:27017");
            _client = new MongoClient(settings);
            _db = _client.GetDatabase(dbName);

        }
        #endregion

        #region--Method Evecution--
        /// <summary>
        /// Get collection
        /// </summary>
        /// <param name="strCollectionName"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns>list</returns>
        public IMongoCollection<T> GetCollection<T>(string strCollectionName)
        {
            PropertyInfo[] propInfos = typeof(T).GetProperties();
            var propInfo = propInfos.ToList().Where(p => p.Name == "CollectionName").FirstOrDefault();

            string collectionName = propInfo.GetValue("CollectionName").ToString();
            return _db.GetCollection<T>(collectionName);
        }

        /// <summary>
        /// Save Entity
        /// </summary>
        /// <param name="TEntity">Entity Object</param>
        /// <param name="strCollectionName"></param>
        /// <typeparam name="T">Void</typeparam>
        public void Save<T>(T TEntity, string strCollectionName)
        {
            Console.WriteLine("Writing to Collection : " + strCollectionName);
            //Console.WriteLine(_db.DatabaseNamespace+ _client.ListDatabaseNames);
            Console.WriteLine(_client.Cluster.Description);
            
            _db.GetCollection<T>(strCollectionName).InsertOneAsync(TEntity);
        }

        /// <summary>
        /// Update Entities
        /// </summary>
        /// <param name="filterDefinition"></param>
        /// <param name="updateDefinition"></param>
        /// <param name="strCollectionName"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public bool UpdateOne<T>(FilterDefinition<T> filterDefinition, UpdateDefinition<T> updateDefinition, string strCollectionName)
        {

            var updateResult = _db.GetCollection<T>(strCollectionName).UpdateOne(filterDefinition, updateDefinition, new UpdateOptions { IsUpsert = false });
            if (updateResult.ModifiedCount > 0 || updateResult.IsAcknowledged)
            {
                return true;
            }
            return false;
        }
        #endregion

        // private string GetCollectionName<T>(Object T) //where T : class
        // {
        //     // get all public static properties of MyClass type
        //     PropertyInfo[] propertyInfos;
        //     propertyInfos = typeof(MyClass).GetProperties(BindingFlags.Public |
        //                                                 BindingFlags.Static);
        //     // sort properties by name
        //     Array.Sort(propertyInfos,
        //             delegate(PropertyInfo propertyInfo1, PropertyInfo propertyInfo2)
        //             { return propertyInfo1.Name.CompareTo(propertyInfo2.Name); });

        //     // write property names
        //     foreach (PropertyInfo propertyInfo in propertyInfos)
        //     {
        //     Console.WriteLine(propertyInfo.Name);
        //     }
        // }
    }
}