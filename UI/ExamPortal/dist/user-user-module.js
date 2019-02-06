(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/layout/user/admin-user/admin-user-add/adminuseradd.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-add/adminuseradd.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddAdminUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminUserComponent", function() { return AddAdminUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/core/app.config */ "./src/app/common/core/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAdminUserComponent = /** @class */ (function () {
    function AddAdminUserComponent(router, CommonService, http, formBuilder, toastr) {
        this.router = router;
        this.CommonService = CommonService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.mobnumPattern = "^[7-9]{1}[0-9]{9}$";
        this.emailPattern = "^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$";
        this.adminForm = this.formBuilder.group({
            groupId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            teamId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            designationId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.DESCRIPTION), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.CITY), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            stateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pincode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PINCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PHONE_NO), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.EMAIL)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PASSWORD), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]]
        });
    }
    AddAdminUserComponent.prototype.ngOnInit = function () {
        this.fn_getGroup();
        this.fn_getTeam();
        this.fn_getDesignation();
        this.fn_getState();
        this.adminForm.controls.groupId.setValue("");
        this.adminForm.controls.teamId.setValue("");
        this.adminForm.controls.stateId.setValue("");
        this.adminForm.controls.designationId.setValue("");
    };
    // function to display the error message for  validation.
    AddAdminUserComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    //function to save admin user details
    AddAdminUserComponent.prototype.fn_saveAdminUser = function (value) {
        debugger;
        var url = 'api/User';
        this.fn_saveUserfun(url, value.value);
    };
    //function to save user details.
    AddAdminUserComponent.prototype.fn_saveUserfun = function (url, data) {
        var _this = this;
        this.CommonService.fn_PostWithData(data, url).subscribe(function (result) {
            var rs = result;
            if (rs.statusCode == 200) {
                _this.toastr.success('User details added successfully!');
                _this.router.navigate(['user/adminuserlist']);
            }
            else {
                _this.toastr.error('Failed to add User details');
            }
        });
    };
    //function to get group list
    AddAdminUserComponent.prototype.fn_getGroup = function () {
        var _this = this;
        var url = 'api/Dropdown/Groups';
        this.CommonService.fn_Get(url).subscribe(function (result) {
            var teamResult = result;
            if (teamResult.statusCode == 200) {
                _this.groupArray = teamResult.data;
            }
            else {
                _this.groupArray = null;
            }
        });
    };
    AddAdminUserComponent.prototype.fn_getTeam = function () {
        var _this = this;
        var url = 'api/Dropdown/Teams';
        this.CommonService.fn_Get(url).subscribe(function (result) {
            var teamResult = result;
            if (teamResult.statusCode == 200) {
                _this.teamArray = teamResult.data;
            }
            else {
                _this.teamArray = null;
            }
        });
    };
    AddAdminUserComponent.prototype.fn_getDesignation = function () {
        var _this = this;
        var url = 'api/Dropdown/Designations';
        this.CommonService.fn_Get(url).subscribe(function (result) {
            var teamResult = result;
            if (teamResult.statusCode == 200) {
                _this.designationArray = teamResult.data;
            }
            else {
                _this.designationArray = null;
            }
        });
    };
    AddAdminUserComponent.prototype.fn_getState = function () {
        var _this = this;
        var url = 'api/Dropdown/States';
        this.CommonService.fn_Get(url).subscribe(function (result) {
            var teamResult = result;
            if (teamResult.statusCode == 200) {
                _this.stateArray = teamResult.data;
            }
            else {
                _this.stateArray = null;
            }
        });
    };
    AddAdminUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adminuser-add-update',
            template: __webpack_require__(/*! ./adminuseradd.html */ "./src/app/layout/user/admin-user/admin-user-add/adminuseradd.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__["commonService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AddAdminUserComponent);
    return AddAdminUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-add/adminuseradd.html":
/*!*************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-add/adminuseradd.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-xs-12 col-lg-12 card\">\r\n      <div class=\"card-header\">\r\n        <h1 class=\"h3\">Add User</h1>\r\n        <div class=\"back-btn\">\r\n          <button [routerLink]=\"['/user/adminuserlist']\" class=\"btn btn-primary\"><span><i class=\"fa fa-arrow-left\"></i></span>\r\n            Back </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n        <form [formGroup]=\"adminForm\" (ngSubmit)=\"fn_saveAdminUser(adminForm)\">\r\n          <div class=\"sections\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">User group</label>\r\n              <select class=\"form-control\" formControlName=\"groupId\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let group of groupArray\" value={{group.id}}>\r\n                  {{group.name}}\r\n                </option>\r\n              </select>\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'groupId')\" errorMsg=\"Select group.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">Team</label>\r\n              <select class=\"form-control\" formControlName=\"teamId\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let team of teamArray\" value={{team.id}}>\r\n                  {{team.name}}\r\n                </option>\r\n              </select>\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'teamId')\" errorMsg=\"Select team.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">Select Designation</label>\r\n              <select class=\"form-control\" formControlName=\"designationId\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let designation of designationArray\" value={{designation.id}}>\r\n                  {{designation.name}}\r\n                </option>\r\n              </select>\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'designationId')\" errorMsg=\"Select designation.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"firstName\">First Name<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" id=\"firstName\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'firstName')\" errorMsg=\"Enter valid first name.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lastName\">Last Name<span class=\"text-danger\">*</span></label>\r\n              <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" id=\"lastName\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'lastName')\" errorMsg=\"Enter valid middle name.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dateOfBirth\">Date of Birth Name</label>\r\n              <input type=\"date\" formControlName=\"dateOfBirth\" class=\"form-control\" id=\"dateOfBirth\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'dateOfBirth')\" errorMsg=\"Enter valid date of birth.\">\r\n              </app-field-error-display>\r\n            </div>\r\n          </div>\r\n          <div class=\"sections\">\r\n            <div class=\"form-group\">\r\n              <label for=\"address\">Address</label>\r\n              <textarea class=\"form-control\" formControlName=\"address1\" id=\"address1\"></textarea>\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'address1')\" errorMsg=\"Enter address.\">\r\n              </app-field-error-display>\r\n              <textarea class=\"form-control\" formControlName=\"address2\" id=\"address2\"></textarea>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"city\"> City </label>\r\n              <input type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"city\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'city')\" errorMsg=\"Enter city.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">State</label>\r\n              <select class=\"form-control\" formControlName=\"stateId\">\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let state of stateArray\" value=\"{{state.id}}\">\r\n                  {{state.name}}\r\n                </option>\r\n              </select>\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'stateId')\" errorMsg=\"Select state.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"pincode\"> Pincode </label>\r\n              <input type=\"text\" formControlName=\"pincode\" class=\"form-control\" id=\"pincode\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'pincode')\" errorMsg=\"Enter pincode.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"mobile\">Mobile</label>\r\n              <input type=\"text\" formControlName=\"mobile\" class=\"form-control\" id=\"mobile\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'mobile')\" errorMsg=\"Enter mobile no.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"note\">Note (if any)</label>\r\n              <textarea class=\"form-control\" formControlName=\"note\" id=\"note\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"sections\">\r\n            <div class=\"section-heading\">\r\n              <h2>Login Details</h2>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email :</label>\r\n              <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"email\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'email')\" errorMsg=\"Enter email.\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password :<span class=\"text-danger\">*</span></label>\r\n              <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\">\r\n              <app-field-error-display [displayError]=\"isFieldValid(adminForm, 'password')\" errorMsg=\"Enter password.\">\r\n              </app-field-error-display>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-sections\">\r\n            <button id=\"btnSubmit\" class=\"btn btn-primary btn-md\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-default btn-md ml-3\" (click)=\"fn_resetUserDetails()\">Reset</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".emp-list .add-users {\n  display: inline-block;\n  margin-right: 20px; }\n  .emp-list .add-users.dataTables_length_code {\n    float: right;\n    width: initial; }\n  .emp-list .add-users-search {\n  display: inline-flex;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXIvYWRtaW4tdXNlci9hZG1pbi11c2VyLWxpc3QvRDpcXFZhaXNoYWxpIFByb2plY3RzXFxFeGFtVGVzdFxcZXhhbXBvcnRhbFxcVUlcXGV4YW1wb3J0YWwvc3JjXFxhcHBcXGxheW91dFxcdXNlclxcYWRtaW4tdXNlclxcYWRtaW4tdXNlci1saXN0XFxhZG1pbnVzZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBO0VBSDFCO0lBTVksWUFBWTtJQUNaLGNBQWMsRUFBQTtFQVAxQjtFQVdRLG9CQUFvQjtFQUNwQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyL2FkbWluLXVzZXIvYWRtaW4tdXNlci1saXN0L2FkbWludXNlcmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wLWxpc3R7XHJcbiAgICAuYWRkLXVzZXJze1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICYuZGF0YVRhYmxlc19sZW5ndGhfY29kZXtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWRkLXVzZXJzLXNlYXJjaHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserListComponent", function() { return AdminUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminUserListComponent = /** @class */ (function () {
    function AdminUserListComponent(router, CommonService, http) {
        this.router = router;
        this.CommonService = CommonService;
        this.http = http;
        this.params = {
            pageNumber: 1,
            pageSize: 10,
        };
        this.getUserurl = 'api/User/GetUsers';
        this.i = 0;
        this.startrecordno = 1;
        this.endrecord = 1;
        this.recordno = 0;
        this.totalItems = 0;
        this.userList = [];
    }
    // Function for  pagination
    AdminUserListComponent.prototype.setRecordPerPage = function (event) {
        this.params.pageNumber = 1;
        this.params.pageSize = event.target.value;
        this.fn_GetAdminUserList();
    };
    AdminUserListComponent.prototype.pageChanged = function (event) {
        console.log(event);
        this.params.pageNumber = parseInt(event.page);
        this.params.pageSize = parseInt(event.itemsPerPage);
        this.fn_GetAdminUserList();
    };
    // Searching
    AdminUserListComponent.prototype.searchRecord = function (event) {
    };
    AdminUserListComponent.prototype.ngOnInit = function () {
        this.fn_GetAdminUserList();
    };
    AdminUserListComponent.prototype.fn_GetAdminUserList = function () {
        var _this = this;
        var prop = {
            pageNumber: parseInt(this.params.pageNumber),
            pageSize: parseInt(this.params.pageSize),
            searchString: this.params.searchString
        };
        this.CommonService.fn_PostWithData(this.params, this.getUserurl).subscribe(function (result) {
            var rs = result;
            if (rs.statusCode == 200) {
                _this.userList = rs.data;
            }
            else {
            }
        });
    };
    AdminUserListComponent.prototype.fn_getEmployee = function (id) {
    };
    AdminUserListComponent.prototype.fn_deleteAdminUser = function (Id) {
        var _this = this;
        if (Id != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: 'Are you sure?',
                text: 'You want to delete the User!',
                buttonsStyling: true,
                confirmButtonClass: 'btn btn-success',
                showCancelButton: true,
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!'
            }).then(function (x) {
                if (x.value = true) {
                    var url = 'api/User/InactivateUser';
                    var model = {
                        id: ''
                    };
                    model.id = Id;
                    _this.fn_delfun(url, model);
                }
            });
        }
    };
    // function for soft deleting the Admin User.
    AdminUserListComponent.prototype.fn_delfun = function (url, data) {
        var _this = this;
        this.CommonService.fn_PostWithData(data, url).subscribe(function (result) {
            var rs = result;
            if ((result.message = 'Success')) {
                _this.toastr.success('User\'s details deleted successfully!');
                _this.fn_GetAdminUserList();
            }
        });
    };
    AdminUserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'adminuser-list',
            template: __webpack_require__(/*! ./adminuserlist.html */ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.html"),
            providers: [src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__["commonService"]],
            styles: [__webpack_require__(/*! ./adminuserlist.component.scss */ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__["commonService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AdminUserListComponent);
    return AdminUserListComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-list/adminuserlist.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <h1 class=\"h3 font-weight-bold mb-0\">Users</h1>\r\n        </div>\r\n        <div class=\"datatable-header\">\r\n          <div class=\"mx-1 row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"\">\r\n                <select class=\"custom-select\" id=\"inlineFormCustomSelect\" (change)=\"setRecordPerPage($event)\">\r\n                  <option selected>Per Page</option>\r\n                  <option value=\"10\">10</option>\r\n                  <option value=\"25\">25</option>\r\n                  <option value=\"50\">50</option>\r\n                  <option value=\"100\">100</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <button [routerLink]=\"['/user/addadminuser']\" class=\"btn btn-md btn-primary\" title=\"Add User\">\r\n                Add\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <input (keyup)=\"searchRecord($event)\" type=\"text\" ng-model=\"search\" id=\"serach\" placeholder=\"Search\"\r\n                class=\"form-control\" />\r\n              <a href=\"#\" class=\"search-icon\">\r\n                <i class=\"fa fa-search\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body pb-0 table-responsive\">\r\n          <table class=\"table table-hover table-striped  table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr.</th>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Team</th>\r\n                <th>Active</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of userList; let i = index\">\r\n                <td>{{i}}</td>\r\n                <td>{{user.firstName}} {{user.lastName}}</td>\r\n                <td>{{user.email}}</td>\r\n                <td>\r\n                  <!--<div *ngIf=\"emp.team!=null\">\r\n                    {{user.team.name}}\r\n                  </div> -->\r\n                </td>\r\n                <td>\r\n                  <i class=\"fa\" [ngClass]=\"{'fa-check text-success': user.isActive, 'fa-times text-danger': !user.isActive}\"\r\n                    aria-hidden=\"true\">\r\n                  </i>\r\n                </td>\r\n                <td>\r\n                  <button class=\"btn btn-md\" type=\"button\" rel=\"tooltip\" [routerLink]=\"['', user.id]\"\r\n                    title=\"Edit Admin\">\r\n                    <i class=\"fa fa-pencil-square-o text-dark\" aria-hidden=\"true\"></i>\r\n                  </button>&nbsp;\r\n                  <button title=\"Change Status\" class=\"btn btn-md mx-1\" type=\"button\" rel=\"tooltip\" (click)=\"fn_ChangeStatus(user.id, user.isActive)\">\r\n                    <i class=\"fa\" [ngClass]=\"{'fa-toggle-on text-success': user.isActive, 'fa-toggle-off text-danger': !user.isActive}\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-md\" type=\"button\" rel=\"tooltip\" (click)=\"fn_deleteEmployee(emp.id)\" title=\"Delete Admin\">\r\n                    <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <!-- <pagination class=\"pull-right pr-2\" [totalItems]=\"employeeModel.totalRecords\" [itemsPerPage]=\"employeeModel.pageSize\"\r\n          (pageChanged)=\"pageChanged($event)\" [maxSize]=\"3\" [boundaryLinks]=\"true\" [rotate]=\"false\" previousText=\"PREVIOUS\"\r\n          nextText=\"NEXT\" firstText=\"FIRST\" lastText=\"LAST\"></pagination> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-user-update works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyL2FkbWluLXVzZXIvYWRtaW4tdXNlci11cGRhdGUvYWRtaW4tdXNlci11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AdminUserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserUpdateComponent", function() { return AdminUserUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminUserUpdateComponent = /** @class */ (function () {
    function AdminUserUpdateComponent() {
    }
    AdminUserUpdateComponent.prototype.ngOnInit = function () {
    };
    AdminUserUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-user-update',
            template: __webpack_require__(/*! ./admin-user-update.component.html */ "./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.html"),
            styles: [__webpack_require__(/*! ./admin-user-update.component.scss */ "./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminUserUpdateComponent);
    return AdminUserUpdateComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/employee/employee-list/employeelist.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/user/employee/employee-list/employeelist.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeListComponent = /** @class */ (function () {
    // Constructor
    function EmployeeListComponent(router, CommonService, http, toastr) {
        this.router = router;
        this.CommonService = CommonService;
        this.http = http;
        this.toastr = toastr;
        this.employeeModel = {
            // "id": "string",
            // "pageSize": 0,
            // "pageNumber": 0,
            "totalRecords": 0,
            // "filter": "string",
            // "sortBy": "string",
            // "isDescending": true
            "pageSize": 10,
            "pageNumber": 1
        };
        this.i = 0;
        this.startrecordno = 1;
        this.endrecord = 1;
        this.recordno = 0;
        this.totalItems = 0;
        this.employeeList = [];
        this.employeeData = { totalRecords: '' };
    }
    EmployeeListComponent.prototype.showSuccess = function () {
        this.toastr.success('Hello world!', 'Toastr fun!');
    };
    // Lifecycle method
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.fn_GetEmployeeList();
    };
    // Function for  pagination
    EmployeeListComponent.prototype.setRecordPerPage = function (event) {
        this.employeeModel.pageNumber = 1;
        this.employeeModel.pageSize = event.target.value;
        this.fn_GetEmployeeList();
    };
    EmployeeListComponent.prototype.pageChanged = function (event) {
        this.employeeModel.pageNumber = parseInt(event.page);
        this.employeeModel.pageSize = parseInt(event.itemsPerPage);
        this.fn_GetEmployeeList();
    };
    // Searching
    EmployeeListComponent.prototype.searchRecord = function (event) {
        if (event.keyCode == 13) {
            this.employeeModel.pageNumber = 1;
            this.employeeModel.pageSize = 10;
            this.employeeModel.filter = event.target.value;
            this.fn_GetEmployeeList();
        }
    };
    // Function to get list of employees
    EmployeeListComponent.prototype.fn_GetEmployeeList = function () {
        var _this = this;
        var url = 'api/Employee/GetEmployees';
        this.CommonService.fn_PostWithData(this.employeeModel, url).subscribe(function (data) {
            _this.employeeList = data.data;
            _this.employeeModel.totalRecords = data.totalRecords;
        }, function (err) { return console.error(err); }, function () { });
    };
    // Function to get employee ID
    EmployeeListComponent.prototype.fn_getEmployee = function (empid) {
        this.router.navigate(['/user/updateemployee'], { queryParams: { _empid: empid } });
    };
    // function to display the alert before deleting the Order.
    EmployeeListComponent.prototype.fn_deleteEmployee = function (Id) {
        var _this = this;
        if (Id != null) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: 'Are you sure?',
                text: 'You want to delete the Employee!',
                buttonsStyling: true,
                confirmButtonClass: 'btn btn-success',
                showCancelButton: true,
                cancelButtonClass: 'btn btn-danger',
                confirmButtonText: 'Yes, delete it!'
            }).then(function (x) {
                if (x.value == true) {
                    var url = 'api/Employee/DeleteEmployee';
                    var model = {
                        id: ''
                        // deletedBy: 0
                    };
                    model.id = Id;
                    // obj_SearchDetails.deletedBy = 1;
                    _this.fn_delfun(url, model);
                }
            });
        }
    };
    // function for soft deleting the Employee.
    EmployeeListComponent.prototype.fn_delfun = function (url, data) {
        var _this = this;
        this.CommonService.fn_PostWithData(data, url).subscribe(function (result) {
            var rs = result;
            if ((result.message = 'Success')) {
                _this.toastr.success('Employee details deleted successfully!');
                _this.fn_GetEmployeeList();
            }
        });
    };
    // function to change isActive status
    EmployeeListComponent.prototype.fn_ChangeStatus = function (id, isActive) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            title: 'Are you sure?',
            text: 'You want to change the status!',
            buttonsStyling: true,
            confirmButtonClass: 'btn btn-success',
            showCancelButton: true,
            cancelButtonClass: 'btn btn-danger',
            confirmButtonText: 'Yes'
        }).then(function (x) {
            if (x.value == true) {
                if (isActive == true) {
                    _this.statusUrl = 'api/Employee/InactivateEmployee';
                }
                else {
                    _this.statusUrl = 'api/Employee/ActivateEmployee';
                }
                var employeeStatusModel = {
                    "id": id,
                };
                _this.fn_saveStatusChange(_this.statusUrl, employeeStatusModel);
            }
        });
    };
    //function to save status change
    EmployeeListComponent.prototype.fn_saveStatusChange = function (url, data) {
        var _this = this;
        this.CommonService.fn_PostWithData(data, url).subscribe(function (result) {
            var rs = result;
            if (rs.statusCode == 200) {
                _this.fn_GetEmployeeList();
            }
            else {
            }
        });
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employee-list',
            template: __webpack_require__(/*! ./employeelist.html */ "./src/app/layout/user/employee/employee-list/employeelist.html"),
            providers: [src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_2__["commonService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_2__["commonService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/employee/employee-list/employeelist.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/user/employee/employee-list/employeelist.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <h1 class=\"h3 font-weight-bold mb-0\">Employees</h1>\r\n        </div>\r\n        <div class=\"datatable-header\">\r\n          <div class=\"mx-1 row\">\r\n            <div class=\"col-md-2\">\r\n              <div class=\"\">\r\n                <select class=\"custom-select\" id=\"inlineFormCustomSelect\" (change)=\"setRecordPerPage($event)\">\r\n                  <option selected>Per Page</option>\r\n                  <option value=\"10\">10</option>\r\n                  <option value=\"25\">25</option>\r\n                  <option value=\"50\">50</option>\r\n                  <option value=\"100\">100</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <button [routerLink]=\"['/user/addemployee']\" class=\"btn btn-md btn-primary\" title=\"Add Employee\">\r\n                Add\r\n              </button>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n              <input (keyup)=\"searchRecord($event)\" type=\"text\" ng-model=\"search\" id=\"serach\" placeholder=\"Search\"\r\n                class=\"form-control\" />\r\n              <a href=\"#\" class=\"search-icon\">\r\n                <i class=\"fa fa-search\"></i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body pb-0 table-responsive\">\r\n          <table class=\"table table-hover table-striped  table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr.</th>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Team</th>\r\n                <th>Active</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let emp of employeeList; let i = index\">\r\n                <td>{{(employeeModel.pageNumber-1)*10 + i +1 }}</td>\r\n                <td>{{emp.firstName}} {{emp.lastName}}</td>\r\n                <td>{{emp.email}}</td>\r\n                <td>\r\n                  <div *ngIf=\"emp.team!=null\">\r\n                    {{emp.team.name}}\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <i class=\"fa\" [ngClass]=\"{'fa-check text-success': emp.isActive, 'fa-times text-danger': !emp.isActive}\"\r\n                    aria-hidden=\"true\">\r\n                  </i>\r\n                </td>\r\n                <td>\r\n                  <button class=\"btn btn-md\" type=\"button\" rel=\"tooltip\" [routerLink]=\"['/user/updateemployee', emp.id]\"\r\n                    title=\"Edit Employee\">\r\n                    <i class=\"fa fa-pencil-square-o text-dark\" aria-hidden=\"true\"></i>\r\n                  </button>&nbsp;\r\n                  <button title=\"Change Status\" class=\"btn btn-md mx-1\" type=\"button\" rel=\"tooltip\" (click)=\"fn_ChangeStatus(emp.id, emp.isActive)\">\r\n                    <i class=\"fa\" [ngClass]=\"{'fa-toggle-on text-success': emp.isActive, 'fa-toggle-off text-danger': !emp.isActive}\"\r\n                      aria-hidden=\"true\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-md\" type=\"button\" rel=\"tooltip\" (click)=\"fn_deleteEmployee(emp.id)\" title=\"Delete Employee\">\r\n                    <i class=\"fa fa-trash text-danger\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <pagination class=\"pull-right pr-2\" [totalItems]=\"employeeModel.totalRecords\" [itemsPerPage]=\"employeeModel.pageSize\"\r\n          (pageChanged)=\"pageChanged($event)\" [maxSize]=\"3\" [boundaryLinks]=\"true\" [rotate]=\"false\" previousText=\"PREVIOUS\"\r\n          nextText=\"NEXT\" firstText=\"FIRST\" lastText=\"LAST\"></pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/employee/employee-update/employee-update.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/user/employee/employee-update/employee-update.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h1 class=\"h3 font-weight-bold mb-0\">\r\n      Update Employee\r\n    </h1>\r\n    <div class=\"back-btn\">\r\n      <button [routerLink]=\"['/user/employeelist']\" class=\"btn btn-primary\"><span><i class=\"fa fa-arrow-left\"></i></span>\r\n        Back </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n      <form [formGroup]=\"employeeForm\" (ngSubmit)=\"fn_updateEmployee(employeeForm)\">\r\n        <div class=\"sections\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Team</label><span style=\"color:red\">*</span>\r\n            <select class=\"form-control\" formControlName=\"teamId\">\r\n              <option value=\"null\">--Select--</option>\r\n              <option *ngFor=\"let team of teamArray\" value={{team.id}}>\r\n                {{team.name}}\r\n              </option>\r\n            </select>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'teamId')\" errorMsg=\"Select team.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\">First Name</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"First Name\" formControlName=\"firstName\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'firstName')\" errorMsg=\"Enter valid first name.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\">Middle Name</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"middleName\" placeholder=\"Middle Name\" formControlName=\"middleName\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'middleName')\" errorMsg=\"Enter valid middle name.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\">Last Name</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Last Name\" formControlName=\"lastName\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'lastName')\" errorMsg=\"Enter valid last name.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"dateOfBirth\">Date of Birth</label><span style=\"color:red\">*</span>\r\n            <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" formControlName=\"dob\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'dob')\" errorMsg=\"Enter valid date of birth.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"mobile\">Mobile</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"mobile\" placeholder=\"Mobile\" formControlName=\"mobile\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'mobile')\" errorMsg=\"Enter valid mobile number\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Permanent Address</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Address\">Address</label><span style=\"color:red\">*</span>\r\n            <textarea class=\"form-control\" id=\"address1\" placeholder=\"Address 1\" formControlName=\"address1\"></textarea>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'address1')\" errorMsg=\"Enter permanent address\">\r\n            </app-field-error-display>\r\n            <textarea class=\"form-control mt-2\" id=\"address2\" placeholder=\"Address 2\" formControlName=\"address2\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"city\" placeholder=\"City\" formControlName=\"city\" placeholder=\"City\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'city')\" errorMsg=\"Enter permanent city\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"State\">State</label><span style=\"color:red\">*</span>\r\n            <select class=\"form-control\" formControlName=\"stateId\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let state of stateArray\" value={{state.id}}>\r\n                {{state.name}}\r\n              </option>\r\n            </select>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'stateId')\" errorMsg=\"Select permanent state\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pincode\">Pincode</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"pincode\" placeholder=\"Pincode\" formControlName=\"pincode\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'pincode')\" errorMsg=\"Enter valid 6 digit pincode\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Current Address</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Address\">Address</label>\r\n            <textarea class=\"form-control\" id=\"currentAddress1\" placeholder=\"Address 1\" formControlName=\"currentAddress1\"></textarea>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentAddress1')\" errorMsg=\"Enter current address\">\r\n            </app-field-error-display>\r\n            <textarea class=\"form-control mt-2\" id=\"currentAddress2\" placeholder=\"Address 2\" formControlName=\"currentAddress2\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\"> City </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"currentCity\" placeholder=\"City\" formControlName=\"currentCity\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentCity')\" errorMsg=\"Enter current city\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"currentStateId\">State</label>\r\n            <select class=\"form-control\" formControlName=\"currentStateId\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let state of stateArray\" value={{state.id}}>\r\n                {{state.name}}\r\n              </option>\r\n            </select>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentStateId')\" errorMsg=\"Select current state\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"currentPincode\"> Pincode </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"currentPincode\" placeholder=\"Pincode\" formControlName=\"currentPincode\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentPincode')\" errorMsg=\"Enter valid 6 digit pincode\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Educational Details</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"courseId\"> Course </label>\r\n            <select class=\"form-control\" formControlName=\"courseId\" (change)=\"fn_getSelectedCourse($event)\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let course of courseArray\" value={{course.id}}>\r\n                {{course.name}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"yearOfPassing\">Year Of Passing </label>\r\n            <select class=\"form-control\" formControlName=\"yearOfPassing\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let passingYear of yearOfPassingArray\" value={{passingYear.year}}>\r\n                {{passingYear.year}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"institute\"> Institution </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"institution\" placeholder=\"Institute\" formControlName=\"institution\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"institute\"> Percentage </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"percentage\" placeholder=\"Percentage\" formControlName=\"percentage\" (keyup)=\"onlyPercentage($event)\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"addEducationButton\">\r\n            <input type=\"button\" class=\"btn btn-default\" id=\"btnAddNewEducationDetails\" value=\"Add\" (click)=\"fn_addNewCourse()\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"updateEducationButton\">\r\n            <input type=\"button\" class=\"btn btn-default\" id=\"btnUpdateNewEducationDetails\" value=\"Update\" (click)=\"fn_updateNewCourse()\">\r\n          </div>\r\n          <div>\r\n            <table class=\"table table-bordered\" id=\"educationDetailsTable\">\r\n              <thead>\r\n                <tr>\r\n                  <th hidden=\"hidden\">CourseID</th>\r\n                  <th>Course</th>\r\n                  <th>Year of Passing (YYYY)</th>\r\n                  <th>School/College/University</th>\r\n                  <th>Percentage %</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let educationField of educationArray; let i = index\">\r\n                  <td hidden=\"hidden\">\r\n                    <label>{{educationField.courseId}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.course.name}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.yearOfPassing}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.institution}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.percentage}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"btn btn-default btn-md\" type=\"button\" (click)=\"fn_editCourse(i)\">Edit</button>\r\n                    <button class=\"btn btn-default btn-md ml-3\" type=\"button\" (click)=\"fn_deleteCourse(i)\">Delete</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"form-group\">\r\n              <label for=\"Interest\">Interest: </label><span style=\"color:red\">*</span>\r\n              <div *ngFor=\"let interest of interestArray; let i=index\" class=\"form-check form-check-inline\">\r\n                <label>\r\n                  <input class=\"mx-1\" type=\"checkbox\" [value]=\"interest.value\" (change)=\"fn_onInterestChange($event)\"\r\n                    [(ngModel)]=\"interest.selected\" [ngModelOptions]=\"{standalone: true}\">\r\n                  {{interest.description}}\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"other-details\"> Note (If any): </label>\r\n              <textarea class=\"form-control\" id=\"note\" formControlName=\"note\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Login Details</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email :</label><span style=\"color:red\">*</span>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'email')\" errorMsg=\"Enter valid email id\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password :</label><span style=\"color:red\">*</span>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'password')\" errorMsg=\"Enter valid password\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-sections\">\r\n          <button class=\"btn btn-primary btn-md\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-default btn-md ml-3\" (click)=\"fn_resetEmployeeDetails()\">Reset</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/employee/employee-update/employee-update.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/user/employee/employee-update/employee-update.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyL2VtcGxveWVlL2VtcGxveWVlLXVwZGF0ZS9lbXBsb3llZS11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/user/employee/employee-update/employee-update.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/user/employee/employee-update/employee-update.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EmployeeUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeUpdateComponent", function() { return EmployeeUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/core/app.config */ "./src/app/common/core/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeUpdateComponent = /** @class */ (function () {
    function EmployeeUpdateComponent(router, CommonService, formBuilder, route, toastr) {
        var _this = this;
        this.router = router;
        this.CommonService = CommonService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.toastr = toastr;
        this.educationArray = [];
        this.courseFlag = false;
        this.updateEducationButton = false;
        this.addEducationButton = true;
        this.interestArray = [
            { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)', selected: false },
            { description: "HTML/CSS", value: 'HTML/CSS', selected: false },
            { description: "Flash/Flex", value: 'Flash/Flex', selected: false },
            { description: "Design", value: 'Design', selected: false }
        ];
        this.yearOfPassingArray = [
            { year: 1991 }, { year: 1992 }, { year: 1993 }, { year: 1994 }, { year: 1995 }, { year: 1996 }, { year: 1997 }, { year: 1998 }, { year: 1999 }, { year: 2000 },
            { year: 2001 }, { year: 2002 }, { year: 2003 }, { year: 2004 }, { year: 2005 }, { year: 2006 }, { year: 2007 }, { year: 2008 }, { year: 2009 }, { year: 2010 },
            { year: 2011 }, { year: 2012 }, { year: 2013 }, { year: 2014 }, { year: 2015 }, { year: 2016 }, { year: 2017 }, { year: 2018 }
        ];
        this.employeeForm = this.formBuilder.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            middleName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            //phone: [null, [Validators.required, Validators.pattern(appConfig.pattern.PHONE_NO), Validators.maxLength(20)]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.PHONE_NO), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            address1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.DESCRIPTION), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.CITY), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            stateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pincode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.PINCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
            currentAddress1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.DESCRIPTION), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            currentAddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            currentCity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.CITY), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            currentStateId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            currentPincode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.PINCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            teamId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.EMAIL)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.PASSWORD)]],
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            yearOfPassing: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            educationDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.route.params.subscribe(function (params) {
            _this.employeeId = params['_empid'];
        });
    }
    EmployeeUpdateComponent.prototype.ngOnInit = function () {
        this.fn_getTeam();
        this.fn_getState();
        this.fn_getCourse();
        this.fn_getEmployeeDetailsById();
        this.employeeForm.controls.courseId.setValue("");
        this.employeeForm.controls.yearOfPassing.setValue("");
    };
    // function to display the error message for  validation.
    EmployeeUpdateComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    // function to get teams
    EmployeeUpdateComponent.prototype.fn_getTeam = function () {
        var _this = this;
        var teamUrl = 'api/Dropdown/Teams';
        this.CommonService.fn_Get(teamUrl).subscribe(function (result) {
            var teamResult = result;
            if (teamResult.statusCode == 200) {
                _this.teamArray = teamResult.data;
            }
            else {
                _this.teamArray = null;
            }
        });
    };
    //function to get state
    EmployeeUpdateComponent.prototype.fn_getState = function () {
        var _this = this;
        var stateUrl = 'api/Dropdown/States';
        this.CommonService.fn_Get(stateUrl).subscribe(function (result) {
            var stateResult = result;
            if (stateResult.statusCode == 200) {
                _this.stateArray = stateResult.data;
            }
            else {
                _this.stateArray = null;
            }
        });
    };
    //get course name by courseId
    EmployeeUpdateComponent.prototype.fn_getCourseNameById = function (courseId) {
        var _this = this;
        this.courseArray.forEach(function (element) {
            if (element.id == courseId) {
                _this.courseName = element.name;
                return true;
            }
        });
    };
    //function to get course
    EmployeeUpdateComponent.prototype.fn_getCourse = function () {
        var _this = this;
        var degreeUrl = 'api/Dropdown/Degrees';
        this.CommonService.fn_Get(degreeUrl).subscribe(function (result) {
            var courseResult = result;
            if (courseResult.statusCode == 200) {
                _this.courseArray = courseResult.data;
            }
            else {
                _this.courseArray = null;
            }
        });
    };
    EmployeeUpdateComponent.prototype.fn_getDate = function (inputDate) {
        var date = new Date(inputDate);
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
        if (this.day < 10) {
            this.day = '0' + this.day;
        }
        if (this.month < 10) {
            this.month = '0' + this.month;
        }
        return this.year + '-' + this.month + '-' + this.day;
    };
    //get employee details by employee Id
    EmployeeUpdateComponent.prototype.fn_getEmployeeDetailsById = function () {
        var _this = this;
        var employeeUrl = 'api/Employee/GetEmployeeById';
        var employeeModel = {
            "id": this.employeeId,
            "filter": "string",
            "pageSize": 0,
            "pageNumber": 0,
            "totleRecords": 0,
            "filterBy": "string",
            "sortBy": "string",
            "isDescending": true
        };
        this.CommonService.fn_PostWithData(employeeModel, employeeUrl).subscribe(function (result) {
            var employeeResult = result;
            if (employeeResult.statusCode == 200) {
                if (employeeResult.data != null) {
                    _this.employeeForm.controls.firstName.setValue(employeeResult.data.firstName);
                    _this.employeeForm.controls.middleName.setValue(employeeResult.data.middleName);
                    _this.employeeForm.controls.lastName.setValue(employeeResult.data.lastName);
                    _this.employeeForm.controls.address1.setValue(employeeResult.data.address1);
                    _this.employeeForm.controls.address2.setValue(employeeResult.data.address2);
                    _this.employeeForm.controls.currentAddress1.setValue(employeeResult.data.currentAddress1);
                    _this.employeeForm.controls.currentAddress2.setValue(employeeResult.data.currentAddress2);
                    _this.employeeForm.controls.currentCity.setValue(employeeResult.data.currentCity);
                    _this.employeeForm.controls.currentPincode.setValue(employeeResult.data.currentPincode);
                    _this.employeeForm.controls.currentStateId.setValue(employeeResult.data.currentStateId);
                    _this.employeeForm.controls.stateId.setValue(employeeResult.data.stateId);
                    _this.employeeForm.controls.email.setValue(employeeResult.data.email);
                    _this.employeeForm.controls.password.setValue(employeeResult.data.password);
                    _this.employeeForm.controls.teamId.setValue(employeeResult.data.teamId);
                    _this.employeeForm.controls.mobile.setValue(employeeResult.data.mobile);
                    _this.employeeForm.controls.note.setValue(employeeResult.data.note);
                    _this.employeeForm.controls.city.setValue(employeeResult.data.city);
                    _this.employeeForm.controls.pincode.setValue(employeeResult.data.pincode);
                    var date = _this.fn_getDate(employeeResult.data.dob);
                    _this.employeeForm.controls.dob.setValue(date);
                    _this.educationArray = employeeResult.data.educationDetails;
                    _this.fetchInterest = employeeResult.data.interest;
                    _this.checkedInterestArray = _this.employeeForm.get('interest');
                    _this.interestArray.forEach(function (allInterest) {
                        _this.fetchInterest.forEach(function (selectedInterest) {
                            if (allInterest.description == selectedInterest) {
                                allInterest.selected = true;
                                _this.checkedInterestArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](allInterest.description));
                            }
                        });
                    });
                }
            }
        });
    };
    //Update Employee details function
    EmployeeUpdateComponent.prototype.fn_updateEmployee = function (value) {
        if (this.employeeForm.valid) {
            if (this.educationArray.length == 0) {
                this.toastr.error('Please add education details');
                return false;
            }
            else if (this.employeeForm.controls.interest.value.length == 0) {
                this.toastr.error('Please select atleast 1 interest');
                return false;
            }
            else {
                var updateEmployeeurl = 'api/Employee/updateEmployee';
                var employeeModel = value.value;
                employeeModel.id = this.employeeId;
                employeeModel.EducationDetails = this.educationArray;
                this.fn_updateEmployeefun(employeeModel, updateEmployeeurl);
            }
        }
        else {
            this.CommonService.validateAllFormFields(this.employeeForm);
            this.toastr.error('Please fill required details');
            return false;
        }
    };
    // function for update employee details.
    EmployeeUpdateComponent.prototype.fn_updateEmployeefun = function (data, url) {
        var _this = this;
        this.CommonService.fn_PostWithData(data, url).subscribe(function (result) {
            var rs = result;
            if (rs.statusCode == 200) {
                _this.toastr.success('Employee details updated successfully!');
                _this.router.navigate(['user/employeelist']);
            }
            else {
                _this.toastr.error('Failed to update Employee details');
            }
        });
    };
    EmployeeUpdateComponent.prototype.fn_resetEmployeeDetails = function () {
        this.employeeForm.controls.teamId.setValue("");
        this.employeeForm.controls.firstName.reset();
        this.employeeForm.controls.middleName.reset();
        this.employeeForm.controls.lastName.reset();
        this.employeeForm.controls.dob.reset();
        this.employeeForm.controls.address1.reset();
        this.employeeForm.controls.address2.reset();
        this.employeeForm.controls.city.reset();
        this.employeeForm.controls.pincode.reset();
        this.employeeForm.controls.stateId.setValue("");
        this.employeeForm.controls.mobile.reset();
        this.employeeForm.controls.currentAddress1.reset();
        this.employeeForm.controls.currentAddress2.reset();
        this.employeeForm.controls.currentCity.reset();
        this.employeeForm.controls.currentStateId.setValue("");
        this.employeeForm.controls.currentPincode.reset();
        this.employeeForm.controls.email.reset();
        this.employeeForm.controls.password.reset();
        this.employeeForm.controls.note.reset();
        this.educationArray = [];
        this.interestArray.forEach(function (element) {
            element.selected = false;
        });
        this.fn_resetEducationDetails();
    };
    EmployeeUpdateComponent.prototype.fn_resetEducationDetails = function () {
        this.employeeForm.controls.courseId.setValue("");
        this.employeeForm.controls.yearOfPassing.setValue("");
        this.employeeForm.controls.percentage.reset();
        this.employeeForm.controls.institution.reset();
    };
    //delete course from table
    EmployeeUpdateComponent.prototype.fn_deleteCourse = function (index) {
        this.educationArray.splice(index, 1);
        this.addEducationButton = true;
        this.updateEducationButton = false;
        this.fn_resetEducationDetails();
    };
    //Interest check change function
    EmployeeUpdateComponent.prototype.fn_onInterestChange = function (event) {
        var _this = this;
        /* Selected */
        if (event.target.checked) {
            // Add a new control in the arrayForm
            this.checkedInterestArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](event.target.value));
        }
        /* unselected */
        else {
            // find the unselected element
            var i_1 = 0;
            this.checkedInterestArray.controls.forEach(function (ctrl) {
                if (ctrl.value == event.target.value) {
                    // Remove the unselected element from the arrayForm
                    _this.checkedInterestArray.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    //function to add new course
    EmployeeUpdateComponent.prototype.fn_addNewCourse = function () {
        var _this = this;
        this.courseFlag = false;
        if (this.fn_validateEducationFields()) {
            this.fn_getCourseNameById(this.employeeForm.controls.courseId.value);
            var newCourseModel_1 = {
                courseId: this.employeeForm.controls.courseId.value,
                course: {
                    name: this.courseName,
                },
                yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
                institution: this.employeeForm.controls.institution.value,
                percentage: this.employeeForm.controls.percentage.value
            };
            if (this.educationArray.length != 0) {
                this.educationArray.forEach(function (element) {
                    if (element.courseId == newCourseModel_1.courseId) {
                        _this.toastr.error('Course is already added');
                        _this.courseFlag = true;
                        _this.fn_resetEducationDetails();
                        return false;
                    }
                });
                if (this.courseFlag == false) {
                    this.educationArray.push(newCourseModel_1);
                    this.fn_resetEducationDetails();
                    return true;
                }
            }
            else {
                this.educationArray.push(newCourseModel_1);
                this.fn_resetEducationDetails();
                return true;
            }
        }
    };
    //fetch selected course
    EmployeeUpdateComponent.prototype.fn_editCourse = function (index) {
        this.addEducationButton = false;
        this.updateEducationButton = true;
        this.fetchIndex = index;
        this.employeeForm.controls.courseId.setValue(this.educationArray[index].courseId);
        this.employeeForm.controls.yearOfPassing.setValue(this.educationArray[index].yearOfPassing);
        this.employeeForm.controls.institution.setValue(this.educationArray[index].institution);
        this.employeeForm.controls.percentage.setValue(this.educationArray[index].percentage);
    };
    //update selected course
    EmployeeUpdateComponent.prototype.fn_updateNewCourse = function () {
        this.courseFlag = false;
        if (this.fn_validateEducationFields()) {
            this.fn_getCourseNameById(this.employeeForm.controls.courseId.value);
            var oldCourseModel = {
                courseId: this.employeeForm.controls.courseId.value,
                course: {
                    name: this.courseName,
                },
                yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
                institution: this.employeeForm.controls.institution.value,
                percentage: this.employeeForm.controls.percentage.value
            };
            for (var i = 0; i < this.educationArray.length; i++) {
                if (i != this.fetchIndex) {
                    if (this.educationArray[i].courseId == oldCourseModel.courseId) {
                        this.toastr.error('Course is already added');
                        this.courseFlag = true;
                        this.fn_resetEducationDetails();
                        this.addEducationButton = true;
                        this.updateEducationButton = false;
                        return false;
                    }
                }
            }
            if (this.courseFlag == false) {
                console.log('this.educationArray', this.educationArray);
                console.log('this.educationArray[this.fetchIndex].course.name', this.educationArray[this.fetchIndex].course.name);
                this.educationArray[this.fetchIndex].courseId = oldCourseModel.courseId;
                this.educationArray[this.fetchIndex].course.name = oldCourseModel.course.name;
                this.educationArray[this.fetchIndex].yearOfPassing = oldCourseModel.yearOfPassing;
                this.educationArray[this.fetchIndex].institution = oldCourseModel.institution;
                this.educationArray[this.fetchIndex].percentage = oldCourseModel.percentage;
                this.fn_resetEducationDetails();
                this.addEducationButton = true;
                this.updateEducationButton = false;
                return true;
            }
        }
    };
    //Get selected course value and text
    EmployeeUpdateComponent.prototype.fn_getSelectedCourse = function (event) {
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        var selectElementText = selectedOptions[selectedIndex].text;
        this.selectedCourse = selectElementText;
    };
    //validate educartional details
    EmployeeUpdateComponent.prototype.fn_validateEducationFields = function () {
        if (this.employeeForm.controls.courseId.value == ""
            || this.employeeForm.controls.yearOfPassing.value == ""
            || (this.employeeForm.controls.institution.value == "" || this.employeeForm.controls.institution.value == null)
            || (this.employeeForm.controls.percentage.value == "" || this.employeeForm.controls.institution.value == null)) {
            this.toastr.error('Enter valid all educational details');
            //this.fn_resetEducationDetails();
            return false;
        }
        else {
            return true;
        }
    };
    //percentage validation
    EmployeeUpdateComponent.prototype.onlyPercentage = function (event) {
        debugger;
        var percentagePattern = src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_5__["appConfig"].pattern.PERCENTAGE;
        if (percentagePattern.test(event.target.value)) {
            return true;
        }
        else {
            this.employeeForm.controls.percentage.setValue("");
            return false;
        }
    };
    EmployeeUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-update',
            template: __webpack_require__(/*! ./employee-update.component.html */ "./src/app/layout/user/employee/employee-update/employee-update.component.html"),
            styles: [__webpack_require__(/*! ./employee-update.component.scss */ "./src/app/layout/user/employee/employee-update/employee-update.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_3__["commonService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], EmployeeUpdateComponent);
    return EmployeeUpdateComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function() { return AddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/core/app.config */ "./src/app/common/core/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(router, CommonService, http, formBuilder, toastr) {
        this.router = router;
        this.CommonService = CommonService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.educationArray = [];
        this.newArray = [];
        this.emailExist = false;
        this.courseFlag = false;
        this.updateEducationButton = false;
        this.addEducationButton = true;
        this.yearOfPassingArray = [
            { year: 1991 }, { year: 1992 }, { year: 1993 }, { year: 1994 }, { year: 1995 }, { year: 1996 }, { year: 1997 }, { year: 1998 }, { year: 1999 }, { year: 2000 },
            { year: 2001 }, { year: 2002 }, { year: 2003 }, { year: 2004 }, { year: 2005 }, { year: 2006 }, { year: 2007 }, { year: 2008 }, { year: 2009 }, { year: 2010 },
            { year: 2011 }, { year: 2012 }, { year: 2013 }, { year: 2014 }, { year: 2015 }, { year: 2016 }, { year: 2017 }, { year: 2018 }
        ];
        this.interestArray = [
            { description: 'Quality Assurance (QA)', value: 'Quality Assurance (QA)', selected: false },
            { description: 'HTML/CSS', value: 'HTML/CSS', selected: false },
            { description: 'Flash/Flex', value: 'Flash/Flex', selected: false },
            { description: 'Design', value: 'Design', selected: false }
        ];
        this.employeeForm = this.formBuilder.group({
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            middleName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.NAME), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            dob: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            mobile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PHONE_NO), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            address1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.DESCRIPTION), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.CITY), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            stateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            pincode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PINCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
            currentAddress1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.DESCRIPTION), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
            currentAddress2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            currentCity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.CITY), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            currentStateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            currentPincode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PINCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]],
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            teamId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.EMAIL)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(src_app_common_core_app_config__WEBPACK_IMPORTED_MODULE_6__["appConfig"].pattern.PASSWORD), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)]],
            courseId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            yearOfPassing: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            institution: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            interest: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            educationDetails: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.fn_getTeam();
        this.fn_getState();
        this.fn_getCourse();
        this.updateEducationButton = false;
        this.addEducationButton = true;
        this.employeeForm.controls.teamId.setValue("");
        this.employeeForm.controls.courseId.setValue("");
        this.employeeForm.controls.stateId.setValue("");
        this.employeeForm.controls.currentStateId.setValue("");
        this.employeeForm.controls.yearOfPassing.setValue("");
    };
    // function to display the error message for  validation.
    AddEmployeeComponent.prototype.isFieldValid = function (form, field) {
        return !form.get(field).valid && form.get(field).touched;
    };
    // Save Employee details function
    AddEmployeeComponent.prototype.fn_saveEmployee = function (value) {
        if (this.employeeForm.valid) {
            if (this.educationArray.length === 0) {
                this.toastr.error('Please add education details');
                return false;
            }
            else if (this.employeeForm.controls.interest.value.length == 0) {
                this.toastr.error('Please select atleast 1 interest');
                return false;
            }
            else if (this.emailExist == true) {
                return false;
            }
            else {
                var saveEmployeeurl = 'api/Employee';
                this.newArray.push(this.educationArray);
                this.newArray[0].forEach(function (element) {
                    element.course = null;
                });
                value.value.EducationDetails = this.newArray[0];
                this.fn_saveEmployeefun(value.value, saveEmployeeurl);
            }
        }
        else {
            this.CommonService.validateAllFormFields(this.employeeForm);
            this.toastr.error('Please fill required details');
            return false;
        }
    };
    // function for save employee details.
    AddEmployeeComponent.prototype.fn_saveEmployeefun = function (data, url) {
        var _this = this;
        this.CommonService.fn_PostWithData(data, url).subscribe(function (result) {
            var rs = result;
            console.log(result);
            if (rs.statusCode === 200) {
                _this.toastr.success('Employee details added successfully!');
                _this.router.navigate(['user/employeelist']);
            }
            else {
                _this.toastr.error('Failed to add Employee details' + rs);
            }
        });
    };
    // function to get teams
    AddEmployeeComponent.prototype.fn_getTeam = function () {
        var _this = this;
        var teamUrl = 'api/Dropdown/Teams';
        this.CommonService.fn_Get(teamUrl).subscribe(function (result) {
            var teamResult = result;
            if (teamResult.statusCode === 200) {
                _this.teamArray = teamResult.data;
            }
            else {
                _this.teamArray = null;
            }
        });
    };
    //function to get course
    AddEmployeeComponent.prototype.fn_getCourse = function () {
        var _this = this;
        var url = 'api/Dropdown/Degrees';
        this.CommonService.fn_Get(url).subscribe(function (result) {
            var courseResult = result;
            if (courseResult.statusCode === 200) {
                _this.courseArray = courseResult.data;
                console.log('this.courseArray', _this.courseArray);
            }
            else {
                _this.courseArray = null;
            }
        });
    };
    //get course name by courseId
    AddEmployeeComponent.prototype.fn_getCourseNameById = function (courseId) {
        var _this = this;
        this.courseArray.forEach(function (element) {
            if (element.id == courseId) {
                _this.courseName = element.name;
                return true;
            }
        });
    };
    //function to get state
    AddEmployeeComponent.prototype.fn_getState = function () {
        var _this = this;
        var stateUrl = 'api/Dropdown/States';
        this.CommonService.fn_Get(stateUrl).subscribe(function (result) {
            var stateResult = result;
            if (stateResult.statusCode === 200) {
                _this.stateArray = stateResult.data;
            }
            else {
                _this.stateArray = null;
            }
        });
    };
    //function to add new course
    AddEmployeeComponent.prototype.fn_addNewCourse = function () {
        var _this = this;
        this.courseFlag = false;
        this.fn_getCourseNameById(this.employeeForm.controls.courseId.value);
        if (this.fn_validateEducationFields()) {
            var newCourseModel_1 = {
                courseId: this.employeeForm.controls.courseId.value,
                course: this.courseName,
                yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
                institution: this.employeeForm.controls.institution.value,
                percentage: this.employeeForm.controls.percentage.value
            };
            if (this.educationArray.length != 0) {
                this.educationArray.forEach(function (element) {
                    if (element.courseId == newCourseModel_1.courseId) {
                        _this.toastr.error('Course is already added');
                        _this.courseFlag = true;
                        _this.fn_resetEducationDetails();
                        return false;
                    }
                });
                if (this.courseFlag == false) {
                    this.educationArray.push(newCourseModel_1);
                    this.fn_resetEducationDetails();
                    return true;
                }
            }
            else {
                this.educationArray.push(newCourseModel_1);
                this.fn_resetEducationDetails();
                return true;
            }
        }
    };
    //update selected course
    AddEmployeeComponent.prototype.fn_updateNewCourse = function () {
        this.courseFlag = false;
        this.fn_getCourseNameById(this.employeeForm.controls.courseId.value);
        if (this.fn_validateEducationFields()) {
            var oldCourseModel = {
                courseId: this.employeeForm.controls.courseId.value,
                course: this.courseName,
                yearOfPassing: this.employeeForm.controls.yearOfPassing.value,
                institution: this.employeeForm.controls.institution.value,
                percentage: this.employeeForm.controls.percentage.value
            };
            for (var i = 0; i < this.educationArray.length; i++) {
                if (i != this.fetchIndex) {
                    if (this.educationArray[i].courseId == oldCourseModel.courseId) {
                        this.toastr.error('Course is already added');
                        this.courseFlag = true;
                        this.fn_resetEducationDetails();
                        this.addEducationButton = true;
                        this.updateEducationButton = false;
                        return false;
                    }
                }
            }
            if (this.courseFlag == false) {
                this.educationArray[this.fetchIndex].courseId = oldCourseModel.courseId;
                this.educationArray[this.fetchIndex].course = oldCourseModel.course;
                this.educationArray[this.fetchIndex].yearOfPassing = oldCourseModel.yearOfPassing;
                this.educationArray[this.fetchIndex].institution = oldCourseModel.institution;
                this.educationArray[this.fetchIndex].percentage = oldCourseModel.percentage;
                this.fn_resetEducationDetails();
                this.addEducationButton = true;
                this.updateEducationButton = false;
                return true;
            }
        }
    };
    //Get selected course value and text
    AddEmployeeComponent.prototype.fn_getSelectedCourse = function (event) {
        var selectedOptions = event.target['options'];
        var selectedIndex = selectedOptions.selectedIndex;
        var selectElementText = selectedOptions[selectedIndex].text;
        this.selectedCourse = selectElementText;
    };
    //delete course from table
    AddEmployeeComponent.prototype.fn_deleteCourse = function (index) {
        this.educationArray.splice(index, 1);
        this.addEducationButton = true;
        this.updateEducationButton = false;
        this.fn_resetEducationDetails();
    };
    //fetch selected course
    AddEmployeeComponent.prototype.fn_editCourse = function (index) {
        this.addEducationButton = false;
        this.updateEducationButton = true;
        this.fetchIndex = index;
        this.employeeForm.controls.courseId.setValue(this.educationArray[index].courseId);
        this.employeeForm.controls.yearOfPassing.setValue(this.educationArray[index].yearOfPassing);
        this.employeeForm.controls.institution.setValue(this.educationArray[index].institution);
        this.employeeForm.controls.percentage.setValue(this.educationArray[index].percentage);
    };
    //validate educartional details
    AddEmployeeComponent.prototype.fn_validateEducationFields = function () {
        if (this.employeeForm.controls.courseId.value == ""
            || this.employeeForm.controls.yearOfPassing.value == ""
            || (this.employeeForm.controls.institution.value == "" || this.employeeForm.controls.institution.value == null)
            || (this.employeeForm.controls.percentage.value == "" || this.employeeForm.controls.institution.value == null)) {
            this.toastr.error('Enter valid all educational details');
            //this.fn_resetEducationDetails();
            return false;
        }
        else {
            return true;
        }
    };
    //percentage validation
    AddEmployeeComponent.prototype.onlyPercentage = function (event) {
        debugger;
        var percentagePattern = /^[^\.]\d{0,1}(\.\d{0,2})?$/; //appConfig.pattern.PERCENTAGE;
        if (percentagePattern.test(event.target.value)) {
            return true;
        }
        else {
            this.employeeForm.controls.percentage.setValue("");
            return false;
        }
    };
    // Interest check change function
    AddEmployeeComponent.prototype.fn_onInterestChange = function (event) {
        var checkedInterestArray = this.employeeForm.get('interest');
        /* Selected */
        if (event.target.checked) {
            // Add a new control in the arrayForm
            checkedInterestArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](event.target.value));
        }
        /* unselected */
        else {
            // find the unselected element
            var i_1 = 0;
            checkedInterestArray.controls.forEach(function (ctrl) {
                if (ctrl.value == event.target.value) {
                    // Remove the unselected element from the arrayForm
                    checkedInterestArray.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
    };
    AddEmployeeComponent.prototype.fn_resetEmployeeDetails = function () {
        this.employeeForm.controls.teamId.setValue("");
        this.employeeForm.controls.firstName.reset();
        this.employeeForm.controls.middleName.reset();
        this.employeeForm.controls.lastName.reset();
        this.employeeForm.controls.dob.reset();
        this.employeeForm.controls.address1.reset();
        this.employeeForm.controls.address2.reset();
        this.employeeForm.controls.city.reset();
        this.employeeForm.controls.pincode.reset();
        this.employeeForm.controls.stateId.setValue("");
        this.employeeForm.controls.mobile.reset();
        this.employeeForm.controls.currentAddress1.reset();
        this.employeeForm.controls.currentAddress2.reset();
        this.employeeForm.controls.currentCity.reset();
        this.employeeForm.controls.currentStateId.setValue("");
        this.employeeForm.controls.currentPincode.reset();
        this.employeeForm.controls.email.reset();
        this.employeeForm.controls.password.reset();
        this.employeeForm.controls.note.reset();
        this.educationArray = [];
        this.interestArray.forEach(function (element) {
            element.selected = false;
        });
        this.fn_resetEducationDetails();
    };
    AddEmployeeComponent.prototype.fn_resetEducationDetails = function () {
        this.employeeForm.controls.courseId.setValue("");
        this.employeeForm.controls.yearOfPassing.setValue("");
        this.employeeForm.controls.percentage.reset();
        this.employeeForm.controls.institution.reset();
    };
    AddEmployeeComponent.prototype.fn_checkEmail = function (event) {
        var _this = this;
        debugger;
        var existEmailUrl = "api/User/IsEmailExist";
        var model = {
            "condition": event
        };
        this.CommonService.fn_PostWithData(model, existEmailUrl).subscribe(function (result) {
            var stateResult = result;
            if (stateResult.statusCode === 200) {
                if (stateResult.data == true) {
                    console.log('Email address is already exist');
                    _this.emailExist = true;
                }
                else {
                    console.log('Email address is not exist');
                    _this.emailExist = false;
                }
            }
        });
    };
    AddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'employee-add-update',
            template: __webpack_require__(/*! ./employeeaddupdate.html */ "./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.html"),
            providers: [src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__["commonService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_4__["commonService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <h1 class=\"h3 font-weight-bold mb-0\">\r\n      Add Employee\r\n    </h1>\r\n    <div class=\"back-btn\">\r\n      <button [routerLink]=\"['/user/employeelist']\" class=\"btn btn-primary\"><span><i class=\"fa fa-arrow-left\"></i></span>\r\n        Back </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n      <form [formGroup]=\"employeeForm\" (ngSubmit)=\"fn_saveEmployee(employeeForm)\">\r\n        <div class=\"sections\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">Team</label><span style=\"color:red\">*</span>\r\n            <select class=\"form-control\" formControlName=\"teamId\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let team of teamArray\" value={{team.id}}>\r\n                {{team.name}}\r\n              </option>\r\n            </select>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'teamId')\" errorMsg=\"Select team.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"firstName\">First Name <span class=\"required\">*</span></label>\r\n            <input type=\"text\" class=\"form-control \" id=\"firstName\" formControlName=\"firstName\" placeholder=\"First Name\"\r\n              required>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'firstName')\" errorMsg=\"Enter valid first name.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"middleName\">Middle Name</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"middleName\" formControlName=\"middleName\" placeholder=\"Middle Name\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'middleName')\" errorMsg=\"Enter valid middle name.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lastName\">Last Name</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Last Name\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'lastName')\" errorMsg=\"Enter valid last name.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"dateOfBirth\">Date of Birth</label><span style=\"color:red\">*</span>\r\n            <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\" formControlName=\"dob\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'dob')\" errorMsg=\"Enter valid date of birth.\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"mobile\">Mobile</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"mobile\" formControlName=\"mobile\" placeholder=\"Mobile Number\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'mobile')\" errorMsg=\"Enter valid mobile number\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Permanent Address</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Address\">Address</label><span style=\"color:red\">*</span>\r\n            <textarea class=\"form-control\" id=\"address1\" formControlName=\"address1\" placeholder=\"Address 1\"></textarea>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'address1')\" errorMsg=\"Enter permanent address\">\r\n            </app-field-error-display>\r\n            <textarea class=\"form-control mt-2\" id=\"address2\" formControlName=\"address2\" placeholder=\"Address 2\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"city\" formControlName=\"city\" placeholder=\"City\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'city')\" errorMsg=\"Enter permanent city\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"stateId\">State</label><span style=\"color:red\">*</span>\r\n            <select class=\"form-control\" formControlName=\"stateId\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let state of stateArray\" value={{state.id}}>\r\n                {{state.name}}\r\n              </option>\r\n            </select>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'stateId')\" errorMsg=\"Select permanent state\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pincode\">Pincode</label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"pincode\" formControlName=\"pincode\" placeholder=\"Pincode\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'pincode')\" errorMsg=\"Enter valid 6 digit pincode\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Current Address</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Address\">Address</label><span style=\"color:red\">*</span>\r\n            <textarea class=\"form-control\" id=\"currentAddress1\" formControlName=\"currentAddress1\" placeholder=\"Address 1\"></textarea>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentAddress1')\" errorMsg=\"Enter current address\">\r\n            </app-field-error-display>\r\n            <textarea class=\"form-control mt-1\" id=\"currentAddress2\" formControlName=\"currentAddress2\" placeholder=\"Address 2\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\"> City </label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"currentCity\" formControlName=\"currentCity\" placeholder=\"City\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentCity')\" errorMsg=\"Enter current city\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"currentStateId\">State</label><span style=\"color:red\">*</span>\r\n            <select class=\"form-control\" formControlName=\"currentStateId\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let state of stateArray\" value={{state.id}}>\r\n                {{state.name}}\r\n              </option>\r\n            </select>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentStateId')\" errorMsg=\"Select current state\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"currentPincode\"> Pincode </label><span style=\"color:red\">*</span>\r\n            <input type=\"text\" class=\"form-control\" id=\"currentPincode\" formControlName=\"currentPincode\" placeholder=\"Pincode\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'currentPincode')\" errorMsg=\"Enter valid 6 digit pincode\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Educational Details</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"courseId\"> Course </label>\r\n            <select class=\"form-control\" formControlName=\"courseId\" (change)=\"fn_getSelectedCourse($event)\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let course of courseArray\" value={{course.id}}>\r\n                {{course.name}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"yearOfPassing\">Year Of Passing </label>\r\n            <select class=\"form-control\" formControlName=\"yearOfPassing\">\r\n              <option value=\"\">--Select--</option>\r\n              <option *ngFor=\"let passingYear of yearOfPassingArray\" value={{passingYear.year}}>\r\n                {{passingYear.year}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"institute\"> Institution </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"institution\" placeholder=\"Institute\" formControlName=\"institution\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"institute\"> Percentage </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"percentage\" placeholder=\"Percentage\" formControlName=\"percentage\" (keyup)=\"onlyPercentage($event)\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"addEducationButton\">\r\n            <input type=\"button\" class=\"btn btn-default\" id=\"btnAddNewEducationDetails\" value=\"Add\" (click)=\"fn_addNewCourse()\">\r\n          </div>\r\n          <div class=\"form-group\" *ngIf=\"updateEducationButton\">\r\n            <input type=\"button\" class=\"btn btn-default\" id=\"btnUpdateNewEducationDetails\" value=\"Update\" (click)=\"fn_updateNewCourse()\">\r\n          </div>\r\n          <div>\r\n            <table class=\"table table-bordered\" id=\"educationDetailsTable\">\r\n              <thead>\r\n                <tr>\r\n                  <th hidden=\"hidden\">CourseID</th>\r\n                  <th>Course</th>\r\n                  <th>Year of Passing (YYYY)</th>\r\n                  <th>School/College/University</th>\r\n                  <th>Percentage %</th>\r\n                  <th>Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let educationField of educationArray; let i = index\">\r\n                  <td hidden=\"hidden\">\r\n                    <label>{{educationField.courseId}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.course}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.yearOfPassing}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.institution}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <label>{{educationField.percentage}}</label>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"btn btn-default btn-md\" type=\"button\" (click)=\"fn_editCourse(i)\">Edit</button>\r\n                    <button class=\"btn btn-default btn-md ml-3\" type=\"button\" (click)=\"fn_deleteCourse(i)\">Delete</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"form-group\">\r\n              <label for=\"Interest\">Interest: </label><span style=\"color:red\">*</span> <br>\r\n              <div *ngFor=\"let interest of interestArray; let i=index\" class=\"form-check form-check-inline\">\r\n                <label>\r\n                  <input class=\"mx-1\" type=\"checkbox\" [value]=\"interest.value\" (change)=\"fn_onInterestChange($event)\"\r\n                    [(ngModel)]=\"interest.selected\" [ngModelOptions]=\"{standalone: true}\">\r\n                  {{interest.description}}\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"other-details\"> Note (If any): </label>\r\n              <textarea class=\"form-control\" id=\"note\" formControlName=\"note\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sections\">\r\n          <div class=\"section-heading\">\r\n            <h4>Login Details</h4>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email :</label><span style=\"color:red\">*</span>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"Email\"\r\n              (ngModelChange)=\"fn_checkEmail($event)\">\r\n            <div *ngIf=\"emailExist; then thenBlock;\"> </div>\r\n            <ng-template #thenBlock>\r\n              <div><span style=\"color:red\">Email is already exist.</span></div>\r\n            </ng-template>\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'email')\" errorMsg=\"Enter valid email id\">\r\n            </app-field-error-display>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password :</label><span style=\"color:red\">*</span>\r\n            <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\" placeholder=\"Password\">\r\n            <app-field-error-display [displayError]=\"isFieldValid(employeeForm, 'password')\" errorMsg=\"Enter valid password\">\r\n            </app-field-error-display>\r\n          </div>\r\n        </div>\r\n        <div class=\"btn-sections\">\r\n          <button id=\"btnSubmit\" class=\"btn btn-primary btn-md\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-default btn-md ml-3\" (click)=\"fn_resetEmployeeDetails()\">Reset</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: QuickAddEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickAddEmployeeComponent", function() { return QuickAddEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickAddEmployeeComponent = /** @class */ (function () {
    function QuickAddEmployeeComponent() {
    }
    QuickAddEmployeeComponent.prototype.ngOnInit = function () { };
    QuickAddEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quick-employee-add-update',
            template: __webpack_require__(/*! ./quickemployeeaddupdate.html */ "./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.html")
        }),
        __metadata("design:paramtypes", [])
    ], QuickAddEmployeeComponent);
    return QuickAddEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"card col-md-12 col-xs-12 col-lg-12\">\r\n      <div class=\"card-header\">\r\n        <h1>Add Employee</h1>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n          <form action=\"\">\r\n              <div class=\"sections\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"sel1\">TEAM:</label>\r\n                  <select class=\"form-control\" id=\"sel1\">\r\n                    <option>AEM</option>\r\n                    <option>.NET/JAVA</option>\r\n                    <option>MAGENTO</option>\r\n                    <option>PEGA</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"firstName\">First Name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"firstName\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"lastName\">Last Name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"lastName\">\r\n                </div>\r\n        \r\n                <div class=\"form-group\">\r\n                  <label for=\"email\">Email :</label>\r\n                  <input type=\"email\" class=\"form-control\" id=\"email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"password\">Password :</label>\r\n                  <input type=\"password\" class=\"form-control\" id=\"password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"checkbox-inline\"> Is Active :\r\n                    <input type=\"checkbox\" value=\"\">\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label class=\"checkbox-inline\"> Is Admin :\r\n                    <input type=\"checkbox\" value=\"\">\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"btn-sections\">\r\n                <button type=\"button\" class=\"btn btn-default\">Reset</button>\r\n                <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n              </div>\r\n            </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/trainee/trainee-list/traineeList.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/user/trainee/trainee-list/traineeList.component.ts ***!
  \***************************************************************************/
/*! exports provided: TraineeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraineeListComponent", function() { return TraineeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TraineeListComponent = /** @class */ (function () {
    function TraineeListComponent(CommonService) {
        this.CommonService = CommonService;
        this.params = {
            currentPage: 1,
            pageSize: 10,
            searchString: ''
        };
        this.i = 0;
        this.startrecordno = 1;
        this.endrecord = 1;
        this.recordno = 0;
        this.totalItems = 0;
        this.traineeList = [];
    }
    // Function for  pagination
    TraineeListComponent.prototype.setRecordPerPage = function (event) {
        this.params.currentPage = 1;
        this.params.pageSize = event.target.value;
    };
    TraineeListComponent.prototype.pageChanged = function (event) {
        this.params.currentPage = parseInt(event.page);
        this.params.pageSize = parseInt(event.itemsPerPage);
    };
    // Searching
    TraineeListComponent.prototype.searchRecord = function (event) {
    };
    TraineeListComponent.prototype.ngOnInit = function () {
        this.fn_GetTraineeList();
    };
    TraineeListComponent.prototype.fn_GetTraineeList = function () {
        var _this = this;
        var prop = {
            currentPage: parseInt(this.params.currentPage),
            pageSize: parseInt(this.params.pageSize),
            searchString: this.params.searchString
        };
        var url = 'api/User';
        this.CommonService.fn_Get(url).subscribe(function (data) {
            if (data != null /*&& data.statusCode === 200*/) {
                console.log(data);
                _this.traineeList = data.data;
                console.log(_this.traineeList);
            }
        }, function (err) { return console.error(err); }, function () { });
    };
    TraineeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trainee-list',
            template: __webpack_require__(/*! ./traineeList.html */ "./src/app/layout/user/trainee/trainee-list/traineeList.html"),
            providers: [src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_1__["commonService"]]
        }),
        __metadata("design:paramtypes", [src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_1__["commonService"]])
    ], TraineeListComponent);
    return TraineeListComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/trainee/trainee-list/traineeList.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/user/trainee/trainee-list/traineeList.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">Aspirants List</div>\r\n        <div class=\"col-md-12 col-xs-12 col-lg-12 datatable-header\">\r\n          <div class=\"col-md-3\">\r\n            <div class=\"dataTables_length_code\">\r\n              <label><span>Show</span><select name=\"example_length\" (change)=\"setRecordPerPage($event)\">\r\n                  <option value=\"10\">10</option>\r\n                  <option value=\"25\">25</option>\r\n                  <option value=\"50\">50</option>\r\n                  <option value=\"100\">100</option>\r\n                </select> entries</label>\r\n            </div>\r\n          </div>\r\n          <!-- [(ngModel)]=\"params.searchString\" -->\r\n          <!-- <div class=\"\"> -->\r\n          <div class=\"input-group custom-search-form col-md-4\" style=\"display: inline-flex;\">\r\n            <input type=\"text\" class=\"form-control search-field\" placeholder=\"search\" (keyup)=\"searchRecord($event)\">\r\n          </div>\r\n          <!-- </div>    -->\r\n          <div class=\"col-md-2\" style=\"display: inline-block;\">\r\n            <button [routerLink]=\"['/user/addtraineeuser']\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-2\" style=\"display: inline-block;\">\r\n            <button [routerLink]=\"['/user/quickaddtraineeuser']\">Quick Add Aspirant\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-hover table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sr. No.</th>\r\n                <th>Name</th>\r\n                <th>Username</th>\r\n                <th>Mobile</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let trainee of traineeList; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{trainee.firstName}}</td>\r\n                <td>{{trainee.email}}</td>\r\n                <td>{{trainee.mobile}}</td>\r\n                <td>\r\n                  <button type=\"button\" rel=\"tooltip\" (click)=\"fn_getEmployee(emp.id)\">\r\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  </button>&nbsp;\r\n                  <button type=\"button\" rel=\"tooltip\" (click)=\"fn_deleteEmployee(emp.id)\">\r\n                    <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                  </button>\r\n\r\n                  <!-- \r\n\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button> -->\r\n                </td>\r\n              </tr>\r\n              <!-- <tr>\r\n                <td>/about.html</td>\r\n                <td>261</td>\r\n                <td>33.3%</td>\r\n                <td>$234.12</td>\r\n                <td>\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>/sales.html</td>\r\n                <td>665</td>\r\n                <td>21.3%</td>\r\n                <td>$16.34</td>\r\n                <td>\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>/blog.html</td>\r\n                <td>9516</td>\r\n                <td>89.3%</td>\r\n                <td>$1644.43</td>\r\n                <td>\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>/404.html</td>\r\n                <td>23</td>\r\n                <td>34.3%</td>\r\n                <td>$23.52</td>\r\n                <td>\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>/services.html</td>\r\n                <td>421</td>\r\n                <td>60.3%</td>\r\n                <td>$724.32</td>\r\n                <td>\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>/blog/post.html</td>\r\n                <td>1233</td>\r\n                <td>93.2%</td>\r\n                <td>$126.34</td>\r\n                <td>\r\n                  <button [routerLink]=\"['/user/edittrainee']\" class=\"btn-primary\">Edit</button>\r\n                  <button class=\"btn-primary\">Delete</button>\r\n                </td>\r\n              </tr> -->\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <pagination class=\"pull-right\" [totalItems]=\"100\" [itemsPerPage]=\"params.pageSize\" (pageChanged)=\"pageChanged($event)\"\r\n          [maxSize]=\"3\" [boundaryLinks]=\"true\" [rotate]=\"false\" previousText=\"PREVIOUS\" nextText=\"NEXT\" firstText=\"FIRST\"\r\n          lastText=\"LAST\"></pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.component.ts ***!
  \************************************************************************************************/
/*! exports provided: QuickTraineeAddUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickTraineeAddUpdate", function() { return QuickTraineeAddUpdate; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuickTraineeAddUpdate = /** @class */ (function () {
    function QuickTraineeAddUpdate() {
    }
    QuickTraineeAddUpdate.prototype.ngOnInit = function () { };
    QuickTraineeAddUpdate = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quick-employee-add-update',
            template: __webpack_require__(/*! ./quickTraineeAddUpdate.html */ "./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.html")
        }),
        __metadata("design:paramtypes", [])
    ], QuickTraineeAddUpdate);
    return QuickTraineeAddUpdate;
}());



/***/ }),

/***/ "./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.html":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"row\">\r\n    <div class=\"card col-md-12 col-xs-12 col-lg-12\">\r\n      <div class=\"card-header\">\r\n        <h1>Add Exam User</h1>\r\n      </div>\r\n      <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n        <form action=\"\">\r\n          <div class=\"sections\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">TEAM:</label>\r\n              <select class=\"form-control\" id=\"sel1\">\r\n                <option>AEM</option>\r\n                <option>.NET/JAVA</option>\r\n                <option>MAGENTO</option>\r\n                <option>PEGA</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"firstName\">First Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"firstName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lastName\">Last Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"lastName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email :</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password :</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"password\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label class=\"checkbox-inline\"> Is Active :\r\n                <input type=\"checkbox\" value=\"\">\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-sections\">\r\n            <button type=\"button\" class=\"btn btn-default\">Reset</button>\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: AddTraineeUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTraineeUserComponent", function() { return AddTraineeUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTraineeUserComponent = /** @class */ (function () {
    function AddTraineeUserComponent() {
    }
    AddTraineeUserComponent.prototype.ngOnInit = function () { };
    AddTraineeUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'traineeuser-add-update',
            template: __webpack_require__(/*! ./traineeUserAddUpdate.html */ "./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.html")
        }),
        __metadata("design:paramtypes", [])
    ], AddTraineeUserComponent);
    return AddTraineeUserComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.html":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-12 col-xs-12 col-lg-12 card\">\r\n      <div class=\"card-header\">\r\n        <h1>Add Trainee</h1>\r\n      </div>\r\n\r\n      <div class=\"col-md-12 col-xs-12 col-lg-12\">\r\n        <form action=\"\">\r\n          <div class=\"sections\">\r\n            <div class=\"form-group\">\r\n              <label for=\"firstName\">First Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"firstName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"middleName\">Middle Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"middleName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lastName\">Last Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"lastName\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dateOfBirth\">Date of Birth Name</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"dateOfBirth\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Phone</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"phone\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"mobile\">Mobile</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"mobile\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"sections\">\r\n            <div class=\"section-heading\">\r\n              <h2>Current Address</h2>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Address</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"phone\">\r\n              <input type=\"text\" class=\"form-control\" id=\"phone\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"state\"> City </label>\r\n              <input type=\"text\" class=\"form-control\" id=\"state\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">State</label>\r\n              <select class=\"form-control\" id=\"sel1\">\r\n                <option>Maharashtra</option>\r\n                <option>Delhi</option>\r\n                <option>Kerala</option>\r\n                <option>Karnataka</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"pincode\"> Pincode </label>\r\n              <input type=\"number\" class=\"form-control\" id=\"pincode\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"sections\">\r\n            <div class=\"section-heading\">\r\n              <h2>Permanent Address</h2><input type=\"checkbox\">Tick if same as Current Address\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Address</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"phone\">\r\n              <input type=\"text\" class=\"form-control\" id=\"phone\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"state\"> City </label>\r\n              <input type=\"text\" class=\"form-control\" id=\"state\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">State</label>\r\n              <select class=\"form-control\" id=\"sel1\">\r\n                <option>Maharashtra</option>\r\n                <option>Delhi</option>\r\n                <option>Kerala</option>\r\n                <option>Karnataka</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"pincode\"> Pincode </label>\r\n              <input type=\"number\" class=\"form-control\" id=\"pincode\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n          <div class=\"sections\">\r\n            <div class=\"section-heading\">\r\n              <h2>Educational Details</h2>\r\n            </div>\r\n\r\n            <div class=\"container\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Course</th>\r\n                    <th>Year of Passing (YYYY)</th>\r\n                    <th>School/College/University</th>\r\n                    <th>Percentage %</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>SSC :</td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>HSSC :</td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>Degree :</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <select class=\"form-control\" id=\"sel1\">\r\n                        <option>Select Degree </option>\r\n                        <option>BE</option>\r\n                        <option>BCA/MCA</option>\r\n                        <option>MTECH</option>\r\n                        <option>BSc.</option>\r\n                      </select>\r\n                    </td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                    <td><input type=\"text\" class=\"form-control\"></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"other-details\"> Other Educational Details: </label>\r\n                <textarea class=\"form-control\"></textarea>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <p> Please Submit your interest by selecting the checkbox/below of the following options: </p>\r\n                <label class=\"checkbox-inline\">\r\n                  <input type=\"checkbox\" value=\"\">Quality Assurance (QA)\r\n                </label>\r\n                <label class=\"checkbox-inline\">\r\n                  <input type=\"checkbox\" value=\"\"> HTML/CSS\r\n                </label>\r\n                <label class=\"checkbox-inline\">\r\n                  <input type=\"checkbox\" value=\"\"> Flesh/FLex\r\n                </label>\r\n                <label class=\"checkbox-inline\">\r\n                  <input type=\"checkbox\" value=\"\"> Design\r\n                </label>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"other-details\"> Note (If any): </label>\r\n                <textarea class=\"form-control\"></textarea>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"checkbox-inline\"> Is Active :\r\n                  <input type=\"checkbox\" value=\"\">\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"sections\">\r\n            <div class=\"section-heading\">\r\n              <h2>Login Details</h2>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email :</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password :</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"password\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"btn-sections\">\r\n            <button type=\"button\" class=\"btn btn-default\">Reset</button>\r\n            <button type=\"submit\" class=\"btn btn-default\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user/upload/upload.component.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/user/upload/upload.component.ts ***!
  \********************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/services/common.service */ "./src/app/common/services/common.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadComponent = /** @class */ (function () {
    function UploadComponent(route, commonService, http) {
        var _this = this;
        this.route = route;
        this.commonService = commonService;
        this.http = http;
        this.question = {
            options: []
        };
        this.examID = "";
        this.examDetail = { title: "" };
        this.examDetailUrl = "api/Exams/GetExamById";
        this.questionListUrl = 'api/Questions/listQuestionsByExamId';
        this.questionModel = {
            "id": "",
            "filter": "string",
            "pageSize": 999,
            "pageNumber": 1,
            "totleRecords": 0,
            "filterBy": "string",
            "sortBy": "string",
            "isDescending": true
        };
        //   fn_fileChange(event) {
        //     const fileList: FileList = event.target.files;
        //     this.filedata = event.target.files[0].name;
        //     if (fileList.length > 0) {
        //       const file: File = fileList[0];
        //       let formData: FormData = new FormData();
        //       formData.append('uploadFile', file, file.name);
        //       const apiUrl = 'api/Upload';
        //       this.CommonService.fn_UploadImage(apiUrl, formData).subscribe(
        //         (result: any) => {
        //           const rs = result;
        //         }
        //       );
        //     }
        //   }
        this.x = [];
        this.route.params.subscribe(function (params) {
            _this.examID = params['examId'];
        });
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.idx = 0;
        this.x = [
            {
                "Id": 1055,
                "QuestionId": 1010,
                "Name": "Which technology is used for front end development?",
                "IsAnswer": false,
                'ans': [
                    { 'option': 'C#', 'val': '1' },
                    { 'option': 'VB.net', 'val': '2' },
                    { 'option': 'Angular', 'val': '3' },
                    { 'option': 'SQL', 'val': '4' }
                ]
            },
            {
                "Id": 1056,
                "QuestionId": 1010,
                "Name": "Which of the following is the address of the router?",
                "IsAnswer": true,
                'ans': [
                    { 'option': 'The IP address', 'val': '1' },
                    { 'option': 'The TCP address', 'val': '2' },
                    { 'option': 'The subnet mask', 'val': '3' },
                    { 'option': 'The default gateway', 'val': '4' }
                ]
            },
            {
                "Id": 1,
                "QuestionId": 1010,
                "Name": "One way in which a structure differs from an array is that",
                "IsAnswer": false,
                'ans': [
                    { 'option': 'a structure may have members of more than one type', 'val': '1' },
                    { 'option': 'a structure must have members that are all the same type', 'val': '2' },
                    { 'option': 'an array may have members of more than one type', 'val': '3' },
                    { 'option': 'there is no difference between a structure and an array', 'val': '4' }
                ]
            },
            {
                "Id": 2,
                "QuestionId": 1010,
                "Name": "Arithmetic operation are coded in",
                "IsAnswer": true,
                'ans': [
                    { 'option': 'Decision symbols', 'val': '1' },
                    { 'option': 'Input/Outpur(I/0)', 'val': '2' },
                    { 'option': 'Processing symbols', 'val': '3' },
                    { 'option': 'Terminal symbols', 'val': '4' }
                ]
            }
        ];
        this.quizes = this.x;
        this.count = this.x.length;
        //this.question = this.x[0];
        this.idx = 0;
        // this.quizName = this.quizes[0].id;
        // this.loadQuiz(this.quizName);
        this.getExamDetails();
        this.fn_GetQuestionsList();
    };
    UploadComponent.prototype.fn_GetQuestionsList = function () {
        var _this = this;
        this.questionModel.id = this.examID;
        this.commonService.fn_PostWithData(this.questionModel, this.questionListUrl).subscribe(function (result) {
            var rs = result;
            if (rs.statusCode == 200) {
                _this.questionList = rs.data;
                _this.question = _this.questionList[0];
                console.log(_this.question);
            }
            else {
            }
        });
    };
    UploadComponent.prototype.getExamDetails = function () {
        var _this = this;
        var examDetailModel = {
            "id": this.examID
        };
        this.commonService.fn_PostWithData(examDetailModel, this.examDetailUrl).subscribe(function (result) {
            var rs = result;
            if (rs.statusCode == 200) {
                _this.examDetail = rs.data;
            }
            else {
            }
        });
    };
    // loadQuiz(quizName: string) {
    //   //   if(this.quizes[0].)
    //   // this.quizService.get(quizName).subscribe(res => {
    //     this.quiz = this.quizes[0];
    //    // this.pager.count = this.quiz.questions.length;
    //  // });
    // }
    UploadComponent.prototype.fn_next = function () {
        this.idx = this.idx + 1;
        this.question = this.x[this.idx];
        // for (let i = 0 ; i < this.count; i++) {
        // }
        // this.x.forEach(element => {
        //   this.question = element;
        // });
    };
    UploadComponent.prototype.fn_previous = function () {
        this.idx = this.idx - 1;
        this.question = this.x[this.idx];
    };
    UploadComponent.prototype.fn_submit = function () {
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.html */ "./src/app/layout/user/upload/upload.html"),
            providers: [src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_1__["commonService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_common_services_common_service__WEBPACK_IMPORTED_MODULE_1__["commonService"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/upload/upload.html":
/*!************************************************!*\
  !*** ./src/app/layout/user/upload/upload.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <label class=\"col-sm-2 label-on-left\">Import File\r\n    <span class=\"required\">*</span>\r\n  </label>\r\n  <div class=\"fileinput fileinput-new importFile fileImg col-sm-7\" data-provides=\"fileinput\">\r\n    <div class=\"fileinput-new thumbnail\">\r\n      <img [src]=\"reportImageurl\" alt=\"...\" id=\"fileid1\">\r\n    </div>\r\n    <div class=\"fileinput-preview fileinput-exists thumbnail\" id=\"fileid\"></div>\r\n    <span class=\"btn btn-rose btn-round btn-file\">\r\n      <span class=\"fileinput-new\">Select CSV</span>\r\n      <span class=\"fileinput-exists\">Select CSV File</span>\r\n      <input type=\"file\" name=\"...\" (change)=\"fn_fileChange($event)\" required />\r\n    </span>\r\n  </div>\r\n</div> -->\r\n<!-- {{question |json}} -->\r\n<!-- <div *ngFor=\"let question of quizes;\" let i=\"index\"> -->\r\n    <!-- <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div> -->\r\n    <form>\r\n        <!-- <div class=\"row\">\r\n            <div class=\"card col-md-12 col-xs-12 col-lg-12\"> -->\r\n              <div class=\"card-header\">\r\n                <h1>{{examDetail.title}}</h1>\r\n              </div>\r\n              \r\n    <h2 style=\"padding-top: 20px\">\r\n      <!-- {{pager.index + 1}}. -->\r\n       <span [innerHTML]=\"question.question\"></span></h2>\r\n    <div class=\"row text-left options\">\r\n      <div class=\"col-md-6\" *ngFor=\"let element of question.options\">\r\n        <div class=\"option\">\r\n          <label class=\"\" [attr.for]=\"element.option\">\r\n              <input id=\"{{element.option}}\" type=\"checkbox\"  />\r\n              {{element.option}}\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"padding-top: 20px\">\r\n    <button (click) = \"fn_previous()\">< Previous</button>&nbsp;\r\n    <button (click) = \"fn_next()\">Save & Next ></button>&nbsp;\r\n    <button (click) = \"fn_submit()\">End Exam</button>\r\n  </div>\r\n  </form>\r\n\r\n  <!-- [(ngModel)]=\"option.Selected\"  -->\r\n  <!-- </div> -->\r\n  <!-- (change)=\"onSelect(question, option);\" -->"

/***/ }),

/***/ "./src/app/layout/user/user-routing.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/user/user-routing.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_employee_list_employeelist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee/employee-list/employeelist.component */ "./src/app/layout/user/employee/employee-list/employeelist.component.ts");
/* harmony import */ var _employee_exployee_add_update_employeeaddupdate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/exployee-add-update/employeeaddupdate.component */ "./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.component.ts");
/* harmony import */ var _employee_exployee_add_update_quickemployeeaddupdate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee/exployee-add-update/quickemployeeaddupdate.component */ "./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.component.ts");
/* harmony import */ var _admin_user_admin_user_add_adminuseradd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-user/admin-user-add/adminuseradd.component */ "./src/app/layout/user/admin-user/admin-user-add/adminuseradd.component.ts");
/* harmony import */ var _admin_user_admin_user_list_adminuserlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-user/admin-user-list/adminuserlist.component */ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.ts");
/* harmony import */ var _trainee_trainee_list_traineeList_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trainee/trainee-list/traineeList.component */ "./src/app/layout/user/trainee/trainee-list/traineeList.component.ts");
/* harmony import */ var _trainee_trainee_user_add_update_traineeUserAddUpdate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trainee/trainee-user-add-update/traineeUserAddUpdate.component */ "./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.component.ts");
/* harmony import */ var _trainee_trainee_user_add_update_quickTraineeAddUpdate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trainee/trainee-user-add-update/quickTraineeAddUpdate.component */ "./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.component.ts");
/* harmony import */ var _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee/employee-update/employee-update.component */ "./src/app/layout/user/employee/employee-update/employee-update.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/layout/user/upload/upload.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        children: [
            {
                path: 'employeelist', component: _employee_employee_list_employeelist_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"]
            },
            {
                path: 'addemployee', component: _employee_exployee_add_update_employeeaddupdate_component__WEBPACK_IMPORTED_MODULE_3__["AddEmployeeComponent"]
            },
            {
                path: 'quickaddemployee', component: _employee_exployee_add_update_quickemployeeaddupdate_component__WEBPACK_IMPORTED_MODULE_4__["QuickAddEmployeeComponent"]
            },
            {
                path: 'addadminuser', component: _admin_user_admin_user_add_adminuseradd_component__WEBPACK_IMPORTED_MODULE_5__["AddAdminUserComponent"]
            },
            {
                path: 'adminuserlist', component: _admin_user_admin_user_list_adminuserlist_component__WEBPACK_IMPORTED_MODULE_6__["AdminUserListComponent"]
            },
            {
                path: 'traineelist', component: _trainee_trainee_list_traineeList_component__WEBPACK_IMPORTED_MODULE_7__["TraineeListComponent"]
            },
            {
                path: 'addtraineeuser', component: _trainee_trainee_user_add_update_traineeUserAddUpdate_component__WEBPACK_IMPORTED_MODULE_8__["AddTraineeUserComponent"]
            },
            {
                path: 'quickaddtraineeuser', component: _trainee_trainee_user_add_update_quickTraineeAddUpdate_component__WEBPACK_IMPORTED_MODULE_9__["QuickTraineeAddUpdate"]
            },
            {
                path: 'updateemployee/:_empid', component: _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeUpdateComponent"]
            },
            {
                path: 'upload/:examId', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_11__["UploadComponent"]
            }
        ]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user/user.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/user/user.component.ts ***!
  \***********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: "\n    <router-outlet></router-outlet>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/layout/user/user.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/user/user.module.ts ***!
  \********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/layout/user/user.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing */ "./src/app/layout/user/user-routing.ts");
/* harmony import */ var ng2_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-bootstrap */ "./node_modules/ng2-bootstrap/index.js");
/* harmony import */ var _employee_employee_list_employeelist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee-list/employeelist.component */ "./src/app/layout/user/employee/employee-list/employeelist.component.ts");
/* harmony import */ var _employee_exployee_add_update_employeeaddupdate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee/exployee-add-update/employeeaddupdate.component */ "./src/app/layout/user/employee/exployee-add-update/employeeaddupdate.component.ts");
/* harmony import */ var _employee_exployee_add_update_quickemployeeaddupdate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee/exployee-add-update/quickemployeeaddupdate.component */ "./src/app/layout/user/employee/exployee-add-update/quickemployeeaddupdate.component.ts");
/* harmony import */ var _admin_user_admin_user_list_adminuserlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-user/admin-user-list/adminuserlist.component */ "./src/app/layout/user/admin-user/admin-user-list/adminuserlist.component.ts");
/* harmony import */ var _admin_user_admin_user_add_adminuseradd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-user/admin-user-add/adminuseradd.component */ "./src/app/layout/user/admin-user/admin-user-add/adminuseradd.component.ts");
/* harmony import */ var _trainee_trainee_list_traineeList_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trainee/trainee-list/traineeList.component */ "./src/app/layout/user/trainee/trainee-list/traineeList.component.ts");
/* harmony import */ var _trainee_trainee_user_add_update_traineeUserAddUpdate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trainee/trainee-user-add-update/traineeUserAddUpdate.component */ "./src/app/layout/user/trainee/trainee-user-add-update/traineeUserAddUpdate.component.ts");
/* harmony import */ var _trainee_trainee_user_add_update_quickTraineeAddUpdate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trainee/trainee-user-add-update/quickTraineeAddUpdate.component */ "./src/app/layout/user/trainee/trainee-user-add-update/quickTraineeAddUpdate.component.ts");
/* harmony import */ var _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee/employee-update/employee-update.component */ "./src/app/layout/user/employee/employee-update/employee-update.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/layout/user/upload/upload.component.ts");
/* harmony import */ var src_app_common_field_error_display_field_error_display_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/common/field-error-display/field-error-display.module */ "./src/app/common/field-error-display/field-error-display.module.ts");
/* harmony import */ var _admin_user_admin_user_update_admin_user_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-user/admin-user-update/admin-user-update.component */ "./src/app/layout/user/admin-user/admin-user-update/admin-user-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_routing__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"], ng2_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], src_app_common_field_error_display_field_error_display_module__WEBPACK_IMPORTED_MODULE_16__["ErrorHandlingModule"]],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
                _employee_employee_list_employeelist_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                _employee_exployee_add_update_employeeaddupdate_component__WEBPACK_IMPORTED_MODULE_6__["AddEmployeeComponent"],
                _employee_exployee_add_update_quickemployeeaddupdate_component__WEBPACK_IMPORTED_MODULE_7__["QuickAddEmployeeComponent"],
                _admin_user_admin_user_list_adminuserlist_component__WEBPACK_IMPORTED_MODULE_8__["AdminUserListComponent"],
                _admin_user_admin_user_add_adminuseradd_component__WEBPACK_IMPORTED_MODULE_9__["AddAdminUserComponent"],
                _trainee_trainee_list_traineeList_component__WEBPACK_IMPORTED_MODULE_10__["TraineeListComponent"],
                _trainee_trainee_user_add_update_traineeUserAddUpdate_component__WEBPACK_IMPORTED_MODULE_11__["AddTraineeUserComponent"],
                _trainee_trainee_user_add_update_quickTraineeAddUpdate_component__WEBPACK_IMPORTED_MODULE_12__["QuickTraineeAddUpdate"],
                _employee_employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeUpdateComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_15__["UploadComponent"],
                _admin_user_admin_user_update_admin_user_update_component__WEBPACK_IMPORTED_MODULE_17__["AdminUserUpdateComponent"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map