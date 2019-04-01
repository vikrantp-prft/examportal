using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data;
using System.IO;
using System.Linq;
using static PerftEvaluation.DTO.Common.CommonEnums;

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
        private readonly PerftEvaluation.Interfaces.IQuestionsImportExport _importExportUtil;
        private IHostingEnvironment _env;

        public QuestionsService(IQuestionsRepository questionsRepository,
                                IMapper mapper,
                                IMasterRepository masterRepository,
                                IMasterService masterService,
                                PerftEvaluation.Interfaces.IQuestionsImportExport importExportUtil,
            IHostingEnvironment env)
        {
            this._questionsRepository = questionsRepository;
            this._mapper = mapper;
            this._masterRepository = masterRepository;
            this._masterService = masterService;
            this._importExportUtil = importExportUtil;
            this._env = env;
        }
        public ResponseModel GetQuestionsByExamId(string examId, RequestModel requestModel)
        {
            //Filter & sort the data
            var filteredQuestions = this._questionsRepository.GetQuestionsByExamId(examId).AsQueryable().SortAndFilter(requestModel, DbFilters.QuestionFilters);

            // ToDo : Shuffle questions
            // 

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
                questionsDTO.SubjectiveAnswer = item.SubjectiveAnswer;
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
            questionsDTO.SubjectiveAnswer = questions.SubjectiveAnswer;
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

        /// <summary>
        /// Uploads bulk questions to database.
        /// </summary>
        /// <param name="fileStream">stream of questions file.</param>
        /// <param name="examId">Exam agains which all the questions should be uploaded.</param>
        /// <returns></returns>
        public bool ExcelUpload(Stream fileStream, string examId)
        {
            bool isSuccess = false;
            DataSet ds = _importExportUtil.ReadExcel(fileStream, false);

            QuestionsDTO questionDto;

            if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow row in ds.Tables[0].Rows)
                {
                    questionDto = new QuestionsDTO();
                    questionDto.QuestionType = GetQuestionTypeFromStringValue(row["Question Type"].ToString());
                    questionDto.Question = row["Question"].ToString();
                    questionDto.Options = GetOptions(row);
                    questionDto.CategoryId = GetCategoryIdFromStringValue(row["Category"].ToString());
                    questionDto.ExamId = examId;
                    questionDto.IsActive = true;
                    questionDto.IsDeleted = false;

                    // ToDO : Move validation code to some generic method. 

                    // Validate the model explicitly before storing question to database
                    var context = new System.ComponentModel.DataAnnotations.ValidationContext(questionDto);
                    var results = new List<ValidationResult>();

                    var isValid = Validator.TryValidateObject(questionDto, context, results);

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

                    isSuccess = SaveQuestions(questionDto);
                }
            }

            return isSuccess;
        }

        private string GetCategoryIdFromStringValue(string value)
        {
            MastersDTO categoryMaster = value != null ? _masterService.GetMasterByName(value) : null;

            // throw exception if the category from excel does not exist in database. 
            if (categoryMaster == null)
            {
                throw new KeyNotFoundException($"Category with Id \"{value}\" not found.");
            }

            return categoryMaster.Id;
        }

        private QuestionsEnum GetQuestionTypeFromStringValue(string value)
        {
            value = value.ToLower();

            // ToDo : Is it possible to remove hard code mapping ?
            if (value == "multiplechoice")
                return QuestionsEnum.multipleChoice;
            else if (value == "singlechoice")
                return QuestionsEnum.singleChoice;

            return QuestionsEnum.theory;
        }

        private List<OptionsDTO> GetOptions(DataRow row)
        {
            List<OptionsDTO> allOptions = new List<OptionsDTO>();
            OptionsDTO option;
            short correctOption = 0;

            // Get the index of correct answer. 
            Int16.TryParse(row["Correct"].ToString(), out correctOption);

            for (int i = 1; i <= 10; i++)
            {
                // if there are no more options columns in excel then move to next question.
                if (!row.Table.Columns.Contains("Option" + i))
                {
                    break;
                }

                // if there are no values in options then skip and go to next option.
                if (String.IsNullOrEmpty(row["Option" + i].ToString().Trim()))
                {
                    continue;
                }

                option = new OptionsDTO()
                {
                    Option = row["Option" + i].ToString()
                };

                // Check and set the if the index of correct answer is same as mentioned in options collection.
                if (correctOption == i)
                {
                    option.IsCorrect = true;
                }

                allOptions.Add(option);
            }

            return allOptions;
        }

        public string[] GetCorrectOptionsByQuestionId(string questionId)
        {
            var questions = this._questionsRepository.GetQuestionsById(questionId);
            QuestionsDTO optionsDTO = new QuestionsDTO();
            string[] correctedOptions = this._mapper.Map<List<OptionsDTO>>(questions.Options).Where(c => c.IsCorrect == true).Select(x => x.OptionId).ToArray();
            return correctedOptions;
        }

        public int GetQuestionsCountByExamId(string ExamId)
        {
            return this._questionsRepository.GetQuestionsByExamId(ExamId).Count();
        }

        /// <summary>
        /// Exports all the questions of a exam.
        /// </summary>
        /// <param name="examId"></param>
        /// <returns></returns>
        public Stream ExportQuestions(string examId)
        {
            // Get all the questions from database.
            IEnumerable<Questions> questions = _questionsRepository.GetQuestionsByExamId(examId);

            // Read empty excel template
            DataSet ds;
            using (Stream stream = new MemoryStream())
            {
                using (StreamReader reader = new StreamReader(_env.ContentRootPath + "\\Contents\\Question.xlsx"))
                {
                    // Create a copy of stream so new file reference can be created instread of modifing the existing file. 
                    reader.BaseStream.CopyToAsync(stream);

                    reader.Close();
                }

                // Convert template file in DataSet so it can be modified further. 
                ds = _importExportUtil.ReadExcel(stream, false);

                stream.Close();
            }

            if (ds == null && ds.Tables.Count < 1)
            {
                throw new FileLoadException("Failed to read/convert template file for exporting questions excel file.");
            }

            // Only first sheet from excel is of use. No need to read any other sheet from excel. 
            DataTable tb = ds.Tables[0];

            //Copy all questions to data set. 
            foreach (Questions question in questions)
            {
                DataRow dr = tb.NewRow();

                dr["Category"] = question.CategoryId;
                dr["Question"] = question.Question;
                dr["Question Type"] = question.Question;
                dr["Correct"] = question.Question;
                dr["Option1"] = question.Question;
                dr["Option2"] = question.Question;
                dr["Option3"] = question.Question;
                dr["Option4"] = question.Question;
                dr["Option5"] = question.Question;

                tb.Rows.Add(dr);
            }

            // Excel Export Operations. 
            Stream allQuestions = _importExportUtil.ExportDataSet(ds);

            return allQuestions;
        }
    }
}