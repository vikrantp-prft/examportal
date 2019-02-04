using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services {
    /// <summary>
    /// Master Service Class
    /// </summary>
    public class MasterService : IMasterService {
        #region Declaration
        protected readonly IMasterRepository _masterRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="UserRepository"></param>
        public MasterService (IMasterRepository MasterRepository, IMapper mapper) {
            this._masterRepository = MasterRepository;
            this._mapper = mapper;
        }
        #endregion

        #region Class Methods
        /// <summary>
        /// Get Masters List
        /// </summary>
        /// <value></value>
        public ResponseModel GetMasters (RequestModel requestModel) {
            //Filter & sort the data
            var filteredMasters = this._masterRepository.GetAllMasters ().AsQueryable ().SortAndFilter (requestModel, DbFilters.MasterFilters);
            //Integrate pagination
            var masters = filteredMasters.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, this._mapper.Map<IEnumerable<MastersDTO>>(masters), (filteredMasters.Count () < 100 ? filteredMasters.Count () : 100));
        }

        /// <summary>
        /// Save Master Detail
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        public bool SaveMaster (MastersDTO mastersDTO) {
            return this._masterRepository.SaveMaster (this._mapper.Map<Masters> (mastersDTO));
        }

        /// <summary>
        /// Get masters by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public ResponseModel GetMasterByType (RequestModel requestModel) {
            
            //Filter & sort the data
            var filteredMasters = this._masterRepository.GetMastersByType (requestModel.Condition).AsQueryable ().SortAndFilter (requestModel, DbFilters.MasterFilters);
            //Integrate pagination
            var masters = filteredMasters.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, this._mapper.Map<IEnumerable<MastersDTO>>(masters), (filteredMasters.Count () < 100 ? filteredMasters.Count () : 100));
            //return this._mapper.Map<IEnumerable<MastersDTO>> (this._masterRepository.GetMastersByType (masterType));
        }

        /// <summary>
        /// Get masters by its type For Cache
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public IEnumerable<MastersDTO> GetMasterByTypeForCache (string masterType) {
            return this._mapper.Map<IEnumerable<MastersDTO>> (this._masterRepository.GetMastersByType (masterType));
        }

        
        /// <summary>
        /// Update master detail
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        public bool UpdateMaster (MastersDTO mastersDTO) {
            return this._masterRepository.UpdateMaster (this._mapper.Map<Masters> (mastersDTO));
        }

        /// <summary>
        /// Activated master record
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool ActivateMaster (string masterId) {
            return this._masterRepository.ActivateMaster (masterId);
        }

        /// <summary>
        /// Deactivate master record
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool InactivateMaster (string masterId) {
            return this._masterRepository.InactivateMaster (masterId);
        }

        /// <summary>
        /// Delete Master
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool DeleteMaster (string masterId) {
            return this._masterRepository.DeleteMaster (masterId);
        }

        /// <summary>
        /// Get master by Id
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public MastersDTO GetMasterById (string masterId) {
            return this._mapper.Map<MastersDTO> (this._masterRepository.GetMasterById (masterId));
        }
        #endregion
    }
}