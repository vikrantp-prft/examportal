using System;
using System.ComponentModel.DataAnnotations;

namespace PerftEvaluation.DTO.Dtos {
    /// <summary>
    /// Master entities DTO's
    /// </summary>
    public class MastersDTO {
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }
        public string Description { get; set; }

        [Required]
        public string MasterType { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}