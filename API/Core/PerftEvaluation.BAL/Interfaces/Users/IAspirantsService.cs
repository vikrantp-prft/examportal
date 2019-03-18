using System;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Interfaces
{
    public interface IAspirantsService
    {
        /// <summary>
        /// Get Aspirants list
        /// </summary>
        /// <value>List of User in DTO</value>
        ResponseModel GetAspirants (RequestModel requestModel);

        /// <summary>
        /// Save Aspirants Details
        /// </summary>
        /// <param name="aspirantsDTO"></param>
        /// <returns></returns>
        RequestModel SaveAspirants (AspirantsDTO aspirantsDTO);

        /// <summary>
        /// Update Aspirants details
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool UpdateAspirants (AspirantsDTO aspirantsDTO);

        /// <summary>
        /// Get Aspirants Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        AspirantsDTO GetAspirantById (string Id);

        /// <summary>
        /// Activate Aspirants record
        /// </summary>
        /// <param name="aspirantsId"></param>
        /// <returns></returns>
        bool ActiveAspirant (string aspirantsId);

        /// <summary>
        /// Inactive Aspirants record
        /// </summary>
        /// <param name="aspirantsId"></param>
        /// <returns></returns>
        bool InactivateAspirants (string aspirantsId);

        /// <summary>
        /// Delete Aspirants
        /// </summary>
        /// <param name="aspirantsId"></param>
        /// <returns></returns>
        bool DeleteAspirant (string aspirantsId);
    }
}
