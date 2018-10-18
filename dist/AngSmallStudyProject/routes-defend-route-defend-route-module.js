(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-defend-route-defend-route-module"],{

/***/ "./node_modules/ngx-cookie-service/cookie-service/cookie.service.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-cookie-service/cookie-service/cookie.service.js ***!
  \**************************************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// This service is based on the `ng2-cookies` package which sadly is not a service and does
// not use `DOCUMENT` injection and therefore doesn't work well with AoT production builds.
// Package: https://github.com/BCJTI/ng2-cookies


var CookieService = (function () {
    function CookieService(
        // The type `Document` may not be used here. Although a fix is on its way,
        // we will go with `any` for now to support Angular 2.4.x projects.
        // Issue: https://github.com/angular/angular/issues/12631
        // Fix: https://github.com/angular/angular/pull/14894
        document) {
        this.document = document;
        // To avoid issues with server side prerendering, check if `document` is defined.
        this.documentIsAccessible = document !== undefined;
    }
    /**
     * @param name Cookie name
     * @returns {boolean}
     */
    CookieService.prototype.check = function (name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        var regExp = this.getCookieRegExp(name);
        var exists = regExp.test(this.document.cookie);
        return exists;
    };
    /**
     * @param name Cookie name
     * @returns {any}
     */
    CookieService.prototype.get = function (name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            var regExp = this.getCookieRegExp(name);
            var result = regExp.exec(this.document.cookie);
            return decodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    };
    /**
     * @returns {}
     */
    CookieService.prototype.getAll = function () {
        if (!this.documentIsAccessible) {
            return {};
        }
        var cookies = {};
        var document = this.document;
        if (document.cookie && document.cookie !== '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i += 1) {
                var currentCookie = split[i].split('=');
                currentCookie[0] = currentCookie[0].replace(/^ /, '');
                cookies[decodeURIComponent(currentCookie[0])] = decodeURIComponent(currentCookie[1]);
            }
        }
        return cookies;
    };
    /**
     * @param name    Cookie name
     * @param value   Cookie value
     * @param expires Number of days until the cookies expires or an actual `Date`
     * @param path    Cookie path
     * @param domain  Cookie domain
     * @param secure  Secure flag
     */
    CookieService.prototype.set = function (name, value, expires, path, domain, secure) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                var dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure) {
            cookieString += 'secure;';
        }
        this.document.cookie = cookieString;
    };
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.delete = function (name, path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', -1, path, domain);
    };
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    CookieService.prototype.deleteAll = function (path, domain) {
        if (!this.documentIsAccessible) {
            return;
        }
        var cookies = this.getAll();
        for (var cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain);
            }
        }
    };
    /**
     * @param name Cookie name
     * @returns {RegExp}
     */
    CookieService.prototype.getCookieRegExp = function (name) {
        var escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/ig, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    };
    return CookieService;
}());

CookieService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
CookieService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] },] },
]; };
//# sourceMappingURL=cookie.service.js.map

/***/ }),

/***/ "./node_modules/ngx-cookie-service/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ngx-cookie-service/index.js ***!
  \**************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-service/cookie.service */ "./node_modules/ngx-cookie-service/cookie-service/cookie.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return _cookie_service_cookie_service__WEBPACK_IMPORTED_MODULE_0__["CookieService"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/app/routes/defend-route/defend-route.component.css":
/*!****************************************************************!*\
  !*** ./src/app/routes/defend-route/defend-route.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  margin-right: 15px;\r\n}\r\n\r\n.content {\r\n  border: 2px solid red;\r\n  height: 300px;\r\n  padding: 10px;\r\n  margin-top: 10px;\r\n  border-radius: 10px;\r\n  line-height: 280px;\r\n  color: blue;\r\n  text-align: center;\r\n  font-size: 40px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/routes/defend-route/defend-route.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/routes/defend-route/defend-route.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">路由守卫操作</div>\n    <div class=\"panel-body\">\n      <div class=\"top-dis\">\n         <button class=\"btn btn-primary\" type=\"button\" (click)=\"setMyCookie()\">设置Cookie</button>\n         <button class=\"btn btn-danger\" type=\"button\" (click)=\"clearMyCookie()\">清除Cookie</button>\n         <button class=\"btn btn-warning\" type=\"button\" (click)=\"gotoRouteByCookie()\">跳转到另一个路由</button>\n      </div>\n      <div class=\"content\">\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/defend-route/defend-route.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/routes/defend-route/defend-route.component.ts ***!
  \***************************************************************/
/*! exports provided: DefendRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefendRouteComponent", function() { return DefendRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefendRouteComponent = /** @class */ (function () {
    function DefendRouteComponent(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
    }
    //设置cookie
    DefendRouteComponent.prototype.setMyCookie = function () {
        this.cookieService.set("userId", "123456789");
        alert("设置cookie userId 成功");
    };
    ;
    //清除cookie
    DefendRouteComponent.prototype.clearMyCookie = function () {
        this.cookieService.delete('userId');
        alert("删除cookie userId 成功");
    };
    //通过cookie判断
    DefendRouteComponent.prototype.gotoRouteByCookie = function () {
        if (this.cookieService.get("userId")) {
            this.router.navigate(["./routemain/defendRoute/routeMain"]);
        }
        else {
            this.router.navigate(["./routemain/defendRoute/routeLogin"]);
        }
    };
    DefendRouteComponent.prototype.ngOnInit = function () { };
    DefendRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-defend-route',
            template: __webpack_require__(/*! ./defend-route.component.html */ "./src/app/routes/defend-route/defend-route.component.html"),
            styles: [__webpack_require__(/*! ./defend-route.component.css */ "./src/app/routes/defend-route/defend-route.component.css")],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DefendRouteComponent);
    return DefendRouteComponent;
}());



/***/ }),

/***/ "./src/app/routes/defend-route/defend-route.module.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/defend-route/defend-route.module.ts ***!
  \************************************************************/
/*! exports provided: DefendRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefendRouteModule", function() { return DefendRouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _defend_route_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defend-route.component */ "./src/app/routes/defend-route/defend-route.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_login_route_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route-login/route-login.component */ "./src/app/routes/defend-route/route-login/route-login.component.ts");
/* harmony import */ var _route_main_route_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-main/route-main.component */ "./src/app/routes/defend-route/route-main/route-main.component.ts");
/* harmony import */ var _service_defend_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/defend.guard */ "./src/app/service/defend.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//路由守卫
var DefendRoutes = [{
        path: "",
        component: _defend_route_component__WEBPACK_IMPORTED_MODULE_2__["DefendRouteComponent"],
        children: [
            {
                path: "routeMain",
                component: _route_main_route_main_component__WEBPACK_IMPORTED_MODULE_5__["RouteMainComponent"],
                canActivate: [_service_defend_guard__WEBPACK_IMPORTED_MODULE_6__["DefendGuard"]]
            },
            {
                path: "routeLogin",
                component: _route_login_route_login_component__WEBPACK_IMPORTED_MODULE_4__["RouteLoginComponent"]
            },
            {
                path: "",
                redirectTo: "/routemain/defendRoute/routeMain",
                canActivate: [_service_defend_guard__WEBPACK_IMPORTED_MODULE_6__["DefendGuard"]]
            }
        ]
    }];
var DefendRouteModule = /** @class */ (function () {
    function DefendRouteModule() {
    }
    DefendRouteModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(DefendRoutes),
            ],
            declarations: [_defend_route_component__WEBPACK_IMPORTED_MODULE_2__["DefendRouteComponent"], _route_login_route_login_component__WEBPACK_IMPORTED_MODULE_4__["RouteLoginComponent"], _route_main_route_main_component__WEBPACK_IMPORTED_MODULE_5__["RouteMainComponent"]],
            providers: [_service_defend_guard__WEBPACK_IMPORTED_MODULE_6__["DefendGuard"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]]
        })
    ], DefendRouteModule);
    return DefendRouteModule;
}());



/***/ }),

/***/ "./src/app/routes/defend-route/route-login/route-login.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/routes/defend-route/route-login/route-login.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/defend-route/route-login/route-login.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/routes/defend-route/route-login/route-login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    我是登录页面\n</p>\n"

/***/ }),

/***/ "./src/app/routes/defend-route/route-login/route-login.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/routes/defend-route/route-login/route-login.component.ts ***!
  \**************************************************************************/
/*! exports provided: RouteLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteLoginComponent", function() { return RouteLoginComponent; });
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

var RouteLoginComponent = /** @class */ (function () {
    function RouteLoginComponent() {
    }
    RouteLoginComponent.prototype.ngOnInit = function () {
    };
    RouteLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-login',
            template: __webpack_require__(/*! ./route-login.component.html */ "./src/app/routes/defend-route/route-login/route-login.component.html"),
            styles: [__webpack_require__(/*! ./route-login.component.css */ "./src/app/routes/defend-route/route-login/route-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteLoginComponent);
    return RouteLoginComponent;
}());



/***/ }),

/***/ "./src/app/routes/defend-route/route-main/route-main.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/routes/defend-route/route-main/route-main.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n  /*animation: move 1.5s linear infinite;*/\r\n  font-size:48px;\r\n}\r\n@-webkit-keyframes move {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  25% {\r\n    -webkit-transform: scale(.25);\r\n            transform: scale(.25);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(.5);\r\n            transform: scale(.5);\r\n  }\r\n  75%{\r\n    -webkit-transform:scale(.75);\r\n            transform:scale(.75);\r\n  }\r\n  100%{\r\n    -webkit-transform:scale(1);\r\n            transform:scale(1);\r\n  }\r\n}\r\n@keyframes move {\r\n  0% {\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n  }\r\n  25% {\r\n    -webkit-transform: scale(.25);\r\n            transform: scale(.25);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(.5);\r\n            transform: scale(.5);\r\n  }\r\n  75%{\r\n    -webkit-transform:scale(.75);\r\n            transform:scale(.75);\r\n  }\r\n  100%{\r\n    -webkit-transform:scale(1);\r\n            transform:scale(1);\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/routes/defend-route/route-main/route-main.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/routes/defend-route/route-main/route-main.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>这是主要内容页面</p>\n"

/***/ }),

/***/ "./src/app/routes/defend-route/route-main/route-main.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/routes/defend-route/route-main/route-main.component.ts ***!
  \************************************************************************/
/*! exports provided: RouteMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteMainComponent", function() { return RouteMainComponent; });
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

var RouteMainComponent = /** @class */ (function () {
    function RouteMainComponent() {
    }
    RouteMainComponent.prototype.ngOnInit = function () {
    };
    RouteMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-route-main',
            template: __webpack_require__(/*! ./route-main.component.html */ "./src/app/routes/defend-route/route-main/route-main.component.html"),
            styles: [__webpack_require__(/*! ./route-main.component.css */ "./src/app/routes/defend-route/route-main/route-main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RouteMainComponent);
    return RouteMainComponent;
}());



/***/ }),

/***/ "./src/app/service/defend.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/service/defend.guard.ts ***!
  \*****************************************/
/*! exports provided: DefendGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefendGuard", function() { return DefendGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//路由守卫 状态
var DefendGuard = /** @class */ (function () {
    function DefendGuard(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    DefendGuard.prototype.canActivate = function () {
        var userId = this.cookieService.get("userId");
        if (!userId) {
            console.log("not exist");
            this.router.navigate(['./routemain/defendRoute/routeLogin']);
            return false;
        }
        return true;
    };
    DefendGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], DefendGuard);
    return DefendGuard;
}());



/***/ })

}]);
//# sourceMappingURL=routes-defend-route-defend-route-module.js.map