using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.DTO.Dtos.Dashboard;
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
        /// <summary>
        /// Get Users List
        /// </summary>
        /// <value></value>
        public ResponseModel GetUsers (RequestModel requestModel) {
            //Filter & sort the data
            var filteredUser = this._userRepository.GetUsers ().AsQueryable ().SortAndFilter (requestModel, DbFilters.UserFilters);
            //Integrate pagination
            var user = filteredUser.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, user, (filteredUser.Count () < 100 ? filteredUser.Count () : 100));
        }

        /// <summary>
        /// Save User Detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        public bool SaveUsers (UsersDTO usersDTO) {
            Users users = new Users ();

            users = this._mapper.Map<Users> (usersDTO);
            return this._userRepository.SaveUser (users);
        }

        /// <summary>
        /// Get User Detail By Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public UsersDTO GetUserById (string Id) {
            return this._mapper.Map<UsersDTO> (this._userRepository.GetUserById (Id));
        }

        /// <summary>
        /// Update user detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        public bool UpdateUser (UsersDTO usersDTO) {
            return this._userRepository.UpdateUser (this._mapper.Map<Users> (usersDTO));
        }

        /// <summary>
        /// Activated user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool ActivateUser (string userId) {
            return this._userRepository.ActiveUsers (userId);
        }

        /// <summary>
        /// Deactivate user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool InactivateUser (string userId) {
            return this._userRepository.InactivateUsers (userId);
        }

        /// <summary>
        /// Get the count and content for dashboard
        /// </summary>
        /// <returns></returns>
        public DashboardDTO GetDashboardInfo () {
            DashboardDTO dashboardDTO = new DashboardDTO ();
            dashboardDTO.UserCount = _userRepository.UsersCount ();

            return dashboardDTO;
        }

        /// <summary>
        /// Delete user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool DeleteUser (string userId) {
            return this._userRepository.DeleteUsers (userId);
        }
        #endregion

    }
}