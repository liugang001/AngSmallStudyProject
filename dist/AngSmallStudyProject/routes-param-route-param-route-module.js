(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-param-route-param-route-module"],{

/***/ "./src/app/routes/param-route/param-route.component.css":
/*!**************************************************************!*\
  !*** ./src/app/routes/param-route/param-route.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    width:100%;\r\n    height:400px;\r\n    border:1px solid #5e5e5e;\r\n    border-radius:10px;\r\n    padding:10px;\r\n    margin-top:10px;\r\n}\r\nbutton{margin-right:5px;}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/routes/param-route/param-route.component.html":
/*!***************************************************************!*\
  !*** ./src/app/routes/param-route/param-route.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">路由跳转效果</div>\n    <div class=\"panel-body\">\n        <div class=\"top-dis\">\n          <button type=\"button\"  [routerLink]=\"['./tableList']\" class=\"btn btn-primary\">列表页面</button>\n        </div>\n        <div class=\"box\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/param-route/param-route.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/param-route/param-route.component.ts ***!
  \*************************************************************/
/*! exports provided: ParamRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamRouteComponent", function() { return ParamRouteComponent; });
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

var ParamRouteComponent = /** @class */ (function () {
    function ParamRouteComponent() {
    }
    ParamRouteComponent.prototype.ngOnInit = function () {
    };
    ParamRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-param-route',
            template: __webpack_require__(/*! ./param-route.component.html */ "./src/app/routes/param-route/param-route.component.html"),
            styles: [__webpack_require__(/*! ./param-route.component.css */ "./src/app/routes/param-route/param-route.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParamRouteComponent);
    return ParamRouteComponent;
}());



/***/ }),

/***/ "./src/app/routes/param-route/param-route.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/param-route/param-route.module.ts ***!
  \**********************************************************/
/*! exports provided: ParamRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamRouteModule", function() { return ParamRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _param_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./param-route.component */ "./src/app/routes/param-route/param-route.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_list_route_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-list/route-list.component */ "./src/app/routes/param-route/route-list/route-list.component.ts");
/* harmony import */ var _route_detail_route_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-detail/route-detail.component */ "./src/app/routes/param-route/route-detail/route-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routeParam = [
    {
        path: "",
        component: _param_route_component__WEBPACK_IMPORTED_MODULE_2__["ParamRouteComponent"],
        children: [
            { path: "tableList", component: _route_list_route_list_component__WEBPACK_IMPORTED_MODULE_4__["RouteListComponent"] },
            { path: "tableDetail/:id", component: _route_detail_route_detail_component__WEBPACK_IMPORTED_MODULE_5__["RouteDetailComponent"] },
            { path: "", redirectTo: "/routemain/gotoRoute/tableList" }
        ]
    }
];
var ParamRouteModule = /** @class */ (function () {
    function ParamRouteModule() {
    }
    ParamRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routeParam)
            ],
            declarations: [_param_route_component__WEBPACK_IMPORTED_MODULE_2__["ParamRouteComponent"], _route_list_route_list_component__WEBPACK_IMPORTED_MODULE_4__["RouteListComponent"], _route_detail_route_detail_component__WEBPACK_IMPORTED_MODULE_5__["RouteDetailComponent"]]
        })
    ], ParamRouteModule);
    return ParamRouteModule;
}());



/***/ }),

/***/ "./src/app/routes/param-route/route-detail/route-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/routes/param-route/route-detail/route-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "strong{font-size:20px;}\r\n"

/***/ }),

/***/ "./src/app/routes/param-route/route-detail/route-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/routes/param-route/route-detail/route-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"text-danger\">\n      <strong>接收到传递过来的参数是：{{idParam}}</strong>\n</p>\n<p class=\"text-danger\">\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"varyParams()\">点击变化当前路由页面参数</button>\n</p>\n\n"

/***/ }),

/***/ "./src/app/routes/param-route/route-detail/route-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/routes/param-route/route-detail/route-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: RouteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteDetailComponent", function() { return RouteDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteDetailComponent = /** @class */ (function () {
    function RouteDetailComponent(router, routerInfo) {
        this.router = router;
        this.routerInfo = routerInfo;
        this.newParam = '344';
    }
    //变化当前路由中的参数值
    RouteDetailComponent.prototype.varyParams = function () {
        this.router.navigate(['./routemain/gotoRoute/tableDetail', this.newParam]);
    };
    RouteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //参数快照
        this.idParam = this.routerInfo.snapshot.params['id'];
        //参数订阅
        this.routerInfo.params.subscribe(function (data) {
            _this.idParam = data['id'];
        });
    };
    RouteDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-detail',
            template: __webpack_require__(/*! ./route-detail.component.html */ "./src/app/routes/param-route/route-detail/route-detail.component.html"),
            styles: [__webpack_require__(/*! ./route-detail.component.css */ "./src/app/routes/param-route/route-detail/route-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RouteDetailComponent);
    return RouteDetailComponent;
}());



/***/ }),

/***/ "./src/app/routes/param-route/route-list/route-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/routes/param-route/route-list/route-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/param-route/route-list/route-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/routes/param-route/route-list/route-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n    <table class=\"table table-hover table-striped\">\n        <thead>\n            <tr>\n                <th>姓名</th>\n                <th>年龄</th>\n                <th>操作</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td>张三</td>\n                <td>24</td>\n                <td><button type=\"button\" class=\"btn btn-sm btn-primary\"  [routerLink]=\"['../tableDetail',34]\">查看</button></td>\n            </tr>\n            <tr>\n              <td>李四</td>\n              <td>22</td>\n              <td><button type=\"button\" class=\"btn btn-sm btn-primary\" [routerLink]=\"['../tableDetail',1578]\">查看</button></td>\n            </tr>\n            <tr>\n              <td>王五</td>\n              <td>26</td>\n              <td><button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"checkDetail()\">查看</button></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/param-route/route-list/route-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/routes/param-route/route-list/route-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: RouteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteListComponent", function() { return RouteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteListComponent = /** @class */ (function () {
    function RouteListComponent(route) {
        this.route = route;
    }
    RouteListComponent.prototype.ngOnInit = function () { };
    RouteListComponent.prototype.checkDetail = function () {
        this.route.navigate(["./routemain/gotoRoute/tableDetail", 345566]);
    };
    RouteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-list',
            template: __webpack_require__(/*! ./route-list.component.html */ "./src/app/routes/param-route/route-list/route-list.component.html"),
            styles: [__webpack_require__(/*! ./route-list.component.css */ "./src/app/routes/param-route/route-list/route-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RouteListComponent);
    return RouteListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=routes-param-route-param-route-module.js.map