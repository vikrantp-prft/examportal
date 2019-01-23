using System;
using AutoMapper;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.DTO.Dtos.Exams.Questions;
using PerftEvaluation.Entities.POCOEntities;
using PerftEvaluation.Entities.POCOEntities.Exams;
using PerftEvaluation.Entities.POCOEntities.Exams.Questions;

namespace PerftEvaluation.Helper.Mapper {
    /// <summary>
    /// Manage the automapper mapping
    /// </summary>
    public class MappingProfile : Profile {
        /// <summary>
        /// Class constructor
        /// </summary>
        public MappingProfile () {
            CreateMap<Users, UsersDTO> ().ReverseMap();
            CreateMap<Users, EmployeesDTO> ().ReverseMap();
            CreateMap<Masters, MastersDTO> ().ReverseMap();
            CreateMap<Masters, DropdownsDTO> ().ReverseMap();
            CreateMap<Exams, ExamsDTO> ().ReverseMap();
            CreateMap<Questions, QuestionsDTO> ().ReverseMap();
        }
    }
}