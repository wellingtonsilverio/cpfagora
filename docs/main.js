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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n<ngx-spinner></ngx-spinner>"

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
    }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ng_hcaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-hcaptcha */ "./node_modules/ng-hcaptcha/fesm5/ng-hcaptcha.js");











// import { AdsenseModule } from 'ng2-adsense';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                ng_hcaptcha__WEBPACK_IMPORTED_MODULE_11__["NgHcaptchaModule"].forRoot({
                    siteKey: '9df504e5-b11a-48ee-99a6-7354851c911d'
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  footer {\n    background-color: #546e7a;\n  }\n  \n  footer {\n    padding: 25px 0;\n    text-align: center;\n  }\n  \n  footer span.copyright {\n    font-size: 90%;\n    line-height: 40px;\n    text-transform: none;\n    color: #fff;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n  \n  footer ul.quicklinks {\n    font-size: 90%;\n    line-height: 40px;\n    margin-bottom: 0;\n    text-transform: none;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLG1NQUFtTTtFQUNyTTs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtTUFBbU07RUFDck0iLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIGZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NmU3YTtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBmb290ZXIgc3Bhbi5jb3B5cmlnaHQge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgfVxuICBcbiAgZm9vdGVyIHVsLnF1aWNrbGlua3Mge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"copyright\">Copyright &copy; <a href=\"http://wellingtonsilverio.github.io\"\n            target=\"_blank\">Wellington Silverio</a> 2019</span>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline social-buttons\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-facebook-f\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-linkedin-in\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline quicklinks\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Privacy Policy</a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Terms of Use</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n#search .error-alert{\n    font-size: 8px;\n    line-height: 8px;\n    background-color: #ef535044;\n    border: solid 1px #ef5350;\n    padding: 10px;\n    max-width: 650px;\n    width: 90%;\n    margin: 0 auto 6px auto;\n    border-radius: 6px;\n  }\n\n  #search .input-cpfcnpj input {\n    max-width: 650px;\n    width: 90%;\n    padding: 6px;\n    margin-bottom: 10px;\n    font-size: 24px;\n    text-align: center;\n  }\n\n  header.masthead {\n    text-align: center;\n    color: #fff;\n    background-image: url('header-bg.jpg');\n    background-repeat: no-repeat;\n    background-attachment: scroll;\n    background-position: center center;\n    background-size: cover;\n  }\n\n  header.masthead .intro-text {\n    padding-top: 150px;\n    padding-bottom: 100px;\n  }\n\n  header.masthead .intro-text .intro-lead-in {\n    font-size: 22px;\n    font-style: italic;\n    line-height: 22px;\n    margin-bottom: 25px;\n    font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n\n  header.masthead .intro-text .intro-heading {\n    font-size: 45px;\n    font-weight: 700;\n    line-height: 45px;\n    margin-bottom: 25px;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n\n  header.masthead .intro-text .intro-heading input {\n    text-align: center;\n    max-width: 90%;\n  }\n\n  @media (min-width: 768px) {\n    header.masthead .intro-text {\n      padding-top: 200px;\n      padding-bottom: 200px;\n    }\n    header.masthead .intro-text .intro-lead-in {\n      font-size: 40px;\n      font-style: italic;\n      line-height: 40px;\n      margin-bottom: 25px;\n      font-family: 'Droid Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    }\n    header.masthead .intro-text .intro-heading {\n      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNDQUF1RDtJQUN2RCw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtDQUFrQztJQUNsQyxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9NQUFvTTtFQUN0TTs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtTUFBbU07RUFDck07O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLG9NQUFvTTtJQUN0TTtJQUNBO01BQ0UsbU1BQW1NO0lBQ3JNO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4jc2VhcmNoIC5lcnJvci1hbGVydHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBsaW5lLWhlaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjUzNTA0NDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZWY1MzUwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDZweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuXG4gICNzZWFyY2ggLmlucHV0LWNwZmNucGogaW5wdXQge1xuICAgIG1heC13aWR0aDogNjUwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgXG4gIGhlYWRlci5tYXN0aGVhZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaGVhZGVyLWJnLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgaGVhZGVyLm1hc3RoZWFkIC5pbnRyby10ZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWxlYWQtaW4ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJywgJ05vdG8gQ29sb3IgRW1vamknO1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLmludHJvLXRleHQgLmludHJvLWhlYWRpbmcgaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVhZGVyLm1hc3RoZWFkIC5pbnRyby10ZXh0IHtcbiAgICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcbiAgICB9XG4gICAgaGVhZGVyLm1hc3RoZWFkIC5pbnRyby10ZXh0IC5pbnRyby1sZWFkLWluIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgfVxuICAgIGhlYWRlci5tYXN0aGVhZCAuaW50cm8tdGV4dCAuaW50cm8taGVhZGluZyB7XG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gICAgfVxuICB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"masthead\" id=\"search\">\n  <div class=\"container\">\n    <form [formGroup]=\"searchCpfCnpj\" novalidate (ngSubmit)=\"search(searchCpfCnpj.value)\" class=\"intro-text\">\n      <div class=\"intro-lead-in\">Pesquise Agora pelo CPF</div>\n      <div class=\"input-cpfcnpj\">\n        <input matInput type=\"text\" formControlName=\"cpfcnpj\" placeholder=\"CPF/CNPJ\">\n      </div>\n      <div class=\"input-cpfcnpj\">\n        <input matInput type=\"text\" formControlName=\"email\" placeholder=\"E-mail Pessoal\">\n      </div>\n      <!-- <div *ngIf=\"cpfcnpj.getError('required')\" class=\"error-alert\">\n        CPF/CNPJ: Campo necessário\n      </div>\n      <div *ngIf=\"cpfcnpj.getError('minlength')\" class=\"error-alert\">\n        CPF/CNPJ: É necessário mínimo de 8 caracteres\n      </div>\n      <div *ngIf=\"email.getError('required')\" class=\"error-alert\">\n        E-mail: Campo necessario\n      </div>\n      <div *ngIf=\"email.getError('email')\" class=\"error-alert\">\n        E-mail: Não é um e-mail valido\n      </div> -->\n      <ng-hcaptcha formControlName=\"captcha\" *ngIf=\"!captcha.valid\"></ng-hcaptcha>\n      <input type=\"submit\" class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\"\n        [disabled]=\"!searchCpfCnpj.valid\" value=\"Consultar\" *ngIf=\"captcha.valid\">\n    </form>\n  </div>\n</header>\n\n<!-- SEARCH: RESPONSE CPF -->\n<section class=\"bg-light\" *ngIf=\"cpf\" id=\"searchcpf\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">{{ cpf.nome }}</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>CPF</h4>\n          <p class=\"text-muted\">{{ cpf.cpf }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Nacimento</h4>\n          <p class=\"text-muted\">{{ cpf.nascimento | date:'dd/MM/yyyy' }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Situação na receita</h4>\n          <p class=\"text-muted\">{{ (cpf.status == 1) ? 'Regular' : 'Irregular' }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <p class=\"large text-muted\">\n          Esses dados são reais e resgatados em {{ cpf.createdAt | date:'dd/MM/yyyy' }}.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- SEARCH: RESPONSE CNPJ -->\n<section class=\"bg-light\" *ngIf=\"cnpj\" id=\"searchcnpj\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">{{ cnpj.nome }}</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Telefone / E-mail</h4>\n          <p class=\"text-muted\">{{ cnpj.telefone }} / {{ cnpj.email }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Abertura</h4>\n          <p class=\"text-muted\">{{ cnpj.abertura | date:'dd/MM/yyyy' }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Situação</h4>\n          <p class=\"text-muted\">{{ cnpj.situacao }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Endereço</h4>\n          <p class=\"text-muted\">{{ cnpj.logradouro }}, {{ cnpj.bairro }}, {{ cnpj.numero }}{{ (cnpj.complemento) ? ' ('+cnpj.complemento+')' : '' }} - {{ cnpj.municipio }}/{{ cnpj.uf }}- {{ cnpj.cep }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Atividade Principal</h4>\n          <p class=\"text-muted\" *ngIf=\"!cnpj.atividade_principal\">Não existe</p>\n          <p class=\"text-muted\" *ngFor=\"let atP of cnpj.atividade_principal\">({{ atP.code }}) {{ atP.name }}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"team-member\">\n          <h4>Atividade Secundarias</h4>\n          <p class=\"text-muted\" *ngIf=\"!cnpj.atividades_secundarias\">Não existe</p>\n          <p class=\"text-muted\" *ngFor=\"let atS of cnpj.atividades_secundarias\">({{ atS.code }}) {{ atS.name }}</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <p class=\"large text-muted\">\n          Esses dados são reais e resgatados em {{ cnpj.createdAt | date:'dd/MM/yyyy' }}.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- SEARCH: ERROR -->\n<section class=\"bg-light\" id=\"team\" *ngIf=\"error\" id=\"searcherror\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <h2 class=\"section-heading text-uppercase\">A consulta não retornou resultado</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <p class=\"large text-muted\">\n          {{ error }}\n        </p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search.service */ "./src/app/search.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(fb, searchService, spinner) {
        this.fb = fb;
        this.searchService = searchService;
        this.spinner = spinner;
        this.searchCpfCnpj = fb.group({
            cpfcnpj: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            captcha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinner.show();
                        return [4 /*yield*/, this.getCPFOrCNPJ(form.email, form.cpfcnpj)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getCPFOrCNPJ = function (email, cpfcnpj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var cpfOrCnpj, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error = undefined;
                        this.cpf = undefined;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.searchService.getCPFOrCNPJ(email, cpfcnpj).toPromise()];
                    case 2:
                        cpfOrCnpj = _a.sent();
                        if (!cpfOrCnpj || cpfOrCnpj.status === false) {
                            throw (cpfOrCnpj && cpfOrCnpj.data) ? cpfOrCnpj.data.error : "Não retornou resultado";
                        }
                        else {
                            if (cpfOrCnpj.data) {
                                if (cpfOrCnpj.data.cpf) {
                                    this.cpf = cpfOrCnpj.data;
                                    this.goto('searchcpf');
                                }
                                if (cpfOrCnpj.data.cnpj) {
                                    this.cnpj = cpfOrCnpj.data;
                                    this.goto('searchcnpj');
                                }
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log('[ERROR 001] ', error_1);
                        this.error = error_1;
                        this.goto('searcherror');
                        return [3 /*break*/, 4];
                    case 4:
                        this.spinner.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.goto = function (hashtag) {
        var link = document.createElement('a');
        link.setAttribute('class', 'nav-link js-scroll-trigger');
        link.href = '#' + hashtag;
        setTimeout(function () {
            link.click();
        }, 100);
    };
    Object.defineProperty(HomeComponent.prototype, "cpfcnpj", {
        get: function () { return this.searchCpfCnpj.get('cpfcnpj'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "email", {
        get: function () { return this.searchCpfCnpj.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "captcha", {
        get: function () { return this.searchCpfCnpj.get('captcha'); },
        enumerable: true,
        configurable: true
    });
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  \n  #mainNav {\n    background-color: #29434e;\n  }\n  \n  #mainNav .navbar-toggler {\n    font-size: 12px;\n    right: 0;\n    padding: 13px;\n    text-transform: uppercase;\n    color: #fff;\n    border: 0;\n    background-color: #008ba3;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n  \n  #mainNav .navbar-brand {\n    color: #fff;\n    font-family: 'Kaushan Script', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n  \n  #mainNav .navbar-brand img {\n    height: 100px;\n  }\n  \n  #mainNav .navbar-brand.active, #mainNav .navbar-brand:active, #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n    color: #fff;\n  }\n  \n  #mainNav .navbar-nav .nav-item .nav-link {\n    font-size: 90%;\n    font-weight: 400;\n    padding: 0.75em 0;\n    letter-spacing: 1px;\n    color: #fff;\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';\n  }\n  \n  #mainNav .navbar-nav .nav-item .nav-link.active, #mainNav .navbar-nav .nav-item .nav-link:hover {\n    color: #fff;\n  }\n  \n  @media (min-width: 992px) {\n    #mainNav {\n      padding-top: 25px;\n      padding-bottom: 25px;\n      transition: padding-top 0.3s, padding-bottom 0.3s;\n      border: none;\n      background-color: transparent;\n    }\n    #mainNav .navbar-brand {\n        font-size: 1.75em;\n        transition: all 0.3s;\n      }\n      #mainNav .navbar-nav .nav-item .nav-link {\n        padding: 1.1em 1em !important;\n      }\n      #mainNav.navbar-shrink {\n        padding-top: 0;\n        padding-bottom: 0;\n        background-color: #29434e;\n      }\n      #mainNav.navbar-shrink .navbar-brand {\n        font-size: 1.25em;\n        padding: 12px 0;\n      }\n      #mainNav.navbar-shrink .navbar-brand img{\n        height: 50px;\n        -webkit-transition: all 0.3s;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0VBR0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbU1BQW1NO0VBQ3JNOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVNQUF1TTtFQUN6TTs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsbU1BQW1NO0VBQ3JNOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7TUFDakIsb0JBQW9CO01BRXBCLGlEQUFpRDtNQUNqRCxZQUFZO01BQ1osNkJBQTZCO0lBQy9CO0lBQ0E7UUFDSSxpQkFBaUI7UUFFakIsb0JBQW9CO01BQ3RCO01BQ0E7UUFDRSw2QkFBNkI7TUFDL0I7TUFDQTtRQUNFLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIseUJBQXlCO01BQzNCO01BQ0E7UUFDRSxpQkFBaUI7UUFDakIsZUFBZTtNQUNqQjtNQUNBO1FBQ0UsWUFBWTtRQUNaLDRCQUE0QjtNQUM5QjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgXG4gIFxuICAjbWFpbk5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5NDM0ZTtcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YmEzO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJywgJ1NlZ29lIFVJIFN5bWJvbCcsICdOb3RvIENvbG9yIEVtb2ppJztcbiAgfVxuICBcbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCBpbWcge1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQuYWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMC43NWVtIDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaScsICdTZWdvZSBVSSBTeW1ib2wnLCAnTm90byBDb2xvciBFbW9qaSc7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlLCAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNtYWluTmF2IHtcbiAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuM3MsIHBhZGRpbmctYm90dG9tIDAuM3M7XG4gICAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAwLjNzLCBwYWRkaW5nLWJvdHRvbSAwLjNzO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG4gICAgICAjbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAgICAgcGFkZGluZzogMS4xZW0gMWVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk0MzRlO1xuICAgICAgfVxuICAgICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgIHBhZGRpbmc6IDEycHggMDtcbiAgICAgIH1cbiAgICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCBpbWd7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\" #mainNav>\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger\"><img src=\"assets/img/logo.png\" alt=\"CPF agora\"></a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      Menu\n      <i class=\"fas fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#search\">Buscar</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#plan\">Planos</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#doc\">Documentação</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" href=\"#contact\">Contato</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent(el) {
        this.el = el;
        this.className = 'navbar navbar-expand-lg navbar-dark fixed-top';
    }
    MenuComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        if (scrollPosition > componentPosition) {
            if (this.mainNav.nativeElement.className === this.className) {
                this.mainNav.nativeElement.className = this.className + ' navbar-shrink';
            }
        }
        else {
            this.mainNav.nativeElement.className = this.className;
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mainNav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuComponent.prototype, "mainNav", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MenuComponent.prototype, "checkScroll", null);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/search.service.ts":
/*!***********************************!*\
  !*** ./src/app/search.service.ts ***!
  \***********************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.API_URL = 'https://cpfagora-api.herokuapp.com';
        // API_URL = 'http://localhost:3000';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    SearchService.prototype.getCPFOrCNPJ = function (email, cpfcnpj) {
        return this.http.get(this.API_URL + "/free/" + email + "/" + cpfcnpj);
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
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

module.exports = __webpack_require__(/*! /home/wellingtonsilverio/private/cpfagora-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map