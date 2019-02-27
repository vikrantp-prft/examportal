using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services {
    public class AssignedExamsService : IAssignedExamsService {
        protected readonly IAssignedExamsRepository _assignedExamsRepository;
        protected readonly IExamsRepository _examsRepository;
        protected readonly IMasterService _masterService;
        protected readonly IExamsService _examsService;

        protected readonly IEmployeeRepository _employeeRepository;
        protected readonly IEmployeeService _employeeService;
        private readonly IMapper _mapper;
        public AssignedExamsService (IMapper mapper,
            IAssignedExamsRepository assignedExamsRepository,
            IExamsRepository examsRepository,
            IEmployeeRepository employeeRepository,
            IEmployeeService employeeService,
            IExamsService examsService,
            IMasterService masterService) {
            this._mapper = mapper;
            this._assignedExamsRepository = assignedExamsRepository;
            this._examsRepository = examsRepository;
            this._employeeRepository = employeeRepository;
            this._employeeService = employeeService;
            this._examsService = examsService;
            this._masterService = masterService;
        }

        /// <summary>
        /// Get exams by user id
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        public ResponseModel GetExamsByUserId (RequestModel requestModel) {
            //Filter & sort the data
            var filteredExams = this._assignedExamsRepository.GetAssignedExamsByUserId (requestModel.Id).AsQueryable ().SortAndFilter (requestModel, DbFilters.ExamFilters);
            //Integrate pagination
            var exams = filteredExams.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();

            List<AssignedExamsDTO> examJoin = new List<AssignedExamsDTO> ();
            foreach (var item in exams) {
                AssignedExamsDTO examsDTO = new AssignedExamsDTO ();
                examsDTO.Id = item.Id;
                examsDTO.UserId = item.UserId;
                examsDTO.ExamId = item.ExamId;
                examsDTO.IsActive = item.IsActive;
                examsDTO.IsDeleted = item.IsDeleted;
                examsDTO.Exam = _examsService.GetExamsById (item.ExamId);
                examsDTO.Employee = _employeeService.GetEmployeeById (item.UserId);

                examJoin.Add (examsDTO);
            }

            //return object
            return CommonResponse.OkResponse (requestModel, examJoin, (filteredExams.Count () < 100 ? filteredExams.Count () : 100));
        }

        /// <summary>
        /// Activate the exam assignment
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool ActiveExamAssigned (string examId) {
            return this._assignedExamsRepository.ActiveExamAssigned (examId);
        }

        /// <summary>
        /// Inactivate the exam assignment
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool InactiveExamAssigned (string examId) {
            return this._assignedExamsRepository.InactiveExamAssigned (examId);
        }

        /// <summary>
        ///  List of Employees that has been assigned to Exam
        /// </summary>
        /// <param name="requestModel"></param>
        /// <returns></returns>
        public ResponseModel GetUsersByExamId (RequestModel requestModel) {
            var employeeList = this._employeeRepository.GetEmployees ();
            List<UsersDTO> userList = new List<UsersDTO> ();
            foreach (var item in employeeList) {
                UsersDTO user = new UsersDTO ();
                user.FirstName = item.FirstName;
                user.LastName = item.LastName;
                user.Email = item.Email;
                user.IsActive = item.IsActive;
                user.Id = item.Id;
                user.IsDeleted = item.IsDeleted;
                user.Team = item.TeamId != null ? _masterService.GetMasterById (item.TeamId) : null;
                user.IsExamAssigned = _assignedExamsRepository.ExamAssignmentCheck (item.Id, requestModel.Id);

                userList.Add (user);
            }

            //Filter & sort the data
            var filteredUsers = userList.AsQueryable ().SortAndFilter (requestModel, DbFilters.UserFilters);
            //Integrate pagination
            var users = filteredUsers.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
            //return object
            return CommonResponse.OkResponse (requestModel, users, (filteredUsers.Count () < 100 ? filteredUsers.Count () : 100));
        }

        /// <summary>
        /// Add assignment between users and exams
        /// </summary>
        /// <param name="assignedExamsDTOs"></param>
        /// <returns>true/false</returns>
        public bool ExamAssignment (List<AssignedExamsDTO> assignedExamsDTOs) {
            try {
                foreach (var item in assignedExamsDTOs) {
                    AssignedExams assignedExams = new AssignedExams ();

                    assignedExams = this._mapper.Map<AssignedExams> (item);

                    _assignedExamsRepository.ExamAssignment (assignedExams);
                }
                return true;
            } catch (Exception) {
                return false;
            }
        }
    }
}