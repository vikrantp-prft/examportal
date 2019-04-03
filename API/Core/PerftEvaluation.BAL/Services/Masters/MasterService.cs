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
    /// <summary>
    /// Master Service Class
    /// </summary>
    public class MasterService : IMasterService
    {
        #region Declaration
        protected readonly IMasterRepository _masterRepository;

        protected readonly IUserRepository _userRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="UserRepository"></param>
        public MasterService(IMasterRepository MasterRepository, IMapper mapper, IUserRepository userRepository)
        {
            this._masterRepository = MasterRepository;
            this._mapper = mapper;
            this._userRepository = userRepository;
        }
        #endregion

        #region Class Methods
        /// <summary>
        /// Get Masters List
        /// </summary>
        /// <value></value>
        public ResponseModel GetMasters(RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredMasters = this._masterRepository.GetAllMasters().AsQueryable().SortAndFilter(requestModel, DbFilters.MasterFilters);
            //Integrate pagination
            var masters = filteredMasters.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<MastersDTO> mastersJoin = new List<MastersDTO>();
            foreach (var item in masters)
            {
                MastersDTO mastersDTO = new MastersDTO();
                mastersDTO.Id = item.Id;
                mastersDTO.Name = item.Name;
                mastersDTO.Description = item.Description;
                mastersDTO.MasterType = item.MasterType;
                mastersDTO.IsActive = item.IsActive;
                mastersDTO.IsDeleted = item.IsDeleted;
                mastersDTO.CreatedBy = item.CreatedBy;
                mastersDTO.CreatedByUser = item.CreatedBy != null ? this._mapper.Map<UsersDTO>(_userRepository.GetUserById(item.CreatedBy)) : null;
                mastersDTO.ModifiedBy = item.ModifiedBy;
                mastersDTO.ModifiedByUser = item.ModifiedBy != null ? this._mapper.Map<UsersDTO>(_userRepository.GetUserById(item.ModifiedBy)) : null;
                mastersJoin.Add(mastersDTO);
            }
            //return object
            return CommonResponse.OkResponse(requestModel, mastersJoin, (filteredMasters.Count() < 100 ? filteredMasters.Count() : 100));
        }

        /// <summary>
        /// Save Master Detail
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        public bool SaveMaster(MastersDTO mastersDTO)
        {
            return this._masterRepository.SaveMaster(this._mapper.Map<Masters>(mastersDTO));
        }

        /// <summary>
        /// Get masters by its type
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public ResponseModel GetMasterByType(RequestModel requestModel)
        {

            //Filter & sort the data
            var filteredMasters = this._masterRepository.GetMastersByType(requestModel.Condition).AsQueryable().SortAndFilter(requestModel, DbFilters.MasterFilters);
            //Integrate pagination
            var masters = filteredMasters.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<MastersDTO> mastersJoin = new List<MastersDTO>();
            foreach (var item in masters)
            {
                MastersDTO mastersDTO = new MastersDTO();
                mastersDTO.Id = item.Id;
                mastersDTO.Name = item.Name;
                mastersDTO.Description = item.Description;
                mastersDTO.MasterType = item.MasterType;
                mastersDTO.IsActive = item.IsActive;
                mastersDTO.IsDeleted = item.IsDeleted;
                mastersDTO.CreatedBy = item.CreatedBy;
                mastersDTO.CreatedByUser = item.CreatedBy != null ? this._mapper.Map<UsersDTO>(_userRepository.GetUserById(item.CreatedBy)) : null;
                mastersDTO.ModifiedBy = item.ModifiedBy;
                mastersDTO.ModifiedByUser = item.ModifiedBy != null ? this._mapper.Map<UsersDTO>(_userRepository.GetUserById(item.ModifiedBy)) : null;
                mastersJoin.Add(mastersDTO);
            }
            //return object
            return CommonResponse.OkResponse(requestModel, mastersJoin, (filteredMasters.Count() < 100 ? filteredMasters.Count() : 100));

        }

        /// <summary>
        /// Get masters by its type For Cache
        /// </summary>
        /// <param name="masterType"></param>
        /// <returns></returns>
        public IEnumerable<MastersDTO> GetMasterByTypeForCache(string masterType)
        {
            return this._mapper.Map<IEnumerable<MastersDTO>>(this._masterRepository.GetMastersByType(masterType));
        }


        /// <summary>
        /// Update master detail
        /// </summary>
        /// <param name="mastersDTO"></param>
        /// <returns></returns>
        public bool UpdateMaster(MastersDTO mastersDTO)
        {
            return this._masterRepository.UpdateMaster(this._mapper.Map<Masters>(mastersDTO));
        }

        /// <summary>
        /// Activated master record
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool ActivateMaster(string masterId)
        {
            return this._masterRepository.ActivateMaster(masterId);
        }

        /// <summary>
        /// Deactivate master record
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool InactivateMaster(string masterId)
        {
            return this._masterRepository.InactivateMaster(masterId);
        }

        /// <summary>
        /// Delete Master
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public bool DeleteMaster(string masterId)
        {
            return this._masterRepository.DeleteMaster(masterId);
        }

        /// <summary>
        /// Get master by Id
        /// </summary>
        /// <param name="masterId"></param>
        /// <returns></returns>
        public MastersDTO GetMasterById(string masterId)
        {

            var masters = this._masterRepository.GetMasterById(masterId);


            MastersDTO mastersDTO = new MastersDTO();
            mastersDTO.Id = masters.Id;
            mastersDTO.Name = masters.Name;
            mastersDTO.Description = masters.Description;
            mastersDTO.MasterType = masters.MasterType;
            mastersDTO.IsActive = masters.IsActive;
            mastersDTO.IsDeleted = masters.IsDeleted;
            mastersDTO.CreatedBy = masters.CreatedBy;
            mastersDTO.CreatedByUser = masters.CreatedBy != null ? this._mapper.Map<UsersDTO>(_userRepository.GetUserById(masters.CreatedBy)) : null;
            mastersDTO.ModifiedBy = masters.ModifiedBy;
            mastersDTO.ModifiedByUser = masters.ModifiedBy != null ? this._mapper.Map<UsersDTO>(_userRepository.GetUserById(masters.ModifiedBy)) : null;


            return mastersDTO;
        }

        /// <summary>
        /// Gets the master record based on the Name which includes ID. 
        /// </summary>
        /// <param name="name">Name of record that need to search.</param>
        /// <returns></returns>
        public MastersDTO GetMasterByName(string name)
        {
            return this._mapper.Map<MastersDTO>(this._masterRepository.GetMasterByName(name));
        }
        #endregion
    }
}