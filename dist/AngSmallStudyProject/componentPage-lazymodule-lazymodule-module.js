(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentPage-lazymodule-lazymodule-module"],{

/***/ "./src/app/componentPage/lazymodule/lazymodule-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/componentPage/lazymodule/lazymodule-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: LazymoduleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazymoduleRoutingModule", function() { return LazymoduleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lazymodule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazymodule.component */ "./src/app/componentPage/lazymodule/lazymodule.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: "lazycomponent",
        component: _lazymodule_component__WEBPACK_IMPORTED_MODULE_2__["LazymoduleComponent"]
    }];
var LazymoduleRoutingModule = /** @class */ (function () {
    function LazymoduleRoutingModule() {
    }
    LazymoduleRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LazymoduleRoutingModule);
    return LazymoduleRoutingModule;
}());



/***/ }),

/***/ "./src/app/componentPage/lazymodule/lazymodule.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentPage/lazymodule/lazymodule.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*自定义样式*/\r\n.alert-md-color {\r\n  background-color: #7B1FA2;\r\n  border-color: #4A148C;\r\n  color: #fff;\r\n}\r\n.alert-gang-color {\r\n  background-color: deeppink;\r\n  border-color: pink;\r\n  color: #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componentPage/lazymodule/lazymodule.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componentPage/lazymodule/lazymodule.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">Alert样式</div>\n        <div class=\"panel-body\">\n            <!--success-->\n            <alert type=\"success\">\n              <p>You successfully read this important alert message. <a href=\"javascript:;\"></a></p>\n            </alert>\n            <!--info-->\n            <alert type=\"info\">\n              <p>This alert needs your attention, but it's not super important. <a href=\"javascript:;\"></a></p>\n            </alert>\n            <!--warning-->\n            <alert type=\"warning\">\n              <p>Better check yourself, you're not looking too good. <a href=\"javascript:;\"></a></p>\n            </alert>\n            <!--danger-->\n            <alert type=\"danger\">\n              <p>Change a few things up and try submitting again. <a href=\"http://www.baidu.com\" class=\"alert-link\">这是链接</a></p>\n            </alert>\n        </div>\n    </div>\n    <!--Alert自定义颜色样式-->\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">Alert自定义颜色样式</div>\n      <div class=\"panel-body\">\n          <alert type=\"md-color\">\n              <p>This is my style belonging to me</p>\n          </alert>\n          <alert type=\"gang-color\">\n            <p>This is my style belonging to me</p>\n          </alert>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentPage/lazymodule/lazymodule.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentPage/lazymodule/lazymodule.component.ts ***!
  \******************************************************************/
/*! exports provided: LazymoduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazymoduleComponent", function() { return LazymoduleComponent; });
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

/*
* ViewEncapsulation 扩展样式模块
* encapsulation:ViewEncapsulation.None
* */
var LazymoduleComponent = /** @class */ (function () {
    function LazymoduleComponent() {
    }
    LazymoduleComponent.prototype.ngOnInit = function () { };
    LazymoduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lazymodule',
            template: __webpack_require__(/*! ./lazymodule.component.html */ "./src/app/componentPage/lazymodule/lazymodule.component.html"),
            styles: [__webpack_require__(/*! ./lazymodule.component.css */ "./src/app/componentPage/lazymodule/lazymodule.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], LazymoduleComponent);
    return LazymoduleComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/lazymodule/lazymodule.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentPage/lazymodule/lazymodule.module.ts ***!
  \***************************************************************/
/*! exports provided: LazymoduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazymoduleModule", function() { return LazymoduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lazymodule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazymodule-routing.module */ "./src/app/componentPage/lazymodule/lazymodule-routing.module.ts");
/* harmony import */ var _lazymodule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazymodule.component */ "./src/app/componentPage/lazymodule/lazymodule.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LazymoduleModule = /** @class */ (function () {
    function LazymoduleModule() {
    }
    LazymoduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["AlertModule"].forRoot(),
                _lazymodule_routing_module__WEBPACK_IMPORTED_MODULE_2__["LazymoduleRoutingModule"]
            ],
            declarations: [_lazymodule_component__WEBPACK_IMPORTED_MODULE_3__["LazymoduleComponent"]]
        })
    ], LazymoduleModule);
    return LazymoduleModule;
}());



/***/ })

}]);
//# sourceMappingURL=componentPage-lazymodule-lazymodule-module.js.map