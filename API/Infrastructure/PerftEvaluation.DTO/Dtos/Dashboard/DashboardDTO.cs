using System;

namespace PerftEvaluation.DTO.Dtos.Dashboard {
    /// <summary>
    /// Dashboard model DTO
    /// </summary>
    public class DashboardDTO {
        public int UserCount { get; set; }
        public int EmployeeCount { get; set; }
        public int TraineeCount { get; set; }
    }
}