"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_form_form_module_ts"],{

/***/ 8060:
/*!********************************************************!*\
  !*** ./src/app/pages/tabs/form/form-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageRoutingModule": () => (/* binding */ FormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page */ 7837);




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_0__.FormPage
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FormPageRoutingModule);



/***/ }),

/***/ 2994:
/*!************************************************!*\
  !*** ./src/app/pages/tabs/form/form.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPageModule": () => (/* binding */ FormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7464);
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-routing.module */ 8060);
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page */ 7837);







let FormPageModule = class FormPageModule {
};
FormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _form_routing_module__WEBPACK_IMPORTED_MODULE_0__.FormPageRoutingModule
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_1__.FormPage]
    })
], FormPageModule);



/***/ }),

/***/ 7837:
/*!**********************************************!*\
  !*** ./src/app/pages/tabs/form/form.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPage": () => (/* binding */ FormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.page.html?ngResource */ 4601);
/* harmony import */ var _form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.page.scss?ngResource */ 1453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7464);





let FormPage = class FormPage {
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
FormPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
FormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-form',
        template: _form_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_form_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FormPage);



/***/ }),

/***/ 1453:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/form/form.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\nion-content {\n  --background: #ffffff;\n  --color: #333333;\n  --padding: 20px;\n}\nion-toolbar {\n  --background: #0f2d79;\n  --color: #ffffff;\n}\nion-title {\n  --color: #ffffff;\n}\nion-item {\n  --highlight-height: 2px;\n  --highlight-color-focused: #43e7f3;\n  --highlight-color-valid: #6f58d8;\n  --highlight-color-invalid: #ff46be;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n}\n.content.blurred {\n  filter: blur(5px);\n}\n.pl {\n  display: block;\n  width: 4em;\n  height: 4em;\n}\n.pl__ring,\n.pl__ball1,\n.pl__ball2 {\n  animation-duration: 2s;\n  animation-timing-function: ease-in-out;\n  animation-iteration-count: infinite;\n  transform-origin: 32px 32px;\n}\n.pl__ring {\n  animation-name: ring;\n}\n.pl__ball1 {\n  animation-name: ball1;\n}\n.pl__ball2 {\n  animation-name: ball2;\n}\n/* Dark theme  */\n@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: hsl(var(--hue), 10%, 10%);\n    --fg: hsl(var(--hue), 10%, 90%);\n  }\n}\n/* Animation */\n@keyframes ring {\n  from {\n    animation-timing-function: ease-in-out;\n    stroke-dashoffset: -122.52;\n    transform: rotate(135deg);\n  }\n  15% {\n    animation-timing-function: ease-in;\n    stroke-dashoffset: -122.52;\n    transform: rotate(90deg);\n  }\n  35% {\n    animation-timing-function: ease-out;\n    stroke-dashoffset: -65.34;\n    transform: rotate(297.5deg);\n  }\n  55% {\n    animation-timing-function: ease-in-out;\n    stroke-dashoffset: -122.52;\n    transform: rotate(505deg);\n  }\n  70% {\n    animation-timing-function: ease-in-out;\n    stroke-dashoffset: -122.52;\n    transform: rotate(490deg);\n  }\n  85%, to {\n    stroke-dashoffset: -122.52;\n    transform: rotate(497.5deg);\n  }\n}\n@keyframes ball1 {\n  from {\n    transform: rotate(14deg);\n  }\n  20% {\n    transform: rotate(-7deg);\n  }\n  60% {\n    transform: rotate(399deg);\n  }\n  75% {\n    transform: rotate(361deg);\n  }\n  90%, to {\n    transform: rotate(374deg);\n  }\n}\n@keyframes ball2 {\n  from {\n    transform: rotate(-21deg);\n  }\n  25% {\n    transform: rotate(-47deg);\n  }\n  60% {\n    transform: rotate(364deg);\n  }\n  75% {\n    transform: rotate(326deg);\n  }\n  90%, to {\n    transform: rotate(339deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHdGQUFBO0FBRVI7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGdCQUFBO0FBQUo7QUFHQTtFQUNJLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFBSjtBQUdBO0VBQ0ksaUJBQUE7QUFBSjtBQUdBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUo7QUFHQTs7O0VBR0ksc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUFBSjtBQUdBO0VBQ0ksb0JBQUE7QUFBSjtBQUdBO0VBQ0kscUJBQUE7QUFBSjtBQUdBO0VBQ0kscUJBQUE7QUFBSjtBQUdBLGdCQUFBO0FBQ0E7RUFDSTtJQUNJLCtCQUFBO0lBQ0EsK0JBQUE7RUFBTjtBQUNGO0FBR0EsY0FBQTtBQUNBO0VBQ0k7SUFDSSxzQ0FBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUFETjtFQUlFO0lBQ0ksa0NBQUE7SUFDQSwwQkFBQTtJQUNBLHdCQUFBO0VBRk47RUFLRTtJQUNJLG1DQUFBO0lBQ0EseUJBQUE7SUFDQSwyQkFBQTtFQUhOO0VBTUU7SUFDSSxzQ0FBQTtJQUNBLDBCQUFBO0lBQ0EseUJBQUE7RUFKTjtFQU9FO0lBQ0ksc0NBQUE7SUFDQSwwQkFBQTtJQUNBLHlCQUFBO0VBTE47RUFRRTtJQUVJLDBCQUFBO0lBQ0EsMkJBQUE7RUFQTjtBQUNGO0FBVUE7RUFDSTtJQUNJLHdCQUFBO0VBUk47RUFXRTtJQUNJLHdCQUFBO0VBVE47RUFZRTtJQUNJLHlCQUFBO0VBVk47RUFhRTtJQUNJLHlCQUFBO0VBWE47RUFjRTtJQUVJLHlCQUFBO0VBYk47QUFDRjtBQWdCQTtFQUNJO0lBQ0kseUJBQUE7RUFkTjtFQWlCRTtJQUNJLHlCQUFBO0VBZk47RUFrQkU7SUFDSSx5QkFBQTtFQWhCTjtFQW1CRTtJQUNJLHlCQUFBO0VBakJOO0VBb0JFO0lBRUkseUJBQUE7RUFuQk47QUFDRiIsImZpbGUiOiJmb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgLS1wYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwZjJkNzk7XHJcbiAgICAtLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAycHg7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiAjNDNlN2YzO1xyXG4gICAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM2ZjU4ZDg7XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiAjZmY0NmJlO1xyXG4gIH1cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XHJcbn1cclxuXHJcbi5jb250ZW50LmJsdXJyZWQge1xyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuXHJcbi5wbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA0ZW07XHJcbiAgICBoZWlnaHQ6IDRlbTtcclxufVxyXG5cclxuLnBsX19yaW5nLFxyXG4ucGxfX2JhbGwxLFxyXG4ucGxfX2JhbGwyIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xyXG59XHJcblxyXG4ucGxfX3Jpbmcge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJpbmc7XHJcbn1cclxuXHJcbi5wbF9fYmFsbDEge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJhbGwxO1xyXG59XHJcblxyXG4ucGxfX2JhbGwyIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBiYWxsMjtcclxufVxyXG5cclxuLyogRGFyayB0aGVtZSAgKi9cclxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tYmc6IGhzbCh2YXIoLS1odWUpLCAxMCUsIDEwJSk7XHJcbiAgICAgICAgLS1mZzogaHNsKHZhcigtLWh1ZSksIDEwJSwgOTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcbkBrZXlmcmFtZXMgcmluZyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyMi41MjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDE1JSB7XHJcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyMi41MjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMzUlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTY1LjM0O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI5Ny41ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA1NSUge1xyXG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTIyLjUyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDUwNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNzAlIHtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyMi41MjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0OTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDg1JSxcclxuICAgIHRvIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyMi41MjtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0OTcuNWRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbDEge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDIwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTdkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDYwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzk5ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA3NSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlLFxyXG4gICAgdG8ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM3NGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmFsbDIge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIxZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAyNSUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00N2RlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjRkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDc1JSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzI2ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA5MCUsXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzM5ZGVnKTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 4601:
/*!***********************************************************!*\
  !*** ./src/app/pages/tabs/form/form.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<body>\r\n  <div class=\"loader\" *ngIf=\"isLoading\">\r\n    <svg\r\n      class=\"pl\"\r\n      viewBox=\"0 0 64 64\"\r\n      width=\"64px\"\r\n      height=\"64px\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n    >\r\n      <defs>\r\n        <linearGradient id=\"grad\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\r\n          <stop offset=\"0%\" stop-color=\"#000\" />\r\n          <stop offset=\"100%\" stop-color=\"#fff\" />\r\n        </linearGradient>\r\n        <mask id=\"grad-mask\">\r\n          <rect x=\"0\" y=\"0\" width=\"64\" height=\"64\" fill=\"url(#grad)\" />\r\n        </mask>\r\n      </defs>\r\n      <circle\r\n        class=\"pl__ring\"\r\n        cx=\"32\"\r\n        cy=\"32\"\r\n        r=\"26\"\r\n        fill=\"none\"\r\n        stroke=\"hsl(223,90%,55%)\"\r\n        stroke-width=\"12\"\r\n        stroke-dasharray=\"169.65 169.65\"\r\n        stroke-dashoffset=\"-127.24\"\r\n        stroke-linecap=\"round\"\r\n        transform=\"rotate(135)\"\r\n      />\r\n      <g fill=\"hsl(223,90%,55%)\">\r\n        <circle\r\n          class=\"pl__ball1\"\r\n          cx=\"32\"\r\n          cy=\"45\"\r\n          r=\"6\"\r\n          transform=\"rotate(14)\"\r\n        />\r\n        <circle\r\n          class=\"pl__ball2\"\r\n          cx=\"32\"\r\n          cy=\"48\"\r\n          r=\"3\"\r\n          transform=\"rotate(-21)\"\r\n        />\r\n      </g>\r\n      <g mask=\"url(#grad-mask)\">\r\n        <circle\r\n          class=\"pl__ring\"\r\n          cx=\"32\"\r\n          cy=\"32\"\r\n          r=\"26\"\r\n          fill=\"none\"\r\n          stroke=\"hsl(283,90%,55%)\"\r\n          stroke-width=\"12\"\r\n          stroke-dasharray=\"169.65 169.65\"\r\n          stroke-dashoffset=\"-127.24\"\r\n          stroke-linecap=\"round\"\r\n          transform=\"rotate(135)\"\r\n        />\r\n        <g fill=\"hsl(283,90%,55%)\">\r\n          <circle\r\n            class=\"pl__ball1\"\r\n            cx=\"32\"\r\n            cy=\"45\"\r\n            r=\"6\"\r\n            transform=\"rotate(14)\"\r\n          />\r\n          <circle\r\n            class=\"pl__ball2\"\r\n            cx=\"32\"\r\n            cy=\"48\"\r\n            r=\"3\"\r\n            transform=\"rotate(-21)\"\r\n          />\r\n        </g>\r\n      </g>\r\n    </svg>\r\n  </div> \r\n\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>form</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content [class.blurred]=\"isLoading\">\r\n    <!-- <ion-button (click)=\"showLoading()\">Show Loading</ion-button> -->\r\n  </ion-content>\r\n</body>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_form_form_module_ts.js.map