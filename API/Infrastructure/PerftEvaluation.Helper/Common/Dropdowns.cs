using System;
using System.Collections.Generic;
using AutoMapper;
using PerftEvaluation.BAL.Interfaces;
using PerftEvaluation.DTO;
using PerftEvaluation.DTO.Common;
using PerftEvaluation.DTO.Dtos;
using PerftEvaluation.Helper.Interfaces;

namespace PerftEvaluation.Helper.Common {
    public class Dropdown : IDropdown {
        #region Declarations
        protected readonly IMasterService _masterService;
        private readonly IMapper _mapper;

        private readonly ICache _cache;
        #endregion

        public Dropdown (IMasterService MasterService, IMapper mapper, ICache Cache) {
            this._masterService = MasterService;
            this._mapper = mapper;
            this._cache = Cache;
        }

        /// <summary>
        /// Get dropdown for departments
        /// </summary>
        public IEnumerable<DropdownsDTO> Departments {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.DepartmentMaster, Enums.MasterTypes.Department.ToString ());
            }
        }

        /// <summary>
        /// Get dropdown for Teams (.NET, JAVA, etc)
        /// </summary>
        public IEnumerable<DropdownsDTO> Teams {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.TeamMaster, Enums.MasterTypes.Team.ToString ());
            }
        }

        /// <summary>
        /// Get dropdown for Groups
        /// </summary>
        public IEnumerable<DropdownsDTO> Groups {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.GroupMaster, Enums.MasterTypes.Group.ToString ());

            }
        }

        /// <summary>
        /// Get dropdown for Category
        /// </summary>
        public IEnumerable<DropdownsDTO> Category {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.CategoryMaster, Enums.MasterTypes.Category.ToString ());

            }
        }

        /// <summary>
        /// Get dropdown for Designations
        /// </summary>
        public IEnumerable<DropdownsDTO> Designations {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.DesignationMaster, Enums.MasterTypes.Designation.ToString ());
            }
        }

        /// <summary>
        /// Get dropdown for Degrees
        /// </summary>
        public IEnumerable<DropdownsDTO> Degrees {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.DegreeMaster, Enums.MasterTypes.Degree.ToString ());
            }
        }

        /// <summary>
        /// Get dropdown for States
        /// </summary>
        public IEnumerable<DropdownsDTO> States {
            get {
                return _cache.GetDropdownMasterCache (CacheKeys.StateMaster, Enums.MasterTypes.State.ToString ());
            }
        }

    }
}