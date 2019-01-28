using System;
using PerftEvaluation.DTO.Common;

namespace PerftEvaluation.DTO {
    /// <summary>
    /// API Response model
    /// </summary>
    public class ResponseModel : FilterModel {
        public int StatusCode { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
}