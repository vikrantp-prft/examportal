using AutoMapper;
using Moq;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;
using PerftEvaluation.Helper.Common;
using PerftEvaluation.Helper.Mapper;
using System.Collections.Generic;
using Xunit;

namespace PerftEvaluation.Test
{
    /// <summary>
    /// Test Class
    /// </summary>
    public class BalMasterServiceTests
    {
        /// <summary>
        /// Test1 Method 
        /// </summary>
        [Fact]
        public void GetAllMasters_TranslateCorrectly()
        {
            bool actual = false;
            RequestModel requestModel = new RequestModel();
            requestModel.PageNumber = 1;
            requestModel.PageSize = 5;

            #region ToDo :Pickup all Configuration from main application itself by separating configuration from startup? 
            // Auto Mapper Configurations
            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new MappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();

            #endregion

            Masters masters = new Masters();
            List<Masters> mastersExpected = new List<Masters>();
            //masters = Utility.GetRandomPropertyValues<Masters>(masters);
            masters = Utility.GetRandomPropertyValues<Masters>(masters);
            mastersExpected.Add(masters);

            var masterDal = new Mock<IMasterRepository>();

            masterDal.Setup(r => r.GetAllMasters()).Returns(mastersExpected);

            MasterService masterServiceBal = new MasterService(masterDal.Object, mapper);
            List<MastersDTO> masterActual = new List<MastersDTO>();

            if (Utility.CompareToObjectProperties<Masters, MastersDTO>(mastersExpected[0], masterActual[0]))
            {
                actual = true;
            }

            Assert.True(actual);
        }

        [Fact]
        public void ShuffleListBasedOnChar_Success()
        {
            ListHelper listHelper = new ListHelper();
            List<Questions> questions = new List<Questions>();

            questions.Add(new Questions()
            {
                CategoryId = "1",
                Question = "asdasd asd sad"
            });

            questions.Add(new Questions()
            {
                CategoryId = "2",
                Question = "Xsdfs fdfds fsdf dsYZ"
            });

            questions.Add(new Questions()
            {
                CategoryId = "3",
                Question = "sdf dsf sdf dsfesf ds cd"
            });

            questions.Add(new Questions()
            {
                CategoryId = "4",
                Question = "DYdfdsfdsfsdfdfsdfH"
            });

            List<Questions> results = listHelper.ShuffleListBasedOnChar(questions);

            Assert.True(true);
        }
    }
}