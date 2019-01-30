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
        public IEnumerable<MastersDTO> GetMasters (RequestModel requestModel) {
            return this._mapper.Map<IEnumerable<MastersDTO>> (this._masterRepository.GetAllMasters ().AsQueryable ().Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ());
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
        public IEnumerable<MastersDTO> GetMasterByType (string masterType) {
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