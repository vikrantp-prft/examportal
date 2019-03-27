using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.IO;
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

        private readonly IQuestionsImportExport _importExportUtil;

        /// <summary>
        /// Class Constructor
        /// </summary>
        /// <param name="AspirantsRepository"></param>
        public AspirantsService(IAspirantsRepository AspirantsRepository,
                                IMasterService masterService,
                                IMasterRepository masterRepository,
                                IMapper mapper,
                                IQuestionsImportExport importExportUtil)
        {
            this._aspirantsRepository = AspirantsRepository;
            this._mapper = mapper;
            this._masterRepository = masterRepository;
            this._masterService = masterService;
            this._importExportUtil = importExportUtil;
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
            aspirantsDTO.Note = aspirant.Note;
            aspirantsDTO.IsDeleted = aspirant.IsDeleted;
            //employeesDTO.IsEmployee = employee.IsEmployee;
            aspirantsDTO.CreatedDate = aspirant.CreatedDate;
            aspirantsDTO.ModifiedDate = aspirant.ModifiedDate;
            aspirantsDTO.EducationDetails = GetEducationDetails(aspirant.Id);

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

            var pagedAspirants = filteredAspirants.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

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
                aspirantsDTO.Note = item.Note;
                aspirantsDTO.IsDeleted = item.IsDeleted;
                aspirantsDTO.CreatedDate = item.CreatedDate;
                aspirantsDTO.ModifiedDate = item.ModifiedDate;
                aspirantsDTO.UserType = item.UserType;
                aspirantsDTO.EducationDetails = GetEducationDetails(item.Id);

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
        public RequestModel SaveAspirants(AspirantsDTO aspirantsDTO)
        {
            Users users = new Users();
            RequestModel requestModel = new RequestModel();
            users = this._mapper.Map<Users>(aspirantsDTO);
            requestModel.Id = this._aspirantsRepository.SaveAspirants(users);
            return requestModel;
        }

        /// <summary>
        /// Update Aspirants record
        /// </summary>
        /// <returns></returns>
        public bool UpdateAspirants(AspirantsDTO aspirantsDTO)
        {
            return this._aspirantsRepository.UpdateAspirants(this._mapper.Map<Users>(aspirantsDTO));
        }


        /// <summary>
        /// Uploads bulk Aspirants to database.
        /// </summary>
        /// <param name="fileStream">stream of Aspirants file.</param>
        /// <returns></returns>
        public bool ExcelUpload(Stream fileStream)
        {
            bool isSuccess = false;
            DataSet ds = _importExportUtil.ReadExcel(fileStream, false);

            if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    ImportEmployeesDTO importEmployeesDTO = new ImportEmployeesDTO();
                    importEmployeesDTO.FirstName = row["FirstName"].ToString();
                    importEmployeesDTO.MiddleName = row["MiddleName"].ToString();
                    importEmployeesDTO.LastName = row["LastName"].ToString();
                    importEmployeesDTO.Email = row["Email"].ToString();
                    importEmployeesDTO.Address1 = row["Address 1"].ToString();
                    importEmployeesDTO.Address2 = row["Address 2"].ToString();
                    importEmployeesDTO.City = row["City"].ToString();
                    importEmployeesDTO.StateId = GetIdFromStringValue(row["State"].ToString());
                    importEmployeesDTO.Pincode = row["Pincode"].ToString();
                    importEmployeesDTO.CurrentAddress1 = row["CurrentAddress1"].ToString();
                    importEmployeesDTO.CurrentAddress2 = row["CurrentAddress2"].ToString();
                    importEmployeesDTO.CurrentCity = row["CurrentCity"].ToString();
                    importEmployeesDTO.CurrentStateId = row["CurrentStateId"].ToString();
                    importEmployeesDTO.CurrentPincode = row["CurrentPincode"].ToString();
                    importEmployeesDTO.Mobile = row["Mobile"].ToString();
                    importEmployeesDTO.Note = row["Note"].ToString();

                    //Interest string[]
                    string singleString = row["Interest"].ToString();
                    importEmployeesDTO.Interest = new string[] { "" };
                    importEmployeesDTO.Interest = singleString.Split(',');

                    importEmployeesDTO.TeamId = GetIdFromStringValue(row["Team"].ToString());
                    importEmployeesDTO.IsActive = true;
                    importEmployeesDTO.IsDeleted = false;


                    // ToDO : Move validation code to some generic method. 

                    // Validate the model explicitly before storing question to database
                    var context = new System.ComponentModel.DataAnnotations.ValidationContext(importEmployeesDTO);
                    var results = new List<ValidationResult>();

                    var isValid = Validator.TryValidateObject(importEmployeesDTO, context, results);

                    if (!isValid)
                    {
                        string failedResult = String.Empty;

                        // Iterate through all the validation errors from model based on data annotations.
                        foreach (var item in results)
                        {
                            failedResult = failedResult + item.ErrorMessage + "\n";
                        }

                        throw new DataException("Failed to validate model annotations for : " + failedResult);
                    }

                    var importEmployee = SaveImportedAspirants(importEmployeesDTO);
                    if (importEmployee != null)
                    {
                        isSuccess = true;
                    }
                }
            }

            return isSuccess;
        }

        private string GetIdFromStringValue(string value)
        {
            MastersDTO stateMaster = value != null ? _masterService.GetMasterByName(value) : null;

            // throw exception if the category from excel does not exist in database. 
            if (stateMaster == null)
            {
                throw new KeyNotFoundException($"Category with Id \"{value}\" not found.");
            }
            return stateMaster.Id;
        }


        /// <summary>
        /// Save Employee Detail
        /// </summary>
        /// <param name="employeesDTO"></param>
        /// <returns></returns>
        public RequestModel SaveImportedAspirants(ImportEmployeesDTO importAspirants)
        {
            Users users = new Users();
            RequestModel requestModel = new RequestModel();
            users = this._mapper.Map<Users>(importAspirants);
            requestModel.Id = this._aspirantsRepository.SaveAspirants(users);
            return requestModel;
        }

        /// <summary>
        /// Get Education Details of Employees
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<EducationsDetailsDTO> GetEducationDetails(string userId)
        {
            var aspirants = this._aspirantsRepository.GetAspirantById(userId);

            AspirantsDTO aspirantsDTO = new AspirantsDTO();

            var aspirantsEducations = aspirants.EducationDetails;

            if (aspirantsEducations != null)
            {
                return aspirantsDTO.EducationDetails = aspirantsEducations.Select(x => new EducationsDetailsDTO()
                {
                    EducationDetailsId = x.EducationDetailsId,
                    CourseId = x.CourseId,
                    Course = x.CourseId != null ? _masterService.GetMasterById(x.CourseId) : null,
                    Institution = x.Institution,
                    YearOfPassing = x.YearOfPassing,
                    Percentage = x.Percentage
                }).ToList();
            }
            else return null;

        }
        #endregion
    }
}
