using System;
using System.Collections.Generic;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.BAL.Services
{
    public class ExamsService : IExamsService
    {
        /// <summary>
        /// Exam Service class
        /// </summary>
            protected readonly IExamsRepository _examsRepository;

            // Create a field to store the mapper object
            private readonly IMapper _mapper;

            public ExamsService(IExamsRepository ExamsRepository, IMapper mapper)
            {
                this._examsRepository = ExamsRepository;
                this._mapper = mapper;
            }

            /// <summary>
            /// Get list Exams
            /// </summary>
            /// <value></value>
            public IEnumerable<ExamsDTO> GetExams
            {
                get
                {
                    return this._mapper.Map<IEnumerable<ExamsDTO>>(this._examsRepository.GetExams());
                }
            }

            /// <summary>
            /// Get Active Exams
            /// </summary>
            /// <value></value>
            public bool ActiveExams(string examId)
            {
                return this._examsRepository.ActiveExams(examId);
            }

            // public DashboardDTO GetDashboardInfo()
            // {
            //     DashboardDTO dashboardDTO = new DashboardDTO ();
            //     dashboardDTO.UserCount = _examsRepository. ();

            //     return dashboardDTO;
            // }

            /// <summary>
            /// Get User By ID
            /// </summary>
            /// <value></value>
            public ExamsDTO GetExamsById(string examId)
            {
                return this._mapper.Map<ExamsDTO>(this._examsRepository.GetExamsById(examId));
            }

            /// <summary>
            /// Get Inactive Exams
            /// </summary>
            /// <value></value>
            public bool InactiveExams(string examId)
            {
                return this._examsRepository.InactivateExams(examId);
            }

            /// <summary>
            /// Save Exams
            /// </summary>
            /// <value></value>
            public bool SaveExams(ExamsDTO examsDTO)
            {
                return this._examsRepository.SaveExams(this._mapper.Map<Exams>(examsDTO));
            }

            /// <summary>
            /// Update Exams
            /// </summary>
            /// <value></value>
            public bool UpdateExam(ExamsDTO examsDTO)
            {
                return this._examsRepository.UpdateExams(this._mapper.Map<Exams>(examsDTO));
            }
        }
}
