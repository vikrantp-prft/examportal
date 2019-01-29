using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Moq;
using PerftEvaluation.BAL.Services;
using PerftEvaluation.DAL.Interface;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Entities.POCOEntities;
using PerftEvaluation.Helper.Mapper;
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
            List<MastersDTO> masterActual = masterServiceBal.GetMasters.ToList();

            if (Utility.CompareToObjectProperties<Masters, MastersDTO>(mastersExpected[0], masterActual[0]))
            {
                actual = true;
            }

            Assert.True(actual);
        }
    }
}