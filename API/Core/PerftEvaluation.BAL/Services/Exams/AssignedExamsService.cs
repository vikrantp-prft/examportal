using System;
using System.Linq;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;

namespace PerftEvaluation.BAL.Services
{
    public class AssignedExamsService : IAssignedExamsService
    {
        protected readonly IAssignedExamsRepository _assignedExamsRepository;
        private readonly IMapper _mapper;
        public AssignedExamsService(IMapper mapper, IAssignedExamsRepository assignedExamsRepository)
        {
            this._mapper = mapper;
            this._assignedExamsRepository = assignedExamsRepository;

        }

        public ResponseModel GetExamsByUserId(RequestModel requestModel)
        {
            throw new NotImplementedException();
        }

        // public ResponseModel GetExamsByUserId(RequestModel requestModel)
        // {
        //     //Filter & sort the data
        //     var filteredExams = this._assignedExamsRepository.GetAssignedExamsByUserId (requestModel.Id).AsQueryable ().SortAndFilter (requestModel, DbFilters.ExamFilters);
        //     //Integrate pagination
        //     var exams = filteredExams.Skip (requestModel.Skip).Take (requestModel.PageSize).AsQueryable ();
        // }
    }
}
