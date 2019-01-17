using System;

namespace PerftEvaluation.DTO {
    /// <summary>
    /// API Response model
    /// </summary>
    public class ResponseModel {
        public string Message { get; set; }
        public object Data { get; set; }
        public int PageSize { get; set; }
        public int StartIndex { get; set; }
    }
}