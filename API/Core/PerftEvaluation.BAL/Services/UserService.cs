using System;
using System.Collections.Generic;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services {
    /// <summary>
    /// Service for Users
    /// </summary>
    public class UserService : IUserService {

        #region Declaration
        protected readonly IUserRepository _userRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="UserRepository"></param>
        public UserService (IUserRepository UserRepository, IMapper mapper) {
            this._userRepository = UserRepository;
            this._mapper = mapper;
        }
        #endregion

        #region Class Method 
        public IEnumerable<UsersDTO> GetUsers {
            get {
                return this._mapper.Map<IEnumerable<UsersDTO>> (this._userRepository.GetUsers ());
            }
        }
        #endregion

    }
}