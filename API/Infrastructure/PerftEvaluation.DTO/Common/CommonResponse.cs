using System;

namespace PerftEvaluation.DTO {
    public static class CommonResponse {
        public static ResponseModel ExceptionResponse (Exception ex) {
            ResponseModel responseModel = new ResponseModel ();
            responseModel.Message = ex.Message;
            responseModel.StatusCode = 500;
            responseModel.Data = new object ();

            return responseModel;
        }

        public static ResponseModel OkResponse (RequestModel requestModel, object data, int totalRecords) {
            ResponseModel responseModel = new ResponseModel ();
            responseModel.Message = "Success";
            responseModel.StatusCode = 200;
            responseModel.Data = data;
            responseModel.SortBy = requestModel.SortBy;
            responseModel.PageNumber = requestModel.PageNumber;
            responseModel.PageSize = requestModel.PageSize;
            responseModel.Filter = requestModel.Filter;
            responseModel.IsDescending = requestModel.IsDescending;
            responseModel.TotleRecords = totalRecords;

            return responseModel;
        }
    }
}