using System;
using System.Data;
using System.IO;
using PerftEvaluation.Api.Controllers;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.ExcelUtility;
using Xunit;

namespace PerftEvaluation.Test
{
    public class ExcelUtilityTests
    {
        [Fact]
        public void ReadExcel_Stream_Success()
        {
            bool result = false;
            string expected = Guid.NewGuid().ToString();
            IQuestionsImportExport excelOperations = new ExcelOperations();

            DataSet ds = new DataSet();
            DataTable tb = new DataTable();
            tb.Columns.Add(new DataColumn("Column1"));

            DataRow dr = tb.NewRow();
            dr[0] = expected;
            tb.Rows.Add(dr);

            ds.Tables.Add(tb);

            using (Stream stream = excelOperations.ExportDataSet(ds))
            {
                ds = excelOperations.ReadExcel(stream, true);

                if (ds != null && ds.Tables.Count > 0 && ds.Tables[0].Rows.Count > 0)
                {
                    if (ds.Tables[0].Rows[0]["Column1"].ToString() == expected)
                    {
                        result = true;
                    }
                }
            }
            Assert.True(result);
        }



        #region Integration Test 

        [Fact]
        public void QuestionController_ImportQuestions_Success()
        {
            // IQuestionsService questionsService = null;
            // QuestionsController questions = new QuestionsController(questionsService, null);
        }

        #endregion Integration Test

    }
}
