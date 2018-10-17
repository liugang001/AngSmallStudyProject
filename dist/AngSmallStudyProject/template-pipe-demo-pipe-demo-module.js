(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["template-pipe-demo-pipe-demo-module"],{

/***/ "./src/app/pipe/apply-way.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipe/apply-way.pipe.ts ***!
  \****************************************/
/*! exports provided: ApplyWayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyWayPipe", function() { return ApplyWayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplyWayPipe = /** @class */ (function () {
    function ApplyWayPipe() {
    }
    ApplyWayPipe.prototype.transform = function (value) {
        var applyWayName;
        switch (value) {
            case 0:
                applyWayName = "微信支付";
                break;
            case 1:
                applyWayName = "银联支付";
                break;
            case 2:
                applyWayName = "支付宝支付";
                break;
            case 3:
                applyWayName = "其他支付";
                break;
            default:
                applyWayName = "未匹配";
                break;
        }
        return applyWayName;
    };
    ApplyWayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'applyWay'
        })
    ], ApplyWayPipe);
    return ApplyWayPipe;
}());



/***/ }),

/***/ "./src/app/pipe/phone.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipe/phone.pipe.ts ***!
  \************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhonePipe = /** @class */ (function () {
    function PhonePipe() {
    }
    PhonePipe.prototype.transform = function (value) {
        return value.substr(0, 3) + "****" + value.substr(7);
    };
    PhonePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'phone'
        })
    ], PhonePipe);
    return PhonePipe;
}());



/***/ }),

/***/ "./src/app/template/pipe-demo/pipe-demo.component.css":
/*!************************************************************!*\
  !*** ./src/app/template/pipe-demo/pipe-demo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{font-size:18px;}\r\n"

/***/ }),

/***/ "./src/app/template/pipe-demo/pipe-demo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/template/pipe-demo/pipe-demo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <!--内置管道-->\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading\">内置管道</div>\r\n    <div class=\"panel-body\">\r\n        <p class=\"alert alert-warning\"><strong>{{timeDes | date:\"yyyy-MM-dd HH:mm:ss\"}}</strong></p>\r\n        <p class=\"alert alert-danger\"><strong>{{myNumber | number:\"1.2-2\"}}</strong></p>\r\n        <p class=\"alert alert-success\"><strong>{{mySmEngLish | uppercase}}</strong></p>\r\n        <p class=\"alert alert-danger\"><strong>{{myBgEnglish | lowercase}}</strong></p>\r\n        <p class=\"alert alert-warning\"><strong>{{HellowParking | slice:1:9}}</strong></p>\r\n        <p class=\"alert alert-success\"><strong>{{Project | json}}</strong></p>\r\n    </div>\r\n  </div>\r\n  <!--自定义管道-->\r\n  <div class=\"panel panel-danger\">\r\n      <div class=\"panel-heading\">自定义管道</div>\r\n      <div class=\"panel-body\">\r\n          <div class=\"table-responsive\">\r\n              <table class=\"table table-bordered table-hover table-striped\">\r\n                  <thead>\r\n                      <tr>\r\n                        <th class=\"text-center\">序号</th>\r\n                        <th class=\"text-center\">姓名</th>\r\n                        <th class=\"text-center\">电话号码</th>\r\n                        <th class=\"text-center\">支付方式</th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr class=\"text-center\" *ngFor=\"let item of myTableList;index as i\">\r\n                          <td>{{i+1}}</td>\r\n                          <td>{{item.name}}</td>\r\n                          <td><strong class=\"text-danger\">{{item.phone | phone}}</strong></td>\r\n                          <td><strong class=\"text-primary\">{{item.applyWay | applyWay}}</strong></td>\r\n                      </tr>\r\n                  </tbody>\r\n              </table>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/template/pipe-demo/pipe-demo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/template/pipe-demo/pipe-demo.component.ts ***!
  \***********************************************************/
/*! exports provided: PipeDemoComponent, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeDemoComponent", function() { return PipeDemoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
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

var PipeDemoComponent = /** @class */ (function () {
    function PipeDemoComponent() {
        //日期格式化
        this.timeDes = new Date().getTime();
        //数字截取
        this.myNumber = 2.4645;
        //字母转化大写
        this.mySmEngLish = "this is a sentence";
        //字母转换为小写
        this.myBgEnglish = "My APPLICATION";
        //字符串截取
        this.HellowParking = "HellowParking";
        //创建数据对象
        this.Project = {
            name: "lg", address: "sichuangsheng"
        };
        //创建列表模型数组元素
        this.myTableList = [
            { name: "张三", phone: "13466773478", applyWay: 1 },
            { name: "李四", phone: "12348152738", applyWay: 0 },
            { name: "王五", phone: "15677893344", applyWay: 2 },
            { name: "赵六", phone: "18977637233", applyWay: 3 },
            { name: "李八", phone: "15966382233", applyWay: 0 },
            { name: "孙九", phone: "18083832356", applyWay: 3 },
        ];
    }
    PipeDemoComponent.prototype.ngOnInit = function () { };
    PipeDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipe-demo',
            template: __webpack_require__(/*! ./pipe-demo.component.html */ "./src/app/template/pipe-demo/pipe-demo.component.html"),
            styles: [__webpack_require__(/*! ./pipe-demo.component.css */ "./src/app/template/pipe-demo/pipe-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PipeDemoComponent);
    return PipeDemoComponent;
}());

var Person = /** @class */ (function () {
    function Person(name, phone, applyWay) {
        this.name = name;
        this.phone = phone;
        this.applyWay = applyWay;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/template/pipe-demo/pipe-demo.module.ts":
/*!********************************************************!*\
  !*** ./src/app/template/pipe-demo/pipe-demo.module.ts ***!
  \********************************************************/
/*! exports provided: PipeDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeDemoModule", function() { return PipeDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_demo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe-demo.component */ "./src/app/template/pipe-demo/pipe-demo.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pipe_apply_way_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipe/apply-way.pipe */ "./src/app/pipe/apply-way.pipe.ts");
/* harmony import */ var _pipe_phone_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipe/phone.pipe */ "./src/app/pipe/phone.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//路由配置设置
var pipeRoute = [
    {
        path: "",
        component: _pipe_demo_component__WEBPACK_IMPORTED_MODULE_2__["PipeDemoComponent"],
    }
];
var PipeDemoModule = /** @class */ (function () {
    function PipeDemoModule() {
    }
    PipeDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(pipeRoute),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_pipe_demo_component__WEBPACK_IMPORTED_MODULE_2__["PipeDemoComponent"], _pipe_apply_way_pipe__WEBPACK_IMPORTED_MODULE_4__["ApplyWayPipe"], _pipe_phone_pipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"]]
        })
    ], PipeDemoModule);
    return PipeDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=template-pipe-demo-pipe-demo-module.js.map