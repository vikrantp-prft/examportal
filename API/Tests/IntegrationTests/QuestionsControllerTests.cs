using System;
using Xunit;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DAL.Repositories;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.ExcelUtility;
using System.IO;
using AutoMapper;
using PerftEvaluation.Helper.Mapper;

namespace IntegrationTests
{
    public class QuestionsControllerTests
    {
        [Fact]
        public void QuestionController_ImportQuestions_Success()
        {
            IQuestionsRepository questionsRepository = new QuestionsRepository();
            IQuestionsImportExport questionsImportExport = new ExcelOperations();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            IMasterRepository masterRepository = new MasterRepository();

            IMasterService masterService = new MasterService(masterRepository, mapper);

            QuestionsService questionsService = new QuestionsService(questionsRepository, mapper, masterRepository, masterService, questionsImportExport);

            byte[] fileBytes = File.ReadAllBytes(@"D:\All Projects\Exam Portal\Question Template\QueFormat.xlsx");

            Stream stream = new MemoryStream(fileBytes);

            bool actual = questionsService.ExcelUpload(stream, "5c4eb23a4732952c9c7fcfc3");

            Assert.True(actual);
        }
    }
}
