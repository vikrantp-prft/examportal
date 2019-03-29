using AutoMapper;
using PerftEvaluation.Api.Controllers;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DAL.Repositories;
using PerftEvaluation.ExcelUtility;
using PerftEvaluation.Helper.Mapper;
using System.IO;
using Xunit;

namespace IntegrationTests
{
    public class QuestionsControllerTests
    {
        [Fact]
        public void QuestionController_ImportQuestions_Success()
        {
            IQuestionsRepository questionsRepository = new QuestionsRepository();
            PerftEvaluation.Interfaces.IQuestionsImportExport questionsImportExport = new ExcelOperations();

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

        [Fact]
        public void ExportQuestions()
        {
            IQuestionsRepository questionsRepository = new QuestionsRepository();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            IMasterRepository masterRepository = new MasterRepository();

            IMasterService masterService = new MasterService(masterRepository, mapper);

            IQuestionsService questionsService = new QuestionsService(questionsRepository, mapper, new MasterRepository(), new MasterService(masterRepository, mapper), new ExcelOperations());

            //QuestionsController questionsController = new QuestionsController(questionsService, null);

        }
    }
}
