using System;

namespace PerfiEvaluation.Identity.Mongo.Model
{
    public class ResponseModel
    {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }

    public static class ResponseDTO
    {
        public static ResponseModel ExceptionResponse(string FriendlyMessage)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.Message = FriendlyMessage;
            responseModel.StatusCode = 500;
            responseModel.Data = new object();

            return responseModel;
        }

        public static ResponseModel ExceptionResponse(string FriendlyMessage, object Error)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.Message = FriendlyMessage;
            responseModel.StatusCode = 500;
            responseModel.Data = Error;

            return responseModel;
        }

        public static ResponseModel OkResponse(object data)
        {
            ResponseModel responseModel = new ResponseModel();
            responseModel.Message = "Success";
            responseModel.StatusCode = 200;
            responseModel.Data = data;

            return responseModel;
        }
    }
}


