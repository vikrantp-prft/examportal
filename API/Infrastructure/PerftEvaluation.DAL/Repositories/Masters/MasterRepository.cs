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
        /// Get all master details
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Masters> GetAllMasters () {
            return _db.GetCollection<Masters> (Users.CollectionName).AsQueryable ().Select (x => x).ToList ();
        }

        /// <summary>
        /// Save master detail
        /// </summary>
        /// <param name="masters"></param>
        /// <returns></returns>
        public bool SaveMaster (Masters masters) {
            _db.Save<Masters> (masters, Users.CollectionName);
            return true;
        }

        /// <summary>
        /// Get masters by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public IEnumerable<Masters> GetMastersByType (string masterType) {
            return _db.GetCollection<Masters> (Users.CollectionName).AsQueryable ().Where (x => x.MasterType == masterType).ToList ();
        }
        #endregion
    }
}