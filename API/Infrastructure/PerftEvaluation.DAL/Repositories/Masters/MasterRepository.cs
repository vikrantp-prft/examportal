using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Driver;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories {
    /// <summary>
    /// Master Repository
    /// </summary>
    public class MasterRepository : IMasterRepository {
        #region Declaration
        protected readonly DBHelper _db = null;

        public MasterRepository () {
            this._db = new DBHelper ();
        }
        #endregion

        #region Class Methods 
        /// <summary>
        /// Get all activated master details
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Masters> GetAllMasters () {
            return _db.GetCollection<Masters> (Masters.CollectionName).AsQueryable ().Where (x => x.IsActive == true).ToList ();
        }

        /// <summary>
        /// Save master detail
        /// </summary>
        /// <param name="masters"></param>
        /// <returns></returns>
        public bool SaveMaster (Masters masters) {
            _db.Save<Masters> (masters, Masters.CollectionName);
            return true;
        }

        /// <summary>
        /// Get masters by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public IEnumerable<Masters> GetMastersByType (string masterType) {
            return _db.GetCollection<Masters> (Masters.CollectionName).AsQueryable ().Where (x => x.MasterType == masterType).ToList ();
        }

        /// <summary>
        /// Update master details
        /// </summary>
        /// <param name="masters"></param>
        /// <returns></returns>
        public bool UpdateMaster (Masters masters) {
            var filter = Builders<Masters>.Filter;
            var filterDef = filter.Eq (c => c.Id, masters.Id);

            var updateQuery = Builders<Masters>.Update
                .Set (c => c.Description, masters.Description)
                .Set (c => c.Name, masters.Name)
                .Set (c => c.MasterType, masters.MasterType);

            return _db.UpdateOne<Masters> (filterDef, updateQuery, Masters.CollectionName);
        }

        /// <summary>
        /// Inactive masters
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool InactivateMaster (string masterId) {
            var filter = Builders<Masters>.Filter;
            var filterDef = filter.Eq (c => c.Id, masterId);
            var updateQuery = Builders<Masters>.Update
                .Set (c => c.IsActive, false);

            return _db.UpdateOne<Masters> (filterDef, updateQuery, Masters.CollectionName);
        }

        /// <summary>
        /// Activate Masters 
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool ActivateMaster (string masterId) {
            var filter = Builders<Masters>.Filter;
            var filterDef = filter.Eq (c => c.Id, masterId);
            var updateQuery = Builders<Masters>.Update
                .Set (c => c.IsActive, true);

            return _db.UpdateOne<Masters> (filterDef, updateQuery, Masters.CollectionName);
        }
        #endregion
    }
}