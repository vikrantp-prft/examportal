using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MongoDB.Bson;
using MongoDB.Driver;
using OfficeOpenXml;
using PerftEvaluation.DAL.Context;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO.Common;
using PerftEvaluation.Entities.POCOEntities;

namespace PerftEvaluation.DAL.Repositories
{
    /// <summary>
    /// Questions Repository Class
    /// /// </summary>
    public class QuestionsRepository : IQuestionsRepository
    {
        protected readonly DBHelper _db = null;

        public QuestionsRepository()
        {
            this._db = new DBHelper();
        }

        /// <summary>
        /// Get list of active Questions
        /// </summary>
        /// <value></value>
        public bool ActiveQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var UpdateQuery = Builders<Questions>.Update.Set(s => s.IsActive, true);
            return _db.UpdateOne<Questions>(filterDef, UpdateQuery, Questions.CollectionName);
        }

        /// <summary>
        /// Delete Questions
        /// </summary>
        /// <value></value>
        public bool DeleteQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var UpdateQuery = Builders<Questions>.Update.Set(s => s.IsDeleted, true);
            return _db.UpdateOne<Questions>(filterDef, UpdateQuery, Questions.CollectionName);
        }

        /// <summary>
        /// Get list Questions
        /// </summary>
        /// <value></value>
        public IEnumerable<Questions> GetQuestionsByExamId(string examId)
        {
            return _db.GetCollection<Questions>(Questions.CollectionName).AsQueryable().Where(x => x.IsDeleted == false && x.ExamId == examId).ToList();
        }

        /// <summary>
        /// Get Question By ID
        /// </summary>
        /// <value></value>
        public Questions GetQuestionsById(string questionId)
        {
            try
            {
                return _db.GetCollection<Questions>(Questions.CollectionName).AsQueryable().Where(x => x.IsDeleted == false && x.Id == questionId).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get Inactive Questions
        /// </summary>
        /// <value></value>
        public bool InactivateQuestion(string questionId)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questionId);
            var updateQuery = Builders<Questions>.Update
                .Set(c => c.IsActive, false);

            return _db.UpdateOne<Questions>(filterDef, updateQuery, Questions.CollectionName);
        }

        /// <summary>
        /// Save Questions
        /// </summary>
        /// <value></value>
        public bool SaveQuestions(Questions questions)
        {
            try
            {
                questions.CreatedDate = DateTime.UtcNow;
                questions.ModifiedDate = DateTime.UtcNow;
                if (questions.Options != null)
                {
                    questions.Options.Where(c => c.OptionId == null).ToList().ForEach(c => c.OptionId = ObjectId.GenerateNewId().ToString());
                }

                _db.Save<Questions>(questions, Questions.CollectionName);
                return true;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Update Questions
        /// </summary>
        /// <value></value>
        public bool UpdateQuestions(Questions questions)
        {
            var filter = Builders<Questions>.Filter;
            var filterDef = filter.Eq(c => c.Id, questions.Id);

            if (questions.Options != null)
            {
                questions.Options.Where(c => c.OptionId == null).ToList().ForEach(c => c.OptionId = ObjectId.GenerateNewId().ToString());
            }

            var updateQuery = Builders<Questions>.Update
                                .Set(s => s.CategoryId, questions.CategoryId)
                                .Set(s => s.IsActive, questions.IsActive)
                                .Set(s => s.Options, questions.Options)
                                .Set(s => s.Question, questions.Question)
                                .Set(s => s.QuestionType, questions.QuestionType);

            return _db.UpdateOne<Questions>(filterDef, updateQuery, Questions.CollectionName);
        }


        /// <summary>
        /// Upload Excel
        /// </summary>
        public bool UploadExcel(string filesname)
        {
            try
            {
                ReadExcelFileSAX(filesname);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return true;
        }

        public void ReadExcelFileSAX(string fileName)
        {
            //    var fileInfo = new FileInfo (@"E:\QueFormat.xlsx");
            var fileInfo = new FileInfo(fileName);
            var count = 0;
            using (ExcelPackage excelPackage = new ExcelPackage(fileInfo))
            {
                var totalWorkSheet = excelPackage.Workbook.Worksheets.Count;
                for (int sheetIndex = 1; sheetIndex <= totalWorkSheet; sheetIndex++)
                {
                    var worksheet = excelPackage.Workbook.Worksheets[sheetIndex];
                    int rows = worksheet.Dimension.Rows;
                    int cols = worksheet.Dimension.Columns;

                    List<string> key = new List<string>();
                    List<string> values = new List<string>();
                    // Dictionary<string, string> openWith = new Dictionary<string, string>();

                    for (int rowIndex = 1; rowIndex <= rows; rowIndex++)
                    {
                        for (int colsIndex = 1; colsIndex <= cols; colsIndex++)
                        {
                            var colInx = colsIndex;
                            //Get keys (Headings)  
                            if (rowIndex == 1)
                            {
                                key.Add(worksheet.Cells[1, colsIndex].Value.ToString());
                            }
                            //Get values 
                            else
                            {
                                count = key.Count();
                                //  var pp = worksheet.Cells[rowIndex, colsIndex].Value.ToString();
                                if (count >= colsIndex)
                                {
                                    // var c = string.IsNullOrEmpty(Convert.Tostring(worksheet.Cells[rowIndex, colsIndex].Value)) ? "1" : "2";
                                    var colvalue = Convert.ToString(worksheet.Cells[rowIndex, colsIndex].Value);
                                    var xx = string.IsNullOrEmpty(colvalue) ? null : colvalue;
                                    values.Add(xx);
                                }
                                if (count == values.Count)
                                {
                                    Questions questionsDTO = new Questions();
                                    //  questionsDTO.CategoryId=1;
                                    questionsDTO.CategoryId = values[0];
                                    questionsDTO.Question = values[1];
                                    if (values[2].ToString() == "singleChoice")
                                    {
                                        questionsDTO.QuestionType = CommonEnums.QuestionsEnum.singleChoice;
                                    }
                                    else if (values[2].ToString() == "multipleChoice")
                                    {
                                        questionsDTO.QuestionType = CommonEnums.QuestionsEnum.multipleChoice;
                                    }
                                    else if (values[2].ToString() == "theory")
                                    {
                                        questionsDTO.QuestionType = CommonEnums.QuestionsEnum.theory;
                                    }
                                    List<Options> optionList = new List<Options>();
                                    Options opt = new Options();

                                    for (int j = 4; j <= 8; j++)
                                    {
                                        opt.Option = values[j];
                                        var inc = j + 1;
                                        if (Int32.Parse(values[3]) == inc)
                                        {
                                            opt.IsCorrect = true;
                                        }
                                        else
                                        {
                                            opt.IsCorrect = false;
                                        }
                                        optionList.Add(opt);
                                    }
                                    questionsDTO.Options = optionList;

                                    bool IsSaved = SaveQuestions(questionsDTO);
                                    values = new List<string>();
                                    colsIndex = 1;
                                }
                            }
                        }
                        // Dictionary

                        //  if(rowIndex > 1 && rowIndex <= count){
                        // for(int i=1;i<=count;i++)
                        //     {

                        //      //openWith.Add(key[i],values[i]);
                        //     }
                        // }
                    }
                }
            }
        }
    }
}
