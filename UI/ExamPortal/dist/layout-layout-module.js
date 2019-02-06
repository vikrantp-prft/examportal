(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-border-bottom navbar navbar-expand-lg bg-white pt-3 fixed-top\">\r\n    <a class=\"navbar-brand\" href=\"#\"><img _ngcontent-c1=\"\" class=\"prft-logo ml-3 ng-tns-c1-0\" src=\"assets/images/prft.png\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleSidebar()\">\r\n        <!-- <span class=\"navbar-toggler-icon\"></span> -->\r\n        <i class=\"fa fa-bars text-muted\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <!-- <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"{{ 'Search' | translate }}\" > -->\r\n        </form>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <!-- <li class=\"nav-item d-none d-xl-block\">\r\n                <a\r\n                    href=\"https://github.com/start-angular/SB-Admin-BS4-Angular-7/archive/master.zip\"\r\n                    class=\"nav-link btn mt-1\" role=\"button\"\r\n                    style=\"padding: .375rem 1rem !important;border-color: #999;\"\r\n                >\r\n                    {{ 'Download Now' | translate }}\r\n                </a>\r\n            </li> &nbsp; -->\r\n            <!-- <li class=\"nav-item\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link mt-1\"\r\n                    style=\"padding: 0.375rem 1rem !important; border-color: #999;\"\r\n                    (click)=\"rltAndLtr()\"\r\n                >\r\n                    RTL/LTR\r\n                </a>\r\n            </li> &nbsp; -->\r\n\r\n\r\n\r\n            <li class=\"nav-item\">\r\n                <a href=\"javascript:void(0)\" class=\"nav-link\">\r\n                    <i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b>\r\n                </a>\r\n\r\n\r\n\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" [routerLink]=\"['/login']\" (click)=\"onLoggedout()\">\r\n                    <i class=\"fa fa-fw fa-power-off\"></i> {{ 'Log Out' | translate }}\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #222; }\n  :host .navbar .navbar-brand {\n    color: #fff; }\n  :host .navbar .nav-item > a {\n    color: #999; }\n  :host .navbar .nav-item > a:hover {\n      color: black; }\n  :host .messages {\n  width: 300px; }\n  :host .messages .media {\n    border-bottom: 1px solid #ddd;\n    padding: 5px 10px; }\n  :host .messages .media:last-child {\n      border-bottom: none; }\n  :host .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  :host .messages .media-body .small {\n    margin: 0; }\n  :host .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n  .header-border-bottom {\n  border-bottom: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxWYWlzaGFsaSBQcm9qZWN0c1xcRXhhbVRlc3RcXGV4YW1wb3J0YWxcXFVJXFxleGFtcG9ydGFsL3NyY1xcYXBwXFxsYXlvdXRcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsc0JBSHNCLEVBQUE7RUFDOUI7SUFJWSxXQUFXLEVBQUE7RUFKdkI7SUFPWSxXQUFXLEVBQUE7RUFQdkI7TUFTZ0IsWUFBWSxFQUFBO0VBVDVCO0VBY1EsWUFBWSxFQUFBO0VBZHBCO0lBZ0JZLDZCQUE2QjtJQUM3QixpQkFBaUIsRUFBQTtFQWpCN0I7TUFtQmdCLG1CQUFtQixFQUFBO0VBbkJuQztJQXdCZ0IsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBekJoQztJQTRCZ0IsU0FBUyxFQUFBO0VBNUJ6QjtJQStCZ0IsZUFBZTtJQUNmLFNBQVMsRUFBQTtFQU16QjtFQUNJLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuOmhvc3Qge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1pdGVtID4gYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIC5tZWRpYSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lZGlhLWJvZHkge1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxhc3Qge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLWJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.pushRightClass = 'push-right';
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    HeaderComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: !isActive, collapsed: !collapsed}\">\r\n    <div class=\"list-group\">\r\n        <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'Dashboard' | translate }}</span>\r\n        </a>\r\n        <!-- <a routerLink=\"/user/employeelist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'User' | translate }}</span>\r\n        </a> -->\r\n        <!-- <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n            <span>{{ 'Charts' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;\r\n            <span>{{ 'Tables' | translate }}</span>\r\n        </a>\r\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;\r\n            <span>{{ 'Forms' | translate }}</span>\r\n        </a> -->\r\n\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n                <i class=\"fa fa-user\"></i>&nbsp;\r\n                <span>{{ 'Users' }}</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a routerLink=\"/user/adminuserlist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Admin Users' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <!-- <a href=\"javascript:void(0)\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Employees' | translate }}</span>\r\n                        </a> -->\r\n                        <a routerLink=\"/user/employeelist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Employees' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <!-- <li>\r\n                        <a routerLink=\"/user/upload\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Upload' | translate }}</span>\r\n                        </a>\r\n                    </li> -->\r\n                    <li>\r\n                        <a routerLink=\"/user/traineelist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Aspirants' | translate }}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('manage')\">\r\n                <i class=\"fa fa-cogs\"></i>&nbsp;\r\n                <span>{{ 'Manage' }}</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'manage'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a routerLink=\"/manage/examlist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Exam' }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/manage/categorylist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Question Category'}}</span>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a routerLink=\"/manage/teamlist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Team' }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/manage/designationlist\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Designation'}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/manage/degreeList\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Degree' }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a routerLink=\"/manage/stateList\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'State' }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Tags' }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Project' }}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Resource'}}</span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                            <i class=\"fa fa-monument\"></i>&nbsp;\r\n                            <span>{{ 'Query window' }}</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div>\r\n        <a routerLink=\"/user/upload\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;\r\n            <span>{{ 'User Exam' | translate }}</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"toggle-button\" [ngClass]=\"{collapsed: !collapsed}\" (click)=\"toggleCollapsed()\">\r\n        <i class=\"fa fa-fw fa-angle-double-left\"></i>&nbsp;\r\n        <span>{{ 'Collapse Sidebar' | translate }}</span>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 102px;\n  left: 235px;\n  width: 235px;\n  margin-left: -235px;\n  margin-bottom: 48px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #222;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  white-space: nowrap;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #222;\n    border: 0;\n    border-radius: 0;\n    color: #999;\n    text-decoration: none; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group a.router-link-active {\n    background: #151515;\n    color: #fff; }\n  .sidebar .list-group .header-fields {\n    padding-top: 10px; }\n  .sidebar .list-group .header-fields > .list-group-item:first-child {\n      border-top: 1px solid rgba(255, 255, 255, 0.2); }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #222; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: 0.75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover,\n    .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #151515; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radious: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #222;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #fff; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #151515; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #fff;\n    padding: 10px;\n    display: block; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 54px;\n    left: 0px; } }\n  @media print {\n  .sidebar {\n    display: none !important; } }\n  @media (min-width: 992px) {\n  .header-fields {\n    display: none; } }\n  ::-webkit-scrollbar {\n  width: 8px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 0px white;\n  border-radius: 3px; }\n  ::-webkit-scrollbar-thumb {\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 0 3px white; }\n  .toggle-button {\n  position: fixed;\n  width: 236px;\n  cursor: pointer;\n  padding: 12px;\n  bottom: 0;\n  color: #999;\n  background: #212529;\n  border-top: 1px solid #999;\n  transition: all 0.2s ease-in-out; }\n  .toggle-button i {\n    font-size: 23px; }\n  .toggle-button:hover {\n    background: #151515;\n    color: #fff; }\n  .collapsed {\n  width: 50px; }\n  .collapsed span {\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9EOlxcVmFpc2hhbGkgUHJvamVjdHNcXEV4YW1UZXN0XFxleGFtcG9ydGFsXFxVSVxcZXhhbXBvcnRhbC9zcmNcXGFwcFxcbGF5b3V0XFxjb21wb25lbnRzXFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFiMEI7RUFjMUIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBS25CLGdDQUFnQyxFQUFBO0VBckJwQztJQXlCWSxnQkExQmtCO0lBMkJsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUIsRUFBQTtFQTdCakM7TUErQmdCLGtCQUFrQixFQUFBO0VBL0JsQztJQW1DWSxtQkFBZ0Q7SUFDaEQsV0FBVyxFQUFBO0VBcEN2QjtJQXVDWSxtQkFBZ0Q7SUFDaEQsV0FBVyxFQUFBO0VBeEN2QjtJQTJDWSxpQkFBaUIsRUFBQTtFQTNDN0I7TUE4Q2dCLDhDQUE4QyxFQUFBO0VBOUM5RDtJQW9EWSxtQkFBbUI7SUFDbkIsWUFBWSxFQUFBO0VBckR4QjtJQXdEWSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQixFQUFBO0VBMUQ1QjtNQTREZ0IsV0FBVztNQUNYLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsZ0JBaEVjLEVBQUE7RUFDOUI7UUFpRW9CLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsdUJBQXVCO1FBQ3ZCLGlCQUFpQixFQUFBO0VBcEVyQzs7TUF5RWdCLFdBQVc7TUFDWCxhQUFhO01BQ2Isb0JBQW9CLEVBQUE7RUEzRXBDO0lBK0VZLG1CQUFnRCxFQUFBO0VBL0U1RDtJQWtGWSxpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0VBbkZ4QjtNQXNGb0IsZ0JBQWdCO01BQ2hCLHNCQXhGVTtNQXlGViwyQkFBMkIsRUFBQTtFQXhGL0M7UUEwRndCLFdBQVcsRUFBQTtFQTFGbkM7UUE2RndCLFdBQVcsRUFBQTtFQTdGbkM7TUFpR29CLG1CQUFnRCxFQUFBO0VBT3BFO0VBRVEsZUFBZSxFQUFBO0VBRnZCO0VBS1EscUJBQXFCLEVBQUE7RUFMN0I7RUFRUSxhQUFhO0VBQ2IsU0FBUyxFQUFBO0VBVGpCO0VBYVksY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZLEVBQUE7RUFmeEI7SUFrQm9CLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYyxFQUFBO0VBTWxDO0VBQ0k7SUFDSSxTQUFTO0lBQ1QsU0FBUyxFQUFBLEVBQ1o7RUFFTDtFQUNJO0lBQ0ksd0JBQXdCLEVBQUEsRUFDM0I7RUFFTDtFQUNJO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCO0VBR0w7RUFDSSxVQUFVLEVBQUE7RUFHZDtFQUNJLHVDQUF3RDtFQUN4RCxrQkFBa0IsRUFBQTtFQUd0QjtFQUNJLGtCQUFrQjtFQUNsQix1Q0FBd0QsRUFBQTtFQUc1RDtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsV0FBVztFQUNYLG1CQUFtQjtFQVFuQiwwQkFBMEI7RUFLMUIsZ0NBQWdDLEVBQUE7RUFwQnBDO0lBU1EsZUFBZSxFQUFBO0VBVHZCO0lBWVEsbUJBQWdEO0lBQ2hELFdBQVcsRUFBQTtFQVVuQjtFQUNJLFdBQVcsRUFBQTtFQURmO0lBR1EsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4uc2lkZWJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRvcDogMTAycHg7XHJcbiAgICBsZWZ0OiAyMzVweDtcclxuICAgIHdpZHRoOiAyMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9wbmF2LWJhY2tncm91bmQtY29sb3I7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICAgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIGEubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIC5mYSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEucm91dGVyLWxpbmstYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgICAgPiAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhci1kcm9wZG93biB7XHJcbiAgICAgICAgKjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRvcG5hdi1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIsXHJcbiAgICAgICAgICAgIGE6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhbmVsLXRpdGxlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFuZWwtY29sbGFwc2Uge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaW91czogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAucGFuZWwtYm9keSB7XHJcbiAgICAgICAgICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAgc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCR0b3BuYXYtYmFja2dyb3VuZC1jb2xvciwgNSUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubmVzdGVkLW1lbnUge1xyXG4gICAgLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5lc3RlZCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgfVxyXG4gICAgdWwuc3VibWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAmIC5leHBhbmQge1xyXG4gICAgICAgIHVsLnN1Ym1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5zaWRlYmFyIHtcclxuICAgICAgICB0b3A6IDU0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBwcmludCB7XHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmhlYWRlci1maWVsZHMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDIzNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgYmFja2dyb3VuZDogIzIxMjUyOTtcclxuICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdG9wbmF2LWJhY2tncm91bmQtY29sb3IsIDUlKTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    };
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    SidebarComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    SidebarComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    SidebarComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    SidebarComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    SidebarComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapsedEvent", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/layout/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'manage', loadChildren: './manage/manage.module#ManageModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\r\n<section class=\"main-container\" [ngClass]=\"{collapsed: !collapedSideBar}\">\r\n    <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  transition: margin-left 0.2s ease-in-out; }\n\n.main-container {\n  margin-top: 104px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n.collapsed {\n  margin-left: 50px; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Q6XFxWYWlzaGFsaSBQcm9qZWN0c1xcRXhhbVRlc3RcXGV4YW1wb3J0YWxcXFVJXFxleGFtcG9ydGFsL3NyY1xcYXBwXFxsYXlvdXRcXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUtJLHdDQUF3QyxFQUFBOztBQUU1QztFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSTtJQUNJLDJCQUEyQixFQUFBLEVBQzlCOztBQUVMO0VBQ0k7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCLEVBQUEsRUFDOUIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzVweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29sbGFwc2VkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAubWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgcHJpbnQge1xyXG4gICAgLm1haW4tY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () { };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_4__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map