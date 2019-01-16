using System;
using System.Collections.Generic;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Interfaces {
    public interface IUserService {
       IEnumerable<UsersDTO> GetUsers { get; }
    }
}