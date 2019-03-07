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
    public class ExamsService : IExamsService
    {
        /// <summary>
        /// Exam Service class
        /// </summary>
        protected readonly IExamsRepository _examsRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;

        protected readonly IMasterRepository _masterRepository;
        protected readonly IMasterService _masterService;

        protected readonly IUserService _userService;

        public ExamsService(IExamsRepository ExamsRepository,
                            IMapper mapper,
                            IMasterService masterService,
                            IMasterRepository masterRepository,
                            IUserService userService)
        {
            this._examsRepository = ExamsRepository;
            this._mapper = mapper;
            this._masterService = masterService;
            this._masterRepository = masterRepository;
            this._userService = userService;
        }

        /// <summary>
        /// Get list Exams
        /// </summary>
        /// <value></value>
        public ResponseModel GetExams(RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredExams = this._examsRepository.GetExams().AsQueryable().SortAndFilter(requestModel, DbFilters.ExamFilters);
            //Integrate pagination
            var exams = filteredExams.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();
            List<ExamsDTO> examJoin = new List<ExamsDTO>();
            foreach (var item in exams)
            {
                ExamsDTO examsDTO = new ExamsDTO();
                examsDTO.Id = item.Id;
                examsDTO.Title = item.Title;
                examsDTO.TeamId = item.TeamId;
                examsDTO.Description = item.Description;
                examsDTO.ExamDurationHours = item.ExamDurationHours;
                examsDTO.ExamDurationMinutes = item.ExamDurationMinutes;
                examsDTO.PassingMarks = item.PassingMarks;
                examsDTO.FromDate = item.FromDate;
                examsDTO.ToDate = item.ToDate;
                examsDTO.ShowResultInFront = item.ShowResultInFront;
                examsDTO.ShuffleOptions = item.ShuffleOptions;
                examsDTO.ShuffleQuestions = item.ShuffleQuestions;
                examsDTO.IsPaperPublic = item.IsPaperPublic;
                examsDTO.IsFeedback = item.IsFeedback;
                examsDTO.TotalQuestions = item.TotalQuestions;
                examsDTO.IsActive = item.IsActive;
                examsDTO.CreatedBy = item.CreatedBy;
                examsDTO.ModifiedBy = item.ModifiedBy;
                examsDTO.Team = item.TeamId != null ? _masterService.GetMasterById(item.TeamId) : null;
                examJoin.Add(examsDTO);
            }

            //return object
            return CommonResponse.OkResponse(requestModel, examJoin, (filteredExams.Count() < 100 ? filteredExams.Count() : 100));
        }

        /// <summary>
        /// Get Active Exams
        /// </summary>
        /// <value></value>
        public bool ActiveExams(string examId)
        {
            return this._examsRepository.ActiveExams(examId);
        }

        /// <summary>
        /// Delete exam
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public bool DeleteExams(string examId)
        {
            return this._examsRepository.DeleteExam(examId);
        }

        /// <summary>
        /// Get User By ID
        /// </summary>
        /// <value></value>
        public ExamsDTO GetExamsById(string examId)
        {
            var exam = this._examsRepository.GetExamsById(examId);

            ExamsDTO examsDTO = new ExamsDTO();
            examsDTO.Id = exam.Id;
            examsDTO.Title = exam.Title;
            examsDTO.TeamId = exam.TeamId;
            examsDTO.Description = exam.Description;
            examsDTO.ExamDurationHours = exam.ExamDurationHours;
            examsDTO.ExamDurationMinutes = exam.ExamDurationMinutes;
            examsDTO.PassingMarks = exam.PassingMarks;
            examsDTO.FromDate = exam.FromDate;
            examsDTO.ToDate = exam.ToDate;
            examsDTO.ShowResultInFront = exam.ShowResultInFront;
            examsDTO.ShuffleOptions = exam.ShuffleOptions;
            examsDTO.ShuffleQuestions = exam.ShuffleQuestions;
            examsDTO.IsPaperPublic = exam.IsPaperPublic;
            examsDTO.IsFeedback = exam.IsFeedback;
            examsDTO.TotalQuestions = exam.TotalQuestions;
            examsDTO.IsActive = exam.IsActive;
            examsDTO.IsDeleted = exam.IsDeleted;
            examsDTO.CreatedBy = exam.CreatedBy;
            examsDTO.ModifiedBy = exam.ModifiedBy;
            examsDTO.Team = exam.TeamId != null ? _masterService.GetMasterById(exam.TeamId) : null;
            return examsDTO;
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

        /// <summary>
        /// SetActiveInactive Exams
        /// </summary>
        /// <param name="examDTO"></param>
        /// <returns></returns>
        public bool SetActiveInactive(ExamsDTO examsDTO)
        {
            DateTime start = examsDTO.FromDate.Value;
            DateTime current = DateTime.Now;
            DateTime end = examsDTO.ToDate.Value;

            int activeExam = DateTime.Compare(start, current);
            int inactiveExam = DateTime.Compare(start, end);

            if (activeExam < 0)
            {
                this.InactiveExams(examsDTO.Id);
                return false;
            }
            else if (activeExam == 0)
            {
                if (inactiveExam < 0)
                {
                    this.ActiveExams(examsDTO.Id);
                    return true;
                }
                else if (inactiveExam == 0)
                {
                    this.InactiveExams(examsDTO.Id);
                    return false;
                }
                else
                {
                    this.InactiveExams(examsDTO.Id);
                    return false;
                }
            }
            else
            {
                this.InactiveExams(examsDTO.Id);
                return false;
            }
        }


        /// <summary>
        /// Get Exam created by Contributor
        /// </summary>
        /// <returns></returns>
        public List<ExamsDTO> GetExamsCreatedByContributor(string createdBy)
        {
            try
            {
                //Filter & sort the data
                var exams = this._examsRepository.GetExamsCreatedByContributor(createdBy);

                List<ExamsDTO> examJoin = new List<ExamsDTO>();
                foreach (var item in exams)
                {
                    ExamsDTO examsDTO = new ExamsDTO();
                    examsDTO.Id = item.Id;
                    examsDTO.Title = item.Title;
                    examsDTO.TeamId = item.TeamId;
                    examsDTO.Description = item.Description;
                    examsDTO.ExamDurationHours = item.ExamDurationHours;
                    examsDTO.ExamDurationMinutes = item.ExamDurationMinutes;
                    examsDTO.PassingMarks = item.PassingMarks;
                    examsDTO.FromDate = item.FromDate;
                    examsDTO.ToDate = item.ToDate;
                    examsDTO.ShowResultInFront = item.ShowResultInFront;
                    examsDTO.ShuffleOptions = item.ShuffleOptions;
                    examsDTO.ShuffleQuestions = item.ShuffleQuestions;
                    examsDTO.IsPaperPublic = item.IsPaperPublic;
                    examsDTO.IsFeedback = item.IsFeedback;
                    examsDTO.TotalQuestions = item.TotalQuestions;
                    examsDTO.IsActive = item.IsActive;
                    examsDTO.CreatedBy = item.CreatedBy;
                    examsDTO.ModifiedBy = item.CreatedBy;
                    examsDTO.Team = item.TeamId != null ? _masterService.GetMasterById(item.TeamId) : null;

                    examJoin.Add(examsDTO);
                }

                //return object
                return examJoin;
            }
            catch (Exception exception)
            {
                throw exception;
            }
        }
    }
}