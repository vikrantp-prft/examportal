using System;

namespace PerftEvaluation.DTO {
    /// <summary>
    /// Request model for API
    /// </summary>
    public class RequestModel {
        public string Id { get; set; }
        public string Filter { get; set; }
        public int PageNo {get;set;}
        public int PageSize {get;set;}

    }
}