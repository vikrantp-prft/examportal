using System;
using System.Collections.Generic;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Interfaces {
    /// <summary>
    /// User Service Interface 
    /// </summary>
    public interface IUserService {
        /// <summary>
        /// Get Users list
        /// </summary>
        /// <value>List of User in DTO</value>
        IEnumerable<UsersDTO> GetUsers { get; }

        /// <summary>
        /// Save User Details
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool SaveUsers (UsersDTO usersDTO);

        /// <summary>
        /// Ger User Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        UsersDTO GetUserById (string Id);

        /// <summary>
        /// Update user detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool UpdateUser (UsersDTO usersDTO);

        /// <summary>
        /// Activate user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool ActivateUser (string userId);

        /// <summary>
        /// Inactive user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool InactivateUser (string userId);
    }
}