using System;
using System.Collections.Generic;
using PerftEvaluation.Entities.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Interfaces {
    public interface IUserService {
        IEnumerable<UsersDTO> GetUsers { get; }
    }
}