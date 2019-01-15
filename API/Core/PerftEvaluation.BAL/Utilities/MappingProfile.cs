using System;
using AutoMapper;
using PerftEvaluation.Entities.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Utilities
{
    public class MappingProfile:Profile
    {
        public MappingProfile(){
            CreateMap<Users,UsersDTO>();
        }
    }
}
