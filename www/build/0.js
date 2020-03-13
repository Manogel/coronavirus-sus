webpackJsonp([0],{

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertUsoDadosPageModule", function() { return AlertUsoDadosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_uso_dados__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertUsoDadosPageModule = /** @class */ (function () {
    function AlertUsoDadosPageModule() {
    }
    AlertUsoDadosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert_uso_dados__["a" /* AlertUsoDadosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert_uso_dados__["a" /* AlertUsoDadosPage */]),
            ],
        })
    ], AlertUsoDadosPageModule);
    return AlertUsoDadosPageModule;
}());

//# sourceMappingURL=alert-uso-dados.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertUsoDadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertUsoDadosPage = /** @class */ (function () {
    function AlertUsoDadosPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AlertUsoDadosPage.prototype.close = function (permitir) {
        this.viewCtrl.dismiss(permitir);
    };
    AlertUsoDadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alert-uso-dados',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/alert-uso-dados/alert-uso-dados.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Autorização\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="conteudo">\n    <div class="step">\n      <button ion-button outline round color="secondary"><ion-icon name="md-checkmark" color="secondary"></ion-icon></button>\n    </div>\n    <div class="cabecalho">\n      <h2 class="titulo">Atenção</h2>\n    </div>\n    <div class="texto">\n      <p>Este serviço precisa utilizar as seguintes informações pessoais do seu cadastro:</p>\n      <span>Fazer login usando sua identidade</span>\n      <p>A partir da sua aprovação,  a aplicação acima mencionada e a plataforma Brasil Cidadão utilizarão as informações listadas acima, respeitando os termos de uso e a política de privacidade.</p>\n    </div>\n\n    <div class="botoes">\n      <button ion-button block color="secondary" (tap)="close(false)">Negar</button>\n      <button ion-button block color="pink" (tap)="close(true)">Autorizar</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/alert-uso-dados/alert-uso-dados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], AlertUsoDadosPage);
    return AlertUsoDadosPage;
}());

//# sourceMappingURL=alert-uso-dados.js.map

/***/ })

});
//# sourceMappingURL=0.js.map