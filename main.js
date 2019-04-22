(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _on_boarding_on_boarding_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-boarding/on-boarding.module */ "./src/app/on-boarding/on-boarding.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _on_boarding_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-boarding/on-boarding/on-boarding.component */ "./src/app/on-boarding/on-boarding/on-boarding.component.ts");
/* harmony import */ var _on_boarding_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-boarding/list-students/list-students.component */ "./src/app/on-boarding/list-students/list-students.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/register/register.component */ "./src/app/auth/register/register.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");










var routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
            },
            {
                path: 'register',
                component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]
            }
        ]
    },
    {
        path: 'onboard',
        children: [
            {
                path: 'form',
                component: _on_boarding_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_5__["OnBoardingComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'students',
                component: _on_boarding_list_students_list_students_component__WEBPACK_IMPORTED_MODULE_6__["ListStudentsComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'view/:id',
                component: _on_boarding_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_5__["OnBoardingComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'edit/:id',
                component: _on_boarding_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_5__["OnBoardingComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _on_boarding_on_boarding_module__WEBPACK_IMPORTED_MODULE_3__["OnBoardingModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-container {\r\n    position: relative;\r\n    min-height: 100vh;\r\n  }\r\n  #content-wrap {\r\n    padding-bottom: 5rem;  \r\n  }\r\n  #footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 3.9rem;            /* Footer height */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYyxhQUFhLGtCQUFrQjtFQUMvQyIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gICNjb250ZW50LXdyYXAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVyZW07ICBcclxuICB9XHJcbiAgI2Zvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMy45cmVtOyAgICAgICAgICAgIC8qIEZvb3RlciBoZWlnaHQgKi9cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-container\">\n    <app-header></app-header>\n    <div id=\"content-wrap\">\n        <!-- all other page content -->\n        <router-outlet></router-outlet>\n    </div>\n    <footer id=\"footer\">\n        <app-footer></app-footer>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'on-boarding-webapp';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _on_boarding_on_boarding_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./on-boarding/on-boarding.module */ "./src/app/on-boarding/on-boarding.module.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/common/footer/footer.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _on_boarding_on_boarding_module__WEBPACK_IMPORTED_MODULE_5__["OnBoardingModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/auth/register/register.component.ts");














var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form-container{\r\n    text-align: center;\r\n}\r\n\r\n.form-field-width{\r\n    width:40%;\r\n}\r\n\r\n.login-header{\r\n    margin-top: 5%;\r\n}\r\n\r\n.login-button, .reset-button{\r\n    margin: 30px;\r\n}\r\n\r\n.login-error{\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\na:link {\r\n    text-decoration: underline;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7RUFDNUIiLCJmaWxlIjoiYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtLWNvbnRhaW5lcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tZmllbGQtd2lkdGh7XHJcbiAgICB3aWR0aDo0MCU7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiwgLnJlc2V0LWJ1dHRvbntcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmxvZ2luLWVycm9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5hOmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-form-container\">\n  <div class=\"login\">\n    <h3 class=\"login-header\">Login</h3>\n    <form [formGroup]=\"loginForm\" class=\"login-container\" (ngSubmit)=\"login()\">\n\n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-width\">\n          <input matInput placeholder=\"User Name\" formControlName=\"userName\">\n          <mat-error *ngIf=\"userName.errors\">User Name is required</mat-error>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-width\">\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n          <mat-error *ngIf=\"password.errors\">Password is required</mat-error>\n        </mat-form-field>\n      </div>\n\n      <p class=\"login-error\" *ngIf=\"isLoginError===true\">{{showLoginErrorMessage}}</p>\n\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary login-button\" [disabled]=\"!loginForm.valid\" type=\"submit\">Login</button>\n        <button class=\"btn btn-primary reset-button\" type=\"reset\" [disabled]=\"!loginForm.touched\">Reset</button>\n        <div>\n          <a href=\"javascript:void(0)\" (click)=\"redirectToRegister()\">Register in Student OnBoarding Webapp</a>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.showLoginErrorMessage = "show error";
        this.isLoginError = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //if user is already logged in, then redirect to onboarding form screen.
        if (this.authService.isUserLoggedIn()) {
            this.router.navigate(['/onboard/form']);
        }
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        //if login error is shown and validation error is there on fields and then if field changes, remove the login error.
        this.loginForm.valueChanges
            .subscribe(function (value) {
            _this.isLoginError = false;
        });
    };
    LoginComponent.prototype.login = function () {
        if (this.loginForm.invalid) {
            return;
        }
        var loginResult = this.authService.isLoginSuccessful(this.loginForm.value);
        if (loginResult.isLoginSuccessFul) {
            this.router.navigate(['/onboard/form']);
        }
        else { // if login result is not successful, then show the error message on login screen.
            if (loginResult.passwordIncorrect) {
                this.isLoginError = true;
                this.showLoginErrorMessage = "Password is incorrect.";
                this.loginForm.setErrors({ 'invalid': true });
                return;
            }
            else {
                this.isLoginError = true;
                this.showLoginErrorMessage = "User does not exist. Please try again or register.";
                this.loginForm.setErrors({ 'invalid': true });
                return;
            }
        }
    };
    Object.defineProperty(LoginComponent.prototype, "userName", {
        get: function () {
            return this.loginForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.redirectToRegister = function () {
        this.router.navigate(['/auth/register']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/auth/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-container{\r\n    text-align: center;\r\n}\r\n\r\n.form-field-width{\r\n    width: 40%;\r\n}\r\n\r\n.register-header{\r\n    margin-top: 5%;\r\n}\r\n\r\n.register-error{\r\n    color: red;\r\n    font-weight: bold;\r\n}\r\n\r\n.registration-button{\r\n    margin: 30px;\r\n}\r\n\r\na:link {\r\n    text-decoration: underline;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQkFBMEI7RUFDNUIiLCJmaWxlIjoiYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLWZpZWxkLXdpZHRoe1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZXJyb3J7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG59XHJcblxyXG5hOmxpbmsge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container register-container\">\n  <div class=\"register\">\n    <h3 class=\"register-header\">Register</h3>\n    <form [formGroup]=\"registrationForm\" class=\"register-container\" (ngSubmit)=\"register()\">\n  \n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-width\">\n          <input matInput placeholder=\"UserName\" formControlName=\"userName\">\n          <mat-error *ngIf=\"userName.errors?.required\">Username is required</mat-error>\n         </mat-form-field>\n      </div>\n\n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-width\">\n          <input matInput placeholder=\"Email\" formControlName=\"email\">\n          <mat-error *ngIf=\"email.errors?.required\">Email is required</mat-error>\n          <mat-error *ngIf=\"email.errors?.email\">Email must be a valid email address</mat-error>\n         </mat-form-field>\n      </div>\n  \n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-width\">\n          <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"password\">\n          <mat-error *ngIf=\"password.errors?.required\">Password is required</mat-error>\n          <mat-error *ngIf=\"password.errors?.minlength\">Password must be at least 6 characters</mat-error>\n         </mat-form-field>\n      </div> \n\n      <p class=\"register-error\" *ngIf=\"isRegistrationError===true\">{{showRegistrationErrorMessage}}</p>\n  \n      <div class=\"form-group\">\n        <button class=\"btn btn-primary registration-button\" type=\"submit\" [disabled]=\"!registrationForm.valid\">Register</button>\n        <button class=\"btn btn-primary registration-button\" type=\"reset\" [disabled]=\"!registrationForm.touched\">Reset</button>\n        <div>\n            <a href=\"javascript:void(0)\" (click)=\"redirectToLogin()\">Back to Login</a>\n          </div>\n      </div>\n    </form>\n  </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/auth/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.showRegistrationErrorMessage = "";
        this.isRegistrationError = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registrationForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
        //if registration error is shown and validation error is there on fields and then if field changes, remove the registration error.
        this.registrationForm.valueChanges.subscribe(function (value) {
            _this.isRegistrationError = false;
        });
    };
    RegisterComponent.prototype.register = function () {
        if (this.registrationForm.invalid) {
            return;
        }
        var registrationResult = this.authService.addNewUser(this.registrationForm.value);
        if (registrationResult.isregistrationSuccessFul) {
            this.router.navigate(['/auth/login']);
        }
        else { // if registration is not successful show the error message.
            this.isRegistrationError = true;
            this.showRegistrationErrorMessage = registrationResult.errorMessage;
            this.registrationForm.setErrors({ 'invalid': true });
            return;
        }
    };
    RegisterComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/auth/login']);
    };
    Object.defineProperty(RegisterComponent.prototype, "userName", {
        get: function () {
            return this.registrationForm.get('userName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registrationForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registrationForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/auth/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/common/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  label{\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtNQUNJLGlCQUFpQjtNQUNqQixrQkFBa0I7TUFDbEIsWUFBWTtFQUNoQiIsImZpbGUiOiJhcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGxhYmVse1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/common/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n    <div class=\"container\">\r\n        <label class=\"label\">Created By Sonali Garg - 3145873</label>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/common/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-name-label{\r\n    color: white;\r\n    margin-right: 15px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.active{\r\n    font-weight: bolder;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1uYW1lLWxhYmVse1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">On Boarding App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\" >\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"isLoggedIn===true\" [routerLink]=\"['/onboard/form']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">On Boarding Form</a>\n          </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"isLoggedIn===true\" [routerLink]=\"['/onboard/students']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">List Students</a>\n      </li>\n      \n    </ul>\n      <label class=\"user-name-label\">{{userName}}</label>   \n      <button class=\"btn btn-secondary my-2 my-sm-0\" *ngIf=\"isLoggedIn===true\" (click)=\"logOutUser()\">Logout</button>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.isLoggedIn = false;
        authService.getLoggedInName.subscribe(function (name) { return _this.changeName(name); });
        authService.isUserLogged.subscribe(function (loggedIn) { return _this.showLogoutButton(loggedIn); });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userName = this.authService.getUserName();
    };
    HeaderComponent.prototype.changeName = function (name) {
        this.userName = name;
    };
    HeaderComponent.prototype.showLogoutButton = function (isLoggedIn) {
        this.isLoggedIn = isLoggedIn;
    };
    HeaderComponent.prototype.logOutUser = function () {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/on-boarding/delete-student-modal/delete-student-modal.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".delete-modal-button{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.dialog-container{\r\n    text-align: center;\r\n}\r\n\r\n.button-section{\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vbi1ib2FyZGluZy9kZWxldGUtc3R1ZGVudC1tb2RhbC9kZWxldGUtc3R1ZGVudC1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJhcHAvb24tYm9hcmRpbmcvZGVsZXRlLXN0dWRlbnQtbW9kYWwvZGVsZXRlLXN0dWRlbnQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUtbW9kYWwtYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLXNlY3Rpb257XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/on-boarding/delete-student-modal/delete-student-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-container justify-content-center\">\r\n  <div mat-dialog-content>\r\n    <label>Are you sure you want to delete?</label>\r\n  </div>\r\n  <div class=\"button-section\">\r\n    <button mat-button class=\"btn btn-primary delete-modal-button\" [mat-dialog-close]=\"true\" cdkFocusInitial>Yes</button>\r\n    <button mat-button class=\"btn btn-primary delete-modal-button\" (click)=\"onNoClick()\">No</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/on-boarding/delete-student-modal/delete-student-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: DeleteStudentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteStudentModalComponent", function() { return DeleteStudentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteStudentModalComponent = /** @class */ (function () {
    function DeleteStudentModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteStudentModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteStudentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-student-modal',
            template: __webpack_require__(/*! ./delete-student-modal.component.html */ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.html"),
            styles: [__webpack_require__(/*! ./delete-student-modal.component.css */ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteStudentModalComponent);
    return DeleteStudentModalComponent;
}());



/***/ }),

/***/ "./src/app/on-boarding/list-students/list-students.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/on-boarding/list-students/list-students.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-card {\r\n    width: 300px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .student-header-image {\r\n    background-image: url('https://png.pngtree.com/svg/20170424/c5d418ef9c.svg');\r\n    background-size: cover;\r\n  }\r\n  \r\n  .layout-students{\r\n      display: inline-block;\r\n      margin: 20px;\r\n  }\r\n  \r\n  .filter-student-input{\r\n    float: right;\r\n  }\r\n  \r\n  .students-container{\r\n    margin-top: 5%;\r\n  }\r\n  \r\n  .filter-container{\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .list-students-button{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  .category-text{\r\n    text-align: center;\r\n  }\r\n  \r\n  .no-record-found-text{\r\n    text-align: center;\r\n    font-size: 30px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vbi1ib2FyZGluZy9saXN0LXN0dWRlbnRzL2xpc3Qtc3R1ZGVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSw0RUFBNEU7SUFDNUUsc0JBQXNCO0VBQ3hCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLFlBQVk7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCIiwiZmlsZSI6ImFwcC9vbi1ib2FyZGluZy9saXN0LXN0dWRlbnRzL2xpc3Qtc3R1ZGVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50LWNhcmQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuc3R1ZGVudC1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3BuZy5wbmd0cmVlLmNvbS9zdmcvMjAxNzA0MjQvYzVkNDE4ZWY5Yy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICAubGF5b3V0LXN0dWRlbnRze1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItc3R1ZGVudC1pbnB1dHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcblxyXG4gIC5zdHVkZW50cy1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIC5saXN0LXN0dWRlbnRzLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubm8tcmVjb3JkLWZvdW5kLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/on-boarding/list-students/list-students.component.html":
/*!************************************************************************!*\
  !*** ./src/app/on-boarding/list-students/list-students.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center\">\n  <form id=\"categoryFilter\" class=\"filter-container\">\n    <mat-form-field class=\"form-field-full-width\" *ngIf=\"this.noDataFound===false\">\n      <mat-label>All</mat-label>\n      <mat-select [(value)]=\"selected\">\n        <mat-option>All</mat-option>\n        <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"filter-student-input\" *ngIf=\"this.noDataFound===false\">\n    <input matInput type=\"text\" placeholder=\"Search Student\" [(ngModel)]=\"term\" name=\"term\" />\n  </mat-form-field>\n  </form>\n\n  <p class=\"no-record-found-text\" *ngIf=\"this.noDataFound===true\">No Records Found</p>\n\n  <div class=\"container students-container\">\n      <div *ngFor=\"let student of students | filterStudents:term | categoryfilter:selected\" class='layout-students'>\n        <mat-card [ngStyle]=\"{'background-color': (student.category === 1)? 'lightcyan' : 'papayawhip'}\" class=\"student-card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"student-header-image\"></div>\n            <mat-card-title>{{student.studentName}}</mat-card-title>\n          </mat-card-header>\n          <p *ngIf=\"student.category === 1\">Domestic</p>\n          <p *ngIf=\"student.category === 2\">International</p>\n          <mat-card-content class=\"category-text\">\n              <table class=\"key-value-table ux-light-table\">\n                  <tbody>\n                      <tr>\n                          <td><b>Father's Name : </b></td>\n                          <td>{{student.fathersName}}</td>\n                      </tr>\n                      <tr>\n                          <td><b>Mother's Name : </b></td>\n                          <td>{{student.mothersName}}</td>\n                      </tr>                     \n                  </tbody>\n              </table>\n            \n          </mat-card-content>\n          <mat-card-actions>\n            <button mat-button class=\"btn btn-outline-success list-students-button\" (click)=\"editStudentData(this.student)\">Edit</button>\n            <button mat-button class=\"btn btn-outline-info list-students-button\" (click)=\"viewStudentData(this.student)\">View</button>\n            <button mat-button class=\"btn btn-outline-danger list-students-button\" (click)=\"openDeleteModal(this.student.studentId)\">Delete</button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n\n\n  \n</div>"

/***/ }),

/***/ "./src/app/on-boarding/list-students/list-students.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/on-boarding/list-students/list-students.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStudentsComponent", function() { return ListStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/on-boarding.service */ "./src/app/on-boarding/shared/services/on-boarding.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_student_modal_delete_student_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-student-modal/delete-student-modal.component */ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/constants */ "./src/app/on-boarding/shared/constants.ts");







var ListStudentsComponent = /** @class */ (function () {
    function ListStudentsComponent(onBoardingService, router, dialog) {
        this.onBoardingService = onBoardingService;
        this.router = router;
        this.dialog = dialog;
        this.categories = _shared_constants__WEBPACK_IMPORTED_MODULE_6__["categories"];
        this.noDataFound = false;
    }
    ListStudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onBoardingService.getStudents().subscribe(function (data) {
            if (data.length === 0) {
                _this.noDataFound = true;
            }
            _this.students = data;
        });
    };
    ListStudentsComponent.prototype.editStudentData = function (student) {
        this.router.navigate(['/onboard/edit', student.studentId]);
    };
    ListStudentsComponent.prototype.viewStudentData = function (student) {
        this.router.navigate(['/onboard/view', student.studentId]);
    };
    ListStudentsComponent.prototype.openDeleteModal = function (studentId) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_student_modal_delete_student_modal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteStudentModalComponent"], {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.onBoardingService.deleteStudent(studentId);
            }
        });
    };
    ListStudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-students',
            template: __webpack_require__(/*! ./list-students.component.html */ "./src/app/on-boarding/list-students/list-students.component.html"),
            styles: [__webpack_require__(/*! ./list-students.component.css */ "./src/app/on-boarding/list-students/list-students.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_2__["OnBoardingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ListStudentsComponent);
    return ListStudentsComponent;
}());



/***/ }),

/***/ "./src/app/on-boarding/on-boarding.module.ts":
/*!***************************************************!*\
  !*** ./src/app/on-boarding/on-boarding.module.ts ***!
  \***************************************************/
/*! exports provided: OnBoardingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingModule", function() { return OnBoardingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./on-boarding/on-boarding.component */ "./src/app/on-boarding/on-boarding/on-boarding.component.ts");
/* harmony import */ var _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-students/list-students.component */ "./src/app/on-boarding/list-students/list-students.component.ts");
/* harmony import */ var _delete_student_modal_delete_student_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./delete-student-modal/delete-student-modal.component */ "./src/app/on-boarding/delete-student-modal/delete-student-modal.component.ts");
/* harmony import */ var _shared_pipes_filter_students_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/pipes/filter-students.pipe */ "./src/app/on-boarding/shared/pipes/filter-students.pipe.ts");
/* harmony import */ var _shared_pipes_categoryfilter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/categoryfilter.pipe */ "./src/app/on-boarding/shared/pipes/categoryfilter.pipe.ts");

















var OnBoardingModule = /** @class */ (function () {
    function OnBoardingModule() {
    }
    OnBoardingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_on_boarding_on_boarding_component__WEBPACK_IMPORTED_MODULE_11__["OnBoardingComponent"], _list_students_list_students_component__WEBPACK_IMPORTED_MODULE_12__["ListStudentsComponent"], _delete_student_modal_delete_student_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeleteStudentModalComponent"], _shared_pipes_filter_students_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterStudentsPipe"], _shared_pipes_categoryfilter_pipe__WEBPACK_IMPORTED_MODULE_15__["CategoryfilterPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"]
            ],
            entryComponents: [_delete_student_modal_delete_student_modal_component__WEBPACK_IMPORTED_MODULE_13__["DeleteStudentModalComponent"]]
        })
    ], OnBoardingModule);
    return OnBoardingModule;
}());



/***/ }),

/***/ "./src/app/on-boarding/on-boarding/on-boarding.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/on-boarding/on-boarding/on-boarding.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-field-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n.document-margin {\r\n   margin: 0 10px;\r\n}\r\n  \r\n.document-section {\r\n    display: flex;\r\n    align-content: center;\r\n    align-items: center;\r\n    height: 50px;\r\n}\r\n  \r\n.asterisk-field {\r\n    float: right;\r\n    color: red;\r\n}\r\n  \r\n.form-heading {\r\n    text-align: center;\r\n    margin-top: 10px;\r\n}\r\n  \r\n.student-id-field {\r\n    display: none;\r\n}\r\n  \r\n.on-boarding-form-button {\r\n    margin-right: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy9vbi1ib2FyZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztBQUVGO0dBQ0csY0FBYztBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nL29uLWJvYXJkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1maWVsZC1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuLmRvY3VtZW50LW1hcmdpbiB7XHJcbiAgIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4uZG9jdW1lbnQtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmFzdGVyaXNrLWZpZWxkIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnN0dWRlbnQtaWQtZmllbGQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm9uLWJvYXJkaW5nLWZvcm0tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/on-boarding/on-boarding/on-boarding.component.html":
/*!********************************************************************!*\
  !*** ./src/app/on-boarding/on-boarding/on-boarding.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container justify-content-center\">\n  <div class=\"row\">\n    <div class=\"col-md-6 offset-md-3\">\n      <h4 class=\"form-heading\">Onboarding Form <span *ngIf=\"isEditForm === true\">(Edit)</span> <span *ngIf=\"isViewForm === true\">(View)</span>\n      </h4>\n      <form [formGroup]=\"onBoardingForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group student-id-field\">\n          <mat-form-field class=\"form-field-full-width\">\n            <input matInput placeholder=\"Student Id\" formControlName=\"studentId\">\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"form-field-full-width\">\n            <input matInput placeholder=\"Student Name\" formControlName=\"studentName\">\n            <mat-error *ngIf=\"studentName.errors?.required\">Student name is required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"form-field-full-width\">\n            <mat-label>Category</mat-label>\n            <mat-select formControlName=\"category\">\n              <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">{{category.name}}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"category.errors?.required\">Category is required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"form-field-full-width\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"DOB\" formControlName=\"dateOfBirth\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error *ngIf=\"dateOfBirth.errors?.required\">Date of Birth is required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"form-field-full-width\">\n            <input matInput placeholder=\"Father's Name\" formControlName=\"fathersName\">\n            <mat-error *ngIf=\"fathersName.errors?.required\">Father's name is required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"form-field-full-width\">\n            <input matInput placeholder=\"Mother's Name\" formControlName=\"mothersName\">\n            <mat-error *ngIf=\"mothersName.errors?.required\">Mother's name is required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group\">\n          <mat-form-field class=\"form-field-full-width\">\n            <input matInput type=\"number\" placeholder=\"Last Class Score %(marks)\" formControlName=\"lastClassScore\">\n            <mat-error *ngIf=\"lastClassScore.errors?.required\">Last Class Score is required</mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"form-group document-section\">\n          <label class=\"document-margin\">Documents:</label>\n          <ng-container formArrayName=\"documents\">\n            <div *ngFor=\"let name of onBoardingForm.controls.documents.controls; let i = index\" >\n               <mat-checkbox class=\"document-margin\" [formControlName]=\"i\">\n                {{documents[i].name}} <div class=\"asterisk-field\" *ngIf=\"documents[i].mandatory === true\">*</div>\n               </mat-checkbox>\n               <br/>\n            </div>\n         </ng-container>\n        </div>\n        <button class=\"btn btn-primary on-boarding-form-button\" type=\"submit\" [disabled]=\"isViewForm || !onBoardingForm.valid\">Onboard</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/on-boarding/on-boarding/on-boarding.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/on-boarding/on-boarding/on-boarding.component.ts ***!
  \******************************************************************/
/*! exports provided: OnBoardingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingComponent", function() { return OnBoardingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_validators_documentAndCategory_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/validators/documentAndCategory.validator */ "./src/app/on-boarding/shared/validators/documentAndCategory.validator.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/constants */ "./src/app/on-boarding/shared/constants.ts");
/* harmony import */ var _shared_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/on-boarding.service */ "./src/app/on-boarding/shared/services/on-boarding.service.ts");








var OnBoardingComponent = /** @class */ (function () {
    function OnBoardingComponent(formBuilder, onBoardingService, router, route) {
        this.formBuilder = formBuilder;
        this.onBoardingService = onBoardingService;
        this.router = router;
        this.route = route;
        this.categories = _shared_constants__WEBPACK_IMPORTED_MODULE_5__["categories"];
        this.documents = _shared_constants__WEBPACK_IMPORTED_MODULE_5__["documents"];
        this.isEditForm = false;
        this.isViewForm = false;
    }
    OnBoardingComponent.prototype.addDocumentsCheckboxes = function () {
        var _this = this;
        this.documents.map(function (o, i) {
            var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false); // if first item set to true, else false
            _this.onBoardingForm.controls.documents.push(control);
        });
    };
    OnBoardingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (url) { return _this.urlPath = url[0].path; }); //set the path from url
        this.route.params.subscribe(function (params) { _this.urlId = params.id; }); //set the id from url
        this.onBoardingForm = this.formBuilder.group({
            studentId: [0],
            studentName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fathersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mothersName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastClassScore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            documents: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([])
        }, { validator: _shared_validators_documentAndCategory_validator__WEBPACK_IMPORTED_MODULE_4__["DocumentAndCategoryValidator"] });
        this.addDocumentsCheckboxes(); // add checkboxes for the documents
        // show the asterisk on the documents and set the manadatory field of each document, when the category is selected
        this.onBoardingForm.get('category').valueChanges
            .subscribe(function (checkedValue) {
            var category = _this.onBoardingForm.get('category');
            if (category.value === _shared_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"].International) {
                for (var index = 0; index < _shared_constants__WEBPACK_IMPORTED_MODULE_5__["INTERNATIONAL_MANADATORY_DOCUMENTS"].length; index++) {
                    _shared_constants__WEBPACK_IMPORTED_MODULE_5__["documents"][_shared_constants__WEBPACK_IMPORTED_MODULE_5__["INTERNATIONAL_MANADATORY_DOCUMENTS"][index]].mandatory = true;
                }
            }
            if (category.value === _shared_constants__WEBPACK_IMPORTED_MODULE_5__["CATEGORIES"].Domestic) {
                for (var index = 0; index < 6; index++) {
                    if (_shared_constants__WEBPACK_IMPORTED_MODULE_5__["DOMESTIC_MANADATORY_DOCUMENTS"].includes(index)) {
                        _shared_constants__WEBPACK_IMPORTED_MODULE_5__["documents"][index].mandatory = true;
                    }
                    else {
                        _shared_constants__WEBPACK_IMPORTED_MODULE_5__["documents"][index].mandatory = false;
                    }
                }
            }
        });
        // if the url path is for view or edit, set the form values 
        if (this.urlPath === "view" || this.urlPath === "edit") {
            var editAndViewFormData = this.onBoardingService.getStudentById(this.urlId);
            if (editAndViewFormData != null) {
                this.onBoardingForm.patchValue({
                    studentId: editAndViewFormData.studentId,
                    studentName: editAndViewFormData.studentName,
                    category: editAndViewFormData.category,
                    dateOfBirth: new Date(editAndViewFormData.dateOfBirth),
                    fathersName: editAndViewFormData.fathersName,
                    mothersName: editAndViewFormData.mothersName,
                    lastClassScore: editAndViewFormData.lastClassScore
                });
                this.category.markAsDirty();
                // map the documents value in form from the student data
                this.onBoardingForm.setControl('documents', this.setDocumentsInFormArray(editAndViewFormData.documents));
                if (this.urlPath === "view") {
                    this.isViewForm = true;
                    this.disableOnBoardingForm(); // if the form is only to be viewed, disable the form fields
                }
                else {
                    this.isEditForm = true;
                }
            }
        }
    };
    OnBoardingComponent.prototype.setDocumentsInFormArray = function (documents) {
        var formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
        formArray.controls = [];
        documents.map(function (key, value) { formArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](key)); });
        return formArray;
    };
    OnBoardingComponent.prototype.disableOnBoardingForm = function () {
        this.onBoardingForm.get('studentName').disable();
        this.onBoardingForm.get('category').disable();
        this.onBoardingForm.get('dateOfBirth').disable();
        this.onBoardingForm.get('fathersName').disable();
        this.onBoardingForm.get('mothersName').disable();
        this.onBoardingForm.get('lastClassScore').disable();
        this.onBoardingForm.get('documents').disable();
    };
    Object.defineProperty(OnBoardingComponent.prototype, "studentId", {
        get: function () {
            return this.onBoardingForm.get('studentId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnBoardingComponent.prototype, "studentName", {
        get: function () {
            return this.onBoardingForm.get('studentName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnBoardingComponent.prototype, "category", {
        get: function () {
            return this.onBoardingForm.get('category');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnBoardingComponent.prototype, "dateOfBirth", {
        get: function () {
            return this.onBoardingForm.get('dateOfBirth');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnBoardingComponent.prototype, "fathersName", {
        get: function () {
            return this.onBoardingForm.get('fathersName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnBoardingComponent.prototype, "mothersName", {
        get: function () {
            return this.onBoardingForm.get('mothersName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnBoardingComponent.prototype, "lastClassScore", {
        get: function () {
            return this.onBoardingForm.get('lastClassScore');
        },
        enumerable: true,
        configurable: true
    });
    OnBoardingComponent.prototype.onSubmit = function () {
        if (this.onBoardingForm.invalid) {
            return;
        }
        if (this.isEditForm) {
            this.onBoardingService.updateStudent(this.onBoardingForm.value);
        }
        else {
            this.onBoardingService.addStudent(this.onBoardingForm.value);
        }
        this.router.navigate(['/onboard/students']);
    };
    OnBoardingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-on-boarding',
            template: __webpack_require__(/*! ./on-boarding.component.html */ "./src/app/on-boarding/on-boarding/on-boarding.component.html"),
            styles: [__webpack_require__(/*! ./on-boarding.component.css */ "./src/app/on-boarding/on-boarding/on-boarding.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_on_boarding_service__WEBPACK_IMPORTED_MODULE_6__["OnBoardingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OnBoardingComponent);
    return OnBoardingComponent;
}());



/***/ }),

/***/ "./src/app/on-boarding/shared/constants.ts":
/*!*************************************************!*\
  !*** ./src/app/on-boarding/shared/constants.ts ***!
  \*************************************************/
/*! exports provided: documents, INTERNATIONAL_MANADATORY_DOCUMENTS, DOMESTIC_MANADATORY_DOCUMENTS, categories, CATEGORIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "documents", function() { return documents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERNATIONAL_MANADATORY_DOCUMENTS", function() { return INTERNATIONAL_MANADATORY_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMESTIC_MANADATORY_DOCUMENTS", function() { return DOMESTIC_MANADATORY_DOCUMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORIES", function() { return CATEGORIES; });
var documents = [
    { id: 0, name: 'Domicile', mandatory: false },
    { id: 1, name: 'Birth Certificate', mandatory: false },
    { id: 2, name: 'Marksheets', mandatory: false },
    { id: 3, name: 'Police Clearance', mandatory: false },
    { id: 4, name: 'Passport', mandatory: false },
    { id: 5, name: 'Declaration', mandatory: false }
];
var INTERNATIONAL_MANADATORY_DOCUMENTS = [0, 1, 2, 3, 4, 5];
var DOMESTIC_MANADATORY_DOCUMENTS = [0, 1, 2, 5];
var categories = [
    { id: 1, name: 'Domestic' },
    { id: 2, name: 'International' }
];
var CATEGORIES;
(function (CATEGORIES) {
    CATEGORIES[CATEGORIES["Domestic"] = 1] = "Domestic";
    CATEGORIES[CATEGORIES["International"] = 2] = "International";
})(CATEGORIES || (CATEGORIES = {}));


/***/ }),

/***/ "./src/app/on-boarding/shared/pipes/categoryfilter.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/on-boarding/shared/pipes/categoryfilter.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryfilterPipe", function() { return CategoryfilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoryfilterPipe = /** @class */ (function () {
    function CategoryfilterPipe() {
    }
    CategoryfilterPipe.prototype.transform = function (students, selected) {
        // if no category is selected by the user, return all the students
        if (selected === undefined) {
            return students;
        }
        // filter the students on the basis of the category selected
        return students.filter(function (student) {
            return student.category === selected;
        });
    };
    CategoryfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'categoryfilter'
        })
    ], CategoryfilterPipe);
    return CategoryfilterPipe;
}());



/***/ }),

/***/ "./src/app/on-boarding/shared/pipes/filter-students.pipe.ts":
/*!******************************************************************!*\
  !*** ./src/app/on-boarding/shared/pipes/filter-students.pipe.ts ***!
  \******************************************************************/
/*! exports provided: FilterStudentsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStudentsPipe", function() { return FilterStudentsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterStudentsPipe = /** @class */ (function () {
    function FilterStudentsPipe() {
    }
    FilterStudentsPipe.prototype.transform = function (students, term) {
        // if nothing is entered by the user, return all the students
        if (term === undefined)
            return students;
        // filter the students on the basis of the term searched by the user
        return students.filter(function (student) {
            return student.studentName.toLowerCase().includes(term.toLowerCase());
        });
    };
    FilterStudentsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterStudents'
        })
    ], FilterStudentsPipe);
    return FilterStudentsPipe;
}());



/***/ }),

/***/ "./src/app/on-boarding/shared/services/on-boarding.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/on-boarding/shared/services/on-boarding.service.ts ***!
  \********************************************************************/
/*! exports provided: OnBoardingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnBoardingService", function() { return OnBoardingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var OnBoardingService = /** @class */ (function () {
    function OnBoardingService() {
        this.studentsDataKey = "studentsData";
        this.students$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.studentId$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    /**
     * get all the students from the local storage
     */
    OnBoardingService.prototype.getStudents = function () {
        if (this.students$.value.length === 0) {
            if (localStorage.hasOwnProperty(this.studentsDataKey)) {
                var studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
                this.students$.next(studentsData);
            }
        }
        return this.students$;
    };
    /**
     * add new student in local storage
     * @param student
     */
    OnBoardingService.prototype.addStudent = function (student) {
        var studentsDataPresent = localStorage.hasOwnProperty(this.studentsDataKey);
        var studentsData = [];
        if (studentsDataPresent === false) {
            student.studentId = 1; // this is the first student, set student id to 1
        }
        else {
            studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
            if (studentsData.length !== 0) {
                student.studentId = studentsData[studentsData.length - 1].studentId + 1; //set the student id, one greater than the last student added id
            }
            else {
                student.studentId = 1; // if studentsData array is empty, set the student id to 1
            }
        }
        studentsData.push(student);
        localStorage.setItem(this.studentsDataKey, JSON.stringify(studentsData));
        this.students$.next(studentsData);
    };
    /**
     * update the student
     * @param student
     */
    OnBoardingService.prototype.updateStudent = function (student) {
        var studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
        var objIndex = studentsData.findIndex((function (obj) { return obj.studentId === student.studentId; })); // find the index of student using student id
        studentsData[objIndex] = student;
        localStorage.setItem(this.studentsDataKey, JSON.stringify(studentsData));
        this.students$.next(studentsData);
    };
    /**
     * get student by id from the local storage
     * @param id
     */
    OnBoardingService.prototype.getStudentById = function (id) {
        var studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
        var studentId = parseInt(id);
        var objIndex = studentsData.findIndex((function (obj) { return obj.studentId === studentId; })); // find the index of student using student id
        return studentsData[objIndex];
    };
    /**
     * delete student from the local storage using student id
     * @param studentId
     */
    OnBoardingService.prototype.deleteStudent = function (studentId) {
        var studentsData = JSON.parse(localStorage.getItem(this.studentsDataKey));
        var deleteIndex = studentsData.findIndex((function (obj) { return obj.studentId === studentId; })); // find the index of student using student id
        if (deleteIndex !== null) {
            studentsData.splice(deleteIndex, 1);
            localStorage.setItem(this.studentsDataKey, JSON.stringify(studentsData));
        }
        this.students$.next(studentsData);
    };
    OnBoardingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OnBoardingService);
    return OnBoardingService;
}());



/***/ }),

/***/ "./src/app/on-boarding/shared/validators/documentAndCategory.validator.ts":
/*!********************************************************************************!*\
  !*** ./src/app/on-boarding/shared/validators/documentAndCategory.validator.ts ***!
  \********************************************************************************/
/*! exports provided: DocumentAndCategoryValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentAndCategoryValidator", function() { return DocumentAndCategoryValidator; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/app/on-boarding/shared/constants.ts");

function DocumentAndCategoryValidator(control) {
    var category = control.get("category");
    var documents = control.get("documents");
    if (category.pristine) {
        return null;
    }
    var categoryMisMatch = false;
    if (category.value === _constants__WEBPACK_IMPORTED_MODULE_0__["CATEGORIES"].Domestic) {
        for (var index = 0; index < _constants__WEBPACK_IMPORTED_MODULE_0__["DOMESTIC_MANADATORY_DOCUMENTS"].length; index++) {
            if (documents.value[_constants__WEBPACK_IMPORTED_MODULE_0__["DOMESTIC_MANADATORY_DOCUMENTS"][index]] === false) {
                categoryMisMatch = true;
                break;
            }
        }
    }
    if (category.value === _constants__WEBPACK_IMPORTED_MODULE_0__["CATEGORIES"].International) {
        for (var index = 0; index < _constants__WEBPACK_IMPORTED_MODULE_0__["INTERNATIONAL_MANADATORY_DOCUMENTS"].length; index++) {
            if (documents.value[_constants__WEBPACK_IMPORTED_MODULE_0__["INTERNATIONAL_MANADATORY_DOCUMENTS"][index]] === false) {
                categoryMisMatch = true;
                break;
            }
        }
    }
    return categoryMisMatch ? { 'misMatch': categoryMisMatch } : null;
}


/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        return this.authService.isUserLoggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isUserLogged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * verify if the credentials entered by the user are correct or not and send the login result
     * @param user
     */
    AuthService.prototype.isLoginSuccessful = function (user) {
        var key = "usersData";
        var userDataPresent = localStorage.hasOwnProperty(key);
        var usersData = [];
        var loginResult;
        if (userDataPresent === true) {
            usersData = JSON.parse(localStorage.getItem(key));
        }
        if (usersData.length !== 0) {
            for (var index = 0; index < usersData.length; index++) {
                if (usersData[index].userName.toLowerCase() === user.userName.toLowerCase()) {
                    if (usersData[index].password === user.password) {
                        localStorage.setItem("LoggedInUser", user.userName);
                        localStorage.setItem('ACCESS_TOKEN', "access_token");
                        this.getLoggedInName.emit(user.userName); // if login is successful, emit the user name
                        this.isUserLogged.emit(true); // if login is successful, emit that the user is logged in
                        loginResult = { isLoginSuccessFul: true, passwordIncorrect: false };
                        return loginResult;
                    }
                    else {
                        loginResult = { isLoginSuccessFul: false, passwordIncorrect: true };
                        return loginResult;
                    }
                }
            }
        }
        loginResult = { isLoginSuccessFul: false, passwordIncorrect: false };
        return loginResult;
    };
    /**
     * returns true if user is logged in and emit that user is logged in if so
     */
    AuthService.prototype.isUserLoggedIn = function () {
        if (localStorage.hasOwnProperty('ACCESS_TOKEN')) {
            this.isUserLogged.emit(true);
        }
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    };
    /**
     * get the current user logged in name
     */
    AuthService.prototype.getUserName = function () {
        return localStorage.getItem('LoggedInUser');
    };
    /**
     * log out the user from the app
     */
    AuthService.prototype.logout = function () {
        this.getLoggedInName.emit("");
        this.isUserLogged.emit(false);
        localStorage.removeItem('LoggedInUser');
        localStorage.removeItem('ACCESS_TOKEN');
    };
    /**
     * registers the new user in the app
     * @param newUser
     */
    AuthService.prototype.addNewUser = function (newUser) {
        var key = "usersData";
        var registrationResult;
        var userDataPresent = localStorage.hasOwnProperty(key);
        var usersData = [];
        if (userDataPresent === true) {
            usersData = JSON.parse(localStorage.getItem(key));
            for (var index = 0; index < usersData.length; index++) {
                if (usersData[index].userName === newUser.userName) {
                    registrationResult = { isregistrationSuccessFul: false, errorMessage: "UserName already exists." };
                    return registrationResult;
                }
                else if (usersData[index].email === newUser.email) {
                    registrationResult = { isregistrationSuccessFul: false, errorMessage: "Email already exists." };
                    return registrationResult;
                }
            }
        }
        usersData.push(newUser);
        localStorage.setItem(key, JSON.stringify(usersData));
        registrationResult = { isregistrationSuccessFul: true, errorMessage: "" };
        return registrationResult;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AuthService.prototype, "getLoggedInName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AuthService.prototype, "isUserLogged", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\NAGP\Angular\on-boarding-webapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map