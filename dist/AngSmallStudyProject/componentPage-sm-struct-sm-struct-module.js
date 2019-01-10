(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentPage-sm-struct-sm-struct-module"],{

/***/ "./src/app/componentPage/shadow/shadow.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentPage/shadow/shadow.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentPage/shadow/shadow.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentPage/shadow/shadow.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow\">\n   <ng-content select=\"header\"></ng-content>\n   <ng-content select=\".main\"></ng-content>\n   <ng-content select=\"[name=footer]\"></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/componentPage/shadow/shadow.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentPage/shadow/shadow.component.ts ***!
  \**********************************************************/
/*! exports provided: ShadowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShadowComponent", function() { return ShadowComponent; });
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

var ShadowComponent = /** @class */ (function () {
    function ShadowComponent() {
    }
    ShadowComponent.prototype.ngOnInit = function () {
    };
    ShadowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shadow',
            template: __webpack_require__(/*! ./shadow.component.html */ "./src/app/componentPage/shadow/shadow.component.html"),
            styles: [__webpack_require__(/*! ./shadow.component.css */ "./src/app/componentPage/shadow/shadow.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShadowComponent);
    return ShadowComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-header/sm-header.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-header/sm-header.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    height:60px;\r\n    background:deepskyblue;\r\n    text-align:center;\r\n    line-height: 60px;\r\n    font-size:16px;\r\n    color:#ffffff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-header/sm-header.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-header/sm-header.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    只是头部区域\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-header/sm-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-header/sm-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: SmHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmHeaderComponent", function() { return SmHeaderComponent; });
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

var SmHeaderComponent = /** @class */ (function () {
    function SmHeaderComponent() {
    }
    SmHeaderComponent.prototype.ngOnInit = function () {
    };
    SmHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sm-header',
            template: __webpack_require__(/*! ./sm-header.component.html */ "./src/app/componentPage/sm-struct/sm-header/sm-header.component.html"),
            styles: [__webpack_require__(/*! ./sm-header.component.css */ "./src/app/componentPage/sm-struct/sm-header/sm-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmHeaderComponent);
    return SmHeaderComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-left/sm-left.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-left/sm-left.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left-main{\r\n    height:500px;\r\n    background:rebeccapurple;\r\n    font-size:16px;\r\n    color:#fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-left/sm-left.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-left/sm-left.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-main\">\r\n    这是左边Left\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-left/sm-left.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-left/sm-left.component.ts ***!
  \**********************************************************************/
/*! exports provided: SmLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmLeftComponent", function() { return SmLeftComponent; });
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

var SmLeftComponent = /** @class */ (function () {
    function SmLeftComponent() {
    }
    SmLeftComponent.prototype.ngOnInit = function () {
    };
    SmLeftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sm-left',
            template: __webpack_require__(/*! ./sm-left.component.html */ "./src/app/componentPage/sm-struct/sm-left/sm-left.component.html"),
            styles: [__webpack_require__(/*! ./sm-left.component.css */ "./src/app/componentPage/sm-struct/sm-left/sm-left.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmLeftComponent);
    return SmLeftComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-main/sm-main.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-main/sm-main.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n  height:500px;\r\n  background:deeppink;\r\n  font-size:16px;\r\n  color:#fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-main/sm-main.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-main/sm-main.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    这是主体内容区域\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-main/sm-main.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-main/sm-main.component.ts ***!
  \**********************************************************************/
/*! exports provided: SmMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmMainComponent", function() { return SmMainComponent; });
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

var SmMainComponent = /** @class */ (function () {
    function SmMainComponent() {
    }
    SmMainComponent.prototype.ngOnInit = function () {
    };
    SmMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sm-main',
            template: __webpack_require__(/*! ./sm-main.component.html */ "./src/app/componentPage/sm-struct/sm-main/sm-main.component.html"),
            styles: [__webpack_require__(/*! ./sm-main.component.css */ "./src/app/componentPage/sm-struct/sm-main/sm-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmMainComponent);
    return SmMainComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-struct.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-struct.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dis-top-bot{margin:10px 0;}\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-struct.component.html":
/*!******************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-struct.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">简但的组件布局</div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"row clearfix\">\r\n           <div class=\"col-md-12 dis-top-bot\">\r\n               <app-sm-header></app-sm-header>\r\n           </div>\r\n           <div class=\"clearfix\">\r\n              <div class=\"col-md-3\">\r\n                <app-sm-left></app-sm-left>\r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <app-sm-main></app-sm-main>\r\n              </div>\r\n           </div>\r\n          <div class=\"col-md-12 dis-top-bot\">\r\n              <!--投影分发  插槽分发-->\r\n              <app-shadow>\r\n                  <header>这是头部内容</header>\r\n                  <div class=\"main\">这是主体区域</div>\r\n                  <div name=\"footer\">这是脚部区域</div>\r\n              </app-shadow>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-struct.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-struct.component.ts ***!
  \****************************************************************/
/*! exports provided: SmStructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmStructComponent", function() { return SmStructComponent; });
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

var SmStructComponent = /** @class */ (function () {
    function SmStructComponent() {
    }
    SmStructComponent.prototype.ngOnInit = function () {
    };
    SmStructComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sm-struct',
            template: __webpack_require__(/*! ./sm-struct.component.html */ "./src/app/componentPage/sm-struct/sm-struct.component.html"),
            styles: [__webpack_require__(/*! ./sm-struct.component.css */ "./src/app/componentPage/sm-struct/sm-struct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SmStructComponent);
    return SmStructComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/sm-struct/sm-struct.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentPage/sm-struct/sm-struct.module.ts ***!
  \*************************************************************/
/*! exports provided: SmStructModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmStructModule", function() { return SmStructModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sm_struct_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sm-struct.component */ "./src/app/componentPage/sm-struct/sm-struct.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sm_header_sm_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sm-header/sm-header.component */ "./src/app/componentPage/sm-struct/sm-header/sm-header.component.ts");
/* harmony import */ var _sm_left_sm_left_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sm-left/sm-left.component */ "./src/app/componentPage/sm-struct/sm-left/sm-left.component.ts");
/* harmony import */ var _sm_main_sm_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sm-main/sm-main.component */ "./src/app/componentPage/sm-struct/sm-main/sm-main.component.ts");
/* harmony import */ var _shadow_shadow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shadow/shadow.component */ "./src/app/componentPage/shadow/shadow.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//设置路由
var structRoutes = [{
        path: "",
        component: _sm_struct_component__WEBPACK_IMPORTED_MODULE_2__["SmStructComponent"]
    }];
var SmStructModule = /** @class */ (function () {
    function SmStructModule() {
    }
    SmStructModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(structRoutes)
            ],
            declarations: [
                _sm_struct_component__WEBPACK_IMPORTED_MODULE_2__["SmStructComponent"],
                _sm_header_sm_header_component__WEBPACK_IMPORTED_MODULE_4__["SmHeaderComponent"],
                _sm_left_sm_left_component__WEBPACK_IMPORTED_MODULE_5__["SmLeftComponent"],
                _sm_main_sm_main_component__WEBPACK_IMPORTED_MODULE_6__["SmMainComponent"],
                _shadow_shadow_component__WEBPACK_IMPORTED_MODULE_7__["ShadowComponent"]
            ]
        })
    ], SmStructModule);
    return SmStructModule;
}());



/***/ })

}]);
//# sourceMappingURL=componentPage-sm-struct-sm-struct-module.js.map