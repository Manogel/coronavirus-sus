webpackJsonp([1],{

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDiarioSaudePageModule", function() { return AlertDiarioSaudePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_diario_saude__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertDiarioSaudePageModule = /** @class */ (function () {
    function AlertDiarioSaudePageModule() {
    }
    AlertDiarioSaudePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert_diario_saude__["a" /* AlertDiarioSaudePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert_diario_saude__["a" /* AlertDiarioSaudePage */]),
            ],
        })
    ], AlertDiarioSaudePageModule);
    return AlertDiarioSaudePageModule;
}());

//# sourceMappingURL=alert-diario-saude.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDiarioSaudePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primeiro_acesso_primeiro_acesso__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertDiarioSaudePage = /** @class */ (function () {
    function AlertDiarioSaudePage(viewCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    AlertDiarioSaudePage.prototype.close = function (openLoginBC) {
        if (openLoginBC === void 0) { openLoginBC = false; }
        this.viewCtrl.dismiss(openLoginBC);
    };
    AlertDiarioSaudePage.prototype.openPrimeiroAcesso = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__primeiro_acesso_primeiro_acesso__["a" /* PrimeiroAcessoPage */]);
        modal.present();
        this.close();
    };
    AlertDiarioSaudePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-alert-diario-saude',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/alert-diario-saude/alert-diario-saude.html"*/'<div class="content">\n  <button ion-button clear class="close" (tap)="close()"><ion-icon name="md-close" color="dark"></ion-icon></button>\n  <div class="cabecalho">\n    <h2 class="titulo">Atenção</h2>\n  </div>\n  <div class="texto">\n    <p>O Coronavírus atualizou a forma de logar no aplicativo. Agora você faz seu acesso com usuário e senha do Brasil Cidadão.</p>\n  </div>\n\n  <div class="botoes">\n    <button ion-button block color="secondary" (tap)="close(true)">Tenho Conta no Brasil Cidadão</button>\n    <div class="separador">\n      <span>OU</span>\n    </div>\n    <button ion-button block color="pink" (tap)="openPrimeiroAcesso()">Criar conta no Brasil Cidadão</button>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/alert-diario-saude/alert-diario-saude.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], AlertDiarioSaudePage);
    return AlertDiarioSaudePage;
}());

//# sourceMappingURL=alert-diario-saude.js.map

/***/ })

});
//# sourceMappingURL=1.js.map