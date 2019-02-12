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

namespace PerftEvaluation.BAL.Services
{
    /// <summary>
    /// Service for Users
    /// </summary>
    public class UserService : IUserService
    {

        #region Declaration
        protected readonly IUserRepository _userRepository;

        protected readonly IMasterRepository _masterRepository;
        protected readonly IMasterService _masterService;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="UserRepository"></param>
        public UserService(IUserRepository UserRepository, 
                           IMapper mapper,
                           IMasterRepository masterRepository,
                           IMasterService masterService)
        {
            this._userRepository = UserRepository;
            this._mapper = mapper;
            this._masterRepository = masterRepository;
            this._masterService = masterService;
        }
        #endregion

        #region Class Method 
        /// <summary>
        /// Get Users List
        /// </summary>
        /// <value></value>
        public ResponseModel GetUsers(RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredUser = this._userRepository.GetUsers().AsQueryable().SortAndFilter(requestModel, DbFilters.UserFilters);
            //Integrate pagination
            var user = filteredUser.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<UsersDTO> userJoin = new List<UsersDTO>();
            foreach (var item in user)
            {
                UsersDTO usersDTO = new UsersDTO();
                usersDTO.Id = item.Id;
                usersDTO.FirstName = item.FirstName;
                usersDTO.LastName = item.LastName;
                usersDTO.IsActive = item.IsActive;
                usersDTO.Password = item.Password;
                usersDTO.DOB = item.DOB;
                usersDTO.Address1 = item.Address1;
                usersDTO.Address2 = item.Address2;
                usersDTO.City = item.City;
                usersDTO.StateId = item.StateId;
                usersDTO.Pincode = item.Pincode;
                usersDTO.Email = item.Email;
                usersDTO.Mobile = item.Mobile;
                usersDTO.GroupId = item.GroupId;
                usersDTO.StateId = item.StateId;
                usersDTO.DesignationId = item.DesignationId;
                usersDTO.TeamId = item.TeamId;
                usersDTO.Note = item.Note;
                usersDTO.CreatedDate = item.CreatedDate;
                usersDTO.ModifiedDate = item.ModifiedDate;
                usersDTO.IsDeleted = item.IsDeleted;
                usersDTO.Team = item.TeamId != null? _masterService.GetMasterById (item.TeamId) : null;
                usersDTO.Group = item.GroupId != null? _masterService.GetMasterById (item.GroupId) : null;
                usersDTO.Designation = item.DesignationId != null? _masterService.GetMasterById (item.DesignationId) : null;
                userJoin.Add(usersDTO);
            }
            //return object
            return CommonResponse.OkResponse(requestModel, userJoin, (filteredUser.Count() < 100 ? filteredUser.Count() : 100));
        }

        /// <summary>
        /// Save User Detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        public bool SaveUsers(UsersDTO usersDTO)
        {
            Users users = new Users();

            users = this._mapper.Map<Users>(usersDTO);
            return this._userRepository.SaveUser(users);
        }

        /// <summary>
        /// Get User Detail By Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public UsersDTO GetUserById(string Id)
        {
            var user = this._userRepository.GetUserById(Id);

            UsersDTO usersDTO = new UsersDTO();
                usersDTO.Id = user.Id;
                usersDTO.FirstName = user.FirstName;
                usersDTO.LastName = user.LastName;
                usersDTO.IsActive = user.IsActive;
                usersDTO.Password = user.Password;
                usersDTO.DOB = user.DOB;
                usersDTO.Address1 = user.Address1;
                usersDTO.Address2 = user.Address2;
                usersDTO.City = user.City;
                usersDTO.StateId = user.StateId;
                usersDTO.Pincode = user.Pincode;
                usersDTO.Email = user.Email;
                usersDTO.Mobile = user.Mobile;
                usersDTO.GroupId = user.GroupId;
                usersDTO.StateId = user.StateId;
                usersDTO.DesignationId = user.DesignationId;
                usersDTO.TeamId = user.TeamId;
                usersDTO.Note = user.Note;
                usersDTO.CreatedDate = user.CreatedDate;
                usersDTO.ModifiedDate = user.ModifiedDate;
                usersDTO.IsDeleted = user.IsDeleted;
                usersDTO.Team = user.TeamId != null? _masterService.GetMasterById (user.TeamId) : null;
                usersDTO.Group = user.GroupId != null? _masterService.GetMasterById (user.GroupId) : null;
                usersDTO.Designation = user.DesignationId != null? _masterService.GetMasterById (user.DesignationId) : null;

                return usersDTO;
        }

        /// <summary>
        /// Update user detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        public bool UpdateUser(UsersDTO usersDTO)
        {
            return this._userRepository.UpdateUser(this._mapper.Map<Users>(usersDTO));
        }

        /// <summary>
        /// Activated user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool ActivateUser(string userId)
        {
            return this._userRepository.ActiveUsers(userId);
        }

        /// <summary>
        /// Deactivate user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool InactivateUser(string userId)
        {
            return this._userRepository.InactivateUsers(userId);
        }

        /// <summary>
        /// Get the count and content for dashboard
        /// </summary>
        /// <returns></returns>
        public DashboardDTO GetDashboardInfo()
        {
            DashboardDTO dashboardDTO = new DashboardDTO();
            dashboardDTO.UserCount = _userRepository.UsersCount();

            return dashboardDTO;
        }

        /// <summary>
        /// Delete user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public bool DeleteUser(string userId)
        {
            return this._userRepository.DeleteUsers(userId);
        }

        /// <summary>
        /// Check if the email is already exist
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public bool IsEmailExist(string email)
        {
            return _userRepository.IsEmailExist(email);
        }
        #endregion

    }
}