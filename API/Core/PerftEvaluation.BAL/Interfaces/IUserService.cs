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
    }
}