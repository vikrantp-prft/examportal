using System;
using AutoMapper;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.Helper.Mapper {
    /// <summary>
    /// Manage the automapper mapping
    /// </summary>
    public class MappingProfile : Profile {
        /// <summary>
        /// Class constructor
        /// </summary>
        public MappingProfile () {
            CreateMap<Users, UsersDTO> ();
        }
    }
}