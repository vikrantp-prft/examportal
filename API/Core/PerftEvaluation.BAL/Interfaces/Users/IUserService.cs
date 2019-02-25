using System;
using System.Collections.Generic;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.DTO.Dtos.Dashboard;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Interfaces
{
    /// <summary>
    /// User Service Interface 
    /// </summary>
    public interface IUserService
    {


        /// <summary>
        /// Get All Users list
        /// </summary>
        /// <value>List of all Users</value>
        ResponseModel GetAllUsers(RequestModel requestModel);

        /// <summary>
        /// Get Users list
        /// </summary>
        /// <value>List of User in DTO</value>
        ResponseModel GetUsers(RequestModel requestModel);

        /// <summary>
        /// Save User Details
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool SaveUsers(UsersDTO usersDTO);

        /// <summary>
        /// Ger User Detail by Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        UsersDTO GetUserById(string Id);

        /// <summary>
        /// Update user detail
        /// </summary>
        /// <param name="usersDTO"></param>
        /// <returns></returns>
        bool UpdateUser(UsersDTO usersDTO);

        /// <summary>
        /// Activate user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool ActivateUser(string userId);

        /// <summary>
        /// Inactive user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool InactivateUser(string userId);

        /// <summary>
        /// Deleted user record
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        bool DeleteUser(string userId);

        /// <summary>
        /// Get the dashboard count and content
        /// </summary>
        /// <returns></returns>
        DashboardDTO GetDashboardInfo();

        /// <summary>
        /// Check if the email is already exist
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        bool IsEmailExist(string email);
    }
}