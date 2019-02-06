using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;

namespace PerftEvaluation.BAL.Services
{
    public class AssignedExamsService : IAssignedExamsService
    {
        protected readonly IAssignedExamsRepository _assignedExamsRepository;
        protected readonly IExamsRepository _examsRepository;

        protected readonly IEmployeeRepository _employeeRepository;
        protected readonly IEmployeeService _employeeService;
        private readonly IMapper _mapper;
        public AssignedExamsService(IMapper mapper,
                                    IAssignedExamsRepository assignedExamsRepository,
                                    IExamsRepository examsRepository,
                                    IEmployeeRepository employeeRepository,
                                    IEmployeeService employeeService)
        {
            this._mapper = mapper;
            this._assignedExamsRepository = assignedExamsRepository;
            this._examsRepository = examsRepository;
            this._employeeRepository = employeeRepository;
            this._employeeService = employeeService;
        }


        public ResponseModel GetExamsByUserId(RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredExams = this._assignedExamsRepository.GetAssignedExamsByUserId(requestModel.Id).AsQueryable().SortAndFilter(requestModel, DbFilters.ExamFilters);
            //Integrate pagination
            var exams = filteredExams.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<AssignedExamsDTO> examJoin = new List<AssignedExamsDTO>();
            foreach (var item in exams)
            {
                AssignedExamsDTO examsDTO = new AssignedExamsDTO();
                examsDTO.Id = item.Id;
                examsDTO.UserId = item.UserId;
                examsDTO.ExamId = item.ExamId;
                examsDTO.IsActive = item.IsActive;
                examsDTO.IsDeleted = item.IsDeleted;
                examsDTO.Exam = this._mapper.Map<ExamsDTO>(_examsRepository.GetExams().AsQueryable().Where(e => e.Id == item.ExamId).FirstOrDefault());
                examsDTO.Employee = _employeeService.GetEmployeeById(item.UserId);

                examJoin.Add(examsDTO);
            }

            //return object
            return CommonResponse.OkResponse(requestModel, examJoin, (filteredExams.Count() < 100 ? filteredExams.Count() : 100));
        }

        public bool ActiveExamAssigned(string examId)
        {
            return this._assignedExamsRepository.ActiveExamAssigned (examId);
        }

        public bool InactiveExamAssigned(string examId)
        {
            return this._assignedExamsRepository.InactiveExamAssigned (examId);
        }
    }
}
