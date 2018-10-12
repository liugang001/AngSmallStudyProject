(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentPage-rates-rates-module"],{

/***/ "./src/app/componentPage/rates/rates-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentPage/rates/rates-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesRoutingModule", function() { return RatesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rates.component */ "./src/app/componentPage/rates/rates.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: "rates",
        component: _rates_component__WEBPACK_IMPORTED_MODULE_2__["RatesComponent"]
    }];
var RatesRoutingModule = /** @class */ (function () {
    function RatesRoutingModule() {
    }
    RatesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RatesRoutingModule);
    return RatesRoutingModule;
}());



/***/ }),

/***/ "./src/app/componentPage/rates/rates.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentPage/rates/rates.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentPage/rates/rates.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentPage/rates/rates.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n 'rating'\n</p>\n"

/***/ }),

/***/ "./src/app/componentPage/rates/rates.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentPage/rates/rates.component.ts ***!
  \********************************************************/
/*! exports provided: RatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesComponent", function() { return RatesComponent; });
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

var RatesComponent = /** @class */ (function () {
    function RatesComponent() {
    }
    RatesComponent.prototype.ngOnInit = function () {
    };
    RatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rates',
            template: __webpack_require__(/*! ./rates.component.html */ "./src/app/componentPage/rates/rates.component.html"),
            styles: [__webpack_require__(/*! ./rates.component.css */ "./src/app/componentPage/rates/rates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RatesComponent);
    return RatesComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/rates/rates.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/componentPage/rates/rates.module.ts ***!
  \*****************************************************/
/*! exports provided: RatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatesModule", function() { return RatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _rates_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rates-routing.module */ "./src/app/componentPage/rates/rates-routing.module.ts");
/* harmony import */ var _rates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rates.component */ "./src/app/componentPage/rates/rates.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RatesModule = /** @class */ (function () {
    function RatesModule() {
    }
    RatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["RatingModule"].forRoot(),
                _rates_routing_module__WEBPACK_IMPORTED_MODULE_2__["RatesRoutingModule"]
            ],
            declarations: [_rates_component__WEBPACK_IMPORTED_MODULE_3__["RatesComponent"]]
        })
    ], RatesModule);
    return RatesModule;
}());



/***/ })

}]);
//# sourceMappingURL=componentPage-rates-rates-module.js.map