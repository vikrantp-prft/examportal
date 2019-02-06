(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/layout/dashboard/components/chat/chat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-comments fa-fw\"></i>\r\n        Chat\r\n        <div class=\" pull-right\" ngbDropdown>\r\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\r\n                </li>\r\n                <li class=\"divider dropdown-divider\"></li>\r\n                <li role=\"menuitem\">\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <a href=\"#\" class=\"dropdown-item\">\r\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <!-- /.panel-heading -->\r\n    <div class=\"card-body\">\r\n        <ul class=\"chat\">\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.card-body -->\r\n    <div class=\"card-footer\">\r\n        <div class=\"input-group\">\r\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                    Send\r\n                </button>\r\n            </span>\r\n        </div>\r\n    </div>\r\n    <!-- /.card-footer -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel .chat-dropdown {\n  margin-top: -3px; }\n\n.chat-panel .chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.chat-panel .chat .left img {\n    margin-right: 15px; }\n\n.chat-panel .chat .right img {\n    margin-left: 15px; }\n\n.chat-panel .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.chat-panel .card-footer input {\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2NoYXQvRDpcXFZhaXNoYWxpIFByb2plY3RzXFxFeGFtVGVzdFxcZXhhbXBvcnRhbFxcVUlcXGV4YW1wb3J0YWwvc3JjXFxhcHBcXGxheW91dFxcZGFzaGJvYXJkXFxjb21wb25lbnRzXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsZ0JBQWdCLEVBQUE7O0FBRnhCO0VBZVEsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQixFQUFBOztBQW5CeEI7SUFPZ0Isa0JBQWtCLEVBQUE7O0FBUGxDO0lBWWdCLGlCQUFpQixFQUFBOztBQVpqQztJQXFCWSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTs7QUF4QjFDO0VBNkJZLFlBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1wYW5lbHtcclxuICAgIC5jaGF0LWRyb3Bkb3due1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICB9XHJcbiAgICAuY2hhdHtcclxuICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodHtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICM5OTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmQtZm9vdGVye1xyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nIDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/layout/dashboard/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <div class=\"list-group\">\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-comment fa-fw\"></i> New Comment\r\n            <span class=\"float-right text-muted small\"><em>4 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers\r\n            <span class=\"float-right text-muted small\"><em>12 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-envelope fa-fw\"></i> Message Sent\r\n            <span class=\"float-right text-muted small\"><em>27 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-tasks fa-fw\"></i> New Task\r\n            <span class=\"float-right text-muted small\"><em>43 minutes ago</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-upload fa-fw\"></i> Server Rebooted\r\n            <span class=\"float-right text-muted small\"><em>11:32 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-bolt fa-fw\"></i> Server Crashed!\r\n            <span class=\"float-right text-muted small\"><em>11:13 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-warning fa-fw\"></i> Server Not Responding\r\n            <span class=\"float-right text-muted small\"><em>10:57 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-shopping-cart fa-fw\"></i> New Order Placed\r\n            <span class=\"float-right text-muted small\"><em>9:49 AM</em></span>\r\n        </a>\r\n        <a href=\"#\" class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-money fa-fw\"></i> Payment Received\r\n            <span class=\"float-right text-muted small\"><em>Yesterday</em></span>\r\n        </a>\r\n    </div>\r\n    <!-- /.list-group -->\r\n    <a href=\"#\" class=\"btn btn-default btn-block\">View All Alerts</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () { };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/dashboard/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <ul class=\"timeline\">\r\n        <li>\r\n            <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    <p><small class=\"text-muted\"><i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\r\n                    </p>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro voluptas suscipit facere rem dicta, debitis.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi officiis alias, officia repellendus.</p>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae minus eaque facere.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque, tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat, magni commodi quisquam.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente, eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus libero, omnis ut debitis!</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla qui! Laborum, atque.</p>\r\n                    <hr>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <i class=\"fa fa-gear\"></i>  <span class=\"caret\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                            <li><a href=\"#\">Action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Another action</a>\r\n                            </li>\r\n                            <li><a href=\"#\">Something else here</a>\r\n                            </li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"#\">Separated link</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi. Consequuntur, commodi.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"timeline-inverted\">\r\n            <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\r\n            </div>\r\n            <div class=\"timeline-panel\">\r\n                <div class=\"timeline-heading\">\r\n                    <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                </div>\r\n                <div class=\"timeline-body\">\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim incidunt quisquam maxime neque eaque.</p>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\n\n.timeline:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 3px;\n  margin-left: -1.5px;\n  background-color: #eeeeee; }\n\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\n\n.timeline > li:after {\n  clear: both; }\n\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 46%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\n\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\n\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\n\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\n\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\n\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\n\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\n\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\n\n.timeline-badge.success {\n  background-color: #3f903f !important; }\n\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\n\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\n\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\n\n.timeline-title {\n  margin-top: 0;\n  color: inherit; }\n\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0; }\n\n.timeline-body > p + p {\n  margin-top: 5px; }\n\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL3RpbWVsaW5lL0Q6XFxWYWlzaGFsaSBQcm9qZWN0c1xcRXhhbVRlc3RcXGV4YW1wb3J0YWxcXFVJXFxleGFtcG9ydGFsL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcY29tcG9uZW50c1xcdGltZWxpbmVcXHRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUd2Qjs7RUFFSSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjs7RUFFSSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBRWxCLDBDQUF1QyxFQUFBOztBQUczQztFQUNJLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixxQ0FBcUM7RUFDckMsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLHFDQUFxQztFQUNyQyw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksYUFBYTtFQUNiLGNBQWMsRUFBQTs7QUFHbEI7O0VBRUksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJO0lBQ0ksVUFBVSxFQUFBO0VBR2Q7SUFDSSx3QkFBd0I7SUFFeEIsZ0NBQWdDLEVBQUE7RUFHcEM7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWMsRUFBQTtFQUdsQjtJQUNJLFlBQVksRUFBQTtFQUdoQjtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQixFQUFBO0VBR3hCO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsb0JBQW9CLEVBQUEsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjBweCAwIDIwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udGltZWxpbmU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMS41cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDRkNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsMC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNnB4IHJnYmEoMCwwLDAsMC4xNzUpO1xyXG59XHJcblxyXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI2cHg7XHJcbiAgICByaWdodDogLTE1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3cHg7XHJcbiAgICByaWdodDogLTE0cHg7XHJcbiAgICBib3JkZXItdG9wOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtYmFkZ2Uge1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDUwJSA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuXHJcbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtMTRweDtcclxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcclxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2UucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZS1iYWRnZS5zdWNjZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjkwM2YgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLndhcm5pbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtYmFkZ2UuZGFuZ2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYzBkZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGltZWxpbmUtdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4udGltZWxpbmUtYm9keSA+IHAsXHJcbi50aW1lbGluZS1ib2R5ID4gdWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJvZHkgPiBwICsgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcclxuICAgIHVsLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgICAgICAgbGVmdDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICAgICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XHJcbiAgICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcclxuICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGVmdDogLTE0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
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

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/layout/dashboard/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n    <h2 class=\"text-muted\">Dashboard </h2>\r\n    <!-- <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <ngb-carousel>\r\n                <ng-template ngbSlide *ngFor=\"let slider of sliders\">\r\n                    <img class=\"img-fluid mx-auto d-block\" [src]=\"slider.imagePath\" alt=\"Random first slide\" width=\"100%\">\r\n                    <div class=\"carousel-caption\">\r\n                        <h3>{{slider.label}}</h3>\r\n                        <p>{{slider.text}}</p>\r\n                    </div>\r\n                </ng-template>\r\n            </ngb-carousel>\r\n        </div>\r\n    </div> -->\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-1 col-lg-1\"></div>\r\n        <div class=\"col-xl-5 col-lg-5 dashboard-div\">\r\n                <a [routerLink]=\"['/user/adminuserlist']\" class=\"list-group-item\">\r\n                    <app-stat [bgClass]=\"'primary'\" [icon]=\"'fa-user'\"  [label]=\"'Admin Users'\" ></app-stat>\r\n                </a>\r\n        </div>\r\n        <div class=\"col-xl-5 col-lg-5 dashboard-div\">\r\n                <a [routerLink]=\"['/user/employeelist']\" class=\"list-group-item\">\r\n                <app-stat [bgClass]=\"'warning'\" [icon]=\"'fa-users'\" [label]=\"'Employees'\" ></app-stat>\r\n                </a>\r\n        </div>\r\n        <div class=\"col-xl-1 col-lg-1\"></div>\r\n        <div class=\"col-xl-1 col-lg-1\"></div>\r\n        <div class=\"col-xl-5 col-lg-5 dashboard-div\">\r\n                <a [routerLink]=\"['/user/traineelist']\" class=\"list-group-item\">\r\n                    <app-stat [bgClass]=\"'success'\" [icon]=\"'fa-user-circle'\" [label]=\"'Trainee Drive'\" ></app-stat>\r\n                </a>\r\n        </div>\r\n        <div class=\"col-xl-5 col-lg-5 dashboard-div\">\r\n                <a [routerLink]=\"['/manage/examlist']\" class=\"list-group-item\">\r\n                    <app-stat [bgClass]=\"'danger'\" [icon]=\"'fa-file-text'\" [label]=\"'Manage Exams'\"></app-stat>\r\n                </a>\r\n           \r\n        </div>\r\n    </div>\r\n   \r\n   \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row .dashboard-div {\n  margin-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9EOlxcVmFpc2hhbGkgUHJvamVjdHNcXEV4YW1UZXN0XFxleGFtcG9ydGFsXFxVSVxcZXhhbXBvcnRhbC9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgLmRhc2hib2FyZC1kaXZ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.alerts = [];
        this.sliders = [];
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map