using System;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.Helper.Common;
using PerftEvaluation.Helper.Interfaces;

namespace PerftEvaluation.Api.Controllers.Masters
{
    /// <summary>
    /// All dropdown API Controller
    /// </summary>
    [Route ("api/[controller]")]
    [ApiController]

    public class DropdownController : ControllerBase
    {

        #region Declarations
        Dropdown dropdown;
        private ResponseModel responseModel = null;
        protected readonly IDropdown _dropdown;
        private readonly IMapper _mapper;
        #endregion

        public DropdownController(IDropdown Dropdown, IMapper Mapper)
        {
            this._mapper = Mapper;
            this._dropdown = Dropdown;
            responseModel = new ResponseModel();
        }

        // GET api/dropdown/departments
        /// <summary>
        /// Get dropdown for department master
        /// </summary>
        /// <returns></returns>
        [HttpGet,  Route ("Departments")]
        public IActionResult Departments()
        {
            try
            {

                responseModel.Message = "Success";
                responseModel.Data = this._dropdown.Departments;

                return Ok(responseModel);
            }
            catch (Exception exception)
            {
                return BadRequest(CommonResponse.ExceptionResponse(exception));
            }
        }
    }
}
