using System;

namespace PerftEvaluation.DTO.Common {
    /// <summary>
    /// Filter and Pagination model
    /// </summary>
    public class FilterModel {
        private int pageSize = 20;
        public int PageSize {
            get {
                if (pageSize.Equals (0))
                    pageSize = 20;
                return pageSize;
            }
            set {
                pageSize = value;
            }
        }
        public int PageNumber { get; set; }
        public int TotleRecords { get; set; }
        public string FilterBy { get; set; }
        public string SortBy { get; set; }
        public bool IsDescending { get; set; }
        public int Skip {
            get {
                if (PageSize.Equals (0))
                    PageSize = 20;
                if (PageNumber.Equals (0))
                    PageNumber = 0;
                return (PageNumber * PageSize) - PageSize;
            }
        }
    }
}