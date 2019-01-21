using System;
using PerftEvaluation.DTO;

namespace PerftEvaluation.Api.Controllers {
    /// <summary>
    /// Common response format for API
    /// </summary>
    public static class CommonResponse {
        public static ResponseModel ExceptionResponse (Exception ex) {
            ResponseModel responseModel = new ResponseModel ();
            responseModel.Message = ex.Message;
            responseModel.StatusCode= 500;
            responseModel.Data = new object ();

            return responseModel;
        }
    }
}