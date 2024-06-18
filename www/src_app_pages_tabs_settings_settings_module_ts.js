"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_settings_settings_module_ts"],{

/***/ 4362:
/*!****************************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 1019);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 1901:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7464);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 4362);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 1019);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 1019:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 6489);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 4741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7464);





let SettingsPage = class SettingsPage {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.isLoading = true;
    }
    ngOnInit() {
        this.initializeLoader();
        this.showLoading();
    }
    initializeLoader() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Menu anda dalam tahap pengembangan...',
                duration: 2000,
            });
            loading.present();
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 4741:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: #ffffff;\n  --color: #333333;\n  --padding: 20px;\n}\nion-toolbar {\n  --background: #0f2d79;\n  --color: #ffffff;\n}\nion-title {\n  --color: #ffffff;\n}\nion-item {\n  --highlight-height: 2px;\n  --highlight-color-focused: #43e7f3;\n  --highlight-color-valid: #6f58d8;\n  --highlight-color-invalid: #ff46be;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n}\n.content.blurred {\n  filter: blur(5px);\n}\n.pl {\n  display: block;\n  width: 4em;\n  height: 4em;\n}\n.pl__ring,\n.pl__ball1,\n.pl__ball2 {\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  transform-origin: 32px 32px;\n}\n.pl__ring {\n  animation-name: ring;\n}\n.pl__ball1 {\n  animation-name: ball1;\n}\n.pl__ball2 {\n  animation-name: ball2;\n}\n/* Dark theme  */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: hsl(var(--hue), 10%, 10%);\n    --fg: hsl(var(--hue), 10%, 90%);\n  }\n}\n/* Animation */\n@keyframes ring {\n  from {\n    animation-timing-function: ease-in-out;\n    stroke-dashoffset: -122.52;\n    transform: rotate(135deg);\n  }\n  15% {\n    animation-timing-function: ease-in;\n    stroke-dashoffset: -122.52;\n    transform: rotate(90deg);\n  }\n  35% {\n    animation-timing-function: ease-out;\n    stroke-dashoffset: -65.34;\n    transform: rotate(297.5deg);\n  }\n  55% {\n    animation-timing-function: ease-in-out;\n    stroke-dashoffset: -122.52;\n    transform: rotate(505deg);\n  }\n  70% {\n    animation-timing-function: ease-in-out;\n    stroke-dashoffset: -122.52;\n    transform: rotate(490deg);\n  }\n  85%, to {\n    stroke-dashoffset: -122.52;\n    transform: rotate(497.5deg);\n  }\n}\n@keyframes ball1 {\n  from {\n    transform: rotate(14deg);\n  }\n  20% {\n    transform: rotate(-7deg);\n  }\n  60% {\n    transform: rotate(399deg);\n  }\n  75% {\n    transform: rotate(361deg);\n  }\n  90%, to {\n    transform: rotate(374deg);\n  }\n}\n@keyframes ball2 {\n  from {\n    transform: rotate(-21deg);\n  }\n  25% {\n    transform: rotate(-47deg);\n  }\n  60% {\n    transform: rotate(364deg);\n  }\n  75% {\n    transform: rotate(326deg);\n  }\n  90%, to {\n    transform: rotate(339deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx3RkFBQTtBQUVSO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtBQUFKO0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBQUo7QUFHQTtFQUNJLGlCQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0E7OztFQUdJLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0FBQUo7QUFHQTtFQUNJLG9CQUFBO0FBQUo7QUFHQTtFQUNJLHFCQUFBO0FBQUo7QUFHQTtFQUNJLHFCQUFBO0FBQUo7QUFHQSxnQkFBQTtBQUNBO0VBQ0k7SUFDSSwrQkFBQTtJQUNBLCtCQUFBO0VBQU47QUFDRjtBQUdBLGNBQUE7QUFDQTtFQUNJO0lBQ0ksc0NBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VBRE47RUFJRTtJQUNJLGtDQUFBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtFQUZOO0VBS0U7SUFDSSxtQ0FBQTtJQUNBLHlCQUFBO0lBQ0EsMkJBQUE7RUFITjtFQU1FO0lBQ0ksc0NBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VBSk47RUFPRTtJQUNJLHNDQUFBO0lBQ0EsMEJBQUE7SUFDQSx5QkFBQTtFQUxOO0VBUUU7SUFFSSwwQkFBQTtJQUNBLDJCQUFBO0VBUE47QUFDRjtBQVVBO0VBQ0k7SUFDSSx3QkFBQTtFQVJOO0VBV0U7SUFDSSx3QkFBQTtFQVROO0VBWUU7SUFDSSx5QkFBQTtFQVZOO0VBYUU7SUFDSSx5QkFBQTtFQVhOO0VBY0U7SUFFSSx5QkFBQTtFQWJOO0FBQ0Y7QUFnQkE7RUFDSTtJQUNJLHlCQUFBO0VBZE47RUFpQkU7SUFDSSx5QkFBQTtFQWZOO0VBa0JFO0lBQ0kseUJBQUE7RUFoQk47RUFtQkU7SUFDSSx5QkFBQTtFQWpCTjtFQW9CRTtJQUVJLHlCQUFBO0VBbkJOO0FBQ0YiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tY29sb3I6ICMzMzMzMzM7XHJcbiAgICAtLXBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzBmMmQ3OTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDJweDtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6ICM0M2U3ZjM7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzZmNThkODtcclxuICAgIC0taGlnaGxpZ2h0LWNvbG9yLWludmFsaWQ6ICNmZjQ2YmU7XHJcbiAgfVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXB4KTtcclxufVxyXG5cclxuLmNvbnRlbnQuYmx1cnJlZCB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLnBsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDRlbTtcclxuICAgIGhlaWdodDogNGVtO1xyXG59XHJcblxyXG4ucGxfX3JpbmcsXHJcbi5wbF9fYmFsbDEsXHJcbi5wbF9fYmFsbDIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XHJcbn1cclxuXHJcbi5wbF9fcmluZyB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogcmluZztcclxufVxyXG5cclxuLnBsX19iYWxsMSB7XHJcbiAgICBhbmltYXRpb24tbmFtZTogYmFsbDE7XHJcbn1cclxuXHJcbi5wbF9fYmFsbDIge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJhbGwyO1xyXG59XHJcblxyXG4vKiBEYXJrIHRoZW1lICAqL1xyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1iZzogaHNsKHZhcigtLWh1ZSksIDEwJSwgMTAlKTtcclxuICAgICAgICAtLWZnOiBoc2wodmFyKC0taHVlKSwgMTAlLCA5MCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBBbmltYXRpb24gKi9cclxuQGtleWZyYW1lcyByaW5nIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTIyLjUyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTUlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTIyLjUyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAzNSUge1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtNjUuMzQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjk3LjVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDU1JSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjIuNTI7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTA1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA3MCUge1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTIyLjUyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ5MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgODUlLFxyXG4gICAgdG8ge1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTIyLjUyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ5Ny41ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsMSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtN2RlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzOTlkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDc1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYxZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA5MCUsXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzc0ZGVnKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWxsMiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjFkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDI1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ3ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2NGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNzUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMjZkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSxcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzlkZWcpO1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 6489:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tabs/settings/settings.page.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<body>\r\n  <div class=\"loader\" *ngIf=\"isLoading\">\r\n    <svg\r\n      class=\"pl\"\r\n      viewBox=\"0 0 64 64\"\r\n      width=\"64px\"\r\n      height=\"64px\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <defs>\r\n        <linearGradient id=\"grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\r\n          <stop offset=\"0%\" stop-color=\"#000\" />\r\n          <stop offset=\"100%\" stop-color=\"#fff\" />\r\n        </linearGradient>\r\n        <mask id=\"grad-mask\">\r\n          <rect x=\"0\" y=\"0\" width=\"64\" height=\"64\" fill=\"url(#grad)\" />\r\n        </mask>\r\n      </defs>\r\n      <circle\r\n        class=\"pl__ring\"\r\n        cx=\"32\"\r\n        cy=\"32\"\r\n        r=\"26\"\r\n        fill=\"none\"\r\n        stroke=\"hsl(223,90%,55%)\"\r\n        stroke-width=\"12\"\r\n        stroke-dasharray=\"169.65 169.65\"\r\n        stroke-dashoffset=\"-127.24\"\r\n        stroke-linecap=\"round\"\r\n        transform=\"rotate(135)\"\r\n      />\r\n      <g fill=\"hsl(223,90%,55%)\">\r\n        <circle\r\n          class=\"pl__ball1\"\r\n          cx=\"32\"\r\n          cy=\"45\"\r\n          r=\"6\"\r\n          transform=\"rotate(14)\"\r\n        />\r\n        <circle\r\n          class=\"pl__ball2\"\r\n          cx=\"32\"\r\n          cy=\"48\"\r\n          r=\"3\"\r\n          transform=\"rotate(-21)\"\r\n        />\r\n      </g>\r\n      <g mask=\"url(#grad-mask)\">\r\n        <circle\r\n          class=\"pl__ring\"\r\n          cx=\"32\"\r\n          cy=\"32\"\r\n          r=\"26\"\r\n          fill=\"none\"\r\n          stroke=\"hsl(283,90%,55%)\"\r\n          stroke-width=\"12\"\r\n          stroke-dasharray=\"169.65 169.65\"\r\n          stroke-dashoffset=\"-127.24\"\r\n          stroke-linecap=\"round\"\r\n          transform=\"rotate(135)\"\r\n        />\r\n        <g fill=\"hsl(283,90%,55%)\">\r\n          <circle\r\n            class=\"pl__ball1\"\r\n            cx=\"32\"\r\n            cy=\"45\"\r\n            r=\"6\"\r\n            transform=\"rotate(14)\"\r\n          />\r\n          <circle\r\n            class=\"pl__ball2\"\r\n            cx=\"32\"\r\n            cy=\"48\"\r\n            r=\"3\"\r\n            transform=\"rotate(-21)\"\r\n          />\r\n        </g>\r\n      </g>\r\n    </svg>\r\n  </div> \r\n\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>form</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content [class.blurred]=\"isLoading\">\r\n    <!-- <ion-button (click)=\"showLoading()\">Show Loading</ion-button> -->\r\n  </ion-content>\r\n</body>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_settings_settings_module_ts.js.map