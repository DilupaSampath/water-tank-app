"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_auth_login_login_module_ts"],{

/***/ 9237:
/*!***************************************************************!*\
  !*** ./src/app/pages/tabs/auth/login/login-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3537);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 278:
/*!*******************************************************!*\
  !*** ./src/app/pages/tabs/auth/login/login.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7464);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 9237);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3537);









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA]
    })
], LoginPageModule);



/***/ }),

/***/ 3537:
/*!*****************************************************!*\
  !*** ./src/app/pages/tabs/auth/login/login.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 4281);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 3109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let LoginPage = class LoginPage {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.isSignUpMode = false;
        this.signInForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
        this.signUpForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
        this.isLoading = true;
    }
    ngOnInit() {
        this.initializeLoader();
    }
    initializeLoader() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
    toggleSignUpMode() {
        this.isSignUpMode = !this.isSignUpMode;
    }
    onSignIn() {
        this.router.navigate(['/tabs/home']);
    }
    onSignUp() {
        this.router.navigate(['/tabs/home']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 3109:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/auth/login/login.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody,\ninput {\n  font-family: \"Poppins\", sans-serif;\n}\n.container {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  min-height: 100vh;\n  overflow: hidden;\n}\n.forms-container {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.signin-signup {\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 75%;\n  width: 50%;\n  transition: 0.7s ease-in-out;\n  display: grid;\n  grid-template-columns: 1fr;\n  z-index: 5;\n}\nform {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0rem 5rem;\n  transition: all 0.7s;\n  overflow: hidden;\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\nform.sign-up-form {\n  opacity: 0;\n  z-index: 1;\n}\nform.sign-in-form {\n  z-index: 2;\n}\n.title {\n  font-size: 2.2rem;\n  color: #444;\n  margin-bottom: 10px;\n}\n.input-field {\n  max-width: 380px;\n  width: 100%;\n  background-color: #f0f0f0;\n  margin: 10px 0;\n  height: 55px;\n  border-radius: 55px;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  padding: 0 0.4rem;\n  position: relative;\n  transition: transform 0.3s ease;\n}\n.input-field:hover {\n  transform: scale(1.05);\n}\n.input-field input {\n  border: none;\n  outline: none;\n  background: none;\n  width: 100%;\n  padding: 0 10px;\n  font-size: 1rem;\n}\n.input-field i {\n  line-height: 55px;\n  margin-left: 10px;\n}\n.input-field i {\n  text-align: center;\n  line-height: 55px;\n  color: #acacac;\n  transition: 0.7s;\n  font-size: 1.1rem;\n}\n.input-field input {\n  background: none;\n  outline: none;\n  border: none;\n  border-radius: 55px;\n  line-height: 1;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #333;\n}\n.input-field input::placeholder {\n  color: #aaa;\n  font-weight: 500;\n}\n.social-text {\n  padding: 0.7rem 0;\n  font-size: 1rem;\n}\n.social-media {\n  display: flex;\n  justify-content: center;\n}\n.social-icon {\n  height: 46px;\n  width: 46px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0.45rem;\n  color: #333;\n  border-radius: 50%;\n  border: 1px solid #333;\n  text-decoration: none;\n  font-size: 1.1rem;\n  transition: 0.7s;\n}\n.social-icon:hover {\n  color: #4481eb;\n  border-color: #4481eb;\n}\n.btn {\n  width: 150px;\n  background-color: #f7d217;\n  border: 2px solid gainsboro;\n  outline: none;\n  height: 49px;\n  border-radius: 49px;\n  text-transform: uppercase;\n  font-weight: 600;\n  margin: 10px 0;\n  cursor: pointer;\n  transition: 0.7s;\n  color: black;\n}\n.btn:hover {\n  background-color: #f7d217;\n}\n.panels-container {\n  position: absolute;\n  height: 97%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}\n.container:before {\n  content: \"\";\n  position: absolute;\n  height: 2000px;\n  width: 2000px;\n  top: -10%;\n  right: 48%;\n  transform: translateY(-50%);\n  background-image: linear-gradient(-45deg, #0f2d79 0%, #0f2d79 100%);\n  transition: 0.7s ease-in-out;\n  border-radius: 50%;\n  z-index: 6;\n}\n.image {\n  width: 100%;\n  transition: transform 0.7s ease-in-out;\n  transition-delay: 0.7s;\n}\n.panel {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-around;\n  text-align: center;\n  z-index: 6;\n}\n.left-panel {\n  pointer-events: all;\n  padding: 3rem 17% 2rem 12%;\n}\n.right-panel {\n  pointer-events: none;\n  padding: 3rem 12% 2rem 17%;\n}\n.panel .content {\n  color: #fff;\n  transition: transform 0.7s ease-in-out;\n  transition-delay: 0.7s;\n}\n.panel h3 {\n  font-weight: 600;\n  line-height: 1;\n  font-size: 1.5rem;\n}\n.panel p {\n  font-size: 0.95rem;\n  padding: 0.7rem 0;\n}\n.btn.transparent {\n  margin: 0;\n  background-color: #f7d217;\n  border: 2px solid #fff;\n  width: 130px;\n  height: 41px;\n  font-weight: 600;\n  font-size: 0.8rem;\n}\n.right-panel .image,\n.right-panel .content {\n  transform: translateX(800px);\n}\n/* ANIMATION */\n.container.sign-up-mode:before {\n  transform: translate(100%, -50%);\n  right: 52%;\n}\n.container.sign-up-mode .left-panel .image,\n.container.sign-up-mode .left-panel .content {\n  transform: translateX(-800px);\n}\n.container.sign-up-mode .signin-signup {\n  left: 25%;\n}\n.container.sign-up-mode form.sign-up-form {\n  opacity: 1;\n  z-index: 2;\n}\n.container.sign-up-mode form.sign-in-form {\n  opacity: 0;\n  z-index: 1;\n}\n.container.sign-up-mode .right-panel .image,\n.container.sign-up-mode .right-panel .content {\n  transform: translateX(0%);\n}\n.container.sign-up-mode .left-panel {\n  pointer-events: none;\n}\n.container.sign-up-mode .right-panel {\n  pointer-events: all;\n}\n@media (max-width: 870px) {\n  .container {\n    min-height: 800px;\n    height: 100vh;\n  }\n  .signin-signup {\n    width: 100%;\n    top: 80%;\n    transform: translate(-50%, -100%);\n    transition: 0.7s ease-in-out;\n  }\n  .signin-signup,\n.container.sign-up-mode .signin-signup {\n    left: 50%;\n  }\n  .panels-container {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 2fr 1fr;\n  }\n  .panel {\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n    padding: 2.5rem 8%;\n    grid-column: 1/2;\n  }\n  .right-panel {\n    grid-row: 3/4;\n  }\n  .left-panel {\n    grid-row: 1/2;\n  }\n  .image {\n    width: 200px;\n    transition: transform 0.7s ease-in-out;\n    transition-delay: 0.7s;\n  }\n  .panel .content {\n    padding-right: 15%;\n    transition: transform 0.7s ease-in-out;\n    transition-delay: 0.3s;\n  }\n  .panel h3 {\n    font-size: 1.2rem;\n  }\n  .panel p {\n    font-size: 0.7rem;\n    padding: 0.5rem 0;\n  }\n  .btn.transparent {\n    width: 110px;\n    height: 35px;\n    font-size: 0.7rem;\n    background-color: #f7d217;\n    color: black;\n  }\n  .container:before {\n    width: 1500px;\n    height: 1500px;\n    transform: translateX(-50%);\n    left: 30%;\n    bottom: 68%;\n    right: initial;\n    top: initial;\n    transition: 0.7s ease-in-out;\n  }\n  .container.sign-up-mode:before {\n    transform: translate(-50%, 100%);\n    bottom: 32%;\n    right: initial;\n  }\n  .container.sign-up-mode .left-panel .image,\n.container.sign-up-mode .left-panel .content {\n    transform: translateY(-300px);\n  }\n  .container.sign-up-mode .right-panel .image,\n.container.sign-up-mode .right-panel .content {\n    transform: translateY(0px);\n  }\n  .right-panel .image,\n.right-panel .content {\n    transform: translateY(300px);\n  }\n  .container.sign-up-mode .signin-signup {\n    top: 5%;\n    transform: translate(-50%, 0);\n  }\n}\n@media (max-width: 570px) {\n  form {\n    padding: 0 1.5rem;\n    padding-top: 4rem;\n  }\n  .image {\n    display: none;\n  }\n  .panel .content {\n    padding: 0.5rem 1rem;\n  }\n  .container {\n    padding: 1.5rem;\n  }\n  .container:before {\n    bottom: 72%;\n    left: 50%;\n  }\n  .container.sign-up-mode:before {\n    bottom: 28%;\n    left: 50%;\n  }\n}\n:host ::ng-deep.input:-internal-autofill-selected {\n  appearance: none !important;\n  background-image: none !important;\n  background-color: none !important;\n  color: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsNEJBQUE7RUFaRjtFQWVBO0lBQ0UsZ0NBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtFQWJGO0VBZ0JBOztJQUVFLDZCQUFBO0VBZEY7RUFpQkE7O0lBRUUsMEJBQUE7RUFmRjtFQWtCQTs7SUFFRSw0QkFBQTtFQWhCRjtFQW1CQTtJQUNFLE9BQUE7SUFDQSw2QkFBQTtFQWpCRjtBQUNGO0FBb0JBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VBbEJGO0VBcUJBO0lBQ0UsYUFBQTtFQW5CRjtFQXFCQTtJQUNFLG9CQUFBO0VBbkJGO0VBcUJBO0lBQ0UsZUFBQTtFQW5CRjtFQXNCQTtJQUNFLFdBQUE7SUFDQSxTQUFBO0VBcEJGO0VBdUJBO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUFyQkY7QUFDRjtBQXdCQTtFQUNFLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FBdEJGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHksXHJcbmlucHV0IHtcclxuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zaWduaW4tc2lnbnVwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgbGVmdDogNzUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDByZW0gNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICBncmlkLXJvdzogMSAvIDI7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi11cC1mb3JtIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbmZvcm0uc2lnbi1pbi1mb3JtIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgODUlO1xyXG4gIHBhZGRpbmc6IDAgMC40cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59IFxyXG5cclxuLmlucHV0LWZpZWxkIGkge1xyXG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWZpZWxkIGkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxuICBjb2xvcjogI2FjYWNhYztcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc29jaWFsLXRleHQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNvY2lhbC1pY29uIHtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMCAwLjQ1cmVtO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG59XHJcblxyXG4uc29jaWFsLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiAjNDQ4MWViO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ0ODFlYjtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2QyMTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ2FpbnNib3JvO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OiA0OXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ5cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDIxNztcclxufVxyXG4ucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogOTclO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMjAwMHB4O1xyXG4gIHdpZHRoOiAyMDAwcHg7XHJcbiAgdG9wOiAtMTAlO1xyXG4gIHJpZ2h0OiA0OCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICMwZjJkNzkgMCUsICMwZjJkNzkgMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjdzO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDY7XHJcbn1cclxuXHJcbi5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTclIDJyZW0gMTIlO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBhZGRpbmc6IDNyZW0gMTIlIDJyZW0gMTclO1xyXG59XHJcblxyXG4ucGFuZWwgLmNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuN3M7XHJcbn1cclxuXHJcbi5wYW5lbCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnBhbmVsIHAge1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBwYWRkaW5nOiAwLjdyZW0gMDtcclxufVxyXG5cclxuLmJ0bi50cmFuc3BhcmVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2QyMTc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgaGVpZ2h0OiA0MXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbi5yaWdodC1wYW5lbCAuY29udGVudCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwMHB4KTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OICovXHJcblxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMCUsIC01MCUpO1xyXG4gIHJpZ2h0OiA1MiU7XHJcbn1cclxuXHJcbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLmxlZnQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAwcHgpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgbGVmdDogMjUlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24tdXAtZm9ybSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSBmb3JtLnNpZ24taW4tZm9ybSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmltYWdlLFxyXG4uY29udGFpbmVyLnNpZ24tdXAtbW9kZSAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIHtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgLnNpZ25pbi1zaWdudXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluLXNpZ251cCxcclxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZSAuc2lnbmluLXNpZ251cCB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAucGFuZWxzLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSA4JTtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcclxuICB9XHJcblxyXG4gIC5yaWdodC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMyAvIDQ7XHJcbiAgfVxyXG5cclxuICAubGVmdC1wYW5lbCB7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjdzO1xyXG4gIH1cclxuXHJcbiAgLnBhbmVsIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICB9XHJcblxyXG4gIC5wYW5lbCBoMyB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcblxyXG4gIC5wYW5lbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG5cclxuICAuYnRuLnRyYW5zcGFyZW50IHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDIxNztcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcblxyXG4gIC5jb250YWluZXI6YmVmb3JlIHtcclxuICAgIHdpZHRoOiAxNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MDBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIGJvdHRvbTogNjglO1xyXG4gICAgcmlnaHQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGU6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xyXG4gICAgYm90dG9tOiAzMiU7XHJcbiAgICByaWdodDogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIuc2lnbi11cC1tb2RlIC5sZWZ0LXBhbmVsIC5pbWFnZSxcclxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZSAubGVmdC1wYW5lbCAuY29udGVudCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIuc2lnbi11cC1tb2RlIC5yaWdodC1wYW5lbCAuaW1hZ2UsXHJcbiAgLmNvbnRhaW5lci5zaWduLXVwLW1vZGUgLnJpZ2h0LXBhbmVsIC5jb250ZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnJpZ2h0LXBhbmVsIC5pbWFnZSxcclxuICAucmlnaHQtcGFuZWwgLmNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwMHB4KTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIuc2lnbi11cC1tb2RlIC5zaWduaW4tc2lnbnVwIHtcclxuICAgIHRvcDogNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzBweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMCAxLjVyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICB9XHJcblxyXG4gIC5pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAucGFuZWwgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgfVxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcjpiZWZvcmUge1xyXG4gICAgYm90dG9tOiA3MiU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLnNpZ24tdXAtbW9kZTpiZWZvcmUge1xyXG4gICAgYm90dG9tOiAyOCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAuaW5wdXQ6LWludGVybmFsLWF1dG9maWxsLXNlbGVjdGVkIHtcclxuICBhcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmUgIWltcG9ydGFudDtcclxuICBjb2xvcjogbm9uZSAhaW1wb3J0YW50O1xyXG59Il19 */";

/***/ }),

/***/ 4281:
/*!******************************************************************!*\
  !*** ./src/app/pages/tabs/auth/login/login.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<body>\r\n  <ion-content class=\"content\">\r\n    <div class=\"container\" [ngClass]=\"{ 'sign-up-mode': isSignUpMode }\">\r\n      <div class=\"forms-container\">\r\n        <div class=\"signin-signup\">\r\n          <form\r\n            [formGroup]=\"signInForm\"\r\n            (ngSubmit)=\"onSignIn()\"\r\n            *ngIf=\"!isSignUpMode; else signUpFormTemplate\"\r\n            class=\"sign-in-form\"\r\n          >\r\n            <h2 class=\"title\">Sign in</h2>\r\n            <div class=\"input-field\">\r\n              <i class=\"fas fa-user\"></i>\r\n              <input\r\n                type=\"text\"\r\n                formControlName=\"username\"\r\n                placeholder=\"Username\"\r\n              />\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <i class=\"fas fa-lock\"></i>\r\n              <input\r\n                type=\"password\"\r\n                formControlName=\"password\"\r\n                placeholder=\"Password\"\r\n              />\r\n            </div>\r\n            <button\r\n              type=\"submit\"\r\n              class=\"btn solid\"\r\n              [disabled]=\"!signInForm.valid\"\r\n            >\r\n              Login\r\n            </button>\r\n            <p class=\"social-text\">Or Sign in with social platforms</p>\r\n            <div class=\"social-media\">\r\n              <a href=\"#\" class=\"social-icon\">\r\n                <i class=\"fab fa-facebook-f\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"social-icon\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"social-icon\">\r\n                <i class=\"fab fa-google\"></i>\r\n              </a>\r\n              <a href=\"#\" class=\"social-icon\">\r\n                <i class=\"fab fa-linkedin-in\"></i>\r\n              </a>\r\n            </div>\r\n          </form>\r\n          <ng-template #signUpFormTemplate>\r\n            <form\r\n              [formGroup]=\"signUpForm\"\r\n              (ngSubmit)=\"onSignUp()\"\r\n              class=\"sign-up-form\"\r\n            >\r\n              <h2 class=\"title\">Sign up</h2>\r\n              <div class=\"input-field\">\r\n                <i class=\"fas fa-user\"></i>\r\n                <input\r\n                  type=\"text\"\r\n                  formControlName=\"username\"\r\n                  placeholder=\"Username\"\r\n                />\r\n              </div>\r\n              <div class=\"input-field\">\r\n                <i class=\"fas fa-envelope\"></i>\r\n                <input\r\n                  type=\"email\"\r\n                  formControlName=\"email\"\r\n                  placeholder=\"Email\"\r\n                />\r\n              </div>\r\n              <div class=\"input-field\">\r\n                <i class=\"fas fa-lock\"></i>\r\n                <input\r\n                  type=\"password\"\r\n                  formControlName=\"password\"\r\n                  placeholder=\"Password\"\r\n                />\r\n              </div>\r\n              <button type=\"submit\" class=\"btn\">Sign up</button>\r\n              <p class=\"social-text\">Or Sign up with social platforms</p>\r\n              <div class=\"social-media\">\r\n                <a href=\"#\" class=\"social-icon\">\r\n                  <i class=\"fab fa-facebook-f\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon\">\r\n                  <i class=\"fab fa-twitter\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon\">\r\n                  <i class=\"fab fa-google\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon\">\r\n                  <i class=\"fab fa-linkedin-in\"></i>\r\n                </a>\r\n              </div>\r\n            </form>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <div class=\"panels-container\">\r\n        <div class=\"panel left-panel\">\r\n          <div class=\"content\">\r\n            <h3>New here ?</h3>\r\n            <p>\r\n              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,\r\n              ex ratione. Aliquid!\r\n            </p>\r\n            <button class=\"btn transparent\" (click)=\"toggleSignUpMode()\">\r\n              Sign up\r\n            </button>\r\n          </div>\r\n          <img src=\"assets/images/register.svg\" class=\"image\" alt=\"\" />\r\n        </div>\r\n        <div class=\"panel right-panel\">\r\n          <div class=\"content\">\r\n            <h3>One of us ?</h3>\r\n            <p>\r\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum\r\n              laboriosam ad deleniti.\r\n            </p>\r\n            <button class=\"btn transparent\" (click)=\"toggleSignUpMode()\">\r\n              Sign in\r\n            </button>\r\n          </div>\r\n          <img src=\"assets/images/log.svg\" class=\"image\" alt=\"\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</body>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_auth_login_login_module_ts.js.map