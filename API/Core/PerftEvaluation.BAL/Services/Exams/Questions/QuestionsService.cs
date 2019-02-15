using System;
using System.Collections;
using System.Collections.Generic;
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
    /// <summary>
    /// Questions Service
    /// </summary>
    public class QuestionsService : IQuestionsService
    {
        protected readonly IQuestionsRepository _questionsRepository;

        // Create a field to store the mapper object
        private readonly IMapper _mapper;
        protected readonly IMasterRepository _masterRepository;
        protected readonly IMasterService _masterService;
        private readonly IQuestionsImportExport _importExportUtil;

        public QuestionsService(IQuestionsRepository questionsRepository,
                                IMapper mapper,
                                IMasterRepository masterRepository,
                                IMasterService masterService,
                                IQuestionsImportExport importExportUtil)
        {
            this._questionsRepository = questionsRepository;
            this._mapper = mapper;
            this._masterRepository = masterRepository;
            this._masterService = masterService;
            this._importExportUtil = importExportUtil;
        }
        public ResponseModel GetQuestionsByExamId(string examId, RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredQuestions = this._questionsRepository.GetQuestionsByExamId(examId).AsQueryable().SortAndFilter(requestModel, DbFilters.QuestionFilters);
            //Integrate pagination
            var questions = filteredQuestions.Skip(requestModel.Skip).Take(requestModel.PageSize).AsQueryable();

            List<QuestionsDTO> questionsJoin = new List<QuestionsDTO>();
            foreach (var item in questions)
            {
                QuestionsDTO questionsDTO = new QuestionsDTO();
                questionsDTO.Id = item.Id;
                questionsDTO.ExamId = item.ExamId;
                questionsDTO.CategoryId = item.CategoryId;
                questionsDTO.QuestionType = item.QuestionType;
                questionsDTO.IsActive = item.IsActive;
                questionsDTO.Question = item.Question;
                questionsDTO.Options = this._mapper.Map<List<OptionsDTO>>(item.Options);
                questionsDTO.IsDeleted = item.IsDeleted;
                questionsDTO.Category = _masterService.GetMasterById(item.CategoryId);

                questionsJoin.Add(questionsDTO);
            }
            //return object
            return CommonResponse.OkResponse(requestModel, questionsJoin, (filteredQuestions.Count() < 100 ? filteredQuestions.Count() : 100));
        }

        public bool ActiveQuestions(string questionId)
        {
            return this._questionsRepository.ActiveQuestion(questionId);
        }

        public QuestionsDTO GetQuestionById(string questionsId)
        {
            var questions = this._questionsRepository.GetQuestionsById(questionsId);

            QuestionsDTO questionsDTO = new QuestionsDTO();
            questionsDTO.Id = questions.Id;
            questionsDTO.ExamId = questions.ExamId;
            questionsDTO.CategoryId = questions.CategoryId;
            questionsDTO.QuestionType = questions.QuestionType;
            questionsDTO.IsActive = questions.IsActive;
            questionsDTO.Question = questions.Question;
            questionsDTO.Options = this._mapper.Map<List<OptionsDTO>>(questions.Options);
            questionsDTO.IsDeleted = questions.IsDeleted;
            questionsDTO.Category = _masterService.GetMasterById(questions.CategoryId);

            return questionsDTO;

        }

        public bool InactiveQuestions(string questionId)
        {
            return this._questionsRepository.InactivateQuestion(questionId);
        }

        public bool SaveQuestions(QuestionsDTO questionsDTO)
        {
            return this._questionsRepository.SaveQuestions(this._mapper.Map<Questions>(questionsDTO));
        }

        public bool UpdateQuestion(QuestionsDTO questionsDTO)
        {
            return this._questionsRepository.UpdateQuestions(this._mapper.Map<Questions>(questionsDTO));
        }

        public bool DeleteQuestions(string questionId)
        {
            return this._questionsRepository.DeleteQuestion(questionId);
        }

        public bool ExcelUpload(string filename)
        {
            return this._questionsRepository.UploadExcel(filename);
        }

        public bool ExcelUpload(Stream fileStream)
        {
            bool isSuccess = false;
            DataSet ds = _importExportUtil.ReadExcel(fileStream, false);

            QuestionsDTO questionDto;

            if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    // ToDo-Kapil: Read all the parameters that are reuired to store in database. 
                    questionDto = new QuestionsDTO();
                    questionDto.Question = row["Question"].ToString();
                    // questionDto.IsActive = "";

                    // questionsDTO.Question
                    // ToDO : Validate the model before sending that to database. 
                    isSuccess = true; //= SaveQuestions(questionDto);
                }


            }

            return isSuccess;
        }
    }
}