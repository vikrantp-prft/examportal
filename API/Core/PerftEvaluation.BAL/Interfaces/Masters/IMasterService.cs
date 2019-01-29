using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces {
    /// <summary>
    /// Master Serivice Interface
    /// </summary>
    public interface IMasterService {
        /// <summary>
        /// Get list masters
        /// </summary>
        /// <value></value>
        IEnumerable<MastersDTO> GetMasters (RequestModel requestModel);

        /// <summary>
        /// Save master detail
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        bool SaveMaster (MastersDTO mastersDTO);

        /// <summary>
        /// Get master by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        IEnumerable<MastersDTO> GetMasterByType (string masterType);

        /// <summary>
        /// Update master details
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        bool UpdateMaster (MastersDTO mastersDTO);

        /// <summary>
        /// Deavtivate Masters
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        bool InactivateMaster (string masterId);

        /// <summary>
        /// Activate Masters
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        bool ActivateMaster (string masterId);

        /// <summary>
        /// Delete Masters
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        bool DeleteMaster (string masterId);

        /// <summary>
        /// Get master by id
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        MastersDTO GetMasterById (string masterId);

    }
}