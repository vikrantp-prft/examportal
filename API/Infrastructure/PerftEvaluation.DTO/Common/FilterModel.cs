using System;

namespace PerftEvaluation.DTO.Common {
    /// <summary>
    /// Filter and Pagination model
    /// </summary>
    public class FilterModel {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public int TotleRecords { get; set; }
        public string FilterBy { get; set; }
        public string SortBy { get; set; }
        public bool IsDescending { get; set; }
    }
}