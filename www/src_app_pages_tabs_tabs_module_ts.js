"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tabs_tabs_module_ts"],{

/***/ 5448:
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 4101);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 6302)).then(m => m.HomePageModule)
            },
            {
                path: 'form',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_form_form_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./form/form.module */ 2994)).then(m => m.FormPageModule)
            },
            {
                path: 'baby',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_baby_baby_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./baby/baby.module */ 8534)).then(m => m.BabyPageModule)
            },
            {
                path: 'pie',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_pie_pie_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pie/pie.module */ 1045)).then(m => m.PiePageModule)
            },
            {
                path: 'settings',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tabs_settings_settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settings/settings.module */ 1901)).then(m => m.SettingsPageModule)
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5557:
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7464);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5448);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 4101);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 4101:
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 2321);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 7867);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let TabsPage = class TabsPage {
    constructor(routerSvc) {
        this.routerSvc = routerSvc;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.routerSvc.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.updateActiveLink(event.urlAfterRedirects);
            }
        });
        this.updateActiveLink(this.routerSvc.url);
    }
    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
        console.log(this.selectedTab);
    }
    activateLink(index) {
        const listItems = document.querySelectorAll('.list');
        listItems.forEach((item, idx) => {
            if (idx === index) {
                item.classList.add('active');
                item.querySelector('.icon').classList.add('hover-active');
            }
            else {
                item.classList.remove('active');
                item.querySelector('.icon').classList.remove('hover-active');
            }
        });
    }
    isActive(index) {
        const listItems = document.querySelectorAll('.list');
        return listItems[index].classList.contains('active');
    }
    documentForm() {
        this.routerSvc.navigate(['/tabs/form']);
    }
    onClickBaby() {
        this.routerSvc.navigate(['/tabs/baby']);
    }
    onClickHome() {
        this.routerSvc.navigate(['/tabs/home']);
    }
    onClickPie() {
        this.routerSvc.navigate(['/tabs/pie']);
    }
    onClickSettings() {
        this.routerSvc.navigate(['/tabs/settings']);
    }
    updateActiveLink(url) {
        if (url.includes('/tabs/form')) {
            this.activateLink(0);
        }
        else if (url.includes('/tabs/baby')) {
            this.activateLink(1);
        }
        else if (url.includes('/tabs/home')) {
            this.activateLink(2);
        }
        else if (url.includes('/tabs/pie')) {
            this.activateLink(3);
        }
        else if (url.includes('/tabs/settings')) {
            this.activateLink(4);
        }
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 4436:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap\");\nion-tabs {\n  background: var(--ion-color-secondary);\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n.navigation {\n  position: fixed;\n  bottom: 0px;\n  left: 0;\n  width: 100%;\n  height: 80px;\n  background: #FFFFFF;\n  display: grid;\n  grid-template-rows: auto;\n  justify-items: center;\n  border-radius: 30px 30px 0px 0px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);\n}\n.navigation ul {\n  display: flex;\n  width: 350px;\n}\n.navigation ul li {\n  position: relative;\n  width: 70px;\n  height: 70px;\n  list-style: none;\n  z-index: 1;\n}\n.navigation ul li a {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  text-align: center;\n  font-weight: 500;\n  padding-left: 2%;\n}\n.navigation ul li a .icon {\n  position: relative;\n  display: block;\n  line-height: 75px;\n  font-size: 1.5em;\n  text-align: center;\n  color: #0f2d79;\n  transition: 0.3s;\n}\n.navigation ul li.active a .icon {\n  transform: translateY(-32px);\n}\n.navigation ul li.active a .text {\n  opacity: 1;\n  transform: translateY(10px);\n}\n.navigation ul li a .circle {\n  position: absolute;\n  display: block;\n  width: 50px;\n  height: 50px;\n  background: transparent;\n  border-radius: 50%;\n  transform: translateY(-37px) scale(0);\n}\n.navigation ul li.active a .circle {\n  transition: 0.3s;\n  transition-delay: 0.3s;\n  transform: translateY(-37px) scale(1);\n}\n.indicator {\n  position: absolute;\n  top: -43%;\n  width: 70px;\n  height: 70px;\n  background: #0f2d79;\n  border: 6px solid #FFFFFF;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);\n}\n.navigation ul li:nth-child(1).active ~ .indicator {\n  transform: translateX(0px);\n}\n.navigation ul li:nth-child(2).active ~ .indicator {\n  transform: translateX(70px);\n}\n.navigation ul li:nth-child(3).active ~ .indicator {\n  transform: translateX(140px);\n}\n.navigation ul li:nth-child(4).active ~ .indicator {\n  transform: translateX(210px);\n}\n.navigation ul li:nth-child(5).active ~ .indicator {\n  transform: translateX(280px);\n}\n.navigation ul li a .icon:hover,\n.navigation ul li a .icon.hover-active {\n  color: #f7d217;\n}\n@media (min-width: 768px) {\n  .navigation {\n    position: fixed;\n    bottom: 0px;\n    left: 28%;\n    width: 50%;\n    height: 80px;\n    background: #FFFFFF;\n    display: grid;\n    grid-template-rows: auto;\n    justify-items: center;\n    border-radius: 30px 30px 0px 0px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDZHQUFBO0FBRVI7RUFDSSxzQ0FBQTtBQUFKO0FBR0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7QUFBSjtBQUdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3RUFBQTtBQUFKO0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBQUo7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLDRCQUFBO0FBQUo7QUFHQTtFQUNJLFVBQUE7RUFDQSwyQkFBQTtBQUFKO0FBR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQUFKO0FBR0E7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7QUFBSjtBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7QUFBSjtBQUdBO0VBQ0ksMEJBQUE7QUFBSjtBQUdBO0VBQ0ksMkJBQUE7QUFBSjtBQUdBO0VBQ0ksNEJBQUE7QUFBSjtBQUdBO0VBQ0ksNEJBQUE7QUFBSjtBQUdBO0VBQ0ksNEJBQUE7QUFBSjtBQUdBOztFQUVJLGNBQUE7QUFBSjtBQUdBO0VBQ0k7SUFDSSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsYUFBQTtJQUNBLHdCQUFBO0lBQ0EscUJBQUE7SUFDQSxnQ0FBQTtJQUNBLHdFQUFBO0VBQU47QUFDRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5pb24tdGFicyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMHB4IDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGkgYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHVsIGxpIGEgLmljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNzVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzBmMmQ3OTtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGkuYWN0aXZlIGEgLmljb24ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMnB4KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGkuYWN0aXZlIGEgLnRleHQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGkgYSAuY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzdweCkgc2NhbGUoMCk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHVsIGxpLmFjdGl2ZSBhIC5jaXJjbGUge1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zN3B4KSBzY2FsZSgxKTtcclxufVxyXG5cclxuLmluZGljYXRvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC00MyU7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwZjJkNzk7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGk6bnRoLWNoaWxkKDEpLmFjdGl2ZX4uaW5kaWNhdG9yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDcwcHggKiAwKSk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHVsIGxpOm50aC1jaGlsZCgyKS5hY3RpdmV+LmluZGljYXRvciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyg3MHB4ICogMSkpO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB1bCBsaTpudGgtY2hpbGQoMykuYWN0aXZlfi5pbmRpY2F0b3Ige1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoNzBweCAqIDIpKTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24gdWwgbGk6bnRoLWNoaWxkKDQpLmFjdGl2ZX4uaW5kaWNhdG9yIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDcwcHggKiAzKSk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHVsIGxpOm50aC1jaGlsZCg1KS5hY3RpdmV+LmluZGljYXRvciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyg3MHB4ICogNCkpO1xyXG59XHJcblxyXG4ubmF2aWdhdGlvbiB1bCBsaSBhIC5pY29uOmhvdmVyLFxyXG4ubmF2aWdhdGlvbiB1bCBsaSBhIC5pY29uLmhvdmVyLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2Y3ZDIxNztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMjglO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwcHggMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 7867:
/*!******************************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs>\r\n  <div class=\"navigation\">\r\n    <ul>\r\n      <li class=\"list\" (click)=\"documentForm()\">\r\n        <a>\r\n          <span class=\"icon\">\r\n            <ion-icon name=\"document-text-outline\"></ion-icon>\r\n          </span>\r\n          <span class=\"circle\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list\" (click)=\"onClickBaby()\">\r\n        <a>\r\n          <span class=\"icon\">\r\n            <ion-icon name=\"happy-outline\"></ion-icon>\r\n          </span>\r\n          <span class=\"circle\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list\" (click)=\"onClickHome()\">\r\n        <a>\r\n          <span class=\"icon\">\r\n            <ion-icon name=\"home-outline\"></ion-icon>\r\n          </span>\r\n          <span class=\"circle\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list\" (click)=\"onClickPie()\">\r\n        <a>\r\n          <span class=\"icon\">\r\n            <ion-icon name=\"pie-chart-outline\"></ion-icon>\r\n          </span>\r\n          <span class=\"circle\"></span>\r\n        </a>\r\n      </li>\r\n      <li class=\"list\" (click)=\"onClickSettings()\">\r\n        <a>\r\n          <span class=\"icon\">\r\n            <ion-icon name=\"settings-outline\"></ion-icon>\r\n          </span>\r\n          <span class=\"circle\"></span>\r\n        </a>\r\n      </li>\r\n      <div class=\"indicator\"></div>\r\n    </ul>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tabs_tabs_module_ts.js.map