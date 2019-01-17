using System;
using System.Collections.Generic;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.Entities.POCOEntities;
using PerftEvaluation.DTO.Dtos;

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
        public IEnumerable<MastersDTO> GetMasters {
            get {
                return this._mapper.Map<IEnumerable<MastersDTO>> (this._masterRepository.GetAllMasters ());
            }
        }

        /// <summary>
        /// Save Master Detail
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        public bool SaveMaster (MastersDTO mastersDTO) {
            Masters masters = new Masters ();

            masters = this._mapper.Map<Masters> (mastersDTO);
            return this._masterRepository.SaveMaster (masters);
        }

        /// <summary>
        /// Get masters by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public IEnumerable<MastersDTO> GetMasterByType (string masterType) {
            return this._mapper.Map<IEnumerable<MastersDTO>> (this._masterRepository.GetMastersByType (masterType));
        }
        #endregion
    }
}