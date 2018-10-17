(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["componentPage-sendvalue-sendvalue-module"],{

/***/ "./src/app/componentPage/sendvalue/sendvalue-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/componentPage/sendvalue/sendvalue-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SendValueRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendValueRoutes", function() { return SendValueRoutes; });
/* harmony import */ var _sendvalue_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sendvalue.component */ "./src/app/componentPage/sendvalue/sendvalue.component.ts");

var SendValueRoutes = [{
        path: "",
        component: _sendvalue_component__WEBPACK_IMPORTED_MODULE_0__["SendvalueComponent"]
    }];


/***/ }),

/***/ "./src/app/componentPage/sendvalue/sendvalue.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/componentPage/sendvalue/sendvalue.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentPage/sendvalue/sendvalue.component.html":
/*!******************************************************************!*\
  !*** ./src/app/componentPage/sendvalue/sendvalue.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">父组件向组件传值</div>\n    <div class=\"panel-body\">\n        <app-sonvalue [value]=\"parentValue\" [total]=\"totalValue\" (myValueEvent)=\"acceptValue($event)\"></app-sonvalue>\n    </div>\n  </div>\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">父组件向组件传值</div>\n    <div class=\"panel-body\">\n        <p>我接收到子组件传递过来的值：<strong class=\"text-success\">{{acceptFromSon | json}}</strong></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentPage/sendvalue/sendvalue.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/componentPage/sendvalue/sendvalue.component.ts ***!
  \****************************************************************/
/*! exports provided: SendvalueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendvalueComponent", function() { return SendvalueComponent; });
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

var SendvalueComponent = /** @class */ (function () {
    function SendvalueComponent() {
        /*
        * 父组件向子组件传参
        * */
        //父组件默认传值定义
        this.parentValue = 0;
        //随机数初始化值
        this.totalValue = 0;
    }
    // 设置传参定时器发射函数，实时向子组件传递不同的参数
    SendvalueComponent.prototype.setPlaySend = function () {
        var _this = this;
        setInterval(function () {
            _this.parentValue = Number.parseInt((Math.random() * 200).toString());
            _this.totalValue += _this.parentValue;
        }, 1000);
    };
    SendvalueComponent.prototype.acceptValue = function ($event) {
        this.acceptFromSon = $event;
    };
    SendvalueComponent.prototype.ngOnInit = function () {
        this.setPlaySend();
    };
    SendvalueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendvalue',
            template: __webpack_require__(/*! ./sendvalue.component.html */ "./src/app/componentPage/sendvalue/sendvalue.component.html"),
            styles: [__webpack_require__(/*! ./sendvalue.component.css */ "./src/app/componentPage/sendvalue/sendvalue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SendvalueComponent);
    return SendvalueComponent;
}());



/***/ }),

/***/ "./src/app/componentPage/sendvalue/sendvalue.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentPage/sendvalue/sendvalue.module.ts ***!
  \*************************************************************/
/*! exports provided: SendvalueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendvalueModule", function() { return SendvalueModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sendvalue_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendvalue-routing.module */ "./src/app/componentPage/sendvalue/sendvalue-routing.module.ts");
/* harmony import */ var _sendvalue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sendvalue.component */ "./src/app/componentPage/sendvalue/sendvalue.component.ts");
/* harmony import */ var _sonvalue_sonvalue_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sonvalue/sonvalue.component */ "./src/app/componentPage/sonvalue/sonvalue.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SendvalueModule = /** @class */ (function () {
    function SendvalueModule() {
    }
    SendvalueModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_sendvalue_routing_module__WEBPACK_IMPORTED_MODULE_3__["SendValueRoutes"])
            ],
            declarations: [_sendvalue_component__WEBPACK_IMPORTED_MODULE_4__["SendvalueComponent"], _sonvalue_sonvalue_component__WEBPACK_IMPORTED_MODULE_5__["SonvalueComponent"]]
        })
    ], SendvalueModule);
    return SendvalueModule;
}());



/***/ }),

/***/ "./src/app/componentPage/sonvalue/sonvalue.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentPage/sonvalue/sonvalue.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong{font-size:16px;}\r\n.line{border:1px solid #7B1FA2;padding:10px;}\r\n"

/***/ }),

/***/ "./src/app/componentPage/sonvalue/sonvalue.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentPage/sonvalue/sonvalue.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"line\">\n  <p class=\"text-danger\">我接收到父组件传送过来的单值是: <strong class=\"text-primary\">{{value}}</strong></p>\n  <p class=\"text-danger\">我接收到父组件传送过来的总值是: <strong class=\"text-primary\">{{total}}</strong></p>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"sendParent()\">点击传到父组件</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/componentPage/sonvalue/sonvalue.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentPage/sonvalue/sonvalue.component.ts ***!
  \**************************************************************/
/*! exports provided: SonvalueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SonvalueComponent", function() { return SonvalueComponent; });
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

var SonvalueComponent = /** @class */ (function () {
    function SonvalueComponent() {
        this.myValueEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arrNameList = ['LG', 'GL', 'LIUGANG'];
        this.index = 0;
        this.timer = null;
    }
    /*
    * 子组件向父组件传参
    * */
    SonvalueComponent.prototype.sendParent = function () {
        var _this = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {
            if (_this.index > _this.arrNameList.length - 1) {
                _this.index = 0;
            }
            _this.myValueEvent.emit({ 'name': _this.arrNameList[_this.index], "age": Number.parseInt((Math.random() * 100).toString()) });
            _this.index++;
        }, 600);
    };
    SonvalueComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SonvalueComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SonvalueComponent.prototype, "total", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SonvalueComponent.prototype, "myValueEvent", void 0);
    SonvalueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sonvalue',
            template: __webpack_require__(/*! ./sonvalue.component.html */ "./src/app/componentPage/sonvalue/sonvalue.component.html"),
            styles: [__webpack_require__(/*! ./sonvalue.component.css */ "./src/app/componentPage/sonvalue/sonvalue.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SonvalueComponent);
    return SonvalueComponent;
}());



/***/ })

}]);
//# sourceMappingURL=componentPage-sendvalue-sendvalue-module.js.map