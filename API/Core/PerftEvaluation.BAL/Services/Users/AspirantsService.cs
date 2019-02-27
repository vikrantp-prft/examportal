using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services
{
    public class AspirantsService : IAspirantsService
    {
        #region Declaration
        protected readonly IAspirantsRepository _aspirantsRepository;
        protected readonly IMasterRepository _masterRepository;
        protected readonly IMasterService _masterService;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="AspirantsRepository"></param>
        public AspirantsService(IAspirantsRepository AspirantsRepository, IMasterService masterService, IMasterRepository masterRepository, IMapper mapper)
        {
            this._aspirantsRepository = AspirantsRepository;
            this._mapper = mapper;
            this._masterRepository = masterRepository;
            this._masterService = masterService;
        }
        #endregion

        #region Class Method 

        /// <summary>
        /// Activated Aspirants record
        /// </summary>
        /// <param name="aspirantsId"></param>
        /// <returns></returns>
        public bool ActiveAspirant(string aspirantsId)
        {
             return this._aspirantsRepository.ActiveAspirant(aspirantsId);
        }

        /// <summary>
        /// Delete Aspirants record
        /// </summary>
        /// <param name="aspirantsId"></param>
        /// <returns></returns>
        public bool DeleteAspirant(string aspirantsId)
        {
           return this._aspirantsRepository.DeleteAspirant(aspirantsId);
        }

        /// <summary>
        /// Get Aspirants Detail By Id
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public AspirantsDTO GetAspirantById(string Id)
        {
            var aspirant = this._aspirantsRepository.GetAspirantById(Id);

            AspirantsDTO aspirantsDTO = new AspirantsDTO();
            aspirantsDTO.Id = aspirant.Id;
            aspirantsDTO.FirstName = aspirant.FirstName;
            aspirantsDTO.MiddleName = aspirant.MiddleName;
            aspirantsDTO.LastName = aspirant.LastName;
            aspirantsDTO.Email = aspirant.Email;
            aspirantsDTO.Interest = aspirant.Interest;
            aspirantsDTO.IsActive = aspirant.IsActive;
            aspirantsDTO.DOB = aspirant.DOB;
            aspirantsDTO.Address1 = aspirant.Address1;
            aspirantsDTO.Address2 = aspirant.Address2;
            aspirantsDTO.City = aspirant.City;
            aspirantsDTO.StateId = aspirant.StateId;
            aspirantsDTO.Pincode = aspirant.Pincode;
            aspirantsDTO.CurrentAddress1 = aspirant.CurrentAddress1;
            aspirantsDTO.CurrentAddress2 = aspirant.CurrentAddress2;
            aspirantsDTO.CurrentCity = aspirant.CurrentCity;
            aspirantsDTO.CurrentPincode = aspirant.CurrentPincode;
            aspirantsDTO.CurrentStateId = aspirant.CurrentStateId;
            aspirantsDTO.Mobile = aspirant.Mobile;
            aspirantsDTO.TeamId = aspirant.TeamId; aspirantsDTO.Team = aspirant.TeamId != null ? _masterService.GetMasterById(aspirant.TeamId) : null;
            aspirantsDTO.Note = aspirant.Note;
            aspirantsDTO.IsDeleted = aspirant.IsDeleted;
            //employeesDTO.IsEmployee = employee.IsEmployee;
            aspirantsDTO.CreatedDate = aspirant.CreatedDate;
            aspirantsDTO.ModifiedDate = aspirant.ModifiedDate;
            aspirantsDTO.EducationDetails = aspirant.EducationDetails.Select(x => new EducationsDetailsDTO()
            {
                EducationDetailsId = x.EducationDetailsId,
                CourseId = x.CourseId,
                Course = x.CourseId != null ? _masterService.GetMasterById(x.CourseId) : null,
                Institution = x.Institution,
                YearOfPassing = x.YearOfPassing,
                Percentage = x.Percentage
            }).ToList();

            return aspirantsDTO;
        }

        /// <summary>
        /// Get Aspirant List
        /// </summary>
        /// <value></value>
        public ResponseModel GetAspirants(RequestModel requestModel)
        {
           
            //Add filter query
            var filteredAspirants = this._aspirantsRepository.GetAspirants().AsQueryable().SortAndFilter(requestModel, DbFilters.UserFilters);
            //Manage the pagnation & joins 

            var pagedAspirants= filteredAspirants.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<AspirantsDTO> aspirantsJoin = new List<AspirantsDTO>();
            foreach (var item in pagedAspirants)
            {
                AspirantsDTO aspirantsDTO = new AspirantsDTO();
                aspirantsDTO.Id = item.Id;
                aspirantsDTO.FirstName = item.FirstName;
                aspirantsDTO.MiddleName = item.MiddleName;
                aspirantsDTO.LastName = item.LastName;
                aspirantsDTO.Email = item.Email;
                aspirantsDTO.Interest = item.Interest;
                aspirantsDTO.IsActive = item.IsActive;
                aspirantsDTO.DOB = item.DOB;
                aspirantsDTO.Address1 = item.Address1;
                aspirantsDTO.Address2 = item.Address2;
                aspirantsDTO.City = item.City;
                aspirantsDTO.StateId = item.StateId;
                aspirantsDTO.Pincode = item.Pincode;
                aspirantsDTO.CurrentAddress1 = item.CurrentAddress1;
                aspirantsDTO.CurrentAddress2 = item.CurrentAddress2;
                aspirantsDTO.CurrentCity = item.CurrentCity;
                aspirantsDTO.CurrentPincode = item.CurrentPincode;
                aspirantsDTO.CurrentStateId = item.CurrentStateId;
                aspirantsDTO.Mobile = item.Mobile;
                aspirantsDTO.TeamId = item.TeamId;
                aspirantsDTO.Team = item.TeamId != null ? _masterService.GetMasterById(item.TeamId) : null;
                aspirantsDTO.Note = item.Note;
                aspirantsDTO.IsDeleted = item.IsDeleted;
                //employeesDTO.IsEmployee = item.IsEmployee;
                aspirantsDTO.CreatedDate = item.CreatedDate;
                aspirantsDTO.ModifiedDate = item.ModifiedDate;
                aspirantsDTO.EducationDetails = item.EducationDetails.Select(x => new EducationsDetailsDTO()
                {
                    EducationDetailsId = x.EducationDetailsId,
                    CourseId = x.CourseId,
                    Course = x.CourseId != null ? _masterService.GetMasterById(x.CourseId) : null,
                    Institution = x.Institution,
                    YearOfPassing = x.YearOfPassing,
                    Percentage = x.Percentage
                }).ToList();

                aspirantsJoin.Add(aspirantsDTO);
            }

            //return object
            return CommonResponse.OkResponse(requestModel, aspirantsJoin, (filteredAspirants.Count() < 100 ? filteredAspirants.Count() : 100));
        }

        /// <summary>
        /// Deactivate aspirants record
        /// </summary>
        /// <param name="aspirantsId"></param>
        /// <returns></returns>
        public bool InactivateAspirants(string aspirantsId)
        {
            return this._aspirantsRepository.InactivateAspirants(aspirantsId);
        }

        /// <summary>
        /// Save Aspirants Detail
        /// </summary>
        /// <param name="aspirantsDTO"></param>
        /// <returns></returns>
        public bool SaveAspirants(AspirantsDTO aspirantsDTO)
        {
            Users users = new Users();
            users = this._mapper.Map<Users>(aspirantsDTO);
            return this._aspirantsRepository.SaveAspirants(users);    
        }

        /// <summary>
        /// Update Aspirants record
        /// </summary>
        /// <returns></returns>
        public bool UpdateAspirants(AspirantsDTO aspirantsDTO)
        {
            return this._aspirantsRepository.UpdateAspirants(this._mapper.Map<Users>(aspirantsDTO));
        }
        #endregion
    }
}
