webpackJsonp([21],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.set = function (usuario) {
        if (usuario) {
            this.cnsCartao = usuario.cnsCartao;
            this.cpf = usuario.cpf;
            this.dataNascimento = usuario.dataNascimento;
            this.doadorOrgao = usuario.doadorOrgao;
            this.enderecoBairro = usuario.enderecoBairro;
            this.enderecoCep = usuario.enderecoCep;
            this.enderecoLogradouro = usuario.enderecoLogradouro;
            this.enderecoMunicipio = usuario.enderecoMunicipio;
            this.foto = usuario.foto;
            this.nacionalidade = usuario.nacionalidade;
            this.nome = usuario.nome;
            this.nomeMae = usuario.nomeMae;
            this.nomePai = usuario.nomePai;
            this.paisResidenciaDescricao = usuario.paisResidenciaDescricao;
            this.racaCorDescricao = usuario.racaCorDescricao;
            this.sexoDescricao = usuario.sexoDescricao;
            this.tipoSanguineo = usuario.tipoSanguineo;
            this.email = usuario.email;
        }
        else {
            this.cnsCartao = null;
            this.cpf = null;
            this.dataNascimento = null;
            this.doadorOrgao = null;
            this.enderecoBairro = null;
            this.enderecoCep = null;
            this.enderecoLogradouro = null;
            this.enderecoMunicipio = null;
            this.foto = null;
            this.nacionalidade = null;
            this.nome = null;
            this.nomeMae = null;
            this.nomePai = null;
            this.paisResidenciaDescricao = null;
            this.racaCorDescricao = null;
            this.sexoDescricao = null;
            this.tipoSanguineo = null;
            this.email = null;
        }
    };
    Usuario = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Usuario);
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicUtilProvider; });
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


var IonicUtilProvider = /** @class */ (function () {
    function IonicUtilProvider(platform, loadingCtrl, toastCtrl, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.cordova = false;
        this.maxWidth = 640;
        this.cordova = platform.is('cordova');
        console.log('Cordova', this.cordova);
        platform.ready().then(function () {
            _this._widthPlatform = platform.width() <= _this.maxWidth ? platform.width() : _this.maxWidth;
            _this._heightPlatform = platform.height();
        });
    }
    IonicUtilProvider.prototype.isOnline = function () {
        if (this.cordova && navigator.connection) {
            return navigator.connection.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    IonicUtilProvider.prototype.isOffline = function () {
        if (this.cordova && navigator.connection) {
            var networkState = navigator.connection.type;
            return networkState === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    IonicUtilProvider.prototype.onLoading = function (message, duration) {
        if (message === void 0) { message = ''; }
        if (duration > 0) {
            this._loading = this.loadingCtrl.create({ content: message, duration: duration });
        }
        else {
            this._loading = this.loadingCtrl.create({ content: message });
        }
        this._loading.present();
    };
    IonicUtilProvider.prototype.endLoading = function () {
        this._loading.dismiss();
    };
    IonicUtilProvider.prototype.toast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            position: 'top',
            duration: 3000,
        });
        toast.present();
    };
    IonicUtilProvider.prototype.tryConnect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var confirm = _this.alertCtrl.create({
                title: 'OffLine',
                message: 'Tentar Novamente?',
                buttons: [
                    {
                        text: 'Tentar',
                        handler: function () {
                            resolve();
                        }
                    },
                    {
                        text: 'Cancelar',
                        handler: function () {
                            reject();
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    IonicUtilProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], IonicUtilProvider);
    return IonicUtilProvider;
}());

//# sourceMappingURL=ionic-util.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TermoPage = /** @class */ (function () {
    function TermoPage(viewCtrl, navParams, storage, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.showBackButton = true;
    }
    TermoPage.prototype.ionViewDidEnter = function () {
        this.showBackButton = this.navParams.get('showBackButton') !== undefined ? this.navParams.get('showBackButton') : true;
    };
    TermoPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    TermoPage.prototype.aceitar = function () {
        var _this = this;
        this.storage.set('termo', true).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    TermoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-termo',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/termo/termo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button\n            icon-only\n            color="light"\n            (tap)="back()"\n            clear\n            *ngIf="showBackButton">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <ion-title>Termos de Uso</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="texto">\n    <p>\n      Por favor, leia estes termos legais de uso, antes de utilizar o aplicativo “CORONAVÍRUS-SUS”.\n    </p>\n    <p>\n      Ao utilizar o “CORONAVÍRUS-SUS”, você aceita e concorda em cumprir os termos e condições estabelecidos nos “termos\n      legais de uso”.\n    </p>\n    <p>\n      Este termo é um acordo vinculativo entre você e o aplicativo “CORONAVÍRUS-SUS”, que abrange todo o seu acesso e\n      uso dessa aplicação, o que inclui o uso de todas as informações, dados, ferramentas, produtos, serviços e outros\n      conteúdos disponíveis por meio deste.\n    </p>\n\n    <p>Ao utilizar esta aplicação, você confirma que compreende e concorda com as seguintes regras\n      dispostas:</p>\n\n    <ul>\n      <li>1. Respeito às Leis:</li>\n      <ul>\n        <li>\n          1.1. O utilizador deverá acessar o “CORONAVÍRUS-SUS” apenas para finalidades lícitas;\n        </li>\n        <li>\n          1.2. O utilizador concorda em utilizar o aplicativo apenas para os devidos fins e em conformidade com o\n          presente termo e limitações legais, bem como quaisquer políticas aplicáveis no Brasil;\n        </li>\n        <li>\n          1.3. Seu acesso é proibido em territórios onde o conteúdo seja considerado ilegal. Aqueles que optarem por\n          acessar este site a partir de outras localidades o farão por iniciativa própria e serão responsáveis pelo\n          cumprimento das leis locais aplicáveis. Os materiais não deverão ser usados ou exportados em descumprimento\n          das leis brasileiras. Qualquer pendência com relação aos materiais será dirimida pelas leis brasileiras.\n        </li>\n        <li>\n          1.4. A alteração não autorizada dos conteúdos deste aplicativo é expressamente proibida.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>2. Respeito às Leis:</li>\n      <ul>\n        <li>\n          2.1. A utilização do aplicativo está indicada somente para indivíduos de 12 (treze) anos de idade ou mais,\n          adolescentes segundo o Estatuto da Criança e Adolescente, sob orientação de um adulto.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>3. Responsabilidade pelo conteúdo:</li>\n      <ul>\n        <li>\n          3.1. O “CORONAVÍRUS-SUS” não é responsável pelo conteúdo de quaisquer informações eventualmente trocadas pelos\n          utilizadores entre si, ou que para o “CORONAVÍRUS-SUS”, sejam elas lícitas ou ilícitas.\n        </li>\n        <li>\n          3.2. O utilizador concorda que é o único responsável pela sua própria conduta e pela veracidade das\n          informações fornecidas enquanto utilizar o serviço e que é responsável pelas consequências que resultem do\n          fornecimento intencional de dados incorretos.\n        </li>\n        <li>\n          3.3. O utilizador concorda que ao usar o “CORONAVÍRUS-SUS” não irá publicar, enviar, distribuir ou divulgar\n          conteúdo ou informação de caráter difamatório, obsceno ou ilícito, inclusive informações de propriedade\n          exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por\n          direitos autorais, sem a expressa autorização do detentor desses direitos;\n        </li>\n        <li>\n          3.4. Ninguém pode agir em seu nome no uso do “CORONAVÍRUS-SUS”. Você é responsável pelo conteúdo que\n          indivíduos não autorizados produzirem ao usar essa aplicação utilizando, com sua permissão, seu perfil\n          cadastrado. Essa regra não se aplica aos casos de violação ou outros problemas de segurança da aplicação.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>4. Acessibilidade ao conteúdo:</li>\n      <ul>\n        <li>\n          4.1. A equipe do “CORONAVÍRUS-SUS” não garante que esta aplicação esteja parcial ou completamente funcional\n          para uso fora do território nacional.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>5. Propriedade intelectual:</li>\n      <ul>\n        <li>\n          5.1. A equipe do “CORONAVÍRUS-SUS” e seus colaboradores são detentores do direito de autoria dos conteúdos\n          produzidos e apresentados nesta aplicação. Essa premissa não se aplica às informações consideradas como de\n          domínio público ou de utilidade pública.\n        </li>\n        <li>\n          5.2. Todas as outras marcas comerciais, marcas de serviço, nomes e logotipos que aparecem nesta aplicação são\n          de propriedade de seus respectivos proprietários.\n        </li>\n        <li>\n          5.3. O aplicativo “CORONAVÍRUS-SUS” é um software open source cuja utilização por terceiros se submete aos\n          termos da licença internacional GNU General Public License, version 3 (GPL-3.0). Os direitos de uso do\n          conteúdo e dos relatórios gerados pela aplicação são cedidos pelos desenvolvedores, em especial aqueles que\n          decorrem dos termos da licença Creative Commons - Atribuição-NãoComercial 4.0 Internacional.\n        </li>\n        <li>\n          5.4. Apenas informações divulgadas pelos serviços de saúde devem ser consideradas oficiais para divulgação\n          pública, no que tange aos dados relacionados a esse tema.\n        </li>\n        <li>\n          5.5. Os dados coletados por meio do “CORONAVÍRUS-SUS” podem sofrer influência pela sua capacidade de acesso à\n          dispositivos móveis com especificações tecnológicas mínimas. Deste modo, as informações obtidas por meio desse\n          aplicativo, podem necessariamente não corresponder à expressão real do padrão epidemiológico daquele período e\n          local, pois depende da conexão e precisão de\n          antenas das operadoras de telefonia.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>6. Leis, regulamentos, direitos e deveres:</li>\n      <ul>\n        <li>\n          6.1. É política da equipe do “CORONAVÍRUS-SUS” cumprir todas as leis e regulamentos aplicáveis, os quais podem\n          ser\n          modificados de tempos em tempos. No caso de qualquer disposição do presente Termos de Uso estar em conflito\n          com qualquer lei ou regulamento aplicável, a lei ou regulamentação aplicável substituirá a disposição\n          contrária.\n        </li>\n        <li>\n          6.3. O “CORONAVÍRUS-SUS” poderá, mas não é obrigado, a monitorar, revisar e restringir o acesso a qualquer de\n          suas áreas onde os utilizadores transmitem informações, podendo retirar do ar ou retirar o acesso a qualquer\n          destas informações ou comunicações.\n        </li>\n        <li>\n          6.4. Se você tiver alguma dúvida em relação ao “CORONAVÍRUS-SUS”, não hesite em contatar-nos pelo email:\n          coe@saude.gov.br.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>7. Uso das contribuições.</li>\n      <ul>\n        <li>\n          7.1. Ao enviar uma contribuição escrita ou postar informações no “CORONAVÍRUS-SUS”, você concede uma licença\n          perpétua, isenta de royalties, licença incondicional para essa aplicação ao Ministério da Saúde.\n        </li>\n        <li>\n          7.2. Ao publicar a sua contribuição no “CORONAVÍRUS-SUS”, você estará contribuindo para as medidas para\n          enfrentamento da emergência de saúde pública de importância internacional decorrente do coronavírus\n          (http://j.mp/coronaLEIquarentena), de forma agregada (nunca individual) à outros meios de comunicação, e para\n          discutir ou referenciá-la em quaisquer publicações científicas e educacionais.\n        </li>\n        <li>\n          7.3. Você também concorda que o “CORONAVÍRUS-SUS” tem o direito, mas não a obrigação, de editar ou remover\n          qualquer contribuição, ou incluí-la no texto em conjunto com outras contribuições, a critério exclusivo da\n          equipe relacionada a essa aplicação.\n        </li>\n        <li>\n          7.4. Todas as informações fornecidas por pessoas ou profissionais de saúde são protegidas, de acordo com a Lei\n          Geral de Proteção de Dados Pessoais (LGPD), Lei Nº 13.709, de 14 de agosto de 2018.\n        </li>\n        <li>\n          7.5. Segundo Capítulo II (Do tratamento de dados pessoais), Seção II (Do Tratamento de Dados Pessoais\n          Sensíveis), Art. 13. Na realização de estudos em saúde pública, os órgãos de pesquisa poderão ter acesso a\n          bases de dados pessoais, que serão tratados exclusivamente dentro do órgão e estritamente para a finalidade de\n          realização de estudos e pesquisas e mantidos em ambiente controlado e seguro, conforme práticas de segurança\n          previstas em regulamento específico e que incluam, sempre que possível, a anonimização ou pseudonimização dos\n          dados, bem como considerem os devidos padrões éticos relacionados a estudos e pesquisas.\n        </li>\n        <ul>\n          <li>7.5.1. § 1º A divulgação dos resultados ou de qualquer excerto do estudo ou da pesquisa de que trata o\n            caput deste artigo em nenhuma hipótese poderá revelar dados pessoais.§ 2º O órgão de pesquisa será o\n            responsável pela segurança da informação prevista no caput deste artigo, não permitida, em circunstância\n            alguma, a transferência dos dados a terceiro.</li>\n          <li>7.5.2. § 3º O acesso aos dados de que trata este artigo será objeto de regulamentação por parte da\n            autoridade nacional e das autoridades da área de saúde e sanitárias, no âmbito de suas competências.</li>\n          <li>7.5.3. § 4º Para os efeitos deste artigo, a pseudonimização é o tratamento por meio do qual um dado perde\n            a possibilidade de associação, direta ou indireta, a um indivíduo, senão pelo uso de informação adicional\n            mantida separadamente pelo controlador em ambiente controlado e seguro.</li>\n        </ul>\n      </ul>\n    </ul>\n    <ul>\n      <li>8. Garantia de Sigilo e Anonimato:</li>\n      <ul>\n        <li>\n          8.1. Será garantido o sigilo e anonimato de todas as informações produzidas por você no “CORONAVÍRUS-SUS”,\n          exceto conforme exigido por lei, ou para tratar de questões de descumprimento.\n        </li>\n        <li>\n          8.2. Reservamo-nos o direito de usar esta informação internamente e, nesse âmbito, sua contribuição estará\n          vinculada ao apelido de sua escolha.\n        </li>\n        <li>\n          8.3. O “CORONAVÍRUS-SUS”, seus colaboradores e usuários, incluindo agências governamentais e não\n          governamentais, dependem dos utilizadores para a precisão das contribuições. A equipe não se responsabiliza\n          por erros ou imprecisões em qualquer submissão. Deturpação deliberada de informações por um usuário pode\n          constituir uma violação da lei, e se for séria, será comunicada às autoridades governamentais apropriadas.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>9. Atualização do “CORONAVÍRUS-SUS”:</li>\n      <ul>\n        <li>\n          9.1. Modificações dessa aplicação e dos seus Termos de Uso poderão ocorrer. A menos que indique o contrário,\n          seu uso da aplicação indica a aceitação integral do Termos de Uso naquela versão vigente cada vez que você\n          usar o “CORONAVÍRUS-SUS”. Fique atento as atualizações e, em caso de dúvida, os Termos de Uso estarão sempre\n          disponíveis para acesso e concordância ou não.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>10. Responsabilidade por ações com base no conteúdo:</li>\n      <ul>\n        <li>\n          10.1. O “CORONAVÍRUS-SUS” não assume responsabilidade por quaisquer prejuízo e / ou danos a pessoas ou bens,\n          em consequência de qualquer utilização das idéias, conteúdos, instruções, métodos, produtos ou procedimentos\n          contidos nesta aplicação.\n        </li>\n        <li>\n          10.2. Em hipótese alguma os profissionais envolvidos com o desenvolvimento ou gestão dessa aplicação serão\n          responsabilizados por qualquer decisão ou ação tomada por você em base a tal conteúdo.\n        </li>\n        <li>\n          10.3. Diante de ameaças ou qualquer outra situação de risco a vossa saúde ou integridade procure sempre\n          orientações validadas e atualizadas pelos serviços locais de saúde pública ou acesse\n          www.saude.gov.br/coronavirus para mais informações.\n        </li>\n      </ul>\n    </ul>\n    <ul>\n      <li>11. Responsabilidade por problemas tecnológicos:</li>\n      <ul>\n        <li>\n          11.1. Eventualmente todo o conteúdo ou qualquer parte do “CORONAVÍRUS-SUS” pode não estar disponível e pode\n          não funcionar corretamente em qualquer momento . Fazemos esforços razoáveis para evitar problemas\n          tecnológicos, mas em qualquer momento podem ocorrer nessa aplicação problemas tecnológicos das mais diversas\n          naturezas, tais como vírus, rotinas de programação prejudiciais ou problemas relacionados ao aparelho do\n          usuário.\n        </li>\n        <li>\n          11.2. A aplicação é fornecidos “como está” e “conforme estiver disponível”. Sem limitar o nosso aviso geral,\n          não garantimos a disponibilidade, integridade, pontualidade, funcionalidade, confiabilidade, seqüenciamento ou\n          a velocidade de entrega nessa aplicação ou de qualquer parte do conteúdo.\n        </li>\n        <li>\n          11.3. O “CORONAVÍRUS-SUS” não se responsabiliza por qualquer dano ou prejuízo causado pelo desempenho ou falha\n          de desempenho de toda ou qualquer parte da aplicação. O “CORONAVÍRUS-SUS” não se responsabiliza por quaisquer\n          defeitos, atrasos ou erros resultantes da sua utilização desta aplicação.\n        </li>\n        <li>\n          11.4. A utilização de todas as funcionalidades do “CORONAVÍRUS-SUS” exige disponibilidade do acesso à internet\n          pelo usuário, por wifi ou cabo de rede de dados. A ausência desse pré-requisito pode limitar a utilização da\n          aplicação com todo seu potencial de uso. A equipe do “CORONAVÍRUS-SUS”, considerando esse aviso, não assume\n          responsabilidade decorrente dessa limitação.\n        </li>\n        <li>\n          11.5. Esta isenção de responsabilidade aplica-se a todos e quaisquer danos ou prejuízos, incluindo aqueles\n          causados por qualquer falha de desempenho, erro, omissão, interrupção, apagamento, defeito, atraso na operação\n          ou transmissão, vírus de computador, falha de linha de comunicação, roubo, destruição ou acesso não\n          autorizado, a alteração ou uso de qualquer bem, seja por violação de contrato, comportamento ilícito,\n          negligência ou qualquer outra causa de ação.\n        </li>\n      </ul>\n    </ul>\n\n    <ul>\n      <li>12. Responsabilidade por informações de terceiros:</li>\n      <ul>\n        <li>\n          12.1. A disposição através da aplicação de links e referências para outros sites, publicações ou recursos de\n          informação não constitui o endosso desses sites ou de seus recursos por parte do “CORONAVÍRUS-SUS”, de seus\n          agentes ou representantes.\n        </li>\n        <li>\n          12.2. A equipe do “CORONAVÍRUS-SUS” não faz representações ou asserções quanto à qualidade, conteúdo e\n          precisão das informações, serviços ou produtos que podem ser fornecidas por esses recursos e especificamente\n          se isenta de quaisquer garantias, incluindo, mas não limitando às garantias implícitas ou expressas de\n          comerciabilidade ou adequação para qualquer utilização particular, aplicação ou finalidade.\n        </li>\n      </ul>\n    </ul>\n\n    <ul>\n      <li>13. Considerações Finais</li>\n      <ul>\n        <li>\n          13.1. O acesso ao serviço representa a aceitação expressa e irrestrita dos Termos de Uso acima descritos. Ao\n          concordar com esses termos você concede uma licença perpétua, isenta de royalties, licença incondicional para\n          o “CORONAVÍRUS-SUS”, Ministério da Saúde e todas as organizações sucessoras, para publicar a sua contribuição\n          de forma agregada, nunca individualizada, na própria aplicação, bem como divulgá-las aos serviços de\n          vigilância em saúde pública relacionados. Você também concorda que “CORONAVÍRUS-SUS” tem o direito, mas não a\n          obrigação, de editar ou remover qualquer contribuição a critério exclusivo da equipe do “CORONAVÍRUS-SUS”.\n        </li>\n        <li>\n          13.2. Este aplicativo não realiza diagnóstico clínico, apenas auxilia o usuário na compreensão dos sinais e\n          sintomas relacionados às definições operacionais, de saúde pública, para investigação do coronavírus na sua\n          comunidade.\n        </li>\n        <li>\n          13.3. É importante ressaltar que caso da composição de sinais e sintomas, associados aos critérios\n          epidemiológicos indique que o usuário possa ser um possível caso suspeito, isso não se trata de um\n          diagnóstico. O Ministério da Saúde orienta que o mesmo deverá procurar atendimento em uma unidade de saúde\n          mais próxima para avaliação clínica.\n        </li>\n      </ul>\n    </ul>\n\n  </div>\n</ion-content>\n<ion-footer *ngIf="!showBackButton">\n  <button ion-button\n          block\n          class="btn-footer"\n          (tap)="aceitar()">Aceitar\n  </button>\n</ion-footer>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/termo/termo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], TermoPage);
    return TermoPage;
}());

//# sourceMappingURL=termo.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Iniciacao; });
var Iniciacao = /** @class */ (function () {
    function Iniciacao(iniciacao) {
        this.token = iniciacao.token;
        this.existeDNI = iniciacao.existeDNI;
        this.existeCNS = iniciacao.existeCNS;
    }
    return Iniciacao;
}());

//# sourceMappingURL=Iniciacao.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SintomasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_saude_provider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_sintomas_list_provider__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__suspeito_suspeito__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nao_suspeito_nao_suspeito__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var SintomasPage = /** @class */ (function () {
    function SintomasPage(navCtrl, saudeProvider, navParams, geolocation, modalCtrl, viewCtrl, device, sintomasListProvider, registros, util, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.saudeProvider = saudeProvider;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.device = device;
        this.sintomasListProvider = sintomasListProvider;
        this.registros = registros;
        this.util = util;
        this.events = events;
        this.sintomasList = [];
        this.sintomasFiltro = [];
        this.sintomas = {};
        this.sint = [];
        this.outrosSintomas = "";
        this.paises = [];
        this.paisesSelecionados = [];
        this.confirmado = undefined;
        this.suspeito = undefined;
        this.status = this.navParams.get("status");
        this.membro = this.navParams.get("membro");
        this.util.onLoading("Carregando sintomas...");
        if (typeof this.status == "undefined") {
            this.sintomasListProvider.sintomas(true);
            this.events.subscribe("get-sintomas-list", function (sintomas) {
                _this.sintomasList = [];
                _this.sintomasList = sintomas;
                _this.util.endLoading();
            });
        }
        else {
            this.getSintomas();
        }
    }
    SintomasPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe("get-sintomas-list");
        this.events.unsubscribe("update-sintomas-list");
    };
    SintomasPage.prototype.getSintomas = function () {
        var _this = this;
        this.sintomasListProvider.sintomas();
        this.events.subscribe("update-sintomas-list", function (sintomas) {
            _this.sintomasList = [];
            _this.sintomasList = sintomas;
            _this.sintomasList.forEach(function (element) {
                if (_this.navParams.get("sintomasFiltro")) {
                    _this.navParams.get("sintomasFiltro").some(function (sint) {
                        if (sint.id == element.id)
                            element.isSelected = sint.isSelected;
                        return sint.id == element.id;
                    });
                }
            });
            _this.util.endLoading();
        });
    };
    SintomasPage.prototype.selectSintoma = function (sintoma) {
        if (this.status) {
            sintoma.isSelected = !sintoma.isSelected;
        }
        else {
            sintoma.isSelected = !sintoma.isSelected;
            if (sintoma.id in this.sintomas) {
                delete this.sintomas[sintoma.id];
                var index = __WEBPACK_IMPORTED_MODULE_7_underscore__["findIndex"](this.sint, function (item) {
                    return item == sintoma.nome;
                });
                this.sint.splice(index, 1);
            }
            else {
                this.sint.push({
                    id: sintoma.id,
                    nome: sintoma.nome
                });
                this.sintomas[sintoma.id] = sintoma;
            }
        }
    };
    SintomasPage.prototype.selectPaises = function (index, pais) {
        pais.isSelected = !pais.isSelected;
        var hasInSelecteds = this.paisesSelecionados.filter(function (paisSelecionado) {
            return paisSelecionado.id === pais.objectId;
        }).length > 0;
        if (hasInSelecteds) {
            this.paisesSelecionados = this.paisesSelecionados.filter(function (paisSelecionado) {
                return paisSelecionado.id !== pais.objectId;
            });
        }
        else {
            this.paisesSelecionados.push({
                id: pais.objectId,
                nome: pais.nome
            });
        }
    };
    SintomasPage.prototype.confirmar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var hasFebreInSintomas, Classe, query, paises;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.showPaises) return [3 /*break*/, 1];
                        this.geolocation.getCurrentPosition().then(function (pos) {
                            var pontos = {
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                                estou_bem: false,
                                sintomas: _this.sint,
                                device: _this.device.uuid,
                                cpfUsuarioLogado: undefined,
                                paises: _this.foraPais === 'sim' ? _this.paisesSelecionados : [],
                                foraPais: _this.foraPais,
                                contatoConfirmado: _this.confirmado,
                                contatoSuspeito: _this.suspeito
                                // cpfUsuarioLogado: this.cpf
                            };
                            _this.saudeProvider.createPonto(pontos).then(function (r) {
                                if (_this.membro) {
                                    _this.saudeProvider
                                        .createRegistro({ sintomas: r, membros: _this.membro })
                                        .then(function (r) {
                                        _this.events.publish("update-localidades");
                                    });
                                }
                            });
                        });
                        this.navCtrl.pop();
                        hasFebreInSintomas = !!this.sint.filter(function (s) {
                            return s.nome === 'Febre';
                        }).length;
                        if ((!hasFebreInSintomas && this.sint.length <= 1) || this.sint.length === 1) {
                            this.openModalNaoSuspeitoPage();
                        }
                        else {
                            if ((this.confirmado === 'sim' || this.suspeito === 'sim') || (this.foraPais === 'sim' && this.paisesSelecionados.length >= 1)) {
                                this.openModalSuspeitoPage();
                            }
                            else {
                                this.openModalNaoSuspeitoPage();
                            }
                        }
                        return [3 /*break*/, 3];
                    case 1:
                        Classe = __WEBPACK_IMPORTED_MODULE_8_parse__["Object"].extend('paises');
                        query = new __WEBPACK_IMPORTED_MODULE_8_parse__["Query"](Classe);
                        query.limit(2000);
                        query.ascending('nome');
                        return [4 /*yield*/, query.find()];
                    case 2:
                        paises = _a.sent();
                        this.paises = JSON.parse(JSON.stringify(paises));
                        this.showPaises = true;
                        this.content.scrollToTop();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SintomasPage.prototype.openModalPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], { showModalInfo: true, comoEstou: "mal", sintomas: this.sint }, {
            enterAnimation: 'fade-transition',
            leaveAnimation: 'fade-transition',
            cssClass: 'modal-confirmar-sintoma-page'
        }).present();
    };
    SintomasPage.prototype.openModalNaoSuspeitoPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__nao_suspeito_nao_suspeito__["a" /* NaoSuspeitoPage */], {
            enterAnimation: 'fade-transition',
            leaveAnimation: 'fade-transition',
            cssClass: 'modal-confirmar-sintoma-page'
        }).present();
    };
    SintomasPage.prototype.openModalSuspeitoPage = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__suspeito_suspeito__["a" /* SuspeitoPage */], {
            enterAnimation: 'fade-transition',
            leaveAnimation: 'fade-transition',
            cssClass: 'modal-confirmar-sintoma-page'
        }).present();
    };
    SintomasPage.prototype.voltar = function () {
        this.foraPais = undefined;
        this.paisesSelecionados = [];
        this.showPaises = false;
        this.content.scrollToTop();
    };
    SintomasPage.prototype.filtrarSintomas = function () {
        this.dismiss({ filter: true, sintomasList: this.sintomasList });
    };
    SintomasPage.prototype.dismiss = function (s) {
        this.viewCtrl.dismiss(s, null, { animation: "false", duration: 0 });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */])
    ], SintomasPage.prototype, "content", void 0);
    SintomasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-sintomas",template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/sintomas/sintomas.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button\n            icon-only\n            *ngIf="!showPaises"\n            class="btn-fechar"\n            (tap)="dismiss()">\n\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <button ion-button\n            icon-only\n            *ngIf="showPaises"\n            class="btn-fechar"\n            (tap)="voltar()">\n      <ion-icon name="md-arrow-round-back"></ion-icon>\n    </button>\n\n    <ion-title>\n      <!-- <span *ngIf="!showPaises">Sintomas</span> -->\n      <span *ngIf="showPaises">Histórico de deslocamento para outros países.</span>\n      <span *ngIf="!showPaises">Faça uma auto-avaliação do seu estado de saúde.</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class="item-row"\n           *ngIf="!showPaises">\n    <!-- Caso nao seja filtro -->\n    <ion-col col-6\n             tappable\n             class="item-col"\n             *ngFor="let sintoma of sintomasList; let i = index;"\n             (tap)="selectSintoma(sintoma)">\n      <div class="lb-sintoma"\n           [ngClass]="{\'is-selected\': sintoma.isSelected}">\n        {{sintoma.nome}}\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="showPaises">\n    <div class="titulo">\n      Esteve em outro país nos últimos 14 dias?\n    </div>\n    <div class="radios"\n         radio-group\n         [(ngModel)]="foraPais">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </div>\n  </div>\n\n  <ion-row class="item-row"\n           *ngIf="showPaises && foraPais !== undefined && foraPais === \'sim\'">\n    <div class="titulo titulo-pais">\n      Onde?\n    </div>\n    <ion-col col-6\n             tappable\n             class="item-col"\n             *ngFor="let pais of paises; let i = index"\n             (tap)="selectPaises(i, pais)">\n      <div class="lb-sintoma"\n           [ngClass]="{\'is-selected\': pais.isSelected}">\n        {{pais.nome}}\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="!showPaises">\n    <div class="titulo">\n      Teve contato próximo com caso suspeito de COVID-19 nos últimos 14 dias?\n    </div>\n    <div class="radios"\n         radio-group\n         [(ngModel)]="suspeito">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </div>\n\n    <div class="titulo">\n      Teve contato próximo com caso confirmado de COVID-19 nos últimos 14 dias?\n    </div>\n    <div class="radios"\n         radio-group\n         [(ngModel)]="confirmado">\n      <ion-item>\n        <ion-label>Sim</ion-label>\n        <ion-radio value="sim"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Não</ion-label>\n        <ion-radio value="nao"></ion-radio>\n      </ion-item>\n    </div>\n  </div>\n\n\n\n  <br><br><br><br><br>\n\n  <ion-fab center\n           bottom>\n    <button [disabled]="(sint?.length === 0 || confirmado === undefined || suspeito === undefined)\n     || ((paisesSelecionados?.length === 0 && showPaises) && (foraPais === \'sim\' || foraPais === undefined))"\n            ion-fab\n            block\n            class="btn-confirmar"\n            (tap)="confirmar()">\n      Confirmar\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/sintomas/sintomas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_saude_provider__["a" /* SaudeProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_9__providers_sintomas_list_provider__["a" /* SintomasListProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_registros__["a" /* RegistrosProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */]])
    ], SintomasPage);
    return SintomasPage;
}());

//# sourceMappingURL=sintomas.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_diagnostico_provider__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = /** @class */ (function () {
    function ModalPage(navCtrl, navParams, viewCtrl, device, events, diagnostico) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.device = device;
        this.events = events;
        this.diagnostico = diagnostico;
        this.confirmacao_text = {
            titulo: '',
            texto: 'Segundo suas respostas, é provável que você não esteja infectado pelo coronavírus 2019 (SARS-CoV2). Mantenha as condutas de precaução e prevenção, praticando a etiqueta respiratória. Você pode ligar para o Disque Saúde 136 do Ministério da Saúde e receber informações adicionais.',
        };
        this.showModalInfo = false;
        this.isIphoneX = false;
        this.sint = [];
        this.notificacoesSucesso = false;
        this.params = this.navParams.get('params');
        this.showModalInfo = this.navParams.get('showModalInfo');
        this.comoEstou = this.navParams.get('comoEstou');
        this.sint = this.navParams.get('sintomas') || [];
        this.notificacoesSucesso = this.navParams.get('notificacoesSucesso') || false;
        if (this.comoEstou === 'bem') {
            // this.confirmacao_text.texto = 'Continue informando diariamente como está sua saúde.';
            this.bem = true;
        }
        // if (this.notificacoesSucesso) {
        //   this.confirmacao_text = {
        //     titulo: 'Comunicado realizado!',
        //     texto: 'Agradecemos a colaboração com nossos serviços de saúde.',
        //   };
        // }
        // if (this.sint.length > 0){
        //   this.diagnostico.diagnostico(this.sint).then((result) => {
        //     if (result != ''){
        //       this.confirmacao_text = {
        //         titulo: 'Atenção!',
        //         texto: result,
        //       };
        //     } else this.sint = [];
        //   });
        // }
        this.comoEstou = this.navParams.get("comoEstou");
        if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
            this.isIphoneX = true;
        }
    }
    // removeSint(){
    //   this.sint = [];
    //   this.confirmacao_text = {
    //     titulo: 'Obrigado pela sua colaboração!',
    //     texto: 'Não deixe de procurar o serviço de saúde mais próximo. Continue informando diariamente como está sua saúde.',
    //   };
    // }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        // if (this.comoEstou == 'bem') {
        //   this.viewCtrl.dismiss(tipo);
        // } else {
        //   this.viewCtrl.dismiss(tipo).then(() => this.events.publish('modal-close', true));
        // }
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/modal/modal.html"*/'<ion-content [ngClass]="{\'is-iPhoneX\': isIphoneX}">\n  <div class="modal-container"\n       [ngClass]="{\'content-info\': showModalInfo}">\n    <div padding\n         class="content-modal">\n\n      <div class="container-img white-box"\n           *ngIf="showModalInfo"\n           style="background: #FFF"></div>\n\n      <div class="container-img"\n           *ngIf="showModalInfo">\n        <img class="showJackInTheBox"\n             src="assets/imgs/img-modal-joia.png" />\n      </div>\n\n      <div *ngIf="showModalInfo">\n        <p class="info-titulo">Obrigado pela sua contribuição</p>\n        <p class="info-texto">\n          - Lave as mãos frequentemente com água e sabão, ou higienize com álcool gel 70%,\n          <br><br>\n          - Cubra a boca e nariz com um lenço de papel ao tossir e espirrar e jogue no lixo após o uso, ou proteja com o\n          antebraço (nunca com as mãos),\n          <br><br>\n          - Evite locais com aglomeração de pessoas,\n          <br><br>\n          - Não compartilhe objetos de uso pessoal.\n          <br><br>\n          - Em caso de dúvidas, ligue para o Disque Saúde 136 do Ministério da Saúde.\n        </p>\n        <button ion-button\n                block\n                class="btn-fechar"\n                (tap)="dismiss(\'sintomas\')">\n          Fechar\n        </button>\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/modal/modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_diagnostico_provider__["a" /* DiagnosticoProvider */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.validaCNS = function (vlrCNS) {
        var soma;
        var resto;
        var dv;
        var pis;
        var resultado;
        var tamCNS = vlrCNS.length;
        if ((tamCNS) != 15) {
            return false;
        }
        pis = vlrCNS.substring(0, 11);
        soma = (((Number(pis.substring(0, 1))) * 15) +
            ((Number(pis.substring(1, 2))) * 14) +
            ((Number(pis.substring(2, 3))) * 13) +
            ((Number(pis.substring(3, 4))) * 12) +
            ((Number(pis.substring(4, 5))) * 11) +
            ((Number(pis.substring(5, 6))) * 10) +
            ((Number(pis.substring(6, 7))) * 9) +
            ((Number(pis.substring(7, 8))) * 8) +
            ((Number(pis.substring(8, 9))) * 7) +
            ((Number(pis.substring(9, 10))) * 6) +
            ((Number(pis.substring(10, 11))) * 5));
        resto = soma % 11;
        dv = 11 - resto;
        if (dv == 11) {
            dv = 0;
        }
        if (dv == 10) {
            soma = (((Number(pis.substring(0, 1))) * 15) +
                ((Number(pis.substring(1, 2))) * 14) +
                ((Number(pis.substring(2, 3))) * 13) +
                ((Number(pis.substring(3, 4))) * 12) +
                ((Number(pis.substring(4, 5))) * 11) +
                ((Number(pis.substring(5, 6))) * 10) +
                ((Number(pis.substring(6, 7))) * 9) +
                ((Number(pis.substring(7, 8))) * 8) +
                ((Number(pis.substring(8, 9))) * 7) +
                ((Number(pis.substring(9, 10))) * 6) +
                ((Number(pis.substring(10, 11))) * 5) + 2);
            resto = soma % 11;
            dv = 11 - resto;
            resultado = pis + '001' + String(dv);
        }
        else {
            resultado = pis + '000' + String(dv);
        }
        if (vlrCNS != resultado) {
            return false;
        }
        else {
            return true;
        }
    };
    Util.validaCNS_PROV = function (vlrCNS) {
        var pis;
        var resto;
        var soma;
        pis = vlrCNS.substring(0, 15);
        if (pis == '') {
            return false;
        }
        if ((vlrCNS.substring(0, 1) != '7') && (vlrCNS.substring(0, 1) != '8') && (vlrCNS.substring(0, 1) != '9')) {
            return false;
        }
        soma = ((parseInt(pis.substring(0, 1), 10)) * 15)
            + ((parseInt(pis.substring(1, 2), 10)) * 14)
            + ((parseInt(pis.substring(2, 3), 10)) * 13)
            + ((parseInt(pis.substring(3, 4), 10)) * 12)
            + ((parseInt(pis.substring(4, 5), 10)) * 11)
            + ((parseInt(pis.substring(5, 6), 10)) * 10)
            + ((parseInt(pis.substring(6, 7), 10)) * 9)
            + ((parseInt(pis.substring(7, 8), 10)) * 8)
            + ((parseInt(pis.substring(8, 9), 10)) * 7)
            + ((parseInt(pis.substring(9, 10), 10)) * 6)
            + ((parseInt(pis.substring(10, 11), 10)) * 5)
            + ((parseInt(pis.substring(11, 12), 10)) * 4)
            + ((parseInt(pis.substring(12, 13), 10)) * 3)
            + ((parseInt(pis.substring(13, 14), 10)) * 2)
            + ((parseInt(pis.substring(14, 15), 10)) * 1);
        resto = soma % 11;
        if (resto == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Util.validarCPF = function (strCPF) {
        var soma = 0;
        var resto;
        if (strCPF == "00000000000")
            return false;
        for (var i = 1; i <= 9; i++)
            soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        resto = (soma * 10) % 11;
        if ((resto == 10) || (resto == 11))
            resto = 0;
        if (resto != parseInt(strCPF.substring(9, 10)))
            return false;
        soma = 0;
        for (var i_1 = 1; i_1 <= 10; i_1++)
            soma = soma + parseInt(strCPF.substring(i_1 - 1, i_1)) * (12 - i_1);
        resto = (soma * 10) % 11;
        if ((resto == 10) || (resto == 11))
            resto = 0;
        if (resto != parseInt(strCPF.substring(10, 11)))
            return false;
        return true;
    };
    Util.validarSenha = function (senha) {
        return senha.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/g) !== null;
    };
    Util.getDistancia = function (latitudeOrigem, longitudeOrigem, latitude, longitude) {
        if (latitudeOrigem != null && longitudeOrigem != null && latitude != null && longitude) {
            return this.getDistanceFromLatLonInKm(latitudeOrigem, longitudeOrigem, latitude, longitude).toFixed(0) + ' km';
        }
        return '';
    };
    Util.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    Util.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrimeiroAcessoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Iniciacao__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrimeiroAcessoPage = /** @class */ (function () {
    function PrimeiroAcessoPage(viewCtrl, util, toastCtrl, alertCtrl) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.eventsSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.step = 1;
        this.showInfoBasicasBC = false;
    }
    PrimeiroAcessoPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
    };
    PrimeiroAcessoPage.prototype.close = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Você tem certeza que deseja sair?',
            subTitle: 'Se sair você vai perder todas as informações aqui inseridas!',
            buttons: [{
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.viewCtrl.dismiss();
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel'
                }]
        });
        alert.present();
        alert.onDidDismiss(function (retorno) {
            if (retorno)
                _this.viewCtrl.dismiss();
        });
    };
    PrimeiroAcessoPage.prototype.getRespostaCaptcha = function (obj) {
        if (obj) {
            this.iniciacao = new __WEBPACK_IMPORTED_MODULE_3__models_Iniciacao__["a" /* Iniciacao */](obj.iniciacao);
            this.cpf = obj.cpf;
            if (this.iniciacao.existeCNS) {
                this.step++;
                this.nextSlider();
                return;
            }
            else if (!this.iniciacao.existeCNS && !this.iniciacao.existeDNI) {
                this.step++;
                this.showInfoBasicasBC = true;
                this.nextSlider();
                return;
            }
            else if (!this.iniciacao.existeCNS && this.iniciacao.existeDNI) {
                this.toastCtrl.create({
                    message: 'Você deve prosseguir com o cadastro no portal do Brasil Cidadão.',
                    position: 'top',
                    duration: 2500
                }).present();
            }
            this.util.endLoading();
        }
    };
    PrimeiroAcessoPage.prototype.getRespostaInformacoesBC = function (perguntas) {
        if (perguntas) {
            this.perguntas = perguntas;
            this.showInfoBasicasBC = true;
            this.step++;
            this.nextSlider();
            return;
        }
    };
    PrimeiroAcessoPage.prototype.getRespostaPerguntasBC = function (emailOfuscado) {
        this.emailOfuscado = emailOfuscado;
        this.step++;
        this.nextSlider();
        return;
    };
    PrimeiroAcessoPage.prototype.getRespostaPin = function (successPin) {
        if (successPin) {
            this.step++;
            this.nextSlider();
            return;
        }
    };
    PrimeiroAcessoPage.prototype.getRespostaSenha = function (successSenha) {
        if (successSenha) {
            this.step++;
            this.nextSlider();
            return;
        }
    };
    PrimeiroAcessoPage.prototype.concluir = function () {
        this.viewCtrl.dismiss();
    };
    PrimeiroAcessoPage.prototype.nextSlider = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    PrimeiroAcessoPage.prototype.continuar = function () {
        var sourceEvent = this.step === 1 ? 'captcha' : this.step === 2 && this.showInfoBasicasBC ? 'informacoes' :
            this.step === 2 && !this.showInfoBasicasBC ? 'perguntas' : this.step === 3 && this.showInfoBasicasBC ? 'perguntas' :
                this.step === 3 && !this.showInfoBasicasBC ? 'pin' : this.step === 4 && this.showInfoBasicasBC ? 'pin' :
                    this.step === 4 && !this.showInfoBasicasBC ? 'senha' : this.step === 5 && this.showInfoBasicasBC ? 'senha' : null;
        this.eventsSubject.next(sourceEvent);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], PrimeiroAcessoPage.prototype, "slides", void 0);
    PrimeiroAcessoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-primeiro-acesso',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/primeiro-acesso/primeiro-acesso.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only color="light" (tap)="close()" clear *ngIf="slides?.realIndex !== (steps?.length - 1)"><ion-icon name="md-close"></ion-icon></button>\n    <ion-title>Primeiro acesso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides>\n    <ion-slide>\n      <captcha-component\n        [step]="step"\n        (respostaCaptcha)="getRespostaCaptcha($event)"\n        [events]="eventsSubject.asObservable()">\n      </captcha-component>\n    </ion-slide>\n\n    <ion-slide *ngIf="showInfoBasicasBC">\n      <informacoes-basicas-bc-component\n        [cpf]="cpf"\n        [token]="iniciacao?.token"\n        [step]="step"\n        (respostaInformacoes)="getRespostaInformacoesBC($event)"\n        [events]="eventsSubject.asObservable()">\n      </informacoes-basicas-bc-component>\n    </ion-slide>\n\n    <ion-slide *ngIf="(!showInfoBasicasBC && !perguntas && cpf && iniciacao?.token) || (showInfoBasicasBC && perguntas && cpf && iniciacao?.token)">\n      <perguntas-component\n        [cpf]="cpf"\n        [token]="iniciacao?.token"\n        [step]="step"\n        [perguntas]="perguntas"\n        (respostaPerguntas)="getRespostaPerguntasBC($event)"\n        [events]="eventsSubject.asObservable()">\n      </perguntas-component>\n    </ion-slide>\n\n    <ion-slide>\n      <confirma-pin-component\n        [step]="step"\n        [cpf]="cpf"\n        [token]="iniciacao?.token"\n        [emailOfuscado]="emailOfuscado"\n        (respostaPin)="getRespostaPin($event)"\n        [events]="eventsSubject.asObservable()">\n      </confirma-pin-component>\n    </ion-slide>\n\n    <ion-slide>\n      <cria-senha-component\n        [step]="step"\n        [cpf]="cpf"\n        [token]="iniciacao?.token"\n        (respostaSenha)="getRespostaSenha($event)"\n        [events]="eventsSubject.asObservable()">\n      </cria-senha-component>\n    </ion-slide>\n\n    <ion-slide>\n      <div class="slide-confirmar">\n        <div class="step">\n          <div><hr width="100%" align="left" class="hr-left"></div>\n          <button ion-button outline round color="secondary"><ion-icon name="md-checkmark" color="secondary"></ion-icon></button>\n          <div><hr width="100%" align="right" class="hr-right" *ngIf="!slides?.isEnd()"></div>\n        </div>\n\n        <div class="titulo">\n          <p>Cadastro da conta de acesso finalizado com sucesso!</p>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <div class="btn-continuar">\n    <button ion-button block (tap)="continuar()" color="secondary" *ngIf="!slides.isEnd()">Continuar</button>\n    <button ion-button block (tap)="concluir()" color="pink" *ngIf="slides?.isEnd()">Concluir</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/primeiro-acesso/primeiro-acesso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PrimeiroAcessoPage);
    return PrimeiroAcessoPage;
}());

//# sourceMappingURL=primeiro-acesso.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionaMedicamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_medicamento_registro_medicamento__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_saude_provider__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdicionaMedicamentoPage = /** @class */ (function () {
    function AdicionaMedicamentoPage(navCtrl, navParams, viewCtrl, modalCtrl, saudeProvider, toastCtrl, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.saudeProvider = saudeProvider;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.unidade = [
            'cc',
            'ml',
            'gr',
            'mg',
            'gotas',
            'frações',
            'pílulas',
            'aspirar',
            'unidades',
            'colher de chá',
            'colher de sopa',
            'ug',
            'ui',
            'mEq',
            'cartela',
            'spray'
        ];
        this.membro = this.navParams.get('membro');
    }
    AdicionaMedicamentoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AdicionaMedicamentoPage.prototype.openMed = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__registro_medicamento_registro_medicamento__["a" /* RegistroMedicamentoPage */]);
        profileModal.onDidDismiss(function (medicamento) {
            console.log('Medicamento:', medicamento);
            _this.nomeMedicacao = medicamento;
        });
        profileModal.present();
    };
    AdicionaMedicamentoPage.prototype.confirmar = function () {
        var _this = this;
        if (typeof this.unidadeSelecionada == 'undefined' || typeof this.nomeMedicacao == 'undefined' || typeof this.dosagem == 'undefined'
            || typeof this.dataFim == 'undefined' || typeof this.dataFim == 'undefined' || this.dosagem == "") {
            this.toastCtrl.create({
                message: "Nome da medica\u00E7\u00E3o, dosagem, unidade, data in\u00EDcio e data fim s\u00E3o obrigat\u00F3rios.",
                position: 'top',
                duration: 3000
            }).present();
        }
        else {
            if (this.dataInicio > this.dataFim) {
                this.toastCtrl.create({
                    message: "A data de in\u00EDcio deve ser menor que a data fim do medicamento.",
                    position: 'top',
                    duration: 3000
                }).present();
            }
            else {
                this.util.onLoading('Enviando registro...');
                var medicacao = {
                    dosagem: this.dosagem,
                    unidade: this.unidadeSelecionada,
                    nome: this.nomeMedicacao,
                    dataInicio: this.dataInicio,
                    dataFim: this.dataFim
                };
                this.saudeProvider.createRegistro({ membros: this.membro, medicacao: medicacao }).then(function (r) {
                    _this.util.endLoading();
                    _this.toastCtrl.create({
                        message: "Registro salvo com sucesso!",
                        position: 'top',
                        duration: 2000
                    }).present();
                    _this.viewCtrl.dismiss();
                });
            }
        }
    };
    AdicionaMedicamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adiciona-medicamento',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/adiciona-medicamento/adiciona-medicamento.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Adicionar medicamento</span>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="content">\n    <ion-card>\n      <ion-card-content>\n        <ion-list>\n\n          <ion-row  (tap)="openMed()">\n\n            <ion-col col-11>\n              <ion-item no-lines class="item-nome">\n\n                <ion-label *ngIf="nomeMedicacao" text-wrap color="dark">{{nomeMedicacao}}</ion-label>\n                <ion-label *ngIf="!nomeMedicacao" text-wrap>Nome da medicação</ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-1 class="navigation-indicator">\n              <ion-icon name="arrow-forward"></ion-icon>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines class="item-dosagem">\n                <ion-input type="number" [(ngModel)]="dosagem" placeholder="Dosagem" [brmasker]="{len:4}"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item no-lines class="item-parentesco">\n                <ion-label *ngIf="!unidadeSelecionada" style="position: absolute; top: 16px;">Unidade</ion-label>\n                <ion-select [(ngModel)]="unidadeSelecionada" [cancelText]="\'Cancelar\'" [okText]="\'Confirmar\'">\n                  <ion-option value="{{item}}" *ngFor="let item of unidade" >{{item}}</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item no-lines class="item-parentesco">\n                <ion-label *ngIf="!dataInicio">Data início</ion-label>\n                <ion-datetime displayFormat="DD/MM/YYYY" min="2009" max="2030" [cancelText]="\'Cancelar\'" [doneText]="\'Confirmar\'" [(ngModel)]="dataInicio" style="padding-left: 0;"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item no-lines class="item-parentesco">\n                <ion-label *ngIf="!dataFim">Data fim</ion-label>\n                <ion-datetime class="data-fim" displayFormat="DD/MM/YYYY" min="2009" max="2030" [cancelText]="\'Cancelar\'" [doneText]="\'Confirmar\'" [(ngModel)]="dataFim"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer style="height: 70px;">\n  <button ion-button class="confirmar" (tap)="confirmar()">CONFIRMAR</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/adiciona-medicamento/adiciona-medicamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_saude_provider__["a" /* SaudeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], AdicionaMedicamentoPage);
    return AdicionaMedicamentoPage;
}());

//# sourceMappingURL=adiciona-medicamento.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroMedicamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_saude_provider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroMedicamentoPage = /** @class */ (function () {
    function RegistroMedicamentoPage(navCtrl, navParams, viewCtrl, util, saudeProvider, toastCtrl, alertCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.saudeProvider = saudeProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.searchQuery = '';
        this.medicamentos = [];
        this.membro = this.navParams.get('membro');
        this.util.onLoading('Carregando informações...');
        this.http.get('http://gerenciadorapi.saude.gov.br/mba-mmcore/medsus/medicamentos').subscribe(function (data) {
            _this.medicamentosServe = data;
            _this.initializeItems();
        }, function (err) {
            __WEBPACK_IMPORTED_MODULE_4_parse__["Cloud"].run('getMedicamentos').then(function (medicamentos) {
                var tempArray = [];
                medicamentos.forEach(function (med) { return tempArray.push({ nome: med }); });
                _this.medicamentosServe = tempArray;
                _this.initializeItems();
            });
            _this.util.endLoading();
        });
    }
    RegistroMedicamentoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegistroMedicamentoPage.prototype.selectItem = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar',
            message: "Deseja salvar " + item.descricao + " nos registros?",
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel'
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.viewCtrl.dismiss(item.descricao);
                    }
                }
            ]
        });
        alert.present();
    };
    RegistroMedicamentoPage.prototype.initializeItems = function () {
        var _this = this;
        this.medicamentos = [];
        this.medicamentosServe.forEach(function (med) {
            _this.medicamentos.push({
                descricao: med.nome,
                checked: false
            });
        });
        this.util.endLoading();
    };
    RegistroMedicamentoPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.medicamentos = this.medicamentos.filter(function (item) {
                return (item.descricao.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RegistroMedicamentoPage.prototype.confirmar = function () {
        var _this = this;
        var selected = this.medicamentos.filter(function (med) {
            return med.checked;
        });
        if (selected.length != 0) {
            this.util.onLoading('Enviando registro...');
            this.saudeProvider.createRegistro({ membros: this.membro, medicamento: selected[0].descricao }).then(function (r) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: "Registro salvo com sucesso!",
                    position: 'top',
                    duration: 1500
                }).present();
                _this.viewCtrl.dismiss();
            });
        }
        else {
            this.toastCtrl.create({
                message: "Selecione um medicamento!",
                position: 'top',
                duration: 1500
            }).present();
        }
    };
    RegistroMedicamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-registro-medicamento',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/registro-medicamento/registro-medicamento.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n\n      <ion-title style="padding-top: 0px;">\n        <span>Medicamentos</span>\n      </ion-title>\n\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding #content>\n  <div class="content">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Pesquisar"></ion-searchbar>\n    <ion-row *ngIf="medicamentos.length > 0" >\n      <ion-col col-12><p class="title">Selecione um medicamento</p></ion-col>\n    </ion-row>\n\n\n    <div *ngIf="medicamentos.length > 0">\n      <virtual-scroller #scroll\n                        [items]="medicamentos"\n                        [parentScroll]="content.getScrollElement()"\n                        [childHeight]="59"\n                        [bufferAmount]="8">\n\n        <ion-item no-lines *ngFor="let item of scroll.viewPortItems" (click)="selectItem(item)">\n          <ion-label text-wrap class="descricao-medicamento">{{item.descricao}}</ion-label>\n          <!-- <ion-checkbox color="orange" [(ngModel)]="item.checked" (tap)="updateCheckbox(item)"></ion-checkbox> -->\n        </ion-item>\n      </virtual-scroller>\n    </div>\n\n    <ion-item no-lines *ngIf="medicamentos.length == 0">\n      <ion-label text-wrap>Nenhum item encontrado</ion-label>\n    </ion-item>\n  </div>\n\n</ion-content>\n<!-- <div class="conten-button-confirmar"> -->\n  <!-- <button ion-button class="confirmar" (tap)="confirmar()" block >CONFIRMAR</button> -->\n<!-- </div> -->\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/registro-medicamento/registro-medicamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_saude_provider__["a" /* SaudeProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], RegistroMedicamentoPage);
    return RegistroMedicamentoPage;
}());

//# sourceMappingURL=registro-medicamento.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarMembroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globals__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var AdicionarMembroPage = /** @class */ (function () {
    function AdicionarMembroPage(navCtrl, navParams, viewCtrl, camera, platform, globals, util, toastCtrl, actionSheetCtrl, file, registros) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.platform = platform;
        this.globals = globals;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.file = file;
        this.registros = registros;
        this.photo = '';
        __WEBPACK_IMPORTED_MODULE_4_parse__["initialize"](this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
        __WEBPACK_IMPORTED_MODULE_4_parse__["serverURL"] = this.globals.serverURL;
    }
    AdicionarMembroPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AdicionarMembroPage.prototype.takePicture = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            var actionSheet = this.actionSheetCtrl.create({
                title: 'Escolha a opção ',
                buttons: [
                    {
                        text: 'Tirar uma foto',
                        icon: 'camera',
                        handler: function () {
                            _this._takePicture('camera');
                        }
                    },
                    {
                        text: 'Galeria',
                        icon: 'images',
                        handler: function () {
                            _this._takePicture('galeria');
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        }
        else {
            this.photo = 'https://octodex.github.com/images/baracktocat.jpg';
        }
    };
    /**
     * Recupera a foto da camera ou galeria
     * @param tipo - camera ou galeria
     */
    AdicionarMembroPage.prototype._takePicture = function (tipo) {
        var _this = this;
        this.util.onLoading('Carregando...');
        var imageSizeWidth = 795;
        var imageSizeHeight = 1141;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: imageSizeWidth,
            targetHeight: imageSizeHeight,
            allowEdit: this.platform.is('android'),
            correctOrientation: false,
            saveToPhotoAlbum: false
        };
        if (tipo === 'galeria') {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        this.camera.getPicture(options).then(function (imageUri) {
            _this.file.resolveLocalFilesystemUrl(imageUri).then(function (response) {
                var nativeUrl = _this.platform.is('ios') ? response.toInternalURL() : response.nativeURL;
                var start = nativeUrl.lastIndexOf('/') + 1;
                var end = nativeUrl.length;
                var nome = nativeUrl.substring(start, end);
                var path = nativeUrl.substring(0, nativeUrl.lastIndexOf('/'));
                _this.file.readAsDataURL(path, nome).then(function (data) {
                    if (_this.getSize(data) <= 5000000) {
                        _this.extensaoFoto = nome.substr(nome.lastIndexOf('.') + 1);
                        _this.photo = data;
                        _this.util.endLoading();
                    }
                    else {
                        _this.util.endLoading();
                        _this.util.toast('O tamanho máximo de arquivo é 5 MB!');
                    }
                }).catch(function (error) {
                    _this.util.endLoading();
                    _this.util.toast('Erro ao recuperar a foto!');
                    console.error('Erro ao recuperar arquivo', error);
                });
            });
        }).catch(function (error) {
            _this.util.endLoading();
            // this.util.toast('Erro ao recuperar a foto!');
            console.error('Erro ao recuperar foto', error);
        });
    };
    AdicionarMembroPage.prototype.deletePicture = function () {
        this.photo = '';
    };
    AdicionarMembroPage.prototype.confirmar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var NotificacaoAgente, notificacao;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.registros.getCPF().then(function (r) {
                            if (r != 'err')
                                _this.cpf = r.replace(/[^\d]+/g, '');
                        })];
                    case 1:
                        _a.sent();
                        if ((typeof this.nome != 'undefined' && this.nome != '') && (typeof this.parentesco != 'undefined' && this.parentesco != '')) {
                            this.util.onLoading('Adicionando membro...');
                            NotificacaoAgente = __WEBPACK_IMPORTED_MODULE_4_parse__["Object"].extend("membros");
                            notificacao = new NotificacaoAgente();
                            notificacao.set("cpfUsuarioLogado", this.cpf);
                            notificacao.set("nome", this.nome);
                            notificacao.set("parentesco", this.parentesco);
                            notificacao.set("foto", this.photo && this.photo !== '' ? new __WEBPACK_IMPORTED_MODULE_4_parse__["File"](this.nome + '.' + this.extensaoFoto, { base64: this.photo }) : null);
                            notificacao.save().then(function (object) {
                                _this.util.endLoading();
                                _this.viewCtrl.dismiss();
                            }, function (error) {
                                console.log('error', error);
                            });
                        }
                        else {
                            this.toastCtrl.create({
                                message: "Os campos Nome e Parentesco s\u00E3o obrigat\u00F3rios",
                                position: 'top',
                                duration: 2500
                            }).present();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdicionarMembroPage.prototype.getSize = function (base64) {
        return ((4 * base64.length / 3) + 3) & ~3;
    };
    AdicionarMembroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-adicionar-membro',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/adicionar-membro/adicionar-membro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Adicionar membro</span>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="content">\n    <ion-card>\n      <ion-card-content>\n        <ion-list>\n\n          <ion-item no-lines class="item-nome">\n            <ion-input type="text" [(ngModel)]="nome" placeholder="Nome"></ion-input>\n          </ion-item>\n\n          <ion-item no-lines class="item-parentesco">\n            <ion-label *ngIf="!parentesco" style="position: absolute; top: 16px;">Parentesco</ion-label>\n            <ion-select [(ngModel)]="parentesco" [cancelText]="\'Cancelar\'" [okText]="\'Confirmar\'">\n              <ion-option value="Pai">Pai</ion-option>\n              <ion-option value="Mãe">Mãe</ion-option>\n              <ion-option value="Filho(a)">Filho(a)</ion-option>\n              <ion-option value="Avô(ó)">Avô(ó)</ion-option>\n              <ion-option value="Outros">Outros</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item no-lines class="item-foto">\n            <button ion-button round class="excluir" *ngIf="photo && photo != \'\'" (click)="deletePicture()"><ion-icon name="trash"></ion-icon></button>\n            <ion-row *ngIf="!photo || photo == \'\'" >\n              <button (click)="takePicture()" ion-button clear style="padding-left: 0; color: gray;">\n                <ion-col col-10 style="padding-left: 0;" *ngIf="!photo" >Escolher foto</ion-col>\n                <ion-col col-2 style="display: flex; justify-content: flex-end;"><ion-icon ios="ios-camera" md="md-camera"></ion-icon></ion-col>\n              </button>\n            </ion-row>\n            <img *ngIf="photo && photo != \'\'"  src="{{ photo }}" (click)="takePicture()"/>\n\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-footer style="height: 70px">\n  <button ion-button class="confirmar" (tap)="confirmar()">CONFIRMAR</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/adicionar-membro/adicionar-membro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_0__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__providers_registros__["a" /* RegistrosProvider */]])
    ], AdicionarMembroPage);
    return AdicionarMembroPage;
}());

//# sourceMappingURL=adicionar-membro.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheNotificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalheNotificacaoPage = /** @class */ (function () {
    function DetalheNotificacaoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.notificacao = this.navParams.get('notificacao');
        console.log('this.notificacao', this.notificacao);
    }
    DetalheNotificacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalheNotificacaoPage');
    };
    DetalheNotificacaoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DetalheNotificacaoPage.prototype.getDataUltimoRegistro = function (registro) {
        if (registro.createdAt) {
            var mo = __WEBPACK_IMPORTED_MODULE_2_moment__(registro.createdAt).locale('pt-br');
            return mo.format('LLL');
        }
    };
    DetalheNotificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-notificacao',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/detalhe-notificacao/detalhe-notificacao.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Notificações</span>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n  <div class="content">\n    <ion-card>\n\n      <ion-card-content>\n\n        <ion-label style="opacity: 0.4;">{{getDataUltimoRegistro(notificacao)}}</ion-label>\n\n        <ion-label class="title-section">Dados do notificador</ion-label>\n\n        <ion-row>\n          <ion-col>\n            <span>Origem da notificação</span>\n            <p>{{notificacao.origemNotificacao}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="notificacao.outraOrigem != \'\'" >\n          <ion-col>\n            <span>Outras</span>\n            <p>{{notificacao.outraOrigem}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Nome</span>\n            <p>{{notificacao.nomeNotificador}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Profissão ou ocupação</span>\n            <p>{{notificacao.profissaoOcupacaoNotificador}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Município</span>\n            <p>{{notificacao.municipioNotificador}}</p>\n          </ion-col>\n          <ion-col>\n            <span>Estado</span>\n            <p>{{notificacao.estadoNotificador}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Telefone</span>\n            <p>{{notificacao.telefoneNotificador}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>E-mail</span>\n            <p>{{notificacao.emailNotificador}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-label class="title-section">Comunicado de risco</ion-label>\n\n        <ion-row>\n          <ion-col>\n            <span>Situação notificada</span>\n            <p>{{notificacao.situacaoNotificada}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Doença de notificação compulsória imediata nacional</span>\n            <p>{{notificacao.principalSuspeita}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngFor="let casos of notificacao.casosSuspeitosEConfirmados" >\n          <ion-col>\n            <span>{{casos.descricao}} <span style="color: #0077e0;">{{casos.valor}}</span></span>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Descricao da situação</span>\n            <p>{{notificacao.descricaoSituacao}}</p>\n          </ion-col>\n        </ion-row>\n        <hr/>\n\n        <ion-label class="title-section">Localização</ion-label>\n\n        <ion-row>\n          <ion-col>\n            <span>Local da ocorrência ou identificação do evento</span>\n            <p>{{notificacao.localOcorrencia}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <span>Município da ocorrência</span>\n            <p>{{notificacao.municipioDaOcorrencia}}</p>\n          </ion-col>\n          <ion-col>\n            <span>Estado da ocorrência</span>\n            <p>{{notificacao.estadoDaOcorrencia}}</p>\n          </ion-col>\n        </ion-row>\n        <hr/>\n\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/detalhe-notificacao/detalhe-notificacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], DetalheNotificacaoPage);
    return DetalheNotificacaoPage;
}());

//# sourceMappingURL=detalhe-notificacao.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmarEmailPage = /** @class */ (function () {
    function ConfirmarEmailPage(navCtrl, navParams, alertCtrl, loadingCtrl, toastCtrl, loginProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loginProvider = loginProvider;
    }
    ConfirmarEmailPage.prototype.ionViewDidLoad = function () {
        this.usuario = this.navParams.get('usuario');
        this.email = (this.usuario.emailPrincipal ? this.usuario.emailPrincipal : '');
    };
    ConfirmarEmailPage.prototype.voltar = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '',
            message: 'Todo processo será perdido, Deseja mesmo cancelar?',
            buttons: [{
                    text: 'Não'
                }, {
                    text: 'Sim',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Saindo...'
                        });
                        loading.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]).then(function () {
                            loading.dismiss();
                        });
                    }
                }]
        }).present();
    };
    ConfirmarEmailPage.prototype.confirmar = function () {
        var _this = this;
        this.email = (this.usuario.emailPrincipal ? this.usuario.emailPrincipal : this.email);
        this.confirmeemail = (this.usuario.emailPrincipal ? this.usuario.emailPrincipal : this.confirmeemail);
        if (!this.email) {
            this.toastCtrl.create({
                message: 'E-mail é obrigatório.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (!this.confirmeemail) {
            this.toastCtrl.create({
                message: 'Confirmar E-mail é obrigatório.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (this.confirmeemail != this.email) {
            this.toastCtrl.create({
                message: 'E-mail diferente do informado.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        var loading = this.loadingCtrl.create({
            content: 'Confirmar email'
        });
        loading.present();
        var emailparaenviar = (this.usuario.emailPrincipal ? this.usuario.emailPrincipal : this.email);
        this.loginProvider.confirmarEmail(emailparaenviar, this.usuario).then(function () {
            // this.navCtrl.push(ConfirmarPinPage, {
            //   usuario: this.usuario,
            //   email: this.email
            // }).then(
            //   () => loading.dismiss()
            // );
        }).catch(function (e) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: e,
                position: 'top',
                duration: 4000
            }).present();
        });
    };
    ConfirmarEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmar-email',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/confirmar-email/confirmar-email.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="primary">\n    <ion-title>Primeiro acesso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="titulo">\n    <span>Confirme seu email</span>\n  </div>\n\n  <div *ngIf="!usuario?.emailPrincipal || usuario?.emailPrincipal.length === 0">\n    <div class="email">\n      <ion-item>\n        <div class="label-input">\n          Informe seu e-mail\n        </div>\n\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <div class="label-input">\n          Confirme seu e-mail\n        </div>\n\n        <ion-input type="email" [(ngModel)]="confirmeemail"></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <div *ngIf="usuario?.emailPrincipal">\n    <div class="email">\n      <ion-item>\n        <p class="texto-email">\n          {{usuario.emailPrincipal}}\n        </p>\n      </ion-item>\n    </div>\n  </div>\n\n\n  <div bottom center class="botoes">\n    <button ion-button block\n            (tap)="voltar()"\n            color="secondary">Cancelar\n    </button>\n\n    <button ion-button block\n            color="pink"\n            (tap)="confirmar(pergunta, index)">Confirmar\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/confirmar-email/confirmar-email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__["a" /* LoginProvider */]])
    ], ConfirmarEmailPage);
    return ConfirmarEmailPage;
}());

//# sourceMappingURL=confirmar-email.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__primeiro_acesso_primeiro_acesso__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recuperar_senha_recuperar_senha__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_usuario__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__termo_termo__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_cns_login_cns__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__detalhe_perfil_detalhe_perfil__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__historico_notificacoes_historico_notificacoes__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__ = __webpack_require__(477);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













var URL_BC_TOKEN = process.env['URL_BC_TOKEN'];
var CLIENT_ID_BC = process.env['CLIENT_ID_BC'];
var PerfilPage = /** @class */ (function () {
    function PerfilPage(modalCtrl, storage, loginProvider, toastCtrl, util, alertCtrl, platform, app, appVersion) {
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.loginProvider = loginProvider;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.app = app;
        this.appVersion = appVersion;
        this.profissional = false;
        this.checkProfissional = false;
    }
    PerfilPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.util.onLoading('Carregando...');
        this.loading = true;
        if (!this.platform.is('cordova')) {
            this.version = '0.0.2';
        }
        else {
            this.appVersion.getVersionNumber().then(function (version) {
                _this.version = version;
            });
        }
        // this.storage.get('show-alert-bc').then((data) => {
        //   if(data) {
        //     let modal = this.modalCtrl.create('AlertDiarioSaudePage', null, {cssClass: 'alert-diario'});
        //     modal.present();
        //     modal.onDidDismiss(() => {
        //       this.storage.set('show-alert-bc', false);
        //     });
        //   }
        // });
        this.usuario = new __WEBPACK_IMPORTED_MODULE_7__providers_usuario__["a" /* Usuario */]();
        this.storage.get('usuario').then(function (usuario) {
            if (usuario) {
                console.log('usuario no view did enter', usuario);
                _this.usuario = usuario;
                _this.storage.get('profissional-saude').then(function (p) {
                    if (p === true) {
                        _this.checkProfissional = p;
                    }
                    else {
                        _this.storage.get('usuario-profissional-saude').then(function (check) {
                            _this.checkProfissional = check;
                        });
                    }
                });
            }
            setTimeout(function () {
                _this.util.endLoading();
                _this.loading = false;
            }, 500);
        });
    };
    PerfilPage.prototype.openPage = function (page) {
        var _this = this;
        var pagina = page === 'PrimeiroAcessoPage' ? __WEBPACK_IMPORTED_MODULE_2__primeiro_acesso_primeiro_acesso__["a" /* PrimeiroAcessoPage */] :
            page === 'RecuperarSenhaPage' ? __WEBPACK_IMPORTED_MODULE_3__recuperar_senha_recuperar_senha__["a" /* RecuperarSenhaPage */] :
                page === 'TermoPage' ? __WEBPACK_IMPORTED_MODULE_8__termo_termo__["a" /* TermoPage */] : page === 'LoginCnsPage' ? __WEBPACK_IMPORTED_MODULE_9__login_cns_login_cns__["a" /* LoginCnsPage */] :
                    page === 'DetalhePerfilPage' ? __WEBPACK_IMPORTED_MODULE_10__detalhe_perfil_detalhe_perfil__["a" /* DetalhePerfilPage */] :
                        page === 'HistoricoNotificacoesPage' ? __WEBPACK_IMPORTED_MODULE_11__historico_notificacoes_historico_notificacoes__["a" /* HistoricoNotificacoesPage */] : null;
        if (pagina) {
            var modal = null;
            if (page == 'DetalhePerfilPage') {
                modal = this.modalCtrl.create(pagina, { usuario: this.usuario });
                modal.present();
            }
            else {
                modal = this.modalCtrl.create(pagina);
                modal.present();
            }
            modal.onDidDismiss(function () {
                _this.util.onLoading('Carregando...');
                _this.loading = true;
                _this.usuario = new __WEBPACK_IMPORTED_MODULE_7__providers_usuario__["a" /* Usuario */]();
                _this.storage.get('usuario').then(function (usuario) {
                    _this.usuario = usuario;
                    setTimeout(function () {
                        _this.util.endLoading();
                        _this.loading = false;
                    }, 500);
                });
            });
        }
    };
    PerfilPage.prototype.changeTab = function () {
        this.app.getRootNav().getActiveChildNav().select(2);
    };
    PerfilPage.prototype.login = function () {
        this.util.onLoading('Autenticando...');
        this.brasilCidadaoLogin();
    };
    PerfilPage.prototype.brasilCidadaoLogin = function () {
        var _this = this;
        var url = encodeURI(URL_BC_TOKEN + 'scp/authorize?response_type=code&client_id=' + CLIENT_ID_BC +
            '&scope=openid+brasil_cidadao&redirect_uri=https://diariosaude.saude/login&nonce=db46563158a&state=db46563158a');
        console.log('url inAppBrowser', url);
        var browserRef = cordova.InAppBrowser.open(url, '_blank', 'location=no,clearsessioncache=yes,clearcache=yes');
        browserRef.addEventListener('loadstart', function (event) {
            _this.codeBC = null;
            if ((event.url).indexOf("https://diariosaude.saude/login") === 0 || (event.url).indexOf("http://diariosaude.saude/login") === 0) {
                browserRef.close();
                var responseParameters = ((event.url).split("?")[1]).split("&");
                var parsedResponse = {};
                for (var i = 0; i < responseParameters.length; i++) {
                    parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
                }
                _this.codeBC = parsedResponse["code"];
                if (_this.codeBC !== undefined && _this.codeBC !== null) {
                    _this.loginProvider.recuperarTokenBC(parsedResponse['code']).then(function (t) {
                        _this.loginProvider.getUserInfo(t.access_token).then(function (user) {
                            _this.storage.set('token_bc', t.access_token);
                            _this.verificaProfissionalSaude(user);
                        }).catch(function (error) {
                            _this.handleError(error);
                        });
                    }).catch(function (error) {
                        _this.handleError(error);
                    });
                }
            }
        });
        browserRef.addEventListener('exit', function () {
            if (!_this.codeBC) {
                _this.util.endLoading();
            }
        });
    };
    PerfilPage.prototype.openAlertDiarioSaude = function () {
        var _this = this;
        var modal = this.modalCtrl.create('AlertDiarioSaudePage', null, { cssClass: 'alert-diario' });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.login();
            }
        });
    };
    PerfilPage.prototype.logout = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '',
            message: 'Tem certeza que deseja sair?',
            buttons: [{
                    text: 'Não'
                }, {
                    text: 'Sim',
                    handler: function () {
                        _this.util.onLoading('Saindo...');
                        _this.loading = true;
                        _this.loginProvider.logout().then(function () {
                            _this.usuario = new __WEBPACK_IMPORTED_MODULE_7__providers_usuario__["a" /* Usuario */]();
                            _this.storage.remove('usuario-profissional-saude');
                            _this.storage.remove('usuario').then(function () {
                                setTimeout(function () {
                                    _this.util.endLoading();
                                    _this.loading = false;
                                }, 500);
                            });
                        });
                    }
                }]
        }).present();
    };
    PerfilPage.prototype.changeProfissional = function () {
        var _this = this;
        this.util.onLoading('Registrando...');
        this.storage.set('usuario-profissional-saude', this.checkProfissional).then(function () {
            _this.util.endLoading();
        });
    };
    PerfilPage.prototype.formatarCns = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        return value;
    };
    PerfilPage.prototype.verificaProfissionalSaude = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loginProvider.profissionalSaude(user.cpf).subscribe(function (response) {
                            _this.usuario = new __WEBPACK_IMPORTED_MODULE_7__providers_usuario__["a" /* Usuario */]();
                            var profissionalSaude = response !== null;
                            _this.storage.set('profissional-saude', profissionalSaude).then(function () {
                                var usuario = _this.retirarAtributos(user);
                                _this.storage.set('usuario', usuario).then(function () {
                                    _this.usuario.set(usuario);
                                    _this.util.endLoading();
                                });
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.retirarAtributos = function (usuario) {
        delete usuario['acessoPortal'];
        delete usuario['cadastroMobile'];
        delete usuario['certidao'];
        delete usuario['cns'];
        delete usuario['cnsLogin'];
        delete usuario['emailAlternativoValidado'];
        delete usuario['emailCodigo'];
        delete usuario['emailPrincipalCodigo'];
        delete usuario['emailPrincipalValidado'];
        delete usuario['encontradoReceita'];
        delete usuario['enderecoBairroCodigo'];
        delete usuario['enderecoCodigo'];
        delete usuario['enderecoComplemento'];
        delete usuario['enderecoMunicipioCodigo'];
        delete usuario['enderecoNumero'];
        delete usuario['enderecoTipoLogradouro'];
        delete usuario['enderecoTipoLogradouroCodigo'];
        delete usuario['grauQualidade'];
        delete usuario['listaCns'];
        delete usuario['municipioNascimentoCodigo'];
        delete usuario['telefone'];
        delete usuario['stHomologado'];
        delete usuario['sexo'];
        delete usuario['racaCor'];
        delete usuario['paisResidenciaCodigo'];
        delete usuario['paisNascimentoCodigo'];
        delete usuario['paisNascimento'];
        delete usuario['nomeSocial'];
        delete usuario['nomade'];
        delete usuario['municipioNascimentoSemUF'];
        delete usuario['municipioNascimento'];
        delete usuario['etniaIndigena'];
        delete usuario['enderecoMunicipioSemUF'];
        return usuario;
    };
    PerfilPage.prototype.handleError = function (error) {
        var toast = this.toastCtrl.create({
            message: error,
            duration: 3500,
            position: 'top'
        });
        this.util.endLoading();
        toast.present();
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/perfil/perfil.html"*/'<space-header>\n  <!--<div class="info">-->\n    <!--<button ion-button (tap)="openAlertDiarioSaude()" icon-only *ngIf="!loading && !usuario?.cnsCartao && !usuario?.cpf"><ion-icon name="md-information-circle" color="ligth"></ion-icon></button>-->\n  <!--</div>-->\n  <div class="card-header">\n    <div class="content-res" *ngIf="!loading">\n\n      <!--Usuário ainda não está logado no aplicativo-->\n      <ion-item *ngIf="!usuario?.cnsCartao && !usuario?.cpf">\n        <img src="assets/imgs/login.svg" item-start>\n        <div class="lb-titulo">Faça o login</div>\n        <div class="lb-subTitulo">Você pode acessar com o seu CPF ou CNS e ter suas informações sincronizadas com o Ministério da Saúde.</div>\n        <div class="lb-versao">Versão: {{version}}</div>\n      </ion-item>\n\n      <!--Usuário já está logado no aplicativo-->\n      <ion-item *ngIf="usuario?.cnsCartao || usuario?.cpf" class="item-info-usuario">\n        <div item-start class="info-usuario">\n          <ion-thumbnail *ngIf="usuario?.foto" [ngStyle]="{\'background-image\': \'url(\' + usuario?.foto + \')\'}"></ion-thumbnail>\n          <!--<ion-thumbnail style="background-image: url(\'assets/imgs/img-perfil.png\')" *ngIf="!usuario?.foto"></ion-thumbnail>-->\n          <p>{{usuario?.nome}}</p>\n          <span *ngIf="usuario.cnsCartao">Nº {{formatarCns(usuario?.cnsCartao)}}</span>\n        </div>\n        <img src="assets/imgs/logo-digisus.png" item-end>\n        <div class="lb-versao" item-end>Versão: {{version}}</div>\n      </ion-item>\n\n    </div>\n    <div class="content-perfil" *ngIf="!loading">\n\n      <!--Usuário ainda não está logado no aplicativo-->\n      <div class="botoes" *ngIf="!usuario?.cnsCartao && !usuario?.cpf">\n        <button ion-button color="secondary" block (tap)="login()">Entrar</button>\n        <!--<div class="separadores">-->\n          <!--<hr width="40%" align="left">-->\n          <!--<span>ou</span>-->\n          <!--<hr width="40%" align="right">-->\n        <!--</div>-->\n        <!--<button ion-button color="pink" block (tap)="openPage(\'PrimeiroAcessoPage\')">Primeiro acesso</button>-->\n      </div>\n\n      <!--Usuário ainda não está logado no aplicativo-->\n      <div class="links" *ngIf="!usuario?.cnsCartao && !usuario?.cpf">\n        <div (tap)="openPage(\'LoginCnsPage\')">\n          <span color="dark">Não tem CPF?</span>\n        </div>\n        <div (tap)="openPage(\'RecuperarSenhaPage\')">\n          <span color="dark">Esqueceu a senha?</span>\n        </div>\n      </div>\n\n      <div class="profissional-saude" *ngIf="(usuario?.cnsCartao || usuario?.cpf) && !profissional">\n        <ion-item>\n          <ion-label>Sou um profissional da saúde</ion-label>\n          <ion-checkbox [(ngModel)]="checkProfissional" color="pink" (ionChange)="changeProfissional()"></ion-checkbox>\n        </ion-item>\n      </div>\n\n      <!--Usuário já está logado no aplicativo-->\n      <ion-list *ngIf="usuario?.cnsCartao || usuario?.cpf">\n        <ion-item (tap)="changeTab()">\n          <ion-icon item-start name="dds-report"></ion-icon>\n          <ion-label>Histórico de registros</ion-label>\n        </ion-item>\n        <ion-item (tap)="openPage(\'DetalhePerfilPage\')">\n          <ion-icon item-start name="icon-perfil"></ion-icon>\n          <ion-label>Dados de perfil</ion-label>\n        </ion-item>\n        <ion-item (tap)="openPage(\'HistoricoNotificacoesPage\')" *ngIf="checkProfissional">\n          <ion-icon item-start name="dds-notificacoes"></ion-icon>\n          <ion-label>Histórico de notificações</ion-label>\n        </ion-item>\n        <ion-item (tap)="openPage(\'TermoPage\')">\n          <ion-icon item-start name="dds-termos"></ion-icon>\n          <ion-label>Termos de uso</ion-label>\n        </ion-item>\n        <ion-item (click)="logout()">\n          <ion-icon item-start name="dds-exit"></ion-icon>\n          <ion-label>Sair</ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</space-header>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_app_version__["a" /* AppVersion */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(83)))

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Iniciacao__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecuperarSenhaPage = /** @class */ (function () {
    function RecuperarSenhaPage(viewCtrl, alertCtrl, toastCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.eventsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.step = 1;
    }
    RecuperarSenhaPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
    };
    RecuperarSenhaPage.prototype.getRespostaCaptcha = function (obj) {
        if (obj) {
            this.iniciacao = new __WEBPACK_IMPORTED_MODULE_3__models_Iniciacao__["a" /* Iniciacao */](obj.iniciacao);
            this.cpf = obj.cpf;
            this.step++;
            this.nextSlider();
            return;
        }
    };
    RecuperarSenhaPage.prototype.getRespostaPin = function (successPin) {
        if (successPin) {
            this.step++;
            this.nextSlider();
            return;
        }
    };
    RecuperarSenhaPage.prototype.getRespostaSenha = function (successSenha) {
        if (successSenha) {
            this.viewCtrl.dismiss();
        }
        this.toastCtrl.create({
            message: successSenha ? 'Senha alterada com sucesso!' : 'Erro ao alterar a senha!',
            position: 'top',
            duration: 2500
        }).present();
    };
    RecuperarSenhaPage.prototype.nextSlider = function () {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
    };
    RecuperarSenhaPage.prototype.continuar = function () {
        var sourceEvent = this.step === 1 ? 'captcha' : this.step === 2 ? 'pin' : null;
        console.log('sourceEvent', sourceEvent);
        this.eventsSubject.next(sourceEvent);
    };
    RecuperarSenhaPage.prototype.concluir = function () {
        this.eventsSubject.next('senha');
    };
    RecuperarSenhaPage.prototype.close = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Você tem certeza que deseja sair?',
            subTitle: 'Se sair você vai perder todas as informações aqui inseridas!',
            buttons: [{
                    text: 'Confirmar',
                    handler: function (data) {
                        _this.viewCtrl.dismiss();
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel'
                }]
        });
        alert.present();
        alert.onDidDismiss(function (retorno) {
            if (retorno)
                _this.viewCtrl.dismiss();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], RecuperarSenhaPage.prototype, "slides", void 0);
    RecuperarSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recuperar-senha',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/recuperar-senha/recuperar-senha.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only color="light" (tap)="close()" clear *ngIf="slides?.realIndex !== (steps?.length - 1)"><ion-icon name="md-close"></ion-icon></button>\n    <ion-title>Recuperar senha</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides>\n    <ion-slide>\n      <captcha-component\n        [step]="step"\n        (respostaCaptcha)="getRespostaCaptcha($event)"\n        [recuperarSenha]="true"\n        [events]="eventsSubject.asObservable()">\n      </captcha-component>\n    </ion-slide>\n\n    <ion-slide>\n      <confirma-pin-component\n        [step]="step"\n        [cpf]="cpf"\n        [token]="iniciacao?.token"\n        (respostaPin)="getRespostaPin($event)"\n        [recuperarSenha]="true"\n        [events]="eventsSubject.asObservable()">\n      </confirma-pin-component>\n    </ion-slide>\n\n    <ion-slide>\n      <cria-senha-component\n        [step]="step"\n        [cpf]="cpf"\n        [token]="iniciacao?.token"\n        (respostaSenha)="getRespostaSenha($event)"\n        [recuperarSenha]="true"\n        [events]="eventsSubject.asObservable()">\n      </cria-senha-component>\n    </ion-slide>\n\n  </ion-slides>\n\n  <div class="btn-continuar">\n    <button ion-button block (tap)="continuar()" color="secondary" *ngIf="!slides.isEnd()">Continuar</button>\n    <button ion-button block (tap)="concluir()" color="pink" *ngIf="slides?.isEnd()">Concluir</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/recuperar-senha/recuperar-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], RecuperarSenhaPage);
    return RecuperarSenhaPage;
}());

//# sourceMappingURL=recuperar-senha.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_usuario__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recuperar_senha_cns_recuperar_senha_cns__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginCnsPage = /** @class */ (function () {
    function LoginCnsPage(viewCtrl, toastCtrl, util, loginProvider, storage, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.loginProvider = loginProvider;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    LoginCnsPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    LoginCnsPage.prototype.login = function () {
        var _this = this;
        if (!this.cns) {
            this.toastCtrl.create({
                message: 'É obrigatório informar um CNS.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (!this.senha || this.senha.length < 6) {
            this.toastCtrl.create({
                message: 'Senha deve conter mais que 6 caracteres.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (this.senha.length > 16) {
            this.toastCtrl.create({
                message: 'Senha não deve ultrapassar 16 caracteres.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        var campo = this.cns.replace(/\D/g, '');
        this.validarCNS(campo);
        if (!this.campoValido) {
            this.toastCtrl.create({
                message: 'CNS inválido.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        this.util.onLoading('Autenticando...');
        this.loginProvider.login(campo, this.senha).then(function (usuario) {
            _this.usuario = new __WEBPACK_IMPORTED_MODULE_6__providers_usuario__["a" /* Usuario */]();
            _this.loginProvider.profissionalSaude(campo).subscribe(function (response) {
                var profissionalSaude = response !== null;
                _this.storage.set('profissional-saude', profissionalSaude).then(function () {
                    _this.retirarAtributos(usuario[0]);
                    _this.storage.set('usuario', usuario[0]).then(function () {
                        _this.usuario.set(usuario[0]);
                        _this.util.endLoading();
                        _this.viewCtrl.dismiss();
                    });
                });
            });
        }, function (error) {
            _this.util.endLoading();
            _this.toastCtrl.create({
                message: error,
                position: 'top',
                duration: 2500
            }).present();
        });
    };
    LoginCnsPage.prototype.validarCNS = function (cns) {
        if (cns[0] === '1' || cns[0] === '2') {
            this.campoValido = __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* Util */].validaCNS(cns);
            return;
        }
        this.campoValido = __WEBPACK_IMPORTED_MODULE_3__util_util__["a" /* Util */].validaCNS_PROV(cns);
    };
    LoginCnsPage.prototype.openRecuperarSenha = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__recuperar_senha_cns_recuperar_senha_cns__["a" /* RecuperarSenhaCnsPage */]);
        modal.present();
        modal.onDidDismiss(function (senhaRecuperada) {
            if (senhaRecuperada) {
                _this.back();
            }
        });
    };
    LoginCnsPage.prototype.retirarAtributos = function (usuario) {
        delete usuario['acessoPortal'];
        delete usuario['cadastroMobile'];
        delete usuario['certidao'];
        delete usuario['cns'];
        delete usuario['cnsLogin'];
        delete usuario['emailAlternativoValidado'];
        delete usuario['emailCodigo'];
        delete usuario['emailPrincipalCodigo'];
        delete usuario['emailPrincipalValidado'];
        delete usuario['encontradoReceita'];
        delete usuario['enderecoBairroCodigo'];
        delete usuario['enderecoCodigo'];
        delete usuario['enderecoComplemento'];
        delete usuario['enderecoMunicipioCodigo'];
        delete usuario['enderecoNumero'];
        delete usuario['enderecoTipoLogradouro'];
        delete usuario['enderecoTipoLogradouroCodigo'];
        delete usuario['grauQualidade'];
        delete usuario['listaCns'];
        delete usuario['municipioNascimentoCodigo'];
        delete usuario['telefone'];
        delete usuario['stHomologado'];
        delete usuario['sexo'];
        delete usuario['racaCor'];
        delete usuario['paisResidenciaCodigo'];
        delete usuario['paisNascimentoCodigo'];
        delete usuario['paisNascimento'];
        delete usuario['nomeSocial'];
        delete usuario['nomade'];
        delete usuario['municipioNascimentoSemUF'];
        delete usuario['municipioNascimento'];
        delete usuario['etniaIndigena'];
        delete usuario['enderecoMunicipioSemUF'];
        return usuario;
    };
    LoginCnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-cns',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/login-cns/login-cns.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only color="light" (tap)="back()" clear><ion-icon name="arrow-back"></ion-icon></button>\n    <ion-title>Acessar</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <div class="titulo">\n    <p>Entre com o seu CNS para realizar o login.</p>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="CNS"\n                 type="tel"\n                 masked="cns"\n                 [(ngModel)]="cns"\n                 maxlength="18">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Senha"\n                 [(ngModel)]="senha"\n                 type="password"\n                 maxlength="16">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button color="secondary" (tap)="login()">Entrar</button>\n\n  <div class="links">\n    <div (tap)="openRecuperarSenha()">\n      <span color="dark">Esqueceu a senha?</span>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/login-cns/login-cns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], LoginCnsPage);
    return LoginCnsPage;
}());

//# sourceMappingURL=login-cns.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaCnsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_string_util__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_provider__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecuperarSenhaCnsPage = /** @class */ (function () {
    function RecuperarSenhaCnsPage(viewCtrl, util, toastCtrl, loginProvider) {
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.loginProvider = loginProvider;
    }
    RecuperarSenhaCnsPage.prototype.back = function () {
        this.viewCtrl.dismiss(false);
    };
    RecuperarSenhaCnsPage.prototype.recuperar = function () {
        var _this = this;
        if (!this.cns) {
            this.toastCtrl.create({
                message: 'Informe um CPF/CNS válido.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (!this.nomeMae) {
            this.toastCtrl.create({
                message: 'Informe o nome da mãe.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        var campo = this.cns.replace(/\D/g, '');
        this.validarCNS(campo);
        if (!this.campoValido) {
            this.toastCtrl.create({
                message: 'CNS inválido.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        this.util.onLoading('Recuperando senha...');
        this.loginProvider.recuperarSenha({
            nomeMae: __WEBPACK_IMPORTED_MODULE_4__util_string_util__["a" /* StringUtil */].removeDiacritics(this.nomeMae),
            cns: campo
        }).then(function () {
            _this.util.endLoading();
            var toast = _this.toastCtrl.create({
                message: 'Senha alterada com sucesso e enviada para seu email.',
                position: 'top',
                duration: 2500
            });
            toast.onDidDismiss(function () {
                _this.viewCtrl.dismiss(true);
            });
            toast.present();
        }, function (error) {
            console.log('error', error);
            _this.util.endLoading();
            if (error && error.indexOf('SYSTEM_FAULT') !== -1) {
                error = 'Ocorreu um erro no sistema. Verifique seus dados e tente novamente.';
            }
            _this.toastCtrl.create({
                message: error,
                position: 'top',
                duration: 2500
            }).present();
        });
    };
    RecuperarSenhaCnsPage.prototype.validarCNS = function (cns) {
        if (cns[0] === '1' || cns[0] === '2') {
            this.campoValido = __WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* Util */].validaCNS(cns);
            return;
        }
        this.campoValido = __WEBPACK_IMPORTED_MODULE_2__util_util__["a" /* Util */].validaCNS_PROV(cns);
    };
    RecuperarSenhaCnsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-recuperar-senha-cns',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/recuperar-senha-cns/recuperar-senha-cns.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only color="light" (tap)="back()" clear><ion-icon name="arrow-back"></ion-icon></button>\n    <ion-title>Acessar</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <div class="titulo">\n    <p>Entre com o seu CNS para recupear a senha.</p>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-input placeholder="CNS"\n                 type="tel"\n                 masked="cns"\n                 [(ngModel)]="cns"\n                 maxlength="18">\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Nome da mãe"\n                 [(ngModel)]="nomeMae"\n                 type="text">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button color="secondary" (tap)="recuperar()">Recuperar</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/recuperar-senha-cns/recuperar-senha-cns.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_login_provider__["a" /* LoginProvider */]])
    ], RecuperarSenhaCnsPage);
    return RecuperarSenhaCnsPage;
}());

//# sourceMappingURL=recuperar-senha-cns.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhePerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhePerfilPage = /** @class */ (function () {
    function DetalhePerfilPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.informacoesUsuario = [];
    }
    DetalhePerfilPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.usuario = this.navParams.get('usuario');
        delete this.usuario['senha'];
        delete this.usuario['fotografia'];
        delete this.usuario['foto'];
        this.usuario['dataNascimento'] = this.usuario['dataNascimento'] ? __WEBPACK_IMPORTED_MODULE_2_moment__(this.usuario['dataNascimento']).format('DD/mm/YYYY') : null;
        Object.keys(this.usuario).forEach(function (atributo) {
            if (_this.usuario[atributo]) {
                _this.informacoesUsuario.push(atributo);
            }
        });
        this.usuario.cnsCartao = this.formatarCpfCns(this.usuario.cnsCartao);
        this.usuario.cpf = this.formatarCpfCns(this.usuario.cpf);
    };
    DetalhePerfilPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    DetalhePerfilPage.prototype.formatarCpfCns = function (value) {
        if (!value) {
            return value;
        }
        if (value.replace(/\D/g, '').length <= 11) {
            return this.formatarCpf(value);
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        return value;
    };
    DetalhePerfilPage.prototype.formatarCpf = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1-$2');
        return value;
    };
    DetalhePerfilPage.prototype.getNomeAtributo = function (key) {
        switch (key) {
            case 'nome': return 'Nome';
            case 'cnsCartao': return 'CNS';
            case 'fotografia': return 'Foto';
            case 'email': return 'E-mail';
            case 'cpf': return 'CPF';
            case 'dataNascimento': return 'Data de Nascimento';
            case 'doadorOrgao': return 'Doador de Orgão';
            case 'altura': return 'Altura';
            case 'imc': return 'IMC';
            case 'peso': return 'Peso';
            case 'tipoSanguineo': return 'Tipo Sanguíneo';
            case 'enderecoBairro': return 'Bairro';
            case 'enderecoCep': return 'CEP';
            case 'enderecoLogradouro': return 'Logradouro';
            case 'enderecoNumero': return 'Número';
            case 'sexoDescricao': return 'Sexo';
            case 'racaCorDescricao': return 'Cor';
            case 'paisResidenciaDescricao': return 'País';
            case 'nomePai': return 'Nome do pai';
            case 'nomeMae': return 'Nome da mãe';
            case 'nacionalidade': return 'Nacionalidade';
            case 'enderecoMunicipio': return 'Municipio';
            case 'telefone': return 'Telefone';
        }
    };
    DetalhePerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-perfil',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/detalhe-perfil/detalhe-perfil.html"*/'<ion-header no-shadow>\n  <ion-navbar color="primary">\n    <button ion-button icon-only color="light" (tap)="back()" clear><ion-icon name="arrow-back"></ion-icon></button>\n    <ion-title>Dados de perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let info of informacoesUsuario">\n      <ion-label floating>{{getNomeAtributo(info)}}</ion-label>\n      <ion-input\n        [(ngModel)]="usuario[info] === null || usuario[info] == \'\' ? \'Não informado\':\n         usuario[info] === true ? \'Sim\' : usuario[info] === false ? \'Não\': usuario[info]" disabled></ion-input>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/detalhe-perfil/detalhe-perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], DetalhePerfilPage);
    return DetalhePerfilPage;
}());

//# sourceMappingURL=detalhe-perfil.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoNotificacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalhe_notificacao_detalhe_notificacao__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HistoricoNotificacoesPage = /** @class */ (function () {
    function HistoricoNotificacoesPage(navCtrl, navParams, viewCtrl, util, registros) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.util = util;
        this.registros = registros;
        this.notificacoes = [];
    }
    HistoricoNotificacoesPage.prototype.ionViewDidLoad = function () {
        this.getNotificacoes();
    };
    HistoricoNotificacoesPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HistoricoNotificacoesPage.prototype.getNotificacoes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.onLoading('Recuperando histórico...');
                        return [4 /*yield*/, this.registros.getCPF().then(function (r) {
                                if (r != 'err')
                                    _this.cpf = r.replace(/[^\d]+/g, '');
                            })];
                    case 1:
                        _a.sent();
                        query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"]("notificacoesAgente");
                        query.descending("createdAt");
                        query.equalTo("cpfUsuarioLogado", this.cpf);
                        query.limit(1000);
                        return [4 /*yield*/, query.find({
                                success: function (results) {
                                    _this.notificacoes = JSON.parse(JSON.stringify(results));
                                    _this.util.endLoading();
                                },
                                error: function (error) {
                                    console.log('error', error);
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HistoricoNotificacoesPage.prototype.getDataUltimoRegistro = function (registro) {
        if (registro.createdAt) {
            var mo = __WEBPACK_IMPORTED_MODULE_6_moment__(registro.createdAt).locale('pt-br');
            return mo.format('LLL');
        }
    };
    HistoricoNotificacoesPage.prototype.openNotificacao = function (notificacao) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__detalhe_notificacao_detalhe_notificacao__["a" /* DetalheNotificacaoPage */], { notificacao: notificacao });
    };
    HistoricoNotificacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-historico-notificacoes',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/historico-notificacoes/historico-notificacoes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Histórico notificações</span>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="content">\n    <ion-card *ngFor="let item of notificacoes" (tap)="openNotificacao(item)">\n      <ion-row>\n        <ion-col col-11>\n          <ion-card-content>\n\n            <ion-row>\n              <ion-col>\n                <ion-label style="opacity: 0.4;">{{getDataUltimoRegistro(item)}}</ion-label>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <span>Descricao da situação</span>\n                <p>{{item.descricaoSituacao}}</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col>\n                <span>Local da ocorrência</span>\n                <p>{{item.municipioDaOcorrencia}} - {{item.estadoDaOcorrencia}}</p>\n              </ion-col>\n            </ion-row>\n\n          </ion-card-content>\n        </ion-col>\n\n        <ion-col col-1 class="navigation-indicator">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <div class="nenhum-registro" *ngIf="!notificacoes || notificacoes?.length == 0">\n    <img src="assets/imgs/notebook-registros.svg">\n    <p>Nenhum histórico de notificação encontrado.</p>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/historico-notificacoes/historico-notificacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_registros__["a" /* RegistrosProvider */]])
    ], HistoricoNotificacoesPage);
    return HistoricoNotificacoesPage;
}());

//# sourceMappingURL=historico-notificacoes.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_de_saude_registro_de_saude__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adicionar_membro_adicionar_membro__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var RegistrosPage = /** @class */ (function () {
    function RegistrosPage(navCtrl, navParams, modalCtrl, util, registros, alertCtrl, device) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.registros = registros;
        this.alertCtrl = alertCtrl;
        this.device = device;
        this.isIphoneX = false;
        if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
            this.isIphoneX = true;
        }
    }
    RegistrosPage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ionViewDidEnter');
                        return [4 /*yield*/, this.registros.getCPF().then(function (r) {
                                if (r != 'err')
                                    _this.cpf = r.replace(/[^\d]+/g, '');
                            })];
                    case 1:
                        _a.sent();
                        this.loadRecords();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrosPage.prototype.loadRecords = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('this.cpf', this.cpf);
                this.membros = [];
                if (!this.cpf || this.cpf == '') {
                    this.showAlert();
                }
                else {
                    this.util.onLoading('Carregando informações...');
                    this.registros.loadMembros(this.cpf).then(function (membros) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.membros = membros;
                            if (this.membros.length > 0) {
                                this.loadRegistrosMembros();
                            }
                            else
                                this.util.endLoading();
                            return [2 /*return*/];
                        });
                    }); });
                }
                return [2 /*return*/];
            });
        });
    };
    RegistrosPage.prototype.loadRegistrosMembros = function () {
        var _this = this;
        this.registros.loadRegistrosMembros(this.cpf).then(function (registros) {
            _this.registrosMembros = registros;
            _this.mergeRegistrosMembros();
        });
    };
    RegistrosPage.prototype.mergeRegistrosMembros = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.membros.forEach(function (element) {
                            var registros = [];
                            registros = _this.registrosMembros.filter(function (reg) {
                                return reg.membros.nome == element.nome;
                            });
                            element.registros = registros;
                        })];
                    case 1:
                        _a.sent();
                        this.util.endLoading();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrosPage.prototype.abrirModal = function (page, membro) {
        var _this = this;
        if (!this.cpf) {
            this.showAlert();
        }
        else {
            if (page) {
                console.log('membro', membro);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registro_de_saude_registro_de_saude__["a" /* RegistroDeSaudePage */], { membro: membro });
            }
            else {
                var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__adicionar_membro_adicionar_membro__["a" /* AdicionarMembroPage */]);
                modal.present();
                modal.onDidDismiss(function () {
                    _this.loadRecords();
                });
            }
        }
    };
    RegistrosPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: 'Você precisa efetuar o login em "Perfil"',
            buttons: ['OK']
        });
        alert.present();
    };
    RegistrosPage.prototype.getFoto = function (index) {
        if (this.membros[index].foto) {
            if (typeof this.membros[index].foto['url'] != 'undefined') {
                return this.membros[index].foto['url'];
            }
        }
    };
    RegistrosPage.prototype.getDataUltimoRegistro = function (index) {
        if (this.membros[index].registros) {
            if (this.membros[index].registros[0]) {
                var mo = __WEBPACK_IMPORTED_MODULE_7_moment__(this.membros[index].registros[0]['createdAt']).locale('pt-br');
                return mo.format('LLL');
            }
        }
        return 'Sem registros';
    };
    RegistrosPage.prototype.getUltimosSintomas = function (index) {
        if (this.membros[index].registros) {
            var regComSintomas = this.membros[index].registros.filter(function (sint) {
                return typeof sint['sintomas'] != 'undefined';
            });
            if (regComSintomas.length > 0) {
                var arraySint = regComSintomas[0]['sintomas']['sintomas'];
                var sintomas_1 = '';
                arraySint.forEach(function (element) {
                    sintomas_1 = element.nome + ", " + sintomas_1;
                });
                return sintomas_1.substring(0, sintomas_1.length - 2);
            }
        }
        return '-';
    };
    RegistrosPage.prototype.getTemperatura = function (index) {
        if (this.membros[index].registros) {
            var regComTemp = this.membros[index].registros.filter(function (sint) {
                return typeof sint['temperatura'] != 'undefined';
            });
            if (regComTemp.length > 0) {
                return regComTemp[0]['temperatura'] + " \u00B0C";
            }
        }
        return '-';
    };
    RegistrosPage.prototype.getDuracao = function (index) {
        if (this.membros[index].registros) {
            var regComTemp = this.filterArray('duracao', index);
            if (regComTemp.length > 0) {
                var plu = parseInt(regComTemp[0]['duracao']) > 1 ? 's' : '';
                var d = parseInt(regComTemp[0]['duracao']);
                return d + " Dia" + plu;
            }
        }
        return '-';
    };
    RegistrosPage.prototype.filterArray = function (prop, index) {
        return this.membros[index].registros.filter(function (sint) {
            return typeof sint[prop] != 'undefined';
        });
    };
    RegistrosPage.prototype.deleteAlert = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Atenção',
            message: "Deseja excluir o membro " + item.nome,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.deletar(item);
                    }
                }
            ]
        });
        alert.present();
    };
    RegistrosPage.prototype.deletar = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var yourClass, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.util.onLoading('Deletando informações...');
                        return [4 /*yield*/, item.registros.forEach(function (registro) { return __awaiter(_this, void 0, void 0, function () {
                                var yourClass, query;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('reg', registro);
                                            yourClass = __WEBPACK_IMPORTED_MODULE_8_parse__["Object"].extend("registros");
                                            query = new __WEBPACK_IMPORTED_MODULE_8_parse__["Query"](yourClass);
                                            return [4 /*yield*/, query.get(registro.objectId, {
                                                    success: function (obj) {
                                                        console.log('deleta', obj);
                                                        obj.destroy({});
                                                    },
                                                    error: function (object, error) {
                                                        console.log('error');
                                                    }
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        yourClass = __WEBPACK_IMPORTED_MODULE_8_parse__["Object"].extend("membros");
                        query = new __WEBPACK_IMPORTED_MODULE_8_parse__["Query"](yourClass);
                        return [4 /*yield*/, query.get(item.objectId, {
                                success: function (member) {
                                    console.log('deleta', member);
                                    member.destroy({});
                                    _this.util.endLoading();
                                    _this.ionViewDidEnter();
                                },
                                error: function (object, error) {
                                    console.log('error');
                                    _this.ionViewDidEnter();
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-registros',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/registros/registros.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Diário de Saúde\n      <p class="lb-desc">Cadastre e acompanhe os registros de saúde dos membros da sua família.</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div  class="membro">\n    <ion-list *ngIf="membros?.length > 0">\n      <ion-item-sliding *ngFor="let membro of membros; let i = index">\n        <ion-item (tap)="abrirModal(\'RegistroDeSaudePage\', membro)">\n          <div class="cabecalho">\n            <ion-avatar>\n              <ion-icon name="dds-user-simple-line" *ngIf="!getFoto(i)" ></ion-icon>\n              <img src="{{getFoto(i)}}" *ngIf="getFoto(i)" >\n            </ion-avatar>\n            <div>\n              <h2 class="name">{{membro.nome}} ({{membro.parentesco}})</h2>\n              <p class="date">{{getDataUltimoRegistro(i)}}</p>\n            </div>\n          </div>\n          <div class="informacoes">\n            <p class="info-last-record">Informações dos últimos registros</p>\n            <span>Sintomas</span>\n            <p>{{getUltimosSintomas(i)}}</p>\n            <div class="informacoes-bottom">\n              <div class="coluna-1">\n                <span>Temperatura</span>\n                <p>{{getTemperatura(i)}}</p>\n              </div>\n              <div class="coluna-2">\n                <span>Duração</span>\n                <p>{{getDuracao(i)}}</p>\n              </div>\n            </div>\n          </div>\n          <ion-icon name="arrow-forward" class="navigation-indicator" item-end></ion-icon>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="danger" (tap)="deleteAlert(membro)"><ion-icon name="trash"></ion-icon></button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </div>\n\n  <div class="nenhum-registro" *ngIf="!membros || membros?.length == 0" >\n    <img src="assets/imgs/notebook-registros.svg">\n    <p>Nenhum registro encontrado. Adicione um novo registro.</p>\n  </div>\n\n  <ion-fab right bottom #fab>\n    <button ion-fab mini (tap)="abrirModal()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/registros/registros.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_registros__["a" /* RegistrosProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_device__["a" /* Device */]])
    ], RegistrosPage);
    return RegistrosPage;
}());

//# sourceMappingURL=registros.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroDeSaudePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__novo_registro_novo_registro__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ionic_util__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var RegistroDeSaudePage = /** @class */ (function () {
    function RegistroDeSaudePage(navCtrl, navParams, viewCtrl, modalCtrl, device, events, registros, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.device = device;
        this.events = events;
        this.registros = registros;
        this.util = util;
        this.isIphoneX = false;
        this.result = [];
        if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
            this.isIphoneX = true;
        }
    }
    RegistroDeSaudePage.prototype.ngOnInit = function () {
        var _this = this;
        this.informacoes = this.navParams.get('membro');
        this.events.subscribe('update-registros', function (data) {
            _this.informacoes.registros.unshift(data);
            _this.ionViewDidEnter();
        });
    };
    RegistroDeSaudePage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('update-registros');
    };
    RegistroDeSaudePage.prototype.ionViewDidEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Verifica se usuario esta logado, senao da dismiss na view
                        this.util.onLoading('Atualizando informações...');
                        return [4 /*yield*/, this.registros.getCPF().then(function (cpf) {
                                _this.util.endLoading();
                                if (cpf == '') {
                                    _this.dismiss();
                                    return;
                                }
                            })];
                    case 1:
                        _a.sent();
                        this.result = this.groupBy(this.informacoes.registros, function (item) {
                            var mo = __WEBPACK_IMPORTED_MODULE_3_moment__(item['createdAt']).locale('pt-br');
                            return [mo.format('L')];
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroDeSaudePage.prototype.descricaoRegistro = function (item) {
        if (typeof item.sintomas != 'undefined') {
            return this.getSintomasDescricao(item.sintomas);
        }
        if (typeof item.temperatura != 'undefined') {
            return item.temperatura + " \u00B0C";
        }
        if (typeof item.duracao != 'undefined') {
            var plu = parseInt(item.duracao) > 1 ? 's' : '';
            return item.duracao + " Dia" + plu;
        }
        if (typeof item.medicacao != 'undefined') {
            return this._merdeMedicacaoNome(item.medicacao);
        }
        return '-';
    };
    RegistroDeSaudePage.prototype._merdeMedicacaoNome = function (medicacao) {
        var tempMedicamento = '';
        tempMedicamento = medicacao.nome + " (" + medicacao.dosagem + " " + medicacao.unidade + ")";
        if (medicacao.dataInicio && medicacao.dataFim) {
            var di = __WEBPACK_IMPORTED_MODULE_3_moment__(medicacao.dataInicio).locale('pt-br');
            var df = __WEBPACK_IMPORTED_MODULE_3_moment__(medicacao.dataFim).locale('pt-br');
            // return [mo.format('L')];
            tempMedicamento = tempMedicamento + " Per\u00EDodo: " + di.format('L') + " - " + df.format('L');
        }
        return tempMedicamento;
    };
    RegistroDeSaudePage.prototype.iconeRegistro = function (item) {
        if (typeof item.sintomas != 'undefined') {
            return 'dds-pulse-registro-icon';
        }
        if (typeof item.temperatura != 'undefined') {
            return 'dds-termometro-registro-icon';
        }
        if (typeof item.duracao != 'undefined') {
            return 'dds-calendario-registro-icon';
        }
        if (typeof item.medicacao != 'undefined') {
            return 'dds-medicamento-registro-icon';
        }
        return '-';
    };
    RegistroDeSaudePage.prototype.abrirNovoRegistro = function () {
        // this.navCtrl.push(NovoRegistroPage, {membro: this.informacoes});
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__novo_registro_novo_registro__["a" /* NovoRegistroPage */], { membro: this.informacoes });
        modal.present();
    };
    RegistroDeSaudePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null, null, { 'animation': 'false', 'duration': 0 });
    };
    RegistroDeSaudePage.prototype.getNumeroSintomas = function () {
        if (this.informacoes.registros) {
            var regComSintomas = this.informacoes.registros.filter(function (sint) {
                return typeof sint['sintomas'] != 'undefined';
            });
            if (regComSintomas.length > 0) {
                return regComSintomas.length;
            }
        }
        return '0';
    };
    RegistroDeSaudePage.prototype.getDuracao = function () {
        if (this.informacoes.registros) {
            var regComTemp = this.filterArray('duracao');
            if (regComTemp.length > 0) {
                return "" + parseInt(regComTemp[0]['duracao']);
            }
        }
        return '0';
    };
    RegistroDeSaudePage.prototype.getMedicamentos = function () {
        if (this.informacoes.registros) {
            var regComTemp = this.filterArray('medicacao');
            if (regComTemp.length > 0) {
                return regComTemp.length;
            }
        }
        return '0';
    };
    RegistroDeSaudePage.prototype.filterArray = function (prop) {
        return this.informacoes.registros.filter(function (sint) {
            return typeof sint[prop] != 'undefined';
        });
    };
    RegistroDeSaudePage.prototype.groupBy = function (array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return Object.keys(groups).map(function (group) {
            return groups[group];
        });
    };
    RegistroDeSaudePage.prototype.formatDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).locale('pt-br').format('LLL');
    };
    RegistroDeSaudePage.prototype.getSintomasDescricao = function (sintomas) {
        var arraySint = sintomas['sintomas'];
        var sintomasDesc = '';
        arraySint.forEach(function (element) {
            sintomasDesc = element.nome + ", " + sintomasDesc;
        });
        console.log('sintomasDesc', sintomasDesc.substring(0, sintomas.length - 2));
        return sintomasDesc.substring(0, sintomasDesc.length - 2);
    };
    RegistroDeSaudePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro-de-saude',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/registro-de-saude/registro-de-saude.html"*/'<ion-header no-shadow>\n  <ion-navbar color="primary" style="min-height: 146px !important;">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n    <ion-title>\n      Registros de saúde\n      <p class="lb-desc">Cadastre e acompanhe os registros de saúde dos membros da sua família.</p>\n    </ion-title>\n  </ion-navbar>\n  <div class="box">\n    <div class="blue-box">\n      <ion-card class="card-registro" style="background: url(assets/imgs/registro-saude/registro-saude-bg-card.png);">\n        <ion-row>\n          <ion-col col-4>\n            <img src="assets/imgs/registro-saude/sintomas-icon-card.svg">\n            <h2>{{getNumeroSintomas()}}</h2>\n            <p>Sintomas</p>\n          </ion-col>\n          <ion-col col-4>\n            <img src="assets/imgs/registro-saude/calendario-icon-card.svg">\n            <h2>{{getDuracao()}}</h2>\n            <p>Duração</p>\n          </ion-col>\n          <ion-col col-4 style="border:none;">\n            <img src="assets/imgs/registro-saude/medicamentos-icon-card.svg">\n            <h2>{{getMedicamentos()}}</h2>\n            <p>Medicamentos</p>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n  <div class="content">\n    <div class="membro">\n      <registro-membro [informacoes]="informacoes" [showArrow]="false"></registro-membro>\n    </div>\n\n    <ion-list *ngFor="let header of headers">\n      <ng-container *ngIf="items?.length">\n        <ion-list-header>\n          {{ header }}\n        </ion-list-header>\n\n        <ion-item *ngFor="let item of items | async" >\n          {{ item.name }}\n        </ion-item>\n      </ng-container>\n    </ion-list>\n\n\n    <ion-list *ngIf="result.length > 0">\n      <ion-label>Histórico</ion-label>\n      <ng-container *ngFor="let grouped of result">\n        <ion-list-header>\n          {{ formatDate(grouped[0].createdAt) }}\n        </ion-list-header>\n\n        <ion-item no-lines *ngFor="let item of grouped" class="historico-item-registro">\n          <ion-icon name="{{iconeRegistro(item)}}" item-start></ion-icon>\n          <span>{{descricaoRegistro(item)}}</span>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n  </div>\n\n  <ion-fab right bottom #fab>\n    <button ion-fab mini (tap)="abrirNovoRegistro()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/registro-de-saude/registro-de-saude.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_registros__["a" /* RegistrosProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], RegistroDeSaudePage);
    return RegistroDeSaudePage;
}());

//# sourceMappingURL=registro-de-saude.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoRegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sintomas_sintomas__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_saude_provider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__adiciona_medicamento_adiciona_medicamento__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NovoRegistroPage = /** @class */ (function () {
    function NovoRegistroPage(navCtrl, navParams, viewCtrl, toastCtrl, saudeProvider, device, modalCtrl, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.saudeProvider = saudeProvider;
        this.device = device;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.registros = ['SINTOMAS', 'TEMPERATURA', 'MEDICAMENTOS', 'DURAÇÃO'];
        this.showButton = false;
        this.showTemperatura = false;
        this.showDuracao = false;
        this.isIphoneX = false;
        if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
            this.isIphoneX = true;
        }
        this.membro = this.navParams.get('membro');
    }
    NovoRegistroPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null, null, { 'animation': 'false', 'duration': 0 });
    };
    NovoRegistroPage.prototype.open = function (item) {
        this.showButton = item != 'SINTOMAS' && item != 'MEDICAMENTOS';
        switch (item) {
            case 'SINTOMAS': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sintomas_sintomas__["a" /* SintomasPage */], { membro: this.membro });
                break;
            }
            case 'TEMPERATURA': {
                this.showTemperatura = true;
                break;
            }
            case 'MEDICAMENTOS': {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__adiciona_medicamento_adiciona_medicamento__["a" /* AdicionaMedicamentoPage */], { membro: this.membro });
                break;
            }
            case 'DURAÇÃO': {
                this.showDuracao = true;
                break;
            }
        }
    };
    NovoRegistroPage.prototype.confirmar = function () {
        var _this = this;
        this.showButton = false;
        this.showTemperatura = false;
        this.showDuracao = false;
        if (this.temperatura.length > 2) {
            this.temperatura = this.temperatura.replace('.', '');
            this.temperatura = this.temperatura.slice(0, 3);
            this.temperatura = [this.temperatura.slice(0, 2), '.', this.temperatura.slice(2)].join('');
        }
        this.util.onLoading('Enviando registro...');
        this.saudeProvider.createRegistro({ membros: this.membro, temperatura: this.temperatura, duracao: this.duracao }).then(function (r) {
            delete _this.temperatura;
            delete _this.duracao;
            _this.util.endLoading();
            _this.toastCtrl.create({
                message: "Registro salvo com sucesso!",
                position: 'top',
                duration: 1500
            }).present();
        });
    };
    NovoRegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-novo-registro',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/novo-registro/novo-registro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n    <ion-title style="padding-top: 0px;">\n      <span>Novo registro</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="content">\n    <ion-list *ngIf="!showButton">\n      <ion-item *ngFor="let item of registros" no-lines clear>\n        <button ion-button (tap)="open(item)" block>\n          <ion-col col-5 style="text-align: right; padding-right: 20px;">\n            <ion-icon name="dds-pulse-registro-icon" item-start *ngIf="item == \'SINTOMAS\'" ></ion-icon>\n            <ion-icon name="dds-medicamento-registro-icon" item-start *ngIf="item == \'MEDICAMENTOS\'" ></ion-icon>\n            <ion-icon name="dds-calendario-registro-icon" item-start *ngIf="item == \'DURAÇÃO\'" ></ion-icon>\n            <ion-icon name="dds-termometro-registro-icon" item-start *ngIf="item == \'TEMPERATURA\'" ></ion-icon>\n          </ion-col>\n          <ion-col col-7 style="text-align: left;">\n            {{item}}\n          </ion-col>\n        </button>\n      </ion-item>\n    </ion-list>\n\n    <ion-card *ngIf="showButton">\n      <ion-card-content>\n        <ion-list>\n\n          <ion-item no-lines class="item-nome" *ngIf="showTemperatura" >\n            <ion-input type="tel" [brmasker]="{mask: \'00.0\', len:4}" [(ngModel)]="temperatura" placeholder="Informe quantos graus ex: 00.0º"></ion-input>\n          </ion-item>\n\n          <ion-item no-lines class="item-nome" *ngIf="showDuracao" >\n            <ion-input type="number" [brmasker]="{len:4}" [(ngModel)]="duracao" placeholder="Informe a duração (em dias)"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ion-footer style="height: 70px">\n  <button ion-button class="confirmar" (tap)="confirmar()" block *ngIf="showButton" >CONFIRMAR</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/novo-registro/novo-registro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_saude_provider__["a" /* SaudeProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], NovoRegistroPage);
    return NovoRegistroPage;
}());

//# sourceMappingURL=novo-registro.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotoMembroPage; });
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


var FotoMembroPage = /** @class */ (function () {
    function FotoMembroPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    FotoMembroPage.prototype.ionViewDidLoad = function () {
        this.foto = this.navParams.get('foto');
    };
    FotoMembroPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FotoMembroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-foto-membro',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/foto-membro/foto-membro.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Foto</span>\n    </ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="content">\n    <img [src]="foto">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/foto-membro/foto-membro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], FotoMembroPage);
    return FotoMembroPage;
}());

//# sourceMappingURL=foto-membro.js.map

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 248;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adiciona-medicamento/adiciona-medicamento.module": [
		806,
		20
	],
	"../pages/adicionar-membro/adicionar-membro.module": [
		807,
		19
	],
	"../pages/alert-diario-saude/alert-diario-saude.module": [
		808,
		1
	],
	"../pages/alert-uso-dados/alert-uso-dados.module": [
		813,
		0
	],
	"../pages/confirmar-email/confirmar-email.module": [
		810,
		18
	],
	"../pages/detalhe-notificacao/detalhe-notificacao.module": [
		809,
		17
	],
	"../pages/detalhe-perfil/detalhe-perfil.module": [
		811,
		16
	],
	"../pages/foto-membro/foto-membro.module": [
		812,
		15
	],
	"../pages/historico-notificacoes/historico-notificacoes.module": [
		814,
		14
	],
	"../pages/login-cns/login-cns.module": [
		815,
		13
	],
	"../pages/notificacao/notificacao.module": [
		816,
		12
	],
	"../pages/novo-registro/novo-registro.module": [
		817,
		11
	],
	"../pages/perfil/perfil.module": [
		819,
		10
	],
	"../pages/perguntas/perguntas.module": [
		818,
		9
	],
	"../pages/primeiro-acesso/primeiro-acesso.module": [
		820,
		8
	],
	"../pages/recuperar-senha-cns/recuperar-senha-cns.module": [
		821,
		7
	],
	"../pages/recuperar-senha/recuperar-senha.module": [
		822,
		6
	],
	"../pages/registro-de-saude/registro-de-saude.module": [
		823,
		5
	],
	"../pages/registro-medicamento/registro-medicamento.module": [
		824,
		4
	],
	"../pages/registros/registros.module": [
		825,
		3
	],
	"../pages/termo/termo.module": [
		826,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 291;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UbsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UbsProvider = /** @class */ (function () {
    function UbsProvider(http) {
        this.http = http;
    }
    UbsProvider.prototype.get = function (lat, long) {
        var url = 'https://cartaosusdigital.saude.gov.br/cartaosus/rest/estabelecimento/ubs';
        url = url + '?latitude=' + lat + '&longitude=' + long + '&&registroInicial=1&quantidadeRegistros=100';
        return this.http.get(url);
    };
    UbsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UbsProvider);
    return UbsProvider;
}());

//# sourceMappingURL=ubs.provider.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_provider__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuario__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var URL_BC = process.env['URL_BC'];
var CLIENT_ID_BC = process.env['CLIENT_ID_BC'];
var URL_BC_TOKEN = process.env['URL_BC_TOKEN'];
var SECRET_BC = process.env['SECRET_BC'];
var URL_BASE = process.env['URL_BASE'];
var TOKEN_MOSQUITO = process.env['TOKEN_MOSQUITO'];
var URL_MOSQUITO = process.env['URL_MOSQUITO'];
var LoginProvider = /** @class */ (function () {
    function LoginProvider(http, storage, abstractProvider, util, toastCtrl) {
        this.http = http;
        this.storage = storage;
        this.abstractProvider = abstractProvider;
        this.util = util;
        this.toastCtrl = toastCtrl;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__usuario__["a" /* Usuario */]();
    }
    LoginProvider.prototype.login = function (documento, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BASE, 'Content-Type', 'application/json');
            _this.http.setDataSerializer('json');
            var url = URL_BASE + 'cartaosus/rest/user/login?documento=' + documento.replace(/\D/g, '') + '&senha=' + senha;
            _this.http.setSSLCertMode('nocheck').then(function () {
                setTimeout(function () {
                    _this.http.get(url, null, _this.http.getHeaders(URL_BASE)).then(function () {
                        _this.http.get(URL_BASE + 'cartaosus/rest/user', null, null).then(function (response) {
                            resolve(JSON.parse(response.data));
                        }, function (response) {
                            var error = response.error;
                            if (error.indexOf('faultInfo') >= 0) {
                                error = JSON.parse(response.error);
                                reject(error.faultInfo.messagesErrors[0].detail);
                            }
                            else {
                                console.log('error', response);
                                error = 'Não foi possível realizar o login, tente novamente.';
                            }
                            reject(error);
                        });
                    }, function (response) {
                        var error = response.error;
                        if (error.indexOf('faultInfo') >= 0) {
                            error = JSON.parse(response.error);
                            reject(error.faultInfo.messagesErrors[0].detail);
                        }
                        else {
                            console.log('error', response);
                            error = 'Não foi possível realizar o login, tente novamente.';
                        }
                        reject(error);
                    });
                }, 2000);
            });
        });
    };
    LoginProvider.prototype.recuperarPergunta = function (documento) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get("cartaosus/rest/primeiroacesso/v2/perguntas?documento=" + documento.replace(/\D/g, ''), null, _this.abstractProvider.montarHeadersBC()).then(function (perguntas) {
                resolve(perguntas);
            }, function (error) {
                reject(error);
            });
        });
    };
    LoginProvider.prototype.confirmarPergunta = function (pergunta) {
        var _this = this;
        var error = { erro: 'Resposta incorreta!!' };
        return new Promise(function (resolve, reject) {
            _this.http.post("cartaosus/rest/primeiroacesso/v2/validarResposta", pergunta, _this.abstractProvider.montarHeadersBC()).then(function (response) {
                if (response && response.respostaValida === 'true') {
                    resolve(response);
                }
                else {
                    reject(error);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    LoginProvider.prototype.confirmarEmail = function (email, usuario) {
        var _this = this;
        var emailobj = {
            "cns": usuario.documento,
            "email": email
        };
        return new Promise(function (resolve, reject) {
            _this.http.post("cartaosus/rest/primeiroacesso/v2/informarEmail", emailobj, _this.abstractProvider.montarHeadersBC()).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    LoginProvider.prototype.recuperarCaptcha = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var url = URL_BC + "ecidadao/cadastro/captcha/imagem/clientId/" + CLIENT_ID_BC;
            console.log('url', JSON.stringify(url));
            _this.http.get(url, null, _this.http.getHeaders(URL_BC)).then(function (response) {
                resolve(JSON.parse(response.data));
            }, function (error) {
                reject(error);
            });
        });
    };
    LoginProvider.prototype.iniciacaoBC = function (cpf, captcha, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            var url = URL_BC + 'ecidadao/cadastro/inicializacao/' + cpf + '/clientId/' + process.env['CLIENT_ID_BC'] + '/captcha/' + captcha + '/tokenCaptcha/' + token;
            console.log('url', JSON.stringify(url));
            _this.http.post(url, {}, _this.http.getHeaders(URL_BC)).then(function (response) {
                resolve(JSON.parse(response.data));
            }, function (response) {
                console.log('error', response);
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.inicializacaoKbaRFB = function (cpf, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            var url = URL_BC + 'ecidadao/cadastro/inicializacaoKbaRFB/' + cpf + '/token/' + token;
            console.log('url', JSON.stringify(url));
            _this.http.put(url, {}, _this.http.getHeaders(URL_BC)).then(function (response) {
                resolve(JSON.parse(response.data));
            }, function (response) {
                console.log('error', response);
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.informacoesBasicasBC = function (cpf, token, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            _this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
            _this.http.setDataSerializer('json');
            var url = URL_BC + 'ecidadao/cadastro/informacoesBasicas/' + cpf + '/token/' + token;
            _this.http.put(url, obj, _this.http.getHeaders(URL_BC)).then(function () {
                resolve();
            }, function (response) {
                console.log('error', response);
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.finalizacaoKbaRFB = function (cpf, token, respostas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            _this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
            _this.http.setDataSerializer('json');
            var url = URL_BC + 'ecidadao/cadastro/finalizacaoKbaRFB/' + cpf + '/token/' + token;
            _this.http.put(url, respostas, _this.http.getHeaders(URL_BC)).then(function (response) {
                resolve(JSON.parse(response.data));
            }, function (response) {
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.confirmacaoIdentidade = function (cpf, token, pin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            _this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
            _this.http.setDataSerializer('json');
            _this.http.put(URL_BC + 'ecidadao/cadastro/confirmacaoIdentidade/' + cpf + '/token/' + token + '/pin/' + pin, {}, _this.http.getHeaders(URL_BC)).then(function () {
                resolve();
            }, function (response) {
                console.log('error', response.error);
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.finalizacao = function (cpf, token, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            _this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
            _this.http.post(URL_BC + 'ecidadao/cadastro/finalizacao/' + cpf + '/token/' + token, obj, _this.http.getHeaders(URL_BC)).then(function () {
                resolve();
            }, function (response) {
                console.log('error', response);
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.recuperarTokenBC = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.removeCookies(URL_BASE, function () {
                var aut = btoa(CLIENT_ID_BC + ':' + SECRET_BC);
                _this.http.setHeader(URL_BC_TOKEN, 'Content-Type', 'application/x-www-form-urlencoded');
                _this.http.setHeader(URL_BC_TOKEN, 'Authorization', 'Basic ' + aut);
                _this.http.setDataSerializer('urlencoded');
                var url = encodeURI(URL_BC_TOKEN + 'scp/token?grant_type=authorization_code&code=' + code + '&redirect_uri=https://diariosaude.saude/login');
                _this.http.post(url, {}, _this.http.getHeaders(URL_BC_TOKEN)).then(function (response) {
                    console.log('response recupera token bc', response);
                    resolve(JSON.parse(response.data));
                }, function (response) {
                    console.log('erro', response);
                    reject(JSON.parse(response.error));
                });
            });
        });
    };
    LoginProvider.prototype.getUser = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BASE, 'Authorization', token);
            _this.http.get(URL_BASE + 'cartaosus/rest/user', { withCredentials: 'true' }, _this.http.getHeaders(URL_BASE)).then(function (response) {
                console.log('response get user', JSON.parse(response.data));
                var usuario = JSON.parse(response.data);
                if (usuario[0]) {
                    resolve(usuario[0]);
                }
                else {
                    resolve(null);
                }
            }, function (response) {
                var error = JSON.parse(response.error).localizedMessage;
                console.log('error get user', response);
                if (error === 'Não foi possível recuperar os dados.') {
                    error = 'Não foi possível realizar o login, tente novamente mais tarde.';
                }
                reject(error);
            });
        });
    };
    LoginProvider.prototype.getUserInfo = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json;charset=utf-8');
            _this.http.setDataSerializer('json');
            _this.http.get(URL_BC + 'ecidadao/usuario/getUserInfo/brasil_cidadao?access_token=' + token, null, _this.http.getHeaders(URL_BC)).then(function (response) {
                console.log('response get user info', response);
                _this.storage.set('usuario', JSON.parse(response.data));
                resolve(JSON.parse(response.data));
            }, function (response) {
                console.log('error get user info', response);
                try {
                    var error = JSON.parse(response.error);
                    reject(error);
                }
                catch (e) {
                    reject('Não foi possível realizar o login, tente novamente.');
                }
            });
        });
    };
    LoginProvider.prototype.iniciacaoRSBC = function (cpf, captcha, token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            var url = URL_BC + 'ecidadao/recuperarSenha/inicializacao/' + cpf + '/clientId/' + CLIENT_ID_BC + '/captcha/' + captcha + '/tokenCaptcha/' + token;
            _this.http.post(url, {}, _this.http.getHeaders(URL_BC)).then(function (response) {
                resolve(JSON.parse(response.data));
            }, function (response) {
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.confirmacaoRSIdentidade = function (cpf, token, pin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            _this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
            _this.http.setDataSerializer('json');
            _this.http.put(URL_BC + 'ecidadao/recuperarSenha/confirmacaoIdentidade/' + cpf + '/token/' + token + '/pin/' + pin, {}, _this.http.getHeaders(URL_BC)).then(function (response) {
                console.log('response confirma pin rs', response);
                resolve(response.data);
            }, function (response) {
                console.log('error', response);
                reject(JSON.parse(response.error));
            });
        });
    };
    LoginProvider.prototype.finalizacaoRS = function (cpf, token, obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.setHeader(URL_BC, 'Content-Type', 'application/json');
            _this.http.setHeader(URL_BC, 'Authorization', token);
            _this.http.setHeader(URL_BC, 'Cache-Control', 'no-cache');
            console.log(URL_BC + 'ecidadao/recuperarSenha/finalizacao/' + cpf + '/token/' + token);
            _this.http.put(URL_BC + 'ecidadao/recuperarSenha/finalizacao/' + cpf + '/token/' + token, obj, _this.http.getHeaders(URL_BC)).then(function () {
                resolve();
            }, function (response) {
                console.log('error', response);
                reject(response.error);
            });
        });
    };
    LoginProvider.prototype.recuperarSenha = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log('parametros', params);
            console.log('url ', URL_BASE + 'cartaosus/rest/user/recuperarSenha');
            _this.http.setHeader(URL_BASE, 'Content-Type', 'application/json');
            _this.http.setDataSerializer('json');
            _this.http.post(URL_BASE + 'cartaosus/rest/user/recuperarSenha', params, _this.http.getHeaders(URL_BASE)).then(function () {
                resolve();
            }, function (response) {
                reject(response.error ? JSON.parse(response.error).faultInfo.messagesErrors[0].detail : response);
            });
        });
    };
    LoginProvider.prototype.profissionalSaude = function (documento) {
        var _this = this;
        this.http.setHeader(URL_MOSQUITO, 'Authorization', 'Basic ' + TOKEN_MOSQUITO);
        return Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_from__["from"])(this.http.get(URL_MOSQUITO + documento, null, this.http.getHeaders(URL_MOSQUITO))).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["retry"])(3), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (response) {
            return JSON.parse(response.data);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (error) {
            if (error.status === 500) {
                return Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_of__["of"])(null);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(function () {
                    _this.util.endLoading();
                    _this.toastCtrl.create({
                        message: 'Não foi possível realizar o login, tente novamente.',
                        position: 'top',
                        duration: 2500
                    }).present();
                });
            }
        }));
    };
    LoginProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(URL_BASE + 'cartaosus/rest/user/logout', null, null).then(function (response) {
                _this.http.removeCookies(URL_BASE, function () {
                    console.log('resultado do logout', response);
                    _this.storage.remove('usuario');
                    _this.storage.remove('token_bc');
                    _this.storage.remove('usuario-profissional-saude');
                    _this.storage.remove('profissional-saude');
                    _this.usuario.set(null);
                    resolve();
                });
            }, function (error) {
                _this.http.removeCookies(URL_BASE, function () {
                    _this.storage.remove('usuario');
                    _this.storage.remove('token_bc');
                    _this.storage.remove('usuario-profissional-saude');
                    _this.storage.remove('profissional-saude');
                    _this.usuario.set(null);
                    resolve();
                });
            });
        });
    };
    LoginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__abstract_provider__["a" /* AbstractProvider */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["t" /* ToastController */]])
    ], LoginProvider);
    return LoginProvider;
}());

//# sourceMappingURL=login.provider.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(83)))

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sintomas_sintomas__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapaPage = /** @class */ (function () {
    function MapaPage() {
    }
    /*public profissionalSaude: boolean = false;
    public usuarioProfissionalSaude: boolean = false;
    map: any;
    connectionStatus: any[] = [];
    userMarker: any;
    userLatLng: any;
    localidades: any[] = [];
    markers: any[] = [];
    resultados: any = {};
    markerCluster: any;
    recarregar:boolean = true;
    sintomasList: Array<any> = [];
    boxShadow = false;
    currentPosition: any;
    markerSelected: any;
    cardMapa = false;
  
    clusterStyles = [
      {
        textColor: 'white',
        url: 'assets/imgs/clustering/54x54.png',
        height: 56,
        width: 56
      }
    ];
    mcOptions = { gridSize: 50, minimumClusterSize: 1, maxZoom: 13, styles: this.clusterStyles };
  
    updateLocalidades = false;
  
    constructor(
      public navCtrl: NavController,
      private network: Network,
      private events: Events,
      private storage: Storage,
      private saudeProvider: SaudeProvider,
      private mapProvider: MapProvider,
      private util: IonicUtilProvider,
      private geolocation: Geolocation,
      public modalCtrl: ModalController,
      private platform: Platform,
      private device: Device
    ){}
  
    ionViewWillLeave(){
      this.events.unsubscribe('modal-open');
      this.events.unsubscribe('modal-close');
      this.boxShadow = false;
      // if (!this.cardMapa) this.fab.close();
    }
  
    ionViewDidLoad() {
      if (this.platform.is('cordova')){
        if (this.network.type || true) {
          this.connectionStatus.push(this.network.type);
          if (!this.mapProvider.isInitialised()) {
            this.mapProvider.load().then(m => {
              this.initMap();
            })
          } else {
            this.initMap();
          }
        }
      } else {
        this.initMap();
      }
    }
  
    ionViewDidEnter(){
      this.storage.get('profissional-saude').then((p) => {
        this.profissionalSaude = p;
        this.storage.get('usuario-profissional-saude').then((u) => {
          this.usuarioProfissionalSaude = u;
        });
      });
  
      this.events.subscribe('modal-open', (data) => {
        if (data){
          this.recarregar=false;
          if (this.recarregar)  this.initMap();
  
        }
      });
      this.events.subscribe('modal-close', (data) => {
        if (data){
          this.recarregar=true;
          if (this.recarregar)  this.initMap();
        }
      });
  
      if (this.updateLocalidades) this.initMap();
  
      this._updateLocalidades();
    }
  
    buscaLocalidades(location) {
      this.localidades = [];
      return new Promise((resolve) => {
        this.saudeProvider.getLocations(location).then((localidades: any) => {
          // console.log(localidades);
  
          _.each(localidades, (locais: any) => {
            if (locais) {
              this.localidades.push(locais);
            }
          });
  
          resolve(this.localidades);
        });
      })
    }
  
    abrirSintomas() {
      this.boxShadow = false;
      // this.fab.close();
      this.modalCtrl.create(ListaSintomasPage,
        { lista: this.localidades }
      ).present();
    }
  
    initMap() {
      this.updateLocalidades = false;
      this.util.onLoading('Buscando localização...');
  
      this.panToCurrentLocation();
    }
  
    panToCurrentLocation() {
      this.platform.ready().then(() => {
        this.geolocation.getCurrentPosition().then(pos => {
  
          const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
            mapOptions = {
              center: latLng,
              zoom: 13,
              disableDefaultUI: true,
              maxZoom: 20,
              // mapTypeControl: true,
              mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_RIGHT
              },
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
  
          if (!this.map) this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  
  
          this.currentPosition = pos;
          this.storage.set('guardioes-local', pos);
          this.userLatLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
          this.userLocation(this.userLatLng);
          if (!this.userMarker) {
            this.userMarker = new google.maps.Marker({
              position: this.userLatLng,
              map: this.map,
              icon: {
                url: 'assets/icon/oval-icon.svg',
              }
            });
          }
  
          this.buscaLocalidades(pos.coords).then((l: Array<any>) => {
            // let grupo = _(l).groupBy('estou_bem');
            // this.resultados = {
            //   bem: grupo[true] ? ((grupo[true].length) * 100 / (l.length)).toFixed(2) + '%' : '0%',
            //   mal: grupo[false] ? ((grupo[false].length) * 100 / (l.length)).toFixed(2) + '%': '0%',
            // };
            //
            // if (this.sintomasList.length > 0){
            //   l = this.filtraSintomas(l);
            // }
  
            this.loadLocations(l);
            this.util.endLoading();
          });
  
        }).catch(() => {
          this.util.toast('Ocorreu um erro ao buscar a sua localização!');
          this.util.endLoading();
        });
      });
    }
  
    private _updateLocalidades(){
      this.events.subscribe('update-localidades', () => {
        this.updateLocalidades = true;
      });
    }
  
    async loadLocations(localidades) {
      setTimeout(() => this.localidades = localidades.slice(),1000);
      this.removeMarkers();
  
      for (let localidade of localidades) {
        if (!localidade.estou_bem) {
          let marker = this.addMarker(localidade);
          localidade.marker = marker;
        }
      }
  
      // this.markerCluster = new MarkerClusterer(this.map, this.markers, this.mcOptions);
  
      // google.maps.event.addListener(this.markerCluster, 'clusterclick', (cluster) => {
      //   //----Get markers
      //   let markers = cluster.getMarkers();
      //   let lista = [];
  
      //   //Get all the titles
      //   for (let i = 0; i < markers.length; i++) {
      //     lista.push(JSON.parse(markers[i].getTitle()));
      //   }
      //   //----
      //   // this.modalCtrl.create(ListaSintomasPage,
      //   //   { lista: lista },
      //   //   {
      //   //     enterAnimation: 'fade-transition',
      //   //     leaveAnimation: 'fade-transition',
      //   //     cssClass: 'modal-lista-sintomas-page'
      //   //   }
      //   // ).present();
      // });
  
    }
  
    addMarker(place: any) {
      let latitude: Number = parseFloat(place.latitude);
      let longitude: Number = parseFloat(place.longitude);
  
      let marker = new google.maps.Marker({
        map: this.map,
        title: JSON.stringify(place),
        // animation: google.maps.Animation.DROP,
        position: { lat: latitude, lng: longitude },
        icon: new google.maps.MarkerImage('assets/icon/mapmark.svg',
      null, null, null, new google.maps.Size(40,40)),
      });
      marker.addListener('click', () => {
        this.markerSelected = place;
        this.cardMapa = true;
      });
      this.markers.push(marker);
      return marker;
    }
  
    async removeMarkers() {
      this.localidades = [];
      for (let marker of this.markers) {
        marker.setMap(null);
      }
      this.markers = [];
      if (this.markerCluster) this.markerCluster.clearMarkers();
    }
  
    /!*userLocation(latLng) {
      if (!latLng) return;
      this.map.setZoom(13);
      this.map.panTo(latLng);
    }*!/
  
    private _evtNotificacao(){
  
    }
  
    /!*showModal(show, comoEstou){
      let modal = this.modalCtrl.create(ModalPage,
        { showModalInfo: show , comoEstou: comoEstou },
        {
          enterAnimation: 'fade-transition',
          leaveAnimation: 'fade-transition',
          cssClass: 'modal-status-saude-page'
        }
      );
      modal.present();
  
      this.events.publish('modal-open', true);
      modal.onDidDismiss(data => {
        this.events.publish('modal-close', true);
      });
    }
  
    abrirFiltro() {
      this.boxShadow = false;
      // this.fab.close();
      this.events.publish('modal-open', true);
      let modal = this.modalCtrl.create(SintomasPage, { status: 'filtro' , sintomasFiltro: this.sintomasList });
        modal.present();
        modal.onDidDismiss((date) => {
          if (date && date.filter){
            this.sintomasList = date.sintomasList.filter(sin => sin.isSelected);
            this.events.publish('modal-close', true);
          }
        });
    }
  
    abrirNotificacoes(fab){
      this.boxShadow = false;
      // fab.close();
      let modal = this.modalCtrl.create(NotificacaoPage);
      modal.present();
      modal.onDidDismiss((show?) => {
        if (show && show.notificacaoSucesso){
          let modal = this.modalCtrl.create(ModalPage,
            { showModalInfo: true , notificacoesSucesso: true },
            {
              enterAnimation: 'fade-transition',
              leaveAnimation: 'fade-transition',
              cssClass: 'modal-status-saude-page'
            }
          );
          modal.present();
        }
      });
    }
  
    filtraSintomas(l): Array<any>{
      return l.filter(loc => {
        return loc['sintomas'].some(sint => {
          return this.sintomasList.filter((sintoma) => {
            return sint.id === sintoma.id;
          }).length >= 1
        });
      });
    }
  
    _updateMarkers(sintoma){
      sintoma.isSelected = !sintoma.isSelected;
      this.sintomasList = this.sintomasList.filter(sin => sin.isSelected);
      this.removeMarkers();
      this.panToCurrentLocation();
    }*/
    MapaPage.prototype.abrirModalStatus = function (option, fab) {
        this.boxShadow = !this.boxShadow;
        if (option) {
            // fab.close();
            this.boxShadow = false;
            switch (option) {
                case 'notificacao':
                    this._evtNotificacao();
                    break;
                case 'estoubem':
                    this._evtEstouBem();
                    break;
                case 'estoumal':
                    this._evtEstouMal();
                    break;
                default:
                    break;
            }
        }
    };
    MapaPage.prototype._evtEstouBem = function () {
        var _this = this;
        if (this.currentPosition) {
            this.events.publish('modal-open', true);
            var pontos = {
                latitude: this.currentPosition.coords.latitude,
                longitude: this.currentPosition.coords.longitude,
                estou_bem: trues,
                sintomas: [],
                device: this.device.uuid
            };
            this.saudeProvider.createPonto(pontos).then(function (r) {
                _this.showModal(true, 'bem');
            });
        }
    };
    MapaPage.prototype._evtEstouMal = function () {
        this.events.publish('modal-open', true);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sintomas_sintomas__["a" /* SintomasPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], MapaPage.prototype, "mapElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fab'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* FabContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* FabContainer */]) === "function" && _b || Object)
    ], MapaPage.prototype, "fab", void 0);
    MapaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mapa',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/mapa/mapa.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Mapa\n      <p class="lb-desc">Veja as Unidades Básicas de Saúde por perto.</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="false">\n  <!-- <div class="continer-resultados"\n       *ngIf="resultados && (resultados.bem || resultados.mal)">\n    <div class="content-res">\n      <div class="lb-titulo">Resultados até agora</div>\n      <ion-row class="item-row">\n        <ion-col class="col-first" *ngIf="resultados.bem">\n          {{resultados.bem}} <img src="assets/imgs/icon-estou-bem.png"/>\n        </ion-col>Ø\n\n        <ion-col class="col-last" *ngIf="resultados.mal" tappable (tap)="abrirSintomas()">\n          <img src="assets/imgs/icon-estou-mal.png"/> {{resultados.mal}}\n        </ion-col>\n      </ion-row>\n\n      <ion-grid class="grid-filtro">\n        <ion-row class="filtro-row">\n          <ion-col col-10\n                   *ngIf="sintomasList?.length == 0">\n            <h5 class="selecione-sintomas">Selecione os sintomas no filtro</h5>\n          </ion-col>\n          <ion-col col-10\n                   *ngIf="sintomasList?.length > 0">\n            <ion-scroll scrollX="true">\n              <div class="sintoma-item"\n                   *ngFor="let sintoma of sintomasList">\n                <button class="sintoma-button"\n                        (tap)="_updateMarkers(sintoma)">\n                  <div class="descricao">\n                    <p class="title">{{sintoma?.nome}}\n                      <ion-icon name="close"></ion-icon>\n                    </p>\n                  </div>\n                </button>\n              </div>\n            </ion-scroll>\n          </ion-col>\n\n          <ion-col col-2>\n            <button ion-item\n                    class="btn-filtro"\n                    (tap)="abrirFiltro()">\n              <ion-icon item-end\n                        name="md-funnel"></ion-icon>\n            </button>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n\n    </div>\n  </div> -->\n  <div class="box-shadow-fab-active"\n       [ngClass]="{\'box-shadow-fab-active-fadeIn\' : boxShadow}"></div>\n\n  <div #map\n       class="map"\n       [ngClass]="{\'pt-top\': resultados && (resultados.bem || resultados.mal)}">\n  </div>\n\n  <div ion-fixed\n       class="como-esta">\n    <div class="como-esta-titulo">Como está sua saúde nesse momento?</div>\n    <div class="botoes">\n      <div class="botao"\n           (click)="abrirModalStatus(\'estoubem\', fab)">\n        <span class="bem"></span>\n        Bem\n      </div>\n      <div class="linha"></div>\n      <div class="botao"\n           (click)="abrirModalStatus(\'estoumal\', fab)">\n        <span class="mal"></span>\n        Mal\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-fab *ngIf="!cardMapa"\n           right\n           bottom\n           #fab\n           [ngClass]="{\'fab-small\': !(profissionalSaude || usuarioProfissionalSaude)}">\n    <button ion-fab\n            mini\n            (tap)="abrirModalStatus()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n    <ion-fab-list>\n      <div class="custon-fab"\n           *ngIf="profissionalSaude || usuarioProfissionalSaude">\n        <button class="descricao"\n                round\n                color="ligth"\n                (tap)="abrirNotificacoes(fab)">Notificações</button>\n        <button ion-fab\n                class="btn-icon-descricao"\n                (tap)="abrirNotificacoes(fab)"></button>\n      </div>\n      <div class="custon-fab">\n        <button class="bem"\n                round\n                color="ligth"\n                (tap)="abrirModalStatus(\'estoubem\', fab)">Estou bem</button>\n        <button ion-fab\n                class="btn-icon-bem"\n                (tap)="abrirModalStatus(\'estoubem\', fab)"></button>\n      </div>\n      <div class="custon-fab">\n        <button class="mal"\n                round\n                color="ligth"\n                (tap)="abrirModalStatus(\'estoumal\', fab)">Estou mal</button>\n        <button ion-fab\n                class="btn-icon-mal"\n                (tap)="abrirModalStatus(\'estoumal\', fab)"></button>\n      </div>\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <div class="mapa-card"\n       *ngIf="cardMapa"\n       ion-fixed>\n    <div class="fechar"\n         (click)="cardMapa = !cardMapa">\n      <ion-icon name="md-close"></ion-icon>\n    </div>\n    <div class="descricaoTipo">{{markerSelected.descricaoTipo}}</div>\n    <div class="nome">{{markerSelected.nomeFantasia}}</div>\n    <div class="endereco">\n      {{markerSelected.logradouro}},\n      {{markerSelected.bairro}},\n      {{markerSelected.municipio}} -\n      {{markerSelected.cep}}\n    </div>\n    <div *ngFor="let telefone of markerSelected.telefones">\n      <a href="tel:{{telefone.ddd + telefone.numero}}"><span></span>({{telefone.ddd}}) {{telefone.numero}}</a>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/mapa/mapa.html"*/
        })
    ], MapaPage);
    return MapaPage;
    var _a, _b;
}());

//# sourceMappingURL=mapa.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaSintomasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_base__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaSintomasPage = /** @class */ (function (_super) {
    __extends(ListaSintomasPage, _super);
    function ListaSintomasPage(navParams, viewCtrl, analytics) {
        var _this = _super.call(this, 'SintomasPage', analytics) || this;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.analytics = analytics;
        _this.lista = [];
        _this.empty = false;
        _this.doencas = [];
        _this.sintomas = [];
        _this.locais = [];
        _this.loading = true;
        _this.locais = _this.navParams.get('lista');
        return _this;
    }
    ListaSintomasPage.prototype.ionSelected = function () {
        this.content.scrollToTop();
    };
    ListaSintomasPage.prototype.loadMore = function (ev) {
        this.loading = false;
        // this.twitter.next().subscribe((tweets) => {
        //   this.loading = false;
        //   this.tweets = this.tweets.concat(tweets);
        //   ev.complete();
        // });
    };
    ListaSintomasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.lista = __WEBPACK_IMPORTED_MODULE_4_underscore__(this.locais).groupBy('sintomas');
        __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](this.lista, function (sintoma) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](sintoma, function (s) {
                __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](s.sintomas, function (doenca) {
                    // if (doenca.id == 'outros') this.sintomas.push('Outros');
                    _this.sintomas.push(doenca.nome);
                });
            });
        });
        this.doencas = __WEBPACK_IMPORTED_MODULE_4_underscore__(this.sintomas).groupBy();
        this.sintomas = [];
        __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](this.doencas, function (doenca) {
            _this.sintomas.push({ sintoma: doenca[0], total: doenca.length });
        });
        this.empty = (this.lista.length == 0);
        this.loading = false;
    };
    ListaSintomasPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], ListaSintomasPage.prototype, "content", void 0);
    ListaSintomasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lista-sintomas',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/lista-sintomas/lista-sintomas.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      Sintomas\n      <p class="lb-desc">Veja os sintomas mais comuns</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="empty && !loading">\n    <div class="empty-list">\n      <div class="container-img">\n        <img class="image-empty" src="assets/imgs/empty-file-2.png">\n      </div>\n\n      <strong>Não existem sintomas<br>disponíveis no momento.</strong>\n    </div>\n  </div>\n\n  <div *ngIf="sintomas.length == 0 && loading">\n    <ion-spinner class="spinner-list"></ion-spinner>\n  </div>\n\n  <ion-list no-lines class="list-sintomas" *ngIf="sintomas.length > 0 && !loading">\n    <ion-row class="item-row" *ngFor="let l of sintomas; let i = index">\n      <ion-col col-10 class="col-left">{{l.sintoma}}</ion-col>\n      <ion-col col-2 class="col-right">{{l.total}}</ion-col>\n    </ion-row>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/lista-sintomas/lista-sintomas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], ListaSintomasPage);
    return ListaSintomasPage;
}(__WEBPACK_IMPORTED_MODULE_2__abstract_base__["a" /* AbstractBasePage */]));

//# sourceMappingURL=lista-sintomas.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiagnosticoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiagnosticoProvider = /** @class */ (function () {
    function DiagnosticoProvider() {
    }
    DiagnosticoProvider.prototype.diagnostico = function (sintomas) {
        this._sintomas = this._getSintomas(sintomas);
        var mensagem = '';
        if ((this._temSintomaEspecifico('Febre') && this._temSintomaEspecifico('Dor de cabeça') && this._temSintomaEspecifico('Dor no corpo'))) {
            mensagem = this._sindromeHemorragicalcterica();
        }
        else if ((this._temSintomaEspecifico('Febre')) && (this._temSintomaEspecifico('Tosse') || this._temSintomaEspecifico('Dor de garganta'))) {
            mensagem = this._sindromeRespiratoria();
        }
        else if (this._temSintomaEspecifico('Febre') && this._temSintomaEspecifico('Manchas avermelhadas na pele')) {
            mensagem = this._sindromeExantematica();
        }
        else if (this._temSintomaEspecifico('Diarreia com sangue ou muco') || this._temSintomaEspecifico('Diarreia sem sangue nem muco')) {
            mensagem = this._sindromeDiarreica();
        }
        return new Promise(function (resolve, reject) {
            resolve(mensagem);
        });
    };
    DiagnosticoProvider.prototype._getSintomas = function (sintomas) {
        var tempSint = [];
        sintomas.forEach(function (element) {
            tempSint.push(element.nome);
        });
        return tempSint;
    };
    DiagnosticoProvider.prototype._temSintomaEspecifico = function (sintoma) {
        return this._sintomas.some(function (value) {
            return value == sintoma;
        });
    };
    DiagnosticoProvider.prototype._sindromeHemorragicalcterica = function () {
        var mensagem = 'Aumente a ingestão de líquidos orais  e procure uma unidade de saúde.';
        if (this._temSintomaEspecifico('Olhos avermelhados') || this._temSintomaEspecifico('Sangramento nasal') || this._temSintomaEspecifico('Pele amarelada') || this._temSintomaEspecifico('Sangramentos')) {
            mensagem = 'Aumente a ingestão de líquidos orais, caso tenha tido contato com alagamentos, esgotos ou ratazanas, procure uma unidade de saúde para avaliação médica e informe.';
            if (this._temSintomaEspecifico('Falta de ar') || this._temSintomaEspecifico('Pressão baixa') || this._temSintomaEspecifico('Vômitos')) {
                mensagem = 'Procure urgente uma unidade de saúde para  atendimento médico e avaliação de seu estado de saúde. Caso tenha tido contato com alagamentos, esgotos ou ratazanas, informe o médico.';
            }
        }
        return mensagem;
    };
    DiagnosticoProvider.prototype._sindromeRespiratoria = function () {
        var regra = [
            { p: 1, des: 'Febre' }, { p: 1, des: 'Tosse' }, { p: 1, des: 'Dor de garganta' },
            { p: 3, des: 'Dor de cabeça' }, { p: 3, des: 'Dor no corpo' }, { p: 3, des: 'Secreção no nariz' }, { p: 3, des: 'Mal estar' },
            { p: 12, des: 'Falta de ar' }, { p: 12, des: 'Cansaço' }
        ];
        var mensagem = '';
        var testeSintomas = this._testeSintomas(regra);
        if (testeSintomas >= 1 && testeSintomas <= 3) {
            mensagem = 'Aumente a ingestão de líquidos orais  e procure uma unidade de saúde.';
        }
        else if (testeSintomas >= 4 && testeSintomas <= 15) {
            mensagem = 'Aumente a ingestão de líquidos orais e procure uma unidade de saúde para avaliação médica.';
        }
        else if (testeSintomas > 12 && testeSintomas <= 39) {
            mensagem = 'Procure urgente uma unidade de saúde para atendimento médico e avaliação de seu estado de saúde.';
        }
        return mensagem;
        // Mensagens 1 dia após preenchimento dos sinais e sintomas
        // 3.4.1 | Mensagem para 3.3.1 = você procurou uma unidade de saúde? Não se esqueça de continuar ingerindo liquido |
        // 3.4.2 | Mensagem para 3.3.2 = você já procurou uma unidade de saúde? Não se esqueça de continuar ingerindo liquido |
        // 3.4.3 | Mensagem para 3.3.3 = você já procurou uma unidade de saúde? É muito importante que você procure por atendimento médico. |
    };
    DiagnosticoProvider.prototype._sindromeExantematica = function () {
        var regra = [
            { p: 1, des: 'Febre' }, { p: 1, des: 'Manchas avermelhadas na pele' },
            { p: 2, des: 'Coceira no corpo' }, { p: 2, des: 'Irritação nos olhos' }, { p: 2, des: 'Tosse' }, { p: 2, des: 'Secreção no nariz' },
            { p: 2, des: 'Nódulos no pescoço ou atrás das orelhas' }
        ];
        var mensagem = '';
        var testeSintomas = this._testeSintomas(regra);
        if (testeSintomas >= 4) {
            mensagem = 'Evite permanecer em ambientes fechados e com aglomerado de pessoas. Procure o serviço de saúde mais próximo de sua residência.';
        }
        return mensagem;
        // Mensagens 1 dia após preenchimento dos sinais e sintomas |
        // 2.4.1 | Mensagem para 2.3.1 = Evite permanecer em ambientes fechados e com aglomerado de pessoas. Procure o serviço de saúde mais próximo de sua residência.
    };
    DiagnosticoProvider.prototype._sindromeDiarreica = function () {
        var regra = [{ p: 1, des: 'Diarreia sem sangue nem muco' }, { p: 10, des: 'Diarreia com sangue ou muco' },
            { p: 1, des: 'Febre' }, { p: 1, des: 'Vômitos' }, { p: 1, des: 'Náuseas (enjoo)' }, { p: 1, des: 'Dor na barriga (cólica intestinal)' }];
        var mensagem = '';
        var testeSintomas = this._testeSintomas(regra);
        if (testeSintomas > 1 && testeSintomas < 10) {
            mensagem = 'Beba mais líquidos, como água, água de coco e chás após evacuar, para evitar a desidratação.  Não pare de comer e mantenha a sua alimentação habitual. Se houver piora da diarreia, sangue nas fezes, vômitos repetidos, muita sede, recusa de alimentos, diminuição do volume da urina ou piora no estado geral, procure o serviço de saúde para avaliação e tratamento adequado.';
        }
        else if (testeSintomas > 10) {
            mensagem = 'Procure o serviço de saúde o quanto antes, para avaliação e tratamento adequado. Até o atendimento, beba mais líquidos, como água, água de coco e chás,  para evitar a desidratação, não pare de comer e mantenha a sua alimentação habitual.';
        }
        return mensagem;
        // 4.4 | Mensagens 1 dia após preenchimento dos sinais e sintomas |
        // 4.4.1 | Mensagem 4.3.3 = Continue monitorando os sinais e sintomas. Se houver piora da diarreia, sangue nas fezes, vômitos repetidos, muita sede, recusa de
        //                        alimentos, diminuição do volume da urina, ou piora no estado geral procure o serviço de saúde para avaliação e tratamento adequado.
    };
    DiagnosticoProvider.prototype._testeSintomas = function (regra) {
        var _this = this;
        var pontos = 0;
        regra.forEach(function (value) {
            _this._sintomas.forEach(function (sintoma) {
                if (sintoma == value.des)
                    pontos = pontos + value.p;
            });
        });
        return pontos;
    };
    DiagnosticoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], DiagnosticoProvider);
    return DiagnosticoProvider;
}());

//# sourceMappingURL=diagnostico.provider.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SintomasListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SintomasListProvider = /** @class */ (function () {
    function SintomasListProvider(globals, events) {
        this.globals = globals;
        this.events = events;
        this._sintomasList = [];
        this.init();
    }
    SintomasListProvider.prototype.init = function () {
        __WEBPACK_IMPORTED_MODULE_1_parse__["initialize"](this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
        __WEBPACK_IMPORTED_MODULE_1_parse__["serverURL"] = this.globals.serverURL;
        this._setSintomas();
    };
    SintomasListProvider.prototype._setSintomas = function (arr) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSintomas().then(function (sintomas) {
                            _this._sintomasList = [];
                            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](sintomas, function (sintoma) {
                                if (sintoma) {
                                    _this._sintomasList.push({
                                        'id': sintoma.objectId,
                                        'nome': sintoma.nome,
                                        'isSelected': false
                                    });
                                }
                            });
                            if (arr)
                                _this.events.publish('get-sintomas-list', _this._sintomasList);
                            else
                                _this.events.publish('update-sintomas-list', _this._sintomasList);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SintomasListProvider.prototype.sintomas = function (arr) {
        this._setSintomas(arr);
        // return this._sintomasList;
    };
    SintomasListProvider.prototype.getSintomas = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var Classe, query, sintomas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Classe = __WEBPACK_IMPORTED_MODULE_1_parse__["Object"].extend('sintomas');
                        query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Query"](Classe);
                        query.limit(2000);
                        query.ascending('nome');
                        return [4 /*yield*/, query.find()];
                    case 1:
                        sintomas = _a.sent();
                        resolve(JSON.parse(JSON.stringify(sintomas)));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    SintomasListProvider.prototype.seleciona = function (sintoma) {
        sintoma.isSelected = !sintoma.isSelected;
    };
    SintomasListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */]])
    ], SintomasListProvider);
    return SintomasListProvider;
}());

//# sourceMappingURL=sintomas-list.provider.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuspeitoPage; });
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


var SuspeitoPage = /** @class */ (function () {
    function SuspeitoPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SuspeitoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null, null, { 'animation': 'false', 'duration': 0 });
    };
    SuspeitoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-suspeito',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/suspeito/suspeito.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button\n            icon-only\n            class="btn-fechar"\n            (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Resultado da auto-avaliação de saúde</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="coronavirus-img"></div>\n\n  <div class="conteudo">\n    <div class="titulo">\n      Baseado em suas respostas, é provável que esta situação se enquadre como caso suspeito ou provável de doença pelo\n      coronavirus 2019 (COVID-19). No entanto, isto não se trata de um diagnóstico. A orientação é que você procure\n      atendimento em uma unidade de saúde mais próxima para avaliação clínica.\n    </div>\n    <br>\n    Ao se deslocar para uma unidade de saúde, siga as seguintes medidas de proteção individual e etiqueta respiratória:\n    <br><br>\n    - Utilize mascara facial, para evitar a transmissão de outras pessoas, durante o trajeto para a unidade de saúde,\n    <br><br>\n    - Lave as mãos frequentemente com água e sabão, ou higienize com álcool gel 70%,\n    <br><br>\n    - Cubra a boca e nariz com um lenço de papel ao tossir e espirrar e jogue no lixo após o uso, ou proteja com o\n    antebraço (nunca com as mãos),\n    <br><br>\n    - Evite locais com aglomeração de pessoas,\n    <br><br>\n    - Não compartilhe objetos de uso pessoal.\n    <br><br>\n    Durante o atendimento, você será avaliado por um médico que poderá solicitar exames complementares para estabelecer\n    diagnóstico, bem como iniciar o tratamento adequado. Dependendo do caso, ele poderá recomendar isolamento hospitalar\n    ou domiciliar. Caso seja recomendado o isolamento em seu próprio domicílio, você deve seguir as recomendações para\n    isolamento domiciliar listadas nas dicas. De qualquer forma, evite o contato social com outras pessoas, seja no\n    trabalho, na escola ou no lazer, enquanto persistirem os sintomas.\n  </div>\n\n  <ion-fab center\n           bottom>\n    <button ion-fab\n            block\n            class="btn-confirmar"\n            (tap)="dismiss()">\n      FECHAR\n    </button>\n  </ion-fab>\n\n  <br><br><br><br><br>\n\n</ion-content>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/suspeito/suspeito.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], SuspeitoPage);
    return SuspeitoPage;
}());

//# sourceMappingURL=suspeito.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NaoSuspeitoPage; });
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


var NaoSuspeitoPage = /** @class */ (function () {
    function NaoSuspeitoPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NaoSuspeitoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(null, null, { 'animation': 'false', 'duration': 0 });
    };
    NaoSuspeitoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nao-suspeito',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/nao-suspeito/nao-suspeito.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button\n            icon-only\n            class="btn-fechar"\n            (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span>Resultado da auto-avaliação de saúde</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="coronavirus-img-nao-suspeito"></div>\n\n  <div class="conteudo">\n    <div class="titulo">\n      Baseado em suas respostas, é provável que essa situação NÃO se enquadre como caso suspeito de doença pelo\n      coronavirus 2019 (COVID-19). Mantenha as condutas de precaucão e prevenção, praticando a etiqueta\n      respiratória:\n    </div>\n    <br>\n    - Lave as mãos com frequência com água e sabão ou higienize com álcool gel 70%,\n    <br><br>\n    - Cubra a boca e nariz com um lenço de papel ao tossir e espirrar e jogue no lixo após o uso, ou proteja com o\n    antebraço (nunca com as mãos),\n    <br><br>\n    - Evite tocar nos olhos, nariz e boca com as mãos não lavadas.\n    <br><br>\n    - Evite locais com aglomeração de pessoas,\n    <br><br>\n    - Não compartilhe objetos de uso pessoal\n    <br><br>\n    - Evite contato próximo com pessoas resfriadas ou que estejam com sintomas de gripe.\n    <br><br>\n    Em caso de dúvidas, ligue para o Disque Saúde 136 do Ministério da Saúde, ou procure uma unidade de saúde.\n  </div>\n  <ion-fab center\n           bottom>\n    <button ion-fab\n            block\n            class="btn-confirmar"\n            (tap)="dismiss()">\n      FECHAR\n    </button>\n  </ion-fab>\n\n  <br><br><br><br><br>\n\n</ion-content>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/nao-suspeito/nao-suspeito.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], NaoSuspeitoPage);
    return NaoSuspeitoPage;
}());

//# sourceMappingURL=nao-suspeito.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_dica_provider__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dica_detalhe_dica_detalhe__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DicaPage = /** @class */ (function () {
    function DicaPage(navCtrl, util, dicaProvider) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.dicaProvider = dicaProvider;
        this.dicasList = [];
        this.loading = false;
        this.isIphoneX = false;
    }
    DicaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.util.onLoading('Carregando dicas...');
        this.buscaDicas().then(function () {
            console.log('dicas', _this.dicasList);
        });
    };
    DicaPage.prototype.buscaDicas = function () {
        var _this = this;
        return this.dicaProvider.getDicas().then(function (dicas) {
            _this.dicasList = dicas;
            _this.util.endLoading();
        });
    };
    DicaPage.prototype.getClassColor = function (dica) {
        return 'lb-color-' + dica.titulo;
    };
    DicaPage.prototype.abrirDetalheDica = function (dica) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dica_detalhe_dica_detalhe__["a" /* DicaDetalhePage */], { dica: dica });
    };
    DicaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-dica',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/dica/dica.html"*/'<ion-header>\n<ion-navbar color="primary">\n    <ion-title>\n      Dica\n      <p class="lb-desc">Previna-se e leia as melhores dicas.</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class="item-row">\n    <ion-col col-6 class="col-left">\n      <div *ngFor="let dica of dicasList; let i = index;">\n        <div class="container-dica" *ngIf="i % 2 === 0" tappable (tap)="abrirDetalheDica(dica)">\n          <div class="container-img"\n               [ngStyle]="{\'background-image\': \'url(\'+dica.imagem?.url+\')\'}"></div>\n          <p class="lb-titulo" [innerHTML]="dica.titulo"></p>\n\n          <p class="lb-subTitulo" [innerHTML]="dica.subtitulo" [ngClass]="getClassColor(dica)"></p>\n\n          <p class="lb-resumo" [innerHTML]="dica.resumo"></p>\n        </div>\n      </div>\n    </ion-col>\n\n    <ion-col col-6 class="col-right">\n      <div *ngFor="let dica of dicasList; let i = index;">\n        <div class="container-dica" *ngIf="i % 2 !== 0" tappable (tap)="abrirDetalheDica(dica)">\n          <div class="container-img"\n               [ngStyle]="{\'background-image\': \'url(\'+dica.imagem.url+\')\'}"></div>\n          <p class="lb-titulo" [innerHTML]="dica.titulo"></p>\n\n          <p class="lb-subTitulo" [innerHTML]="dica.subtitulo" [ngClass]="getClassColor(dica)"></p>\n\n          <p class="lb-resumo" [innerHTML]="dica.resumo" ></p>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/dica/dica.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_dica_provider__["a" /* DicaProvider */]])
    ], DicaPage);
    return DicaPage;
}());

//# sourceMappingURL=dica.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DicaProvider = /** @class */ (function () {
    function DicaProvider(globals) {
        this.globals = globals;
    }
    DicaProvider.prototype.init = function () {
        __WEBPACK_IMPORTED_MODULE_2_parse__["initialize"](this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
        __WEBPACK_IMPORTED_MODULE_2_parse__["serverURL"] = this.globals.serverURL;
    };
    DicaProvider.prototype.getDicas = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var Classe, query, dicas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Classe = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend('dicas');
                        query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Query"](Classe);
                        query.limit(2000);
                        query.descending('updatedAt');
                        return [4 /*yield*/, query.find()];
                    case 1:
                        dicas = _a.sent();
                        resolve(JSON.parse(JSON.stringify(dicas)));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    DicaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */]])
    ], DicaProvider);
    return DicaProvider;
}());

//# sourceMappingURL=dica.provider.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicaDetalhePage; });
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


var DicaDetalhePage = /** @class */ (function () {
    function DicaDetalhePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // ``,
        //   <a href="#">dfsf</a> ,
        this.detalhe = [
            {
                titulo: 'Viagens para áreas com recomendação de vacinação contra febre amarela no Brasil:',
                texto: 'A vacina febre amarela é indicada para residentes e/ou viajantes que se destinam às Áreas com Recomendação de Vacinação (ACRV), com pelo menos 10 dias de antecedência da data da viagem, tempo necessário para que a vacina confira proteção contra a infecção. Confira aqui a Lista dos municípios com recomendação para vacinação contra febre amarela no Brasil.',
            },
            {
                titulo: 'Estrangeiros que irão visitar o Brasil:',
                texto: 'No Brasil não há obrigatoriedade de comprovação vacinal para entrada no país, no entanto, o Ministério da Saúde do Brasil recomenda que os turistas internacionais atualizem a sua situação vacinal previamente à chegada ao Brasil, conforme as orientações do calendário de vacinação do país de origem ou residência.',
            }
        ];
        this.dica = this.navParams.get('dica');
    }
    DicaDetalhePage.prototype.getClassColor = function (dica) {
        return 'lb-color-' + dica.titulo;
    };
    DicaDetalhePage.prototype.openWeb = function () {
        if (this.dica.link) {
            window.open(this.dica.link, '_blank', 'location=yes');
        }
    };
    DicaDetalhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dica-detalhe',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/dica-detalhe/dica-detalhe.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{dica.titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class="card-detalhe">\n    <ion-card-header>\n      <img class="img-detalhe" [src]="dica.imagem?.url" *ngIf="dica.imagem?.url"/>\n    </ion-card-header>\n\n    <ion-card-content>\n      <div class="content-detalhe" >\n        <p class="lb-titulo" [innerHTML]="dica?.titulo_detalhe" [ngClass]="getClassColor(dica)" *ngIf="dica?.titulo_detalhe">\n\n        </p>\n\n        <p class="lb-texto" [innerHTML]="dica?.texto" *ngIf="dica?.texto"></p>\n      </div>\n    </ion-card-content>\n    <button *ngIf="dica?.link"  ion-button block (tap)="openWeb()">Clique aqui.</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/dica-detalhe/dica-detalhe.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
    ], DicaDetalhePage);
    return DicaDetalhePage;
}());

//# sourceMappingURL=dica-detalhe.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampanhasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_twitter__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CampanhasPage = /** @class */ (function () {
    function CampanhasPage(twitter) {
        this.twitter = twitter;
        this.tweets = [];
        this.empty = false;
        this.loading = false;
    }
    CampanhasPage.prototype.ionSelected = function () {
        this.content.scrollToTop();
    };
    CampanhasPage.prototype.loadMore = function (ev) {
        var _this = this;
        this.loading = false;
        this.twitter.next().subscribe(function (tweets) {
            _this.tweets = _this.tweets.concat(tweets);
            _this.loading = false;
            ev.complete();
        });
    };
    CampanhasPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loading = true;
        this.twitter.update().subscribe(function (tweets) {
            _this.loading = false;
            _this.tweets = tweets;
            _this.empty = (_this.tweets.length == 0);
        });
        this.empty = (this.tweets.length == 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Content */])
    ], CampanhasPage.prototype, "content", void 0);
    CampanhasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'campanhas',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/campanhas/campanhas.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Notícias\n      <p class="lb-desc">Veja novidades sobre o Ministério da Saúde</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="empty && !loading">\n    <div class="empty-campanhas">\n\n      <div class="container-img">\n        <img class="image-empty" src="assets/imgs/empty-file-2.png">\n      </div>\n\n      <strong>Não existem campanhas<br>disponíveis no momento.</strong>\n      <br><br>\n      Tente novamente mais tarde.\n    </div>\n  </div>\n\n  <div *ngIf="tweets.length == 0 && loading">\n    <ion-spinner class="spinner-list"></ion-spinner>\n  </div>\n\n  <ion-list *ngIf="tweets.length > 0">\n    <campanhas--tweet *ngFor="let tweet of tweets"\n                      [tweet]="tweet">\n    </campanhas--tweet>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/campanhas/campanhas.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__providers_twitter__["b" /* TwitterProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_twitter__["b" /* TwitterProvider */]])
    ], CampanhasPage);
    return CampanhasPage;
}());

//# sourceMappingURL=campanhas.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TweetMedia */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tweet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TwitterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable_fromPromise__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable_fromPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TweetMedia = /** @class */ (function () {
    function TweetMedia(type, url) {
        this.type = type;
        this.url = url;
    }
    return TweetMedia;
}());

var Tweet = /** @class */ (function () {
    function Tweet(text, media, date) {
        this.text = text;
        this.media = media;
        this.date = date;
    }
    return Tweet;
}());

var TwitterProvider = /** @class */ (function () {
    function TwitterProvider(http) {
        this.http = http;
        this.nextQuery = '';
        this.finished = false;
    }
    TwitterProvider_1 = TwitterProvider;
    TwitterProvider.prototype.authenticate = function () {
        this.http.setHeader('https://api.twitter.com/', 'Authorization', 'Basic ' + TwitterProvider_1.secret);
        this.http.setHeader('https://api.twitter.com/', 'Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        this.http.setHeader('https://api.twitter.com/', 'Access-Control-Allow-Origin', 'http://localhost:8080');
        this.http.setHeader('https://api.twitter.com/', 'Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
        this.http.setHeader('https://api.twitter.com/', 'Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization, Origin, Accept');
        this.http.setDataSerializer('urlencoded');
        var retorno = Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable_fromPromise__["fromPromise"])(this.http.post('https://api.twitter.com/oauth2/token?grant_type=client_credentials', {}, this.http.getHeaders('https://api.twitter.com/')));
        return retorno.map(function (res) {
            TwitterProvider_1.bearer = JSON.parse(res.data).access_token;
        });
    };
    TwitterProvider.prototype.update = function () {
        var _this = this;
        this.finished = false;
        console.log('inicio do update twitter');
        return this.authenticate().flatMap(function () {
            console.log('depois de autenticar no twitter');
            return _this.load();
        });
    };
    TwitterProvider.prototype.next = function () {
        var _this = this;
        if (this.finished)
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                observer.next([]);
                observer.complete();
            });
        return this.authenticate().flatMap(function () {
            return _this.load(_this.nextQuery);
        });
    };
    TwitterProvider.prototype.load = function (next) {
        var _this = this;
        if (next === void 0) { next = ''; }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.setHeader('https://api.twitter.com', 'Authorization', 'Bearer ' + TwitterProvider_1.bearer);
            var tweets = [];
            var request = function () {
                _this.http.get("https://api.twitter.com/1.1/statuses/user_timeline.json?" + next + "&screen_name=minsaude&count=10&tweet_mode=extended&exclude_replies=true&include_rts=1&", null, _this.http.getHeaders('https://api.twitter.com')).then(function (res) {
                    var response = JSON.parse(res.data);
                    console.log('response load twitter', response);
                    _this.finished = !response.length;
                    if (_this.finished) {
                        observer.next(tweets);
                        observer.complete();
                        return;
                    }
                    _this.nextQuery = "max_id=" + response[response.length - 1].id;
                    for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                        var status_1 = response_1[_i];
                        if (status_1.retweeted_status || status_1.in_reply_to_user_id || status_1.in_reply_to_status_id) {
                            continue;
                        }
                        var medias = [];
                        if (status_1.entities.media) {
                            for (var _a = 0, _b = status_1.entities.media; _a < _b.length; _a++) {
                                var media = _b[_a];
                                medias.push(new TweetMedia(media.type, media.media_url));
                            }
                        }
                        var date = new Date(status_1.created_at);
                        var tweet = new Tweet(status_1.full_text, medias, date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear());
                        tweets.push(tweet);
                    }
                    if (response.length != 0 && tweets.length <= 10) {
                        next = _this.nextQuery;
                        request();
                    }
                    else {
                        observer.next(tweets);
                        observer.complete();
                    }
                });
            };
            var hideFooterTimeout = setTimeout(function () {
                request();
            }, 200);
        });
    };
    TwitterProvider.secret = btoa('cUMele8GTsTpunOIYSA2ckthg:kcG7RuVgYFLpeJCk2DG2rwPrreOY7dWkCsmqzk2zIHGHqU10RF');
    TwitterProvider.bearer = '';
    TwitterProvider = TwitterProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], TwitterProvider);
    return TwitterProvider;
    var TwitterProvider_1;
}());

//# sourceMappingURL=twitter.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbstractProvider = /** @class */ (function () {
    function AbstractProvider(storage) {
        this.storage = storage;
    }
    AbstractProvider.prototype.montarHeadersBC = function () {
        var headers = '';
        if (this.storage.get('token_bc')) {
            headers = 'Authorization: ' + this.storage.get('token_bc');
        }
        return headers;
    };
    AbstractProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AbstractProvider);
    return AbstractProvider;
}());

//# sourceMappingURL=abstract.provider.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__termo_termo__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnboardPage = /** @class */ (function () {
    function OnboardPage(navCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.lastSlide = false;
        this.onboarList = [
            {
                imagem: 'assets/imgs/onboard/onboard-1.png',
                titulo: "Bem-vindo ao <br>Coronav\u00EDrus-SUS",
                texto: "A plataforma oficial do Minist\u00E9rio da Sa\u00FAde com dicas, informa\u00E7\u00F5es e not\u00EDcias sobre a Doen\u00E7a pelo Coronav\u00EDrus 2019 (COVID-19)",
            },
            {
                imagem: 'assets/imgs/onboard/onboard-2.png',
                titulo: "Conhe\u00E7a um pouco mais sobre o COVID-19. Fa\u00E7a uma auto-avalia\u00E7\u00E3o r\u00E1pida!",
                texto: "Responda algumas perguntas. Informe os sintomas que est\u00E1 sentindo, confirme ou descarte sua suspeita e encontre a unidade de sa\u00FAde mais pr\u00F3xima para atendimento.",
            }
        ];
    }
    OnboardPage.prototype.ionViewDidEnter = function () {
        this.slidIndex = this.slider.getActiveIndex();
        console.log('ionViewDidLoad OnboardPage');
    };
    OnboardPage.prototype.onSlideChanged = function () {
        if (this.slider.getActiveIndex() >= 0 && this.slider.getActiveIndex() <= 2) {
            this.slidIndex = this.slider.getActiveIndex();
        }
        this.lastSlide = this.slider.isEnd();
    };
    OnboardPage.prototype.pular = function () {
        this.slider.slideTo(2, 1000);
    };
    OnboardPage.prototype.login = function () {
        console.log('evt login');
    };
    OnboardPage.prototype.home = function () {
        var _this = this;
        this.storage.set('onboard-view', true);
        this.storage.get('termo').then(function (termo) {
            if (termo) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__termo_termo__["a" /* TermoPage */], { showBackButton: false });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], OnboardPage.prototype, "slider", void 0);
    OnboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-onboard',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/onboard/onboard.html"*/'<ion-content class="onboard-content" no-bounce>\n\n  <ion-slides #slider\n              (ionSlideDidChange)="onSlideChanged()"\n              pager="true">\n\n    <ion-slide class="slide" *ngFor="let onboard of onboarList; let i = index;">\n\n      <div class="slide-conteudo">\n        <div class="container-img" [ngClass]="\'img-\' + (i+1)">\n          <img [src]="onboard.imagem"/>\n        </div>\n\n        <p [innerHtml]="onboard.titulo" class="lb-title"></p>\n\n        <p [innerHtml]="onboard.texto" class="lb-description"></p>\n\n        <div class="container-pagination">\n          <div class="point-marker" [ngClass]="{\'activated\': (i == 0)}"></div>\n          <div class="point-marker" [ngClass]="{\'activated\': (i == 1)}"></div>\n          <!-- <div class="point-marker" [ngClass]="{\'activated\': (i == 2)}"></div> -->\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n<ion-footer>\n  <button ion-button\n          block\n          class="btn-footer"\n          (tap)="home()">ACESSAR O APP\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/onboard/onboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], OnboardPage);
    return OnboardPage;
}());

//# sourceMappingURL=onboard.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MapLoaded */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connectivity_provider__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapLoaded = 'map.loaded';
var MapProvider = /** @class */ (function () {
    function MapProvider(events, connectivity) {
        this.events = events;
        this.connectivity = connectivity;
        this.mapInitialised = false;
    }
    MapProvider.prototype.isInitialised = function () {
        return this.mapInitialised;
    };
    MapProvider.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.attachListeners();
            // if (this.connectivity.isOffline()) {
            //   reject();
            //   return;
            // }
            if (_this.isLoaded()) {
                _this.mapInitialised = true;
                _this.events.publish(MapLoaded);
                resolve();
                return;
            }
            if (document.getElementById('googleMaps')) {
                return;
            }
            // Load the SDK
            window['mapInit'] = function () {
                _this.mapInitialised = true;
                _this.events.publish(MapLoaded);
                resolve();
            };
            if (!document.getElementById('googleMaps')) {
                var script_tag = document.createElement('script');
                script_tag.setAttribute('type', 'text/javascript');
                script_tag.setAttribute('id', 'googleMaps');
                script_tag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?callback=mapInit&v=3&key=AIzaSyDvCGq-l3R_YMLVZHCkWydnTO8qv0uXAyk');
                (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_tag);
                var script_cluster = document.createElement('script');
                script_cluster.setAttribute('type', 'text/javascript');
                script_cluster.setAttribute('src', 'markerclusterer.js');
                (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script_cluster);
            }
            // let script = document.createElement('script');
            // script.id = 'googleMaps';
            // script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
            // document.body.appendChild(script);
        });
    };
    MapProvider.prototype.isLoaded = function () {
        return !(typeof google === 'undefined' || typeof google.maps === 'undefined');
    };
    MapProvider.prototype.attachListeners = function () {
        var _this = this;
        this.connectivity.watchOnline().subscribe(function () {
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                if (!_this.mapInitialised) {
                    _this.load();
                }
            }, 2000);
        });
    };
    MapProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */], __WEBPACK_IMPORTED_MODULE_2__connectivity_provider__["a" /* ConnectivityProvider */]])
    ], MapProvider);
    return MapProvider;
}());

//# sourceMappingURL=map.provider.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityProvider = /** @class */ (function () {
    function ConnectivityProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityProvider.prototype.watchOnline = function () {
        return this.network.onConnect();
    };
    ConnectivityProvider.prototype.watchOffline = function () {
        return this.network.onDisconnect();
    };
    ConnectivityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityProvider);
    return ConnectivityProvider;
}());

//# sourceMappingURL=connectivity.provider.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroMembroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_foto_membro_foto_membro__ = __webpack_require__(238);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistroMembroComponent = /** @class */ (function () {
    function RegistroMembroComponent(platform, actionSheetCtrl, camera, file, util, modalController) {
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.file = file;
        this.util = util;
        this.modalController = modalController;
        this.showArrow = true;
        this.photo = '';
    }
    RegistroMembroComponent.prototype.ngOnInit = function () {
        this.getFoto();
    };
    RegistroMembroComponent.prototype.getFoto = function () {
        if (this.informacoes.foto) {
            if (typeof this.informacoes.foto['url'] != 'undefined') {
                this.photo = this.informacoes.foto['url'];
            }
        }
    };
    RegistroMembroComponent.prototype.getDataUltimoRegistro = function () {
        if (this.informacoes.registros) {
            if (this.informacoes.registros[0]) {
                var mo = __WEBPACK_IMPORTED_MODULE_1_moment__(this.informacoes.registros[0]['createdAt']).locale('pt-br');
                return mo.format('LLL');
            }
        }
        return 'Sem registros';
    };
    RegistroMembroComponent.prototype.getUltimosSintomas = function () {
        if (this.informacoes.registros) {
            var regComSintomas = this.informacoes.registros.filter(function (sint) {
                return typeof sint['sintomas'] != 'undefined';
            });
            if (regComSintomas.length > 0) {
                var arraySint = regComSintomas[0]['sintomas']['sintomas'];
                var sintomas_1 = '';
                arraySint.forEach(function (element) {
                    sintomas_1 = element.nome + ", " + sintomas_1;
                });
                return sintomas_1.substring(0, sintomas_1.length - 2);
            }
        }
        return '-';
    };
    RegistroMembroComponent.prototype.getTemperatura = function () {
        if (this.informacoes.registros) {
            var regComTemp = this.informacoes.registros.filter(function (sint) {
                return typeof sint['temperatura'] != 'undefined';
            });
            if (regComTemp.length > 0) {
                return regComTemp[0]['temperatura'] + " \u00B0C";
            }
        }
        return '-';
    };
    RegistroMembroComponent.prototype.getDuracao = function () {
        if (this.informacoes.registros) {
            var regComTemp = this.filterArray('duracao');
            if (regComTemp.length > 0) {
                var plu = parseInt(regComTemp[0]['duracao']) > 1 ? 's' : '';
                var d = parseInt(regComTemp[0]['duracao']);
                return d + " Dia" + plu;
            }
        }
        return '-';
    };
    RegistroMembroComponent.prototype.filterArray = function (prop) {
        return this.informacoes.registros.filter(function (sint) {
            return typeof sint[prop] != 'undefined';
        });
    };
    RegistroMembroComponent.prototype.trocarFoto = function () {
        var _this = this;
        var buttons = [
            {
                text: 'Tirar uma foto',
                icon: 'camera',
                handler: function () {
                    if (_this.platform.is('cordova'))
                        _this._takePicture('camera');
                    else {
                        _this.photo = 'https://octodex.github.com/images/baracktocat.jpg';
                    }
                }
            },
            {
                text: 'Galeria',
                icon: 'images',
                handler: function () {
                    _this._takePicture('galeria');
                }
            }
        ];
        if (this.photo) {
            buttons.push({
                text: 'Exibir foto',
                icon: 'image',
                handler: function () {
                    _this.modalController.create(__WEBPACK_IMPORTED_MODULE_7__pages_foto_membro_foto_membro__["a" /* FotoMembroPage */], { foto: _this.photo }).present();
                }
            });
            buttons.push({
                text: 'Excluir foto',
                icon: 'trash',
                handler: function () {
                    _this.photo = null;
                    _this.updatePhoto();
                }
            });
        }
        buttons.push({
            text: 'Cancelar',
            role: 'cancel'
        });
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Escolha a opção ',
            buttons: buttons
        });
        actionSheet.present();
    };
    /**
     * Recupera a foto da camera ou galeria
     * @param tipo - camera ou galeria
     */
    RegistroMembroComponent.prototype._takePicture = function (tipo) {
        var _this = this;
        this.util.onLoading('Carregando...');
        var imageSizeWidth = 795;
        var imageSizeHeight = 1141;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: imageSizeWidth,
            targetHeight: imageSizeHeight,
            allowEdit: this.platform.is('android'),
            correctOrientation: false,
            saveToPhotoAlbum: false
        };
        if (tipo === 'galeria') {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        this.camera.getPicture(options).then(function (imageUri) {
            _this.file.resolveLocalFilesystemUrl(imageUri).then(function (response) {
                var nativeUrl = _this.platform.is('ios') ? response.toInternalURL() : response.nativeURL;
                var start = nativeUrl.lastIndexOf('/') + 1;
                var end = nativeUrl.length;
                var nome = nativeUrl.substring(start, end);
                var path = nativeUrl.substring(0, nativeUrl.lastIndexOf('/'));
                _this.file.readAsDataURL(path, nome).then(function (data) {
                    if (_this.getSize(data) <= 5000000) {
                        _this.extensaoFoto = nome.substr(nome.lastIndexOf('.') + 1);
                        _this.photo = data;
                        _this.updatePhoto(new __WEBPACK_IMPORTED_MODULE_4_parse__["File"](_this.nome + '.' + _this.extensaoFoto, { base64: _this.photo }));
                        _this.util.endLoading();
                    }
                    else {
                        _this.util.endLoading();
                        _this.util.toast('O tamanho máximo de arquivo é 5 MB!');
                    }
                }).catch(function (error) {
                    _this.util.endLoading();
                    _this.util.toast('Erro ao recuperar a foto!');
                    console.error('Erro ao recuperar arquivo', error);
                });
            });
        }).catch(function (error) {
            _this.util.endLoading();
            // this.util.toast('Erro ao recuperar a foto!');
            console.error('Erro ao recuperar foto', error);
        });
    };
    RegistroMembroComponent.prototype.updatePhoto = function (file) {
        var Membro = __WEBPACK_IMPORTED_MODULE_4_parse__["Object"].extend("membros");
        var query = new __WEBPACK_IMPORTED_MODULE_4_parse__["Query"](Membro);
        query.equalTo("objectId", this.informacoes.objectId);
        query.first({
            success: function (object) {
                if (file)
                    object.set("foto", file);
                else
                    object.set("foto", null);
                object.save();
            },
            error: function (error) {
                console.log("Error: " + error.code + " " + error.message);
            }
        });
    };
    RegistroMembroComponent.prototype.getSize = function (base64) {
        return ((4 * base64.length / 3) + 3) & ~3;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroMembroComponent.prototype, "informacoes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RegistroMembroComponent.prototype, "showArrow", void 0);
    RegistroMembroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'registro-membro',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/registro-membro/registro-membro.html"*/'<ion-item>\n  <div class="cabecalho">\n    <button ion-button clear icon-only (click)="trocarFoto()" style="width: 70px; height: 70px">\n      <ion-avatar>\n        <ion-icon name="dds-user-simple-line" *ngIf="!photo" ></ion-icon>\n        <img src="{{photo}}" *ngIf="photo" >\n        <ion-icon name="md-create" class="edit-foto"></ion-icon>\n      </ion-avatar>\n    </button>\n\n    <div>\n      <h2 class="name">{{informacoes.nome}} ({{informacoes.parentesco}})</h2>\n      <!-- <p class="date">{{getDataUltimoRegistro()}}</p> -->\n    </div>\n  </div>\n\n\n  <div class="informacoes">\n    <p class="info-last-record">Informações dos últimos registros</p>\n    <span>Sintomas</span>\n    <p>{{getUltimosSintomas()}}</p>\n\n    <div class="informacoes-bottom">\n\n      <div class="coluna-1">\n        <span>Temperatura</span>\n        <p>{{getTemperatura()}}</p>\n      </div>\n\n      <div class="coluna-2">\n        <span>Duração</span>\n        <p>{{getDuracao()}}</p>\n      </div>\n    </div>\n  </div>\n\n  <ion-icon name="arrow-forward" class="navigation-indicator" item-end *ngIf="showArrow"></ion-icon>\n\n</ion-item>\n\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/registro-membro/registro-membro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */]])
    ], RegistroMembroComponent);
    return RegistroMembroComponent;
}());

//# sourceMappingURL=registro-membro.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldMask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldMask = /** @class */ (function () {
    function FieldMask() {
        this.type = '';
        this.casasDecimais = 2;
    }
    FieldMask.prototype.onInput = function (element) {
        if (this.type.toLocaleLowerCase() === 'phone') {
            element.value = this.formatarTelefone(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'cpf') {
            element.value = this.formatarCpf(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'cns') {
            element.value = this.formatarCns(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'cnscpf') {
            element.value = this.formatarCpfCns(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'numero') {
            element.value = this.formatarNumero(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'altura') {
            element.value = this.formatarAltura(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'sonumero') {
            element.value = this.formatarSoNumero(element.value);
        }
        else if (this.type.toLocaleLowerCase() === 'rgct') {
            element.value = this.formatarRgct(element.value);
        }
        var posicao = element.value.length;
        if (element.createTextRange) {
            var range = element.createTextRange();
            range.move('character', posicao);
            range.select();
        }
        else if (element.selectionStart) {
            element.focus();
            setTimeout(function () { return element.setSelectionRange(posicao, posicao); }, 10);
        }
        else {
            element.focus();
        }
    };
    FieldMask.prototype.formatarRgct = function (value) {
        if (!value || value.length < 5) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.substr(0, value.length - 4) + '-' + value.substr(value.length - 4);
        return value;
    };
    FieldMask.prototype.formatarTelefone = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        return value;
    };
    FieldMask.prototype.formatarCpf = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1-$2');
        return value;
    };
    FieldMask.prototype.formatarCpfCns = function (value) {
        if (!value) {
            return value;
        }
        if (value.replace(/\D/g, '').length <= 11) {
            return this.formatarCpf(value);
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        return value;
    };
    FieldMask.prototype.formatarCns = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        value = value.replace(/(\d{4})(\d)/, '$1.$2');
        return value;
    };
    FieldMask.prototype.formatarNumero = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        if (!value) {
            return '';
        }
        if (value.length - this.casasDecimais > 0) {
            value = value.substring(0, value.length - this.casasDecimais) + ',' + value.substring(value.length - this.casasDecimais);
        }
        return value;
    };
    FieldMask.prototype.formatarAltura = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        if (!value) {
            return '';
        }
        if (value.length > 1) {
            value = value.substring(0, 1) + ',' + value.substring(1);
        }
        return value;
    };
    FieldMask.prototype.formatarSoNumero = function (value) {
        if (!value) {
            return value;
        }
        value = value.replace(/\D/g, '');
        return value;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('masked'),
        __metadata("design:type", String)
    ], FieldMask.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FieldMask.prototype, "casasDecimais", void 0);
    FieldMask = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            host: {
                '(input)': 'onInput($event.target)'
            },
            selector: 'ion-input[masked]'
        })
    ], FieldMask);
    return FieldMask;
}());

//# sourceMappingURL=field-mask.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globals__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_registros__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var NotificacaoPage = /** @class */ (function () {
    function NotificacaoPage(navCtrl, navParams, viewCtrl, toastCtrl, events, globals, util, registros) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.globals = globals;
        this.util = util;
        this.registros = registros;
        this.stepPager = [{ finish: false }, { finish: false }, { finish: false }];
        this.nextButton = 'Próximo';
        this.indexSlide = 0;
        __WEBPACK_IMPORTED_MODULE_2_parse__["initialize"](this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
        __WEBPACK_IMPORTED_MODULE_2_parse__["serverURL"] = this.globals.serverURL;
        delete this.notificador;
    }
    NotificacaoPage.prototype.ngOnInit = function () {
        this._slideToast();
        this._setDescricaoDoCaso();
        this._setLocalizacao();
        this._setNotificador();
        this.scrollTo();
    };
    NotificacaoPage.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('slideToast');
        this.events.unsubscribe('set-descricao-do-caso');
        this.events.unsubscribe('set-localizacao');
        this.events.unsubscribe('set-notificador');
        this.events.unsubscribe('scrollToItem');
    };
    NotificacaoPage.prototype._setNotificador = function () {
        var _this = this;
        this.events.subscribe('set-notificador', function (data) {
            _this.notificador = data;
            _this.stepPager[0].finish = true;
            _this.indexSlide = 1;
            setTimeout(function () {
                _this.content.scrollTo(0, 0, 0);
            }, 500);
        });
    };
    NotificacaoPage.prototype._setDescricaoDoCaso = function () {
        var _this = this;
        this.events.subscribe('set-descricao-do-caso', function (data) {
            _this.descricaoDoCaso = data;
            _this.stepPager[1].finish = true;
            _this.indexSlide = 2;
        });
    };
    NotificacaoPage.prototype._setLocalizacao = function () {
        var _this = this;
        this.events.subscribe('set-localizacao', function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.registros.getCPF().then(function (r) {
                            if (r != 'err')
                                _this.cpf = r.replace(/[^\d]+/g, '');
                        })];
                    case 1:
                        _a.sent();
                        this.util.onLoading('Enviando notificação...');
                        this.localizacao = data;
                        this.stepPager[2].finish = true;
                        this.enviaDadosNotificacao();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    NotificacaoPage.prototype.enviaDadosNotificacao = function () {
        var _this = this;
        // salva notificacao
        var NotificacaoAgente = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend("notificacoesAgente");
        var notificacao = new NotificacaoAgente();
        notificacao.set("situacaoNotificada", this.descricaoDoCaso.situacaoNotificadaChecked);
        notificacao.set("principalSuspeita", this.descricaoDoCaso.principalSuspeita);
        notificacao.set("casosSuspeitosEConfirmados", this.descricaoDoCaso.casosSuspeitosEConfirmados);
        notificacao.set("descricaoSituacao", this.descricaoDoCaso.descricaoSituacao);
        notificacao.set("localOcorrencia", this.localizacao.localOcorrencia);
        notificacao.set("estadoDaOcorrencia", this.localizacao.estadoDaOcorrencia);
        notificacao.set("municipioDaOcorrencia", this.localizacao.municipioDaOcorrencia);
        notificacao.set("origemNotificacao", this.notificador.origemNotificacao);
        notificacao.set("outraOrigem", this.notificador.outraOrigem);
        notificacao.set("nomeNotificador", this.notificador.nomeNotificador);
        notificacao.set("profissaoOcupacaoNotificador", this.notificador.profissaoOcupacaoNotificador);
        notificacao.set("estadoNotificador", this.notificador.estadoNotificador);
        notificacao.set("municipioNotificador", this.notificador.municipioNotificador);
        notificacao.set("telefoneNotificador", this.notificador.telefoneNotificador);
        notificacao.set("emailNotificador", this.notificador.emailNotificador);
        notificacao.set("cpfUsuarioLogado", this.cpf);
        notificacao.save().then(function (object) {
            console.log('salvo', object);
            delete _this.descricaoDoCaso;
            delete _this.localizacao;
            delete _this.notificador;
            _this.util.endLoading();
            _this.viewCtrl.dismiss({ notificacaoSucesso: true });
        }, function (error) {
            _this.util.endLoading();
            console.log('error', error);
        });
    };
    NotificacaoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NotificacaoPage.prototype.goto = function () {
        switch (this.indexSlide) {
            case 0: {
                this.events.publish('get-notificador');
                break;
            }
            case 1: {
                this.events.publish('get-descricao-do-caso');
                break;
            }
            case 2: {
                this.events.publish('get-localizacao');
                break;
            }
        }
    };
    NotificacaoPage.prototype.backto = function () {
        var _this = this;
        if (this.indexSlide != 0)
            this.indexSlide--;
        setTimeout(function () {
            switch (_this.indexSlide) {
                case 0: {
                    _this.events.publish('get-notificador', { dadosNotificador: _this.notificador });
                    break;
                }
                case 1: {
                    _this.events.publish('get-descricao-do-caso', { descricao: _this.descricaoDoCaso });
                    break;
                }
                case 2: {
                    _this.events.publish('get-localizacao', { localizacao: _this.localizacao });
                    break;
                }
            }
        }, 100);
    };
    NotificacaoPage.prototype._slideToast = function () {
        var _this = this;
        this.events.subscribe('slideToast', function (slide, descricaoCampo, nomeCampo) {
            console.log(slide, descricaoCampo, nomeCampo);
            // this.slider.slideTo(slide,1000);
            _this.showToast(descricaoCampo, nomeCampo);
        });
    };
    NotificacaoPage.prototype.showToast = function (descricaoCampo, nomeCampo) {
        this.toastCtrl.create({
            message: "O campo \"" + descricaoCampo + "\" \u00E9 obrigat\u00F3rio.",
            position: 'top',
            duration: 2500
        }).present();
        var topPos = document.getElementById(nomeCampo).offsetTop;
        console.log('topPos', topPos);
        // setTimeout(() => {
        // }, 500);
        this.content.scrollTo(0, topPos, 500);
    };
    NotificacaoPage.prototype.scrollTo = function () {
        // this.events.subscribe('scrollToItem', (item) => {
        //   console.log('subScroll', item);
        //   var topPos = document.getElementById(item).offsetTop;
        //   this.content.scrollTo(0, topPos, 500);
        // });
    };
    NotificacaoPage.prototype.slideChanged = function () {
        // console.log('this.slider.getActiveIndex();', this.slider.getActiveIndex());
        this.indexSlide = this.slider.getActiveIndex();
        if (this.slider.getActiveIndex() == 2)
            this.nextButton = 'Enviar';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], NotificacaoPage.prototype, "slider", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], NotificacaoPage.prototype, "content", void 0);
    NotificacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notificacao',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/notificacao/notificacao.html"*/'<ion-header [ngClass]="{\'header-is-iPhoneX\': isIphoneX}">\n  <ion-navbar color="primary">\n    <button ion-button icon-only class="btn-fechar" (tap)="dismiss()">\n      <ion-icon name="md-close"></ion-icon>\n    </button>\n\n    <ion-title>\n      <span *ngIf="!status">Comunicado de risco</span>\n    </ion-title>\n  </ion-navbar>\n\n  <div class="custom-pager">\n    <div class="line"></div>\n    <ul>\n      <li [ngClass]="{\'selected\': ( stepPager[0].finish == true)}">1</li>\n      <li [ngClass]="{\'selected\': ( stepPager[1].finish == true)}">2</li>\n      <li [ngClass]="{\'selected\': ( stepPager[2].finish == true)}">3</li>\n    </ul>\n  </div>\n</ion-header>\n\n<ion-content padding>\n  <div class="content">\n    <dados-notificador [(dadosNotificador)]="notificador" *ngIf="indexSlide == 0"></dados-notificador>\n    <descricao-do-caso *ngIf="indexSlide == 1" ></descricao-do-caso>\n    <localizacao *ngIf="indexSlide == 2"></localizacao>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <div class="content-footer">\n    <button *ngIf="indexSlide > 0"  ion-button round class="next-finish-button" (tap)="backto()">\n      <ion-label>Voltar</ion-label>\n    </button>\n    <button ion-button round class="next-finish-button" (tap)="goto()">\n      <ion-label>{{nextButton}}</ion-label>\n    </button>\n  </div>\n</ion-footer>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/notificacao/notificacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_3__providers_globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_registros__["a" /* RegistrosProvider */]])
    ], NotificacaoPage);
    return NotificacaoPage;
}());

//# sourceMappingURL=notificacao.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmar_email_confirmar_email__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PerguntasPage = /** @class */ (function () {
    function PerguntasPage(navCtrl, navParams, loginProvider, loadingCtrl, toastCtrl, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginProvider = loginProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.perguntaAtual = 0;
        this.index = 0;
        this.pergunta = {};
    }
    PerguntasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Recuperando pergunta'
        });
        loading.present();
        this.usuario = this.navParams.get('usuario');
        this.loginProvider.recuperarPergunta(this.usuario.documento).then(function (perguntas) {
            _this.perguntas = perguntas;
            _this.perguntas[0].erros = 0;
            _this.perguntas[1].erros = 0;
            _this.perguntas[2].erros = 0;
            loading.dismiss();
        }).catch(function (e) {
            loading.dismiss();
            _this.toastCtrl.create({
                message: e,
                position: 'top',
                duration: 4000
            }).present();
            _this.navCtrl.pop();
        });
    };
    PerguntasPage.prototype.onChange = function (pergunta, index) {
        if (pergunta.value) {
            this.pergunta = pergunta;
            this.index = index;
        }
    };
    PerguntasPage.prototype.confirmar = function (pergunta, index) {
        var _this = this;
        if (!pergunta.value) {
            this.toastCtrl.create({
                message: 'Informe sua resposta.',
                position: 'top',
                duration: 4000
            }).present();
            return;
        }
        var resp = pergunta.value;
        if (pergunta.tipo == "DATE") {
            resp = __WEBPACK_IMPORTED_MODULE_3_moment__(pergunta.value).format("DD/MM/YYYY");
        }
        else {
            resp = (pergunta.tipo == 'NUMBER' ? parseFloat(pergunta.value) : pergunta.value);
        }
        var resposta = {
            "idPergunta": pergunta.id.toString(),
            "resposta": resp,
            "documento": this.usuario.documento
        };
        var loading = this.loadingCtrl.create({
            content: 'Verificando resposta'
        });
        loading.present();
        this.loginProvider.confirmarPergunta(resposta).then(function (p) {
            _this.perguntaAtual++;
            _this.pergunta = {};
            loading.dismiss();
            if (_this.perguntaAtual == 3) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__confirmar_email_confirmar_email__["a" /* ConfirmarEmailPage */], {
                    usuario: _this.usuario
                }).then();
            }
        }).catch(function (e) {
            loading.dismiss();
            _this.perguntas[index].erros++;
            if (3 - _this.perguntas[index].erros > 0) {
                _this.toastCtrl.create({
                    message: e.erro + (" - Voc\u00EA tem mais " + (3 - _this.perguntas[index].erros) + " tentativas"),
                    position: 'top',
                    duration: 4000
                }).present();
            }
            else {
                var dh = __WEBPACK_IMPORTED_MODULE_3_moment__().utcOffset(0, true);
                _this.storage.set("acesso-bloqueado-" + _this.usuario.cns, { bloqueado: true, hora: dh }).then(function (b) {
                    _this.toastCtrl.create({
                        message: 'Seu acesso foi bloquedo pelas próximas 24hrs.',
                        position: 'top',
                        duration: 4000
                    }).present();
                });
            }
        });
    };
    PerguntasPage.prototype.voltar = function () {
        var _this = this;
        this.alertCtrl.create({
            title: '',
            message: 'Todo processo será perdido, Deseja mesmo cancelar?',
            buttons: [{
                    text: 'Não'
                }, {
                    text: 'Sim',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Saindo...'
                        });
                        loading.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]).then(function () {
                            loading.dismiss();
                        });
                    }
                }]
        }).present();
    };
    PerguntasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perguntas',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/perguntas/perguntas.html"*/'<ion-header>\n  <ion-navbar color="primary" hideBackButton>\n    <ion-title>Primeiro acesso</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="titulo">\n    <span>Para registrar seu acesso responda corretamente as perguntas abaixo.</span>\n  </div>\n  <div *ngFor="let pergunta of perguntas; let index = index">\n    <div *ngIf="index === perguntaAtual">\n\n      <div *ngIf="pergunta.tipo === \'RADIO\'">\n        <div radio-group\n                  class="perguntas"\n                  [(ngModel)]="pergunta.value"\n                  (ionChange)="onChange(pergunta, index)">\n\n          <p class="titulo-pergunta"\n             [innerHTML]="pergunta.pergunta">\n          </p>\n          <div class="opcoes" *ngFor="let resposta of pergunta.opcoes; let index=index">\n\n            <ion-item class="item-rad" no-lines>\n              <ion-radio item-left mode="md" value="{{index}}"></ion-radio>\n              <ion-label>{{pergunta.opcoes[index]}}</ion-label>\n            </ion-item>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf="pergunta.tipo == \'TEXT\'">\n        <div class="perguntas">\n\n          <p class="titulo-pergunta"\n             [innerHTML]="pergunta.pergunta">\n          </p>\n          <ion-item class="inp">\n            <ion-input (ionChange)="onChange(pergunta,index)"\n                       type="text"\n                       placeholder="Digite aqui..."\n                       [(ngModel)]="pergunta.value">\n            </ion-input>\n          </ion-item>\n        </div>\n      </div>\n\n      <div *ngIf="pergunta.tipo == \'DATE\'">\n        <div class="perguntas">\n\n          <p class="titulo-pergunta"\n             [innerHTML]="pergunta.pergunta">\n          </p>\n          <ion-item class="inp">\n            <ion-datetime displayFormat="DD/MM/YYYY"\n                          (ionChange)="onChange(pergunta,index)"\n                          [cancelText]="\'Cancelar\'" [doneText]="\'Confirmar\'"\n                          [(ngModel)]="pergunta.value">>\n            </ion-datetime>\n          </ion-item>\n        </div>\n      </div>\n\n      <div *ngIf="pergunta.tipo == \'NUMBER\'">\n        <div class="perguntas">\n\n          <p class="titulo-pergunta"\n             [innerHTML]="pergunta.pergunta">\n          </p>\n          <ion-item class="inp">\n            <ion-input type="tel"\n                       [(ngModel)]="pergunta.value"\n                       (ionChange)="onChange(pergunta,index)">\n            </ion-input>\n          </ion-item>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div bottom center class="botoes">\n    <button ion-button block\n            (tap)="voltar()"\n            color="secondary">Cancelar\n    </button>\n\n    <button ion-button block\n            color="pink"\n            (tap)="confirmar(pergunta, index)">Confirmar\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/perguntas/perguntas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PerguntasPage);
    return PerguntasPage;
}());

//# sourceMappingURL=perguntas.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(538);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__transition_fade__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_providers__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_sintomas_list_provider__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_http__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__util_field_mask__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_diagnostico_provider__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_space_header_space_header_module__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_captcha_captcha_module__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_informacoes_basicas_bc_informacoes_basicas_bc_module__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_perguntas_perguntas_module__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_confirma_pin_confirma_pin_module__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_cria_senha_cria_senha_module__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_descricao_do_caso_descricao_do_caso_module__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_localizacao_localizacao_module__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dados_notificador_dados_notificador_module__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_components_module__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_brmasker_ionic_3__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_virtual_scroller__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_virtual_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ngx_virtual_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_app_version__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_file__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_ubs_provider__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







































var AppModule = /** @class */ (function () {
    function AppModule(config) {
        config.setTransition('fade-transition', __WEBPACK_IMPORTED_MODULE_14__transition_fade__["a" /* FadeTransition */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages__["a" /* APP_PAGES */],
                __WEBPACK_IMPORTED_MODULE_19__util_field_mask__["a" /* FieldMask */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { animate: false, scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/adiciona-medicamento/adiciona-medicamento.module#AdicionaMedicamentoPageModule', name: 'AdicionaMedicamentoPage', segment: 'adiciona-medicamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adicionar-membro/adicionar-membro.module#AdicionarMembroPageModule', name: 'AdicionarMembroPage', segment: 'adicionar-membro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alert-diario-saude/alert-diario-saude.module#AlertDiarioSaudePageModule', name: 'AlertDiarioSaudePage', segment: 'alert-diario-saude', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-notificacao/detalhe-notificacao.module#DetalheNotificacaoPageModule', name: 'DetalheNotificacaoPage', segment: 'detalhe-notificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmar-email/confirmar-email.module#ConfirmarEmailPageModule', name: 'ConfirmarEmailPage', segment: 'confirmar-email', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-perfil/detalhe-perfil.module#DetalhePerfilPageModule', name: 'DetalhePerfilPage', segment: 'detalhe-perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/foto-membro/foto-membro.module#FotoMembroPageModule', name: 'FotoMembroPage', segment: 'foto-membro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alert-uso-dados/alert-uso-dados.module#AlertUsoDadosPageModule', name: 'AlertUsoDadosPage', segment: 'alert-uso-dados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historico-notificacoes/historico-notificacoes.module#HistoricoNotificacoesPageModule', name: 'HistoricoNotificacoesPage', segment: 'historico-notificacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-cns/login-cns.module#LoginCnsPageModule', name: 'LoginCnsPage', segment: 'login-cns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notificacao/notificacao.module#NotificacaoPageModule', name: 'NotificacaoPage', segment: 'notificacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/novo-registro/novo-registro.module#NovoRegistroPageModule', name: 'NovoRegistroPage', segment: 'novo-registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perguntas/perguntas.module#PerguntasPageModule', name: 'PerguntasPage', segment: 'perguntas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/primeiro-acesso/primeiro-acesso.module#PrimeiroAcessoPageModule', name: 'PrimeiroAcessoPage', segment: 'primeiro-acesso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar-senha-cns/recuperar-senha-cns.module#RecuperarSenhaCnsPageModule', name: 'RecuperarSenhaCnsPage', segment: 'recuperar-senha-cns', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule', name: 'RecuperarSenhaPage', segment: 'recuperar-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro-de-saude/registro-de-saude.module#RegistroDeSaudePageModule', name: 'RegistroDeSaudePage', segment: 'registro-de-saude', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro-medicamento/registro-medicamento.module#RegistroMedicamentoPageModule', name: 'RegistroMedicamentoPage', segment: 'registro-medicamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registros/registros.module#RegistrosPageModule', name: 'RegistrosPage', segment: 'registros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/termo/termo.module#TermoPageModule', name: 'TermoPage', segment: 'termo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_22__components_space_header_space_header_module__["a" /* SpaceHeaderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_23__components_captcha_captcha_module__["a" /* CaptchaComponentModule */],
                __WEBPACK_IMPORTED_MODULE_24__components_informacoes_basicas_bc_informacoes_basicas_bc_module__["a" /* InformacoesBasicasBcModule */],
                __WEBPACK_IMPORTED_MODULE_25__components_perguntas_perguntas_module__["a" /* PerguntasComponentModule */],
                __WEBPACK_IMPORTED_MODULE_26__components_confirma_pin_confirma_pin_module__["a" /* ConfirmaPinComponentModule */],
                __WEBPACK_IMPORTED_MODULE_27__components_cria_senha_cria_senha_module__["a" /* CriaSenhaComponentModule */],
                __WEBPACK_IMPORTED_MODULE_28__components_descricao_do_caso_descricao_do_caso_module__["a" /* DescricaoDoCasoModule */],
                __WEBPACK_IMPORTED_MODULE_29__components_localizacao_localizacao_module__["a" /* LocalizacaoModule */],
                __WEBPACK_IMPORTED_MODULE_30__components_dados_notificador_dados_notificador_module__["a" /* DadosNotificadorModule */],
                __WEBPACK_IMPORTED_MODULE_31__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_34_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_35_ngx_virtual_scroller__["VirtualScrollerModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_15__pages__["a" /* APP_PAGES */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_16__providers_providers__["a" /* Providers */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_device__["a" /* Device */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_38__providers_ubs_provider__["a" /* UbsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"],
                    useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_17__providers_sintomas_list_provider__["a" /* SintomasListProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_diagnostico_provider__["a" /* DiagnosticoProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_diagnostico_provider__["a" /* DiagnosticoProvider */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_33__providers_registros__["a" /* RegistrosProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Config */]])
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegistrosProvider = /** @class */ (function () {
    function RegistrosProvider(storage, platform) {
        this.storage = storage;
        this.platform = platform;
    }
    RegistrosProvider.prototype.getRegistros = function (membro) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCPF().then(function (r) {
                            if (r != 'err') {
                                _this.cpf = r;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var query;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Query"]("saude");
                                            query.descending("createdAt");
                                            query.equalTo("cpfUsuarioLogado", this.cpf);
                                            query.limit(1000);
                                            return [4 /*yield*/, query.find({
                                                    success: function (results) {
                                                        resolve(JSON.parse(JSON.stringify(results)));
                                                    },
                                                    error: function (error) {
                                                        console.log('error', error);
                                                    }
                                                })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                }
            });
        });
    };
    RegistrosProvider.prototype.getCPF = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.storage.get('usuario').then(function (usuario) {
                if (usuario) {
                    if (usuario['cpf'] && usuario['cpf'] != "") {
                        resolve(usuario['cpf']);
                    }
                    else if (usuario['cnsLogin'] && usuario['cnsLogin'] != "") {
                        resolve(usuario['cnsLogin']);
                    }
                    else if (usuario['cns'] && usuario['cns'] != "") {
                        resolve(usuario['cns']);
                    }
                }
                else {
                    if (!_this.platform.is('cordova')) {
                        resolve('02687278130');
                    }
                    resolve('');
                }
            });
        });
    };
    RegistrosProvider.prototype.loadMembros = function (cpf) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Query"]("membros");
                        query.descending("createdAt");
                        query.equalTo("cpfUsuarioLogado", cpf);
                        return [4 /*yield*/, query.find({
                                success: function (results) {
                                    resolve(JSON.parse(JSON.stringify(results)));
                                },
                                error: function (error) {
                                    console.log('error', error);
                                    resolve('err');
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RegistrosProvider.prototype.loadRegistrosMembros = function (cpf) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = new __WEBPACK_IMPORTED_MODULE_1_parse__["Query"]('registros');
                        query.descending("createdAt");
                        query.equalTo("cpfUsuarioLogado", cpf);
                        query.include("sintomas");
                        return [4 /*yield*/, query.find({
                                success: function (results) {
                                    resolve(JSON.parse(JSON.stringify(results)));
                                },
                                error: function (error) {
                                    console.log('error', error);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    RegistrosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* Platform */]])
    ], RegistrosProvider);
    return RegistrosProvider;
}());

//# sourceMappingURL=registros.js.map

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 323,
	"./af.js": 323,
	"./ar": 324,
	"./ar-dz": 325,
	"./ar-dz.js": 325,
	"./ar-kw": 326,
	"./ar-kw.js": 326,
	"./ar-ly": 327,
	"./ar-ly.js": 327,
	"./ar-ma": 328,
	"./ar-ma.js": 328,
	"./ar-sa": 329,
	"./ar-sa.js": 329,
	"./ar-tn": 330,
	"./ar-tn.js": 330,
	"./ar.js": 324,
	"./az": 331,
	"./az.js": 331,
	"./be": 332,
	"./be.js": 332,
	"./bg": 333,
	"./bg.js": 333,
	"./bm": 334,
	"./bm.js": 334,
	"./bn": 335,
	"./bn.js": 335,
	"./bo": 336,
	"./bo.js": 336,
	"./br": 337,
	"./br.js": 337,
	"./bs": 338,
	"./bs.js": 338,
	"./ca": 339,
	"./ca.js": 339,
	"./cs": 340,
	"./cs.js": 340,
	"./cv": 341,
	"./cv.js": 341,
	"./cy": 342,
	"./cy.js": 342,
	"./da": 343,
	"./da.js": 343,
	"./de": 344,
	"./de-at": 345,
	"./de-at.js": 345,
	"./de-ch": 346,
	"./de-ch.js": 346,
	"./de.js": 344,
	"./dv": 347,
	"./dv.js": 347,
	"./el": 348,
	"./el.js": 348,
	"./en-au": 349,
	"./en-au.js": 349,
	"./en-ca": 350,
	"./en-ca.js": 350,
	"./en-gb": 351,
	"./en-gb.js": 351,
	"./en-ie": 352,
	"./en-ie.js": 352,
	"./en-il": 353,
	"./en-il.js": 353,
	"./en-nz": 354,
	"./en-nz.js": 354,
	"./eo": 355,
	"./eo.js": 355,
	"./es": 356,
	"./es-do": 357,
	"./es-do.js": 357,
	"./es-us": 358,
	"./es-us.js": 358,
	"./es.js": 356,
	"./et": 359,
	"./et.js": 359,
	"./eu": 360,
	"./eu.js": 360,
	"./fa": 361,
	"./fa.js": 361,
	"./fi": 362,
	"./fi.js": 362,
	"./fo": 363,
	"./fo.js": 363,
	"./fr": 364,
	"./fr-ca": 365,
	"./fr-ca.js": 365,
	"./fr-ch": 366,
	"./fr-ch.js": 366,
	"./fr.js": 364,
	"./fy": 367,
	"./fy.js": 367,
	"./gd": 368,
	"./gd.js": 368,
	"./gl": 369,
	"./gl.js": 369,
	"./gom-latn": 370,
	"./gom-latn.js": 370,
	"./gu": 371,
	"./gu.js": 371,
	"./he": 372,
	"./he.js": 372,
	"./hi": 373,
	"./hi.js": 373,
	"./hr": 374,
	"./hr.js": 374,
	"./hu": 375,
	"./hu.js": 375,
	"./hy-am": 376,
	"./hy-am.js": 376,
	"./id": 377,
	"./id.js": 377,
	"./is": 378,
	"./is.js": 378,
	"./it": 379,
	"./it.js": 379,
	"./ja": 380,
	"./ja.js": 380,
	"./jv": 381,
	"./jv.js": 381,
	"./ka": 382,
	"./ka.js": 382,
	"./kk": 383,
	"./kk.js": 383,
	"./km": 384,
	"./km.js": 384,
	"./kn": 385,
	"./kn.js": 385,
	"./ko": 386,
	"./ko.js": 386,
	"./ky": 387,
	"./ky.js": 387,
	"./lb": 388,
	"./lb.js": 388,
	"./lo": 389,
	"./lo.js": 389,
	"./lt": 390,
	"./lt.js": 390,
	"./lv": 391,
	"./lv.js": 391,
	"./me": 392,
	"./me.js": 392,
	"./mi": 393,
	"./mi.js": 393,
	"./mk": 394,
	"./mk.js": 394,
	"./ml": 395,
	"./ml.js": 395,
	"./mn": 396,
	"./mn.js": 396,
	"./mr": 397,
	"./mr.js": 397,
	"./ms": 398,
	"./ms-my": 399,
	"./ms-my.js": 399,
	"./ms.js": 398,
	"./mt": 400,
	"./mt.js": 400,
	"./my": 401,
	"./my.js": 401,
	"./nb": 402,
	"./nb.js": 402,
	"./ne": 403,
	"./ne.js": 403,
	"./nl": 404,
	"./nl-be": 405,
	"./nl-be.js": 405,
	"./nl.js": 404,
	"./nn": 406,
	"./nn.js": 406,
	"./pa-in": 407,
	"./pa-in.js": 407,
	"./pl": 408,
	"./pl.js": 408,
	"./pt": 409,
	"./pt-br": 410,
	"./pt-br.js": 410,
	"./pt.js": 409,
	"./ro": 411,
	"./ro.js": 411,
	"./ru": 412,
	"./ru.js": 412,
	"./sd": 413,
	"./sd.js": 413,
	"./se": 414,
	"./se.js": 414,
	"./si": 415,
	"./si.js": 415,
	"./sk": 416,
	"./sk.js": 416,
	"./sl": 417,
	"./sl.js": 417,
	"./sq": 418,
	"./sq.js": 418,
	"./sr": 419,
	"./sr-cyrl": 420,
	"./sr-cyrl.js": 420,
	"./sr.js": 419,
	"./ss": 421,
	"./ss.js": 421,
	"./sv": 422,
	"./sv.js": 422,
	"./sw": 423,
	"./sw.js": 423,
	"./ta": 424,
	"./ta.js": 424,
	"./te": 425,
	"./te.js": 425,
	"./tet": 426,
	"./tet.js": 426,
	"./tg": 427,
	"./tg.js": 427,
	"./th": 428,
	"./th.js": 428,
	"./tl-ph": 429,
	"./tl-ph.js": 429,
	"./tlh": 430,
	"./tlh.js": 430,
	"./tr": 431,
	"./tr.js": 431,
	"./tzl": 432,
	"./tzl.js": 432,
	"./tzm": 433,
	"./tzm-latn": 434,
	"./tzm-latn.js": 434,
	"./tzm.js": 433,
	"./ug-cn": 435,
	"./ug-cn.js": 435,
	"./uk": 436,
	"./uk.js": 436,
	"./ur": 437,
	"./ur.js": 437,
	"./uz": 438,
	"./uz-latn": 439,
	"./uz-latn.js": 439,
	"./uz.js": 438,
	"./vi": 440,
	"./vi.js": 440,
	"./x-pseudo": 441,
	"./x-pseudo.js": 441,
	"./yo": 442,
	"./yo.js": 442,
	"./zh-cn": 443,
	"./zh-cn.js": 443,
	"./zh-hk": 444,
	"./zh-hk.js": 444,
	"./zh-tw": 445,
	"./zh-tw.js": 445
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 653;

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractBasePage; });
var AbstractBasePage = /** @class */ (function () {
    function AbstractBasePage(viewName, analytics) {
        this.analytics = analytics;
        this.analytics.trackView(viewName);
    }
    return AbstractBasePage;
}());

//# sourceMappingURL=abstract-base.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtil; });
var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil.removeDiacritics = function (str) {
        if (Object.keys(this.diacriticsMap).length === 0) {
            for (var i = 0; i < this.defaultDiacriticsRemovalMap.length; i++) {
                var letters = this.defaultDiacriticsRemovalMap[i].letters;
                for (var j = 0; j < letters.length; j++) {
                    this.diacriticsMap[letters[j]] = this.defaultDiacriticsRemovalMap[i].base;
                }
            }
        }
        var me = this;
        return str.replace(/[^\u0000-\u007E]/g, function (a) {
            return me.diacriticsMap[a] || a;
        });
    };
    StringUtil.indexOfSemAcentos = function (variavel1, variavel2) {
        // if (variavel1 && variavel2) {
        variavel1 = this.removeDiacritics(variavel1.toLowerCase());
        variavel2 = this.removeDiacritics(variavel2.toLowerCase());
        return variavel1.indexOf(variavel2) > -1;
    };
    StringUtil.defaultDiacriticsRemovalMap = [
        { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
        { 'base': 'AA', 'letters': '\uA732' },
        { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
        { 'base': 'AO', 'letters': '\uA734' },
        { 'base': 'AU', 'letters': '\uA736' },
        { 'base': 'AV', 'letters': '\uA738\uA73A' },
        { 'base': 'AY', 'letters': '\uA73C' },
        { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
        { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
        { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779' },
        { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
        { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
        { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
        { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
        { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
        { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
        { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
        { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
        { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
        { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
        { 'base': 'LJ', 'letters': '\u01C7' },
        { 'base': 'Lj', 'letters': '\u01C8' },
        { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
        { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
        { 'base': 'NJ', 'letters': '\u01CA' },
        { 'base': 'Nj', 'letters': '\u01CB' },
        { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
        { 'base': 'OI', 'letters': '\u01A2' },
        { 'base': 'OO', 'letters': '\uA74E' },
        { 'base': 'OU', 'letters': '\u0222' },
        { 'base': 'OE', 'letters': '\u008C\u0152' },
        { 'base': 'oe', 'letters': '\u009C\u0153' },
        { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
        { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
        { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
        { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
        { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
        { 'base': 'TZ', 'letters': '\uA728' },
        { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
        { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
        { 'base': 'VY', 'letters': '\uA760' },
        { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
        { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
        { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
        { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
        { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
        { 'base': 'aa', 'letters': '\uA733' },
        { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
        { 'base': 'ao', 'letters': '\uA735' },
        { 'base': 'au', 'letters': '\uA737' },
        { 'base': 'av', 'letters': '\uA739\uA73B' },
        { 'base': 'ay', 'letters': '\uA73D' },
        { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
        { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
        { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
        { 'base': 'dz', 'letters': '\u01F3\u01C6' },
        { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
        { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
        { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
        { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
        { 'base': 'hv', 'letters': '\u0195' },
        { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
        { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
        { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
        { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
        { 'base': 'lj', 'letters': '\u01C9' },
        { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
        { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
        { 'base': 'nj', 'letters': '\u01CC' },
        { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
        { 'base': 'oi', 'letters': '\u01A3' },
        { 'base': 'ou', 'letters': '\u0223' },
        { 'base': 'oo', 'letters': '\uA74F' },
        { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
        { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
        { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
        { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
        { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
        { 'base': 'tz', 'letters': '\uA729' },
        { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
        { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
        { 'base': 'vy', 'letters': '\uA761' },
        { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
        { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
        { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
        { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
    ];
    StringUtil.diacriticsMap = {};
    return StringUtil;
}());

//# sourceMappingURL=string-util.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.facebookAPPID = "2110525809169655";
        this.url = '';
        this.parseAppId = '123242d9f6164a2d1b6eb0266010f1b1';
        // this.parseJsId = 'W1ccHDYbSQSeSWJxrdzWGjrSbXxeYMyW5BDGIbVo';
        // this.serverURL = 'https://parseapi.back4app.com/';
        this.serverURL = 'http://mobileapps.saude.gov.br/coronavirus';
        // this.parseRestKey='KZYbBg9bwbEddiRzUCzDSROuij0eWgQUCO1PpaD7';
        this.masterKey = '8798c7b4a2b5ff83a167b072dee17421';
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Globals);
    return Globals;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_onboard_onboard__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_provider__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_globals__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, screenOrientation, ionicApp, storage, mapProvider, splashScreen, globals) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.ionicApp = ionicApp;
        this.storage = storage;
        this.mapProvider = mapProvider;
        this.splashScreen = splashScreen;
        this.globals = globals;
        platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_9_parse__["initialize"](_this.globals.parseAppId, _this.globals.parseJsId, _this.globals.masterKey);
            __WEBPACK_IMPORTED_MODULE_9_parse__["serverURL"] = _this.globals.serverURL;
            _this.mapProvider.load().then(function () {
                _this.storage.get('show-alert-bc').then(function (data) {
                    if (data === null) {
                        _this.storage.set('show-alert-bc', true);
                    }
                }).catch(function (error) {
                    console.log(error);
                });
                _this.getStorageDados();
            }).catch(function () { return console.log('map not loaded'); });
            _this.registerBackButtonAction();
        });
    }
    MyApp.prototype.getStorageDados = function () {
        var _this = this;
        this.storage.get('onboard-view').then(function (data) {
            if (!data) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_onboard_onboard__["a" /* OnboardPage */];
                if (_this.platform.is('cordova')) {
                    _this.statusBar.backgroundColorByHexString('#ffffff');
                    _this.splashScreen.hide();
                }
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                if (_this.platform.is('cordova')) {
                    _this.statusBar.backgroundColorByHexString('#ffffff');
                    _this.splashScreen.hide();
                }
            }
        }, function (error) {
            console.log('Erro = ', error);
        });
    };
    MyApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            try {
                if (_this.platform.is('cordova') && _this.screenOrientation.ORIENTATIONS.LANDSCAPE) {
                    return;
                }
            }
            catch (err) {
                if (_this.platform.is('cordova') && _this.screenOrientation.ORIENTATIONS.LANDSCAPE) {
                    return;
                }
            }
            var loading = _this.ionicApp._loadingPortal.getActive();
            var activePortal = _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            if (loading) {
                return;
            }
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            var activeVC = _this.nav.getActive();
            var page = activeVC.instance;
            if (!(page instanceof __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */])) {
                if (!_this.nav.canGoBack()) {
                    _this.platform.exitApp();
                    return;
                }
                else if (page instanceof __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]) {
                    _this.platform.exitApp();
                    return;
                }
                _this.nav.pop();
                return;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contentPrincipal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/app/app.html"*/'<ion-nav #contentPrincipal [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicApp */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__providers_map_provider__["a" /* MapProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_globals__["a" /* Globals */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_transitions_page_transition__ = __webpack_require__(70);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FadeTransition = /** @class */ (function (_super) {
    __extends(FadeTransition, _super);
    function FadeTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FadeTransition.prototype.init = function () {
        _super.prototype.init.call(this);
        var enteringView = this.enteringView;
        var leavingView = this.leavingView;
        if (enteringView && enteringView.pageRef()) {
            var ele = enteringView.pageRef().nativeElement;
            var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
            wrapper.fromTo('transform', 'scale(1)', 'scale(1)', false);
            wrapper.fromTo('opacity', 0, 1, false);
            this
                .element(enteringView.pageRef())
                .duration(500)
                .easing('cubic-bezier(.1, .7, .1, 1)')
                .add(wrapper);
        }
        if (leavingView && leavingView.pageRef()) {
            var ele = leavingView.pageRef().nativeElement;
            var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular_animations_animation__["a" /* Animation */](this.plt, ele.querySelector('.modal-wrapper'));
            wrapper.fromTo('transform', 'scale(1)', 'scale(1)', true);
            wrapper.fromTo('opacity', 1, 0, true);
            this
                .element(leavingView.pageRef())
                .duration(500)
                .easing('cubic-bezier(.1, .7, .1, 1)')
                .add(wrapper);
        }
    };
    return FadeTransition;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_transitions_page_transition__["a" /* PageTransition */]));

//# sourceMappingURL=fade.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_PAGES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lista_sintomas_lista_sintomas__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mapa_mapa__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dica_dica__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dica_detalhe_dica_detalhe__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mais_mais__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__onboard_onboard__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_modal__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sintomas_sintomas__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__campanhas_campanhas__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__campanhas_tweet_tweet__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__perfil_perfil__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__primeiro_acesso_primeiro_acesso__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__perguntas_perguntas__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__confirmar_email_confirmar_email__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__recuperar_senha_recuperar_senha__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__notificacao_notificacao__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__registros_registros__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__adicionar_membro_adicionar_membro__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__termo_termo__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__registro_de_saude_registro_de_saude__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_cns_login_cns__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__novo_registro_novo_registro__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__detalhe_perfil_detalhe_perfil__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__registro_medicamento_registro_medicamento__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__historico_notificacoes_historico_notificacoes__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__detalhe_notificacao_detalhe_notificacao__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__adiciona_medicamento_adiciona_medicamento__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__recuperar_senha_cns_recuperar_senha_cns__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__foto_membro_foto_membro__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__suspeito_suspeito__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__nao_suspeito_nao_suspeito__ = __webpack_require__(453);
































var APP_PAGES = [
    __WEBPACK_IMPORTED_MODULE_6__onboard_onboard__["a" /* OnboardPage */],
    __WEBPACK_IMPORTED_MODULE_1__mapa_mapa__["a" /* MapaPage */],
    __WEBPACK_IMPORTED_MODULE_2__dica_dica__["a" /* DicaPage */],
    __WEBPACK_IMPORTED_MODULE_3__dica_detalhe_dica_detalhe__["a" /* DicaDetalhePage */],
    __WEBPACK_IMPORTED_MODULE_4__mais_mais__["a" /* MaisPage */],
    __WEBPACK_IMPORTED_MODULE_7__modal_modal__["a" /* ModalPage */],
    __WEBPACK_IMPORTED_MODULE_8__sintomas_sintomas__["a" /* SintomasPage */],
    __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */],
    __WEBPACK_IMPORTED_MODULE_9__campanhas_campanhas__["a" /* CampanhasPage */],
    __WEBPACK_IMPORTED_MODULE_10__campanhas_tweet_tweet__["a" /* CampanhasTweet */],
    __WEBPACK_IMPORTED_MODULE_0__lista_sintomas_lista_sintomas__["a" /* ListaSintomasPage */],
    __WEBPACK_IMPORTED_MODULE_11__perfil_perfil__["a" /* PerfilPage */],
    __WEBPACK_IMPORTED_MODULE_12__primeiro_acesso_primeiro_acesso__["a" /* PrimeiroAcessoPage */],
    __WEBPACK_IMPORTED_MODULE_13__perguntas_perguntas__["a" /* PerguntasPage */],
    __WEBPACK_IMPORTED_MODULE_14__confirmar_email_confirmar_email__["a" /* ConfirmarEmailPage */],
    __WEBPACK_IMPORTED_MODULE_15__recuperar_senha_recuperar_senha__["a" /* RecuperarSenhaPage */],
    __WEBPACK_IMPORTED_MODULE_17__registros_registros__["a" /* RegistrosPage */],
    __WEBPACK_IMPORTED_MODULE_18__adicionar_membro_adicionar_membro__["a" /* AdicionarMembroPage */],
    __WEBPACK_IMPORTED_MODULE_19__termo_termo__["a" /* TermoPage */],
    __WEBPACK_IMPORTED_MODULE_16__notificacao_notificacao__["a" /* NotificacaoPage */],
    __WEBPACK_IMPORTED_MODULE_20__registro_de_saude_registro_de_saude__["a" /* RegistroDeSaudePage */],
    __WEBPACK_IMPORTED_MODULE_21__login_cns_login_cns__["a" /* LoginCnsPage */],
    __WEBPACK_IMPORTED_MODULE_28__recuperar_senha_cns_recuperar_senha_cns__["a" /* RecuperarSenhaCnsPage */],
    __WEBPACK_IMPORTED_MODULE_22__novo_registro_novo_registro__["a" /* NovoRegistroPage */],
    __WEBPACK_IMPORTED_MODULE_23__detalhe_perfil_detalhe_perfil__["a" /* DetalhePerfilPage */],
    __WEBPACK_IMPORTED_MODULE_24__registro_medicamento_registro_medicamento__["a" /* RegistroMedicamentoPage */],
    __WEBPACK_IMPORTED_MODULE_25__historico_notificacoes_historico_notificacoes__["a" /* HistoricoNotificacoesPage */],
    __WEBPACK_IMPORTED_MODULE_26__detalhe_notificacao_detalhe_notificacao__["a" /* DetalheNotificacaoPage */],
    __WEBPACK_IMPORTED_MODULE_27__adiciona_medicamento_adiciona_medicamento__["a" /* AdicionaMedicamentoPage */],
    __WEBPACK_IMPORTED_MODULE_29__foto_membro_foto_membro__["a" /* FotoMembroPage */],
    __WEBPACK_IMPORTED_MODULE_30__suspeito_suspeito__["a" /* SuspeitoPage */],
    __WEBPACK_IMPORTED_MODULE_31__nao_suspeito_nao_suspeito__["a" /* NaoSuspeitoPage */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaisPage; });
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


var MaisPage = /** @class */ (function () {
    function MaisPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-mais',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/mais/mais.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Mais</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/mais/mais.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */]])
    ], MaisPage);
    return MaisPage;
}());

//# sourceMappingURL=mais.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CampanhasTweet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_twitter__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CampanhasTweet = /** @class */ (function () {
    function CampanhasTweet(sanitizer, socialSharing, loadingCtrl) {
        this.sanitizer = sanitizer;
        this.socialSharing = socialSharing;
        this.loadingCtrl = loadingCtrl;
    }
    CampanhasTweet.prototype.shareClicked = function () {
        var loading = this.loadingCtrl.create();
        loading.present();
        var url = '';
        if (this.tweet.media[0])
            url = this.tweet.media[0].url;
        if (url === './assets/images/logo-ms.png')
            url = null;
        var texto = this.tweet.text;
        this.socialSharing.share(texto, 'Guardiões', url).then(function () {
            loading.dismiss();
        }).catch(function () {
            loading.dismiss();
        });
    };
    CampanhasTweet.prototype.reLinkify = function (texto) {
        var t = texto.linkify();
        var matches = t.match(/href="([^"]*")/g) || [];
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            var url = match.split('=')[1];
            t = t.replace(match, "onclick=\"cordova.InAppBrowser.open(" + url.replace(/"/g, '\'') + ", '_blank')\"");
        }
        return this.sanitizer.bypassSecurityTrustHtml(t);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__providers_twitter__["a" /* Tweet */])
    ], CampanhasTweet.prototype, "tweet", void 0);
    CampanhasTweet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'campanhas--tweet',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/campanhas/tweet/tweet.html"*/'<!--<img *ngIf="tweet.media[0]" [src]="tweet.media[0].url" />-->\n<div class="date">{{tweet.date}}</div>\n<div class="text" [innerHTML]="reLinkify(tweet.text)"></div>\n<button ion-button (click)="shareClicked()"> <ion-icon name="md-share"></ion-icon>Compartilhar</button>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/campanhas/tweet/tweet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* LoadingController */]])
    ], CampanhasTweet);
    return CampanhasTweet;
}());

//# sourceMappingURL=tweet.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Providers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__connectivity_provider__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_provider__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saude_provider__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dica_provider__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__abstract_provider__ = __webpack_require__(459);









var Providers = [
    __WEBPACK_IMPORTED_MODULE_0__usuario__["a" /* Usuario */],
    __WEBPACK_IMPORTED_MODULE_1__connectivity_provider__["a" /* ConnectivityProvider */],
    __WEBPACK_IMPORTED_MODULE_2__map_provider__["a" /* MapProvider */],
    __WEBPACK_IMPORTED_MODULE_3__saude_provider__["a" /* SaudeProvider */],
    __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */],
    __WEBPACK_IMPORTED_MODULE_5__dica_provider__["a" /* DicaProvider */],
    __WEBPACK_IMPORTED_MODULE_6__ionic_util__["a" /* IonicUtilProvider */],
    __WEBPACK_IMPORTED_MODULE_7__login_provider__["a" /* LoginProvider */],
    __WEBPACK_IMPORTED_MODULE_8__abstract_provider__["a" /* AbstractProvider */]
];
//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceHeaderComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__space_header__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpaceHeaderComponentModule = /** @class */ (function () {
    function SpaceHeaderComponentModule() {
    }
    SpaceHeaderComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__space_header__["a" /* SpaceHeader */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__space_header__["a" /* SpaceHeader */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__space_header__["a" /* SpaceHeader */]
            ]
        })
    ], SpaceHeaderComponentModule);
    return SpaceHeaderComponentModule;
}());

//# sourceMappingURL=space.header.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpaceHeader = /** @class */ (function () {
    function SpaceHeader() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceHeader.prototype, "title", void 0);
    SpaceHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'space-header',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/space.header/space.header.html"*/'<ion-header #header no-border></ion-header>\n<ion-content>\n  <div class="div-space-header"></div>\n  <div class="body">\n    <div class="wrapper">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/space.header/space.header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SpaceHeader);
    return SpaceHeader;
}());

//# sourceMappingURL=space.header.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__captcha__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CaptchaComponentModule = /** @class */ (function () {
    function CaptchaComponentModule() {
    }
    CaptchaComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__captcha__["a" /* CaptchaComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__captcha__["a" /* CaptchaComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__captcha__["a" /* CaptchaComponent */]
            ]
        })
    ], CaptchaComponentModule);
    return CaptchaComponentModule;
}());

//# sourceMappingURL=captcha.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Captcha__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_Iniciacao__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CaptchaComponent = /** @class */ (function () {
    function CaptchaComponent(util, platform, loginProvider, toastCtrl, storage) {
        this.util = util;
        this.platform = platform;
        this.loginProvider = loginProvider;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.campoValido = false;
        this.captcha = new __WEBPACK_IMPORTED_MODULE_3__models_Captcha__["a" /* Captcha */]();
        this.respostaCaptcha = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.recuperarSenha = false;
    }
    CaptchaComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.events) {
            this.events.subscribe(function (source) {
                if (source == 'captcha') {
                    _this.continuar();
                }
            });
        }
        this.getCaptcha();
    };
    CaptchaComponent.prototype.getCaptcha = function () {
        var _this = this;
        this.textoCaptcha = '';
        this.util.onLoading('Carregando Captcha...');
        if (!this.platform.is('cordova')) {
            this.retornoCaptcha = {
                "imagem": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAAyCAYAAAD1JPH3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABaPSURBVHhe7Z1XqCXF9sYP5qyYZ8w5oBgQA+aAihl1MGdFRTFjwPRXx4R/1Bfxjl5xDOAgOl4QFVHwGmBQH0bxQX1yfJp5k/vkY9/9K87Xd511VlVX995nGC/3g8U+3V1dtWqtr1atqu69z9RWW221fGpqqinJvHnzVs2fP3/lHnvsseK0005btmDBgn8iTz755JJFixYtRn766af/b5rm/8aVP/74Y+Hvv//+THTNytKlS//21ltv/T269leRmj5gW2wSXesjc20rfFbjt5LU9rVUbmqzzTb7V0TiceTggw9uTjjhhCSPPvpoknfeeaf54osvmt9++23Ubgyuv/vuu6l8CZ988knb1uuvvz59dnIYGatZuXLl9NHcoKYPnOf6008/PX2mDuiPCNi1y1bLli2b/msYli9f3rz66qvNn3/+mY75XLFiRWobXfD7zz//nK5FsH31ulAH8sEHHzT33XdfKnfuuec2n3322XSJ/2AKplPJFltskQqut956zZVXXtnceOONzUknnZTIudFGG6Vrk5R99903Ef7+++9vXnjhhVbR448/Pv1dAsbiHvT2jpNBLThny3UB43YNKgvqluOk26efflpsM9cHC86jhw0CuT4CyjMQIRciEEywLe1FoE6ulwjfBRESfdED8sEhjt988810DeF8BO657LLLmgsuuCCVgx+6xwplTj311PbY6zw1EkJ1Gj2QVwUjh2IkOv/cc881o9Sj2X///Ztjjjmm2WCDDdr7xhUG1H777dfccccdaWChB+SwTkQPP4rtCPfAiFF/BBFBgEBRxIraBZynfq499dRTSY+TTz55BqlqUSKsJY0GkAXXo35SX2ngdBFesH2nTnSQHghtf/TRR6nfVhfsT/3Iyy+/nM5ZUFYBtSRHHnlkc+GFF7akR7zOLaEBSl588cVtYRqqhZ1Czz777Oaee+5pDjjggGbTTTdtz48ra621VjPK+dvjww47LBH/m2++aX799ddkwCilyTla6LoOatMcObaUWuVAvdQfDUpgScOnH1y5gdiFLsJD0JdeemlG3wmA6IBEA1czhcB9kHnVqlWzBuOuu+7a2na77bZrjj766FQv5Xzd9PHLL79snnjiiVTG6zyD0MLVV1+dKt9+++2TAopeNOCjpcA5O4XSYaYc5LHHHmueffbZdK/Iw8Ah5dhmm23azowra6+9drPJJps0O+20UzISM86ZZ57Z3H333e30Z0URhgiFw3Qc5Xq+f+OAuqI6OIdeOI0y0seWFWE5N26eTx2+fg87kJGuKN4FCEof1Q/6efrpp89og3SDdrjWFyGhqQgyU/kll1ySFFD0QHIRxCLnEIGO2WjCMWXpCO3RSQg/yXRmLgQ7aQHMlHj44Yenv4877rg0oBDSMpVBmLk4Tz9zcsstt6T1BKLBeNVVV6U2WRAhXOM8aw6u8SmbSxisb7zxxqzzCIs47rOD2QtBCF2uvfbaVPbDDz8My40j9CHKmW+99dbiYGPg++CTFoXcJBEgLZXiJIjHNQx2++23p4qiygDnv/vuu+brr79uneOnDU1fiKawLqCDOo+IQKrnf/LfJ9tuu23inOWlAKdUzi40p9hLFuks8ch3KAxxPHKV2fMXXXTR9NmZsFMYCT4jfsjUYvHtt982DzzwQFsv0ZH82i5yxxHSGCLIbrvt1hx00EFpwcei+P3332+jDDmdypPmaODhECINaQ/HrNJVjiircl5I+2xUR+jX/PnzZ0X8nDATqK01TUgJ0RE/7bzzzs2BBx6YjklFH3zwweaRRx5pXnzxxcQj7OGRW2hOjQz9j+gGKqcwDXjkKrPn77333umzMwF5lYsqUtP+0HzQ53iIX0lTN6Tz+fukFqwMHOqDoOedd16aphUcaFPEBbb/PvKgY2lwc532amc1oD5DEj6/+uqr9MlMaoEu0fkIOf+XUKpfOgoKDqSdrL/sNQvuo33qVmCZ4gmfjcxAhkP4O4Iq8w7InY+Aca+44orm8ccfzyrdBT9AorbpQ0kfm86wLw45J5XOsOglUipqYx/a8gOY85QvrU9ee+21VIb+1gBHqx27XhkH2JF6+/i5C5BcaS1y0003pX4yg7N75fnpYXdc2kWhnE6FWhDi2LmCjax33nlnL4N3EdSihig5YEhSIgj08MMPp0URKQf1bbjhhq3+48jWW2+dUoibb745LfIWL16c7d8rr7yS0h181AV0f+ihh5KTqY+2sMUQQDitl4jO1NkHtf5CZ4QnjGxGkK71HYiJ0HI6ivKwhL8h9TjbQhCBqTdnfDqYm3otNHKFLoJS1urNMf3KTaVy9poqzBTHHnts6gODilkoWoxb2GDBPr0enLDOyCFHOgimuiAz9u9D6HECShfwLREc3cWRRGg5/ZRTTmmVZ994KNQJookdYXakW9C+VUqg/A477JDq0vYYo5acdOnSpdOlZiIyeK5dwDX1+a8mWlgxRdNnCCc7EiyYsrEXi2bdQxkLylOGa5Z01EFg8Pky5yA5YAB4n3lwHd1yAaULtGU5RJvojDC42dJEf/6mrRkphxSX8kMRdcKPdAuuUR7FpTB7pFafnLAgY5HH/UQmtgutAUrtgjWF0JCTQbvjjjtWPQauEaI7YgOV3qGx5RDK8UqDAseJJ56YUiBsSuri82VeDHr77beT3ecKdqYhUAGbL/PEFF9b/rSEZnRyI1soUh5iQi4+Kcx5VVYr1EsddlurNFikMNs1Kt9XeBiDU5hueSCg81G79NPeK2EbiZyZ6Rr9rZQIx0MIXx5h8RuV75L1118/kf3yyy9vd2e0xpmUYK/zzz+/jdQ5od+0ryd7RxxxRLKRJXpfKIAh8MyCazVpqUVLaG5ESTqnCCfmswVnOzaObL755mkLSSkAiuaU1bbepGSXXXZJzqBPEJX+gagsjsshtwNy1llnZftCm9E9tYLd/LSN/qSGpHZE9ui+1SUKIpotFQisPfjbr8tsxKU/JYJ3IQWn0WciNAd25ON4lAIQnChhOzAJgRikAXSEDqCDRS4dWGedddKWH/cweskhMWZUtkuYyqKIS4TOGTTXFlN0DlpXRMIuR3RewhMzPajCRvgF4gxJTdZdd93w/FwLiNY3FvSNx/REfXY5yP37gMHREhoweryzMBpPrZiuIZ6mGyvs3UIum1YsWLAg7XLQAR42HHrooYmI9j6E+rXvaBclAH18eYRoFAFHc13vPuD0rqeF5GlRxGUAK4J70B9fHjnkkEOmS8yGzQe90G8kukbk45VUnjDih4jE+AwSDN1K3GeffZK99txzz/D6uMIrwYAApdnfA/788MMPSQ8W/dzn+VCDGYQWiJqQAWN65XijzZ8jNRAYhbzHzHkUYiDwN/kZ73hEBCNPxCF2StX0FEVDCBWBEU6b3ItgnK4oBmntSl5CChYBw9sXzK3wGLeE3OBS+pWL4rw2a4/xC+RGb81q1IGNu6J9TjT1R9cIRgQJghn+4FWAqFxJSlC/RWDe8NT6JZol5d8IIaEFjMXTKTrCYtEraYUoB9EwCvegEA8JdJ2nZcqRrrnmmhn3IkyrNr/S9ATJmQGUDtGOz8MsaolMBKYNAeMxUzCQGYQiioUMT0Tz9SHnnHPOdMkYkIY2ILZyTj9wiORRIEGOOuqoZFsePETg3prUkPZpWyI75AjNII6ArbmGkMdH90qsrT3kMwU0DS4kmiU5l5s9i4QG3EjFTBU02DcC8L7ElltumaZM6uGlk6gcYjtdmp4gmwypkTqUyBGi+oHa4GWjqG4G/rigzb322iusH6Jfd911SQcLBniUCnrhPXFInwO+ju7TDBIhN4tKWMyyG/Ljjz9m6+E8sw1+of82mGBzBr3WSTb99Uj6jz5DQuecGinPt1NolG0yrg/dViL6EilpU6MVPWz7wI5gvWwzCSILXRFCO0Je6PtQQAyfm+densLOANswTeciugTbUM4SBftGBPPrCY49dC9+Yma15SXohJ14Y85Gb2Zq7IRQRzQQ4Q/3IiW/2tSzXaOM/g4JnXNqRGheo4xANOZpFat/XrccQvaNN944kZF7pQ+jmUfr5HWTJHItqC/XVl9AMrYxWUeoHhaX7GdDHOq0bUiIVLkvklohDeLxsIWNxNjSA3JgZwilwCLYe3OCj5ldu8p2DcQaIQAC7EhgDQmdG70gIjTE8pDTleh78Fqgr4d3fWucVCs4kyiS68tQaDfFSx9CoxOR1g5I+g6ZsB2EAsxOXTs1kfASldITG5BwfO1Drgi5wSyBH5pRczPZEJk3b14KjKyn7HkGj9rjcxahlyxZ0haORm9E6Gee4fdFZoLKMaYd4XagRE7yhoeMRP/bbrstreCZrqKtvz6iR78IxkFHBEfRnkRGisD1qG4kAttRbL3xaJlFp5+l+JkIZjCB9MPaAl14QcnekxPWKywcc9DMy9YYM4NNQwTajtYv9Ls0w1KvBf6+6667UlqRS03gAfXCNWalKGozG/3yyy+tTj7o4TuQBtvosyV0m4dMSzR6I0IjqjQHO/34UYbQsQgaGF2pBe8d4yR2VzjG8LndiKFCPkn/2caKriMaLD4XjQTHYGN2LSyBI0C8Up2kLCzYIWlXXSVYDuBTkQgf2Pas4BtIaWH9DVmZqe09CHZS4KAt2vD8irZofRlxjwE0g9AYjWmCvPf5558PR6+vDOHReCmiATrl75MwKjGkRS2RbY6MvrmX4PmxE2YSBhPRkO9GahErmUROVxJyY20L2pnLg35AEMTalUgV1YsNSvX1gTgAAVmnUH8pDWTvPdpGtf6mv/jI3ofw0pOgWQn72DIRof3iWf4HYQ7tgVElUaqgnQkrPCXkPQMiJulCblsJY/mIwnHfxR66kRvy3T2cYYkAOPbTpXYLckAPHhrhYAlfRrBvr3lhoFDO2qImAlsoLUDsfTlCMxjnAnyTKGpPwu+vMCPkgO0IjDwogQtRHdaHwPcxWpf4MqRz8ncVodPq0VQwCSEasrcYzQI+9fHCAoFRD1nUEZ77n3HGGWkh5MG0SXlfDzpE7YNoiqwVBo6N/Awc6TsOqCtqz+5/23UKiHJhC+znIyw2ueGGG8K2EIINQQwyMugicJ1nD6x/Pv/88zYV9MLgF9AVW9nrpHcentA8qNPAbwlNJ3xUE3wjQwVHM11gCPsDNh5cj+4vCQtGoj07LpoxAJ9c5zt9/h4EAkRO99PapESzQmRvdFFkRtDdRugcoXEwoKzOMeWr73x1i78R2qRtHRNFRUru5z1nnkiqHi/M0BowfvEqWD0Q/E7f7DmE/sgG0lXvcUjwqYcntN1lawmNAXKjDaAkkZP0AbGGRxiBTD86VkTiRX1+uskjN7ohF22R69LhUv5WI/qhydxDChnST304iyhFjujvGUdwLk6M7F1a9GGHXBp26aWXpvvttI79tb3IV6/kF2xrUxq9JN81KyIQKTejWehlMys8APPnNBCBdOUVXFtGKQd6K/D4AMvuiNASujR9WFAxIjDy9AOFfs/Zr5gtosiYIxfACVxHRzoE2dm3Vv1DhPtlSDv1CSKdyviX90UKxH4hYe+99047Doi+o4lwzAAHkb2x15CFKb/3x547f5N2US/EQ7SeQNBZn56YbCn6eiXoxACphY+gCG36c3bBJ139O/AEAHyjY9nNlkH4zZTUh1FdidC56aMEyqtCHApJLVASZaJFWoQSuSLYlTTRjY6K7IxsXcsJ5azTPWS8XBnO23OUx/GcZ1cF+/C3Vu4MCD4pF9lbAxxiqx9Dd17Yjya3ZtcHHWiLvrCzwHX6Y1GyF9fQBZ2oA+F+DWzE+j5HaH6I0Z6jXuxlAxu2sWWs8M147E370fX0/dNRHZ2LwhwsofqM4BxyxCkBA/C6am61jSMhCEbQCy6MenSOtoQsugY5/Y8WoYpG6AbUL7ulyDmRgf7qHtI533/04Dp1QBb6QNlaYbALIoQlIOcm+SuxkSSyBeclspXsEAn2BhGheaU3ZQSj670IjSOswVFEUWku4NOSCBHxRBJPDgG92WIbB5APY8oZgk1RbPt2wPqtOd3DHnlNnwGkpI9aSO2+++7p0wu5t589LWg/um91isjqCc2TYQKPDZiUoTyf3u9ZQmN09pLZXLfEoCKcsDqgznnCdAHnSc8cOShTSxx2ZPQ7dpag7Emjn0+RIC7bVXwxtqYNnMLCuc/sRDmV5ZNFOY+HAZ8MJha1+I8B3wVsBXGI/gi/o8c78JP6QR0vPMVlS47FvyUlfcHO2LDLR/5a4svoMyQ0jWAU/4IL5FpdhO6bUwP0lNE06kuQ8QDGjJzPopcXY7wdaIPpXMSyqB2MpYVzCejBzgH6ShcGxKTADKLf1Vafra7XX3996qOECIp9rPAvTVTeRtjaPovcJfuyiFSZxJfRteqUg5t4FZEXmGqj2ziwU3QtIHFkRA/qVMogImBcHCEQIXBsFCnee++9tp3IKbWDkT5SptRPzkeOlb6c5xM9I3C9Jkp7oBvtqm2O7UO2moCBjj4lrekzYCDRr4hrsi/6qAz19iI0DdhtFe9IESACjZWUnyQiI3rQFwjNDCQiWOJyveS4Lqdwve9gzCHn2GigRcAeLJotOfks2Qf4PB/UBoy5AHprYObsO4vQFLQd98g50hLAEx1gCAzzVwB959/LDXEcNonsVoMakg0BxGdWFTn1Ljo+7At8y73k23Ohawm07Tnkg+gsQnOR0Uz00qisgR25PGb2iJSpgVe4FuheE71wCgsnBCLKYTibv6NIL+JFbXAusht154IEsO3WIhoANfZCB3xB2b4Y514w1J+Ae629sbM4B//S8ej8rJRjaDTFKQsXLgwfdTNVRI4uwSq8aNGiakP0WWhRJwsfLX4ih1kniHj2m+tdbQDqpt7cIOtLFKV+1k/WXvhwTcOk9bNBtP3i8uj8LELjoCGEtiBysO1HesIuAVtfOcjJ3EPUUSSzCktqDEG7tKltK+oSeCvProwF2tYxhpdO1gmkIdTHFtn3338fpl4QEh0tcaNIOi7Y4WDnxf4Kq7VXTZpk+7k60Fe/GsBV6sIH+CMkdBRNuaHPSpmIxrafvjXCvmwEnM11FOMeBhKi9jlvX3bpMgTlKcdXf3xdNnLzMML2EWNT1kd36wTVZ+sU6If92VqEgSN9huSrEezAs5B/aC9Kkywoa19k4p5x0IcbNfqNg5DQkYIogiP7grq4z0+lilq121u1hii1xzXa4br/JrT6R/0+8rITwrog1zb30gf7C6O8HcermDl9GBBDoqMGnkfkH9pWHyxYIPIInXcz/AzTF9iV11N929gqV29Orxp02a065cAhviLO2bxWJO2CCIAxKT+uUbtg29Ox759mJfShHxoAIOq7BekUi2jKUXfXwOuT43tEuoNIR/rjZxLbNkQcx+6yK1/B821r4EWciPSqQY3dQkJ3ORCgkCpHeXWOTnQZiesQgN+6GwLut4SLYPWnHHrRL2D75w0epT1dyEXNCLTFAIjy7xpo4A0Fj8V5P5q2h/5guQY96wkNZA/4oHdMhrQRgXa77BYSugY2tyQiiTT65+VdiCIN94loMlpEXMpxb27QcQ965UaxoEGoyD0UUV9y6EP+SQO7yWcKQkN0qRn0fI/y448/TrtHcKIv8LlPe+GEuGC5YjGY0ACDDE3w/Szgp5MhkVKozcs1CKMI0wcYnhf3iX42BYswlEQleOdbx1v4IDRutC+hZuDmSAkiO6nOfOrRNP8GwtKkwyKC1xcAAAAASUVORK5CYII=",
                "token": "3412455821517724516924622119048843510743024321310325124",
                "som": null
            };
            this.captcha.imagem = this.retornoCaptcha.imagem;
            this.captcha.token = this.retornoCaptcha.token;
            this.util.endLoading();
        }
        else {
            this.loginProvider.recuperarCaptcha().then(function (response) {
                console.log('Retorno captcha', response);
                _this.captcha.imagem = response.imagem;
                _this.captcha.token = response.token;
                _this.util.endLoading();
            }).catch(function (error) {
                console.error(error);
                _this.util.endLoading();
            });
        }
    };
    CaptchaComponent.prototype.continuar = function () {
        var _this = this;
        if (!this.cpf) {
            this.toastCtrl.create({
                message: 'É obrigatório informar um CPF.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        var campo = this.cpf.replace(/\D/g, '');
        this.campoValido = __WEBPACK_IMPORTED_MODULE_6__util_util__["a" /* Util */].validarCPF(campo);
        if (!this.campoValido) {
            this.toastCtrl.create({
                message: 'CPF inválido.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (!this.textoCaptcha) {
            this.toastCtrl.create({
                message: 'Captcha inválido.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        this.util.onLoading('Recuperando dados');
        if (!this.recuperarSenha) {
            this.loginProvider.iniciacaoBC(campo, this.textoCaptcha, this.captcha.token).then(function (iniciacao) {
                _this.iniciacao = new __WEBPACK_IMPORTED_MODULE_4__models_Iniciacao__["a" /* Iniciacao */](iniciacao);
                console.log('iniciacao', _this.iniciacao);
                _this.storage.set('token_bc', _this.iniciacao.token);
                _this.util.endLoading();
                _this.respostaCaptcha.emit({ iniciacao: _this.iniciacao, cpf: campo });
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 4000
                }).present();
            });
        }
        else {
            this.loginProvider.iniciacaoRSBC(campo, this.textoCaptcha, this.captcha.token).then(function (iniciacao) {
                _this.iniciacao = iniciacao;
                _this.util.endLoading();
                _this.respostaCaptcha.emit({ iniciacao: _this.iniciacao, cpf: campo });
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 4000
                }).present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CaptchaComponent.prototype, "respostaCaptcha", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CaptchaComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"])
    ], CaptchaComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CaptchaComponent.prototype, "recuperarSenha", void 0);
    CaptchaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'captcha-component',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/captcha/captcha.html"*/'<ion-content class="content-captcha">\n  <div class="step">\n    <div><hr width="100%" align="left" class="hr-left" *ngIf="false"></div>\n    <button ion-button outline round color="secondary">{{step}}</button>\n    <div><hr width="100%" align="right" class="hr-right"></div>\n  </div>\n\n  <div class="titulo">\n    <p *ngIf="!recuperarSenha">Para criar seu acesso, informe os dados abaixo.</p>\n    <p *ngIf="recuperarSenha">Para recuperar seu acesso, informe os dados abaixo.</p>\n  </div>\n  <ion-list>\n    <ion-item>\n      <ion-input\n        type="tel"\n        placeholder="Insira seu CPF"\n        [(ngModel)]="cpf"\n        [brmasker]="{mask:\'000.000.000-00\', len:14}">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div class="captcha" *ngIf="captcha?.imagem">\n    <div class="imagem">\n      <img [src]="captcha?.imagem" />\n    </div>\n    <ion-list>\n      <ion-item>\n        <button ion-button clear item-end color="dark" (tap)="getCaptcha()"><ion-icon name="md-refresh"></ion-icon></button>\n        <ion-input\n          placeholder="Digite aqui"\n          [(ngModel)]="textoCaptcha">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/captcha/captcha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], CaptchaComponent);
    return CaptchaComponent;
}());

//# sourceMappingURL=captcha.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Captcha; });
var Captcha = /** @class */ (function () {
    function Captcha() {
    }
    return Captcha;
}());

//# sourceMappingURL=Captcha.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacoesBasicasBcModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informacoes_basicas_bc__ = __webpack_require__(791);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InformacoesBasicasBcModule = /** @class */ (function () {
    function InformacoesBasicasBcModule() {
    }
    InformacoesBasicasBcModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__informacoes_basicas_bc__["a" /* InformacoesBasicasBcComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__informacoes_basicas_bc__["a" /* InformacoesBasicasBcComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__informacoes_basicas_bc__["a" /* InformacoesBasicasBcComponent */]
            ]
        })
    ], InformacoesBasicasBcModule);
    return InformacoesBasicasBcModule;
}());

//# sourceMappingURL=informacoes-basicas-bc.module.js.map

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacoesBasicasBcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_InformacoesBasicasBC__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ionic_util__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InformacoesBasicasBcComponent = /** @class */ (function () {
    function InformacoesBasicasBcComponent(toastCtrl, loginProvider, util) {
        this.toastCtrl = toastCtrl;
        this.loginProvider = loginProvider;
        this.util = util;
        this.informacoesBasicasBC = new __WEBPACK_IMPORTED_MODULE_1__models_InformacoesBasicasBC__["a" /* InformacoesBasicasBC */]();
        this.respostaInformacoes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InformacoesBasicasBcComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.events) {
            this.events.subscribe(function (source) {
                if (source === 'informacoes') {
                    _this.continuar();
                }
            });
        }
    };
    InformacoesBasicasBcComponent.prototype.continuar = function () {
        var _this = this;
        if (!this.informacoesBasicasBC.nomeCompleto) {
            this.toastCtrl.create({
                message: 'É obrigatório informar um nome.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (!this.informacoesBasicasBC.email) {
            this.toastCtrl.create({
                message: 'É obrigatório informar um email.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (!this.informacoesBasicasBC.emailConfirmacao) {
            this.toastCtrl.create({
                message: 'É obrigatório informar um email de confirmação.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        if (this.informacoesBasicasBC.emailConfirmacao != this.informacoesBasicasBC.email) {
            this.toastCtrl.create({
                message: 'Email e Email de Confirmação são diferentes.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        this.util.onLoading('Cadastrando informações ...');
        this.loginProvider.informacoesBasicasBC(this.cpf, this.token, this.informacoesBasicasBC).then(function () {
            _this.loginProvider.inicializacaoKbaRFB(_this.cpf, _this.token).then(function (result) {
                _this.util.endLoading();
                _this.respostaInformacoes.emit(result);
            });
        }).catch(function (error) {
            _this.util.endLoading();
            _this.toastCtrl.create({
                message: error.descricao,
                position: 'top',
                duration: 4000
            }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformacoesBasicasBcComponent.prototype, "cpf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InformacoesBasicasBcComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InformacoesBasicasBcComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], InformacoesBasicasBcComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InformacoesBasicasBcComponent.prototype, "respostaInformacoes", void 0);
    InformacoesBasicasBcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'informacoes-basicas-bc-component',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/informacoes-basicas-bc/informacoes-basicas-bc.html"*/'<ion-content class="content-informacoes">\n  <div class="step">\n    <div><hr width="100%" align="left" class="hr-left"></div>\n    <button ion-button outline round color="secondary">{{step}}</button>\n    <div><hr width="100%" align="right" class="hr-right"></div>\n  </div>\n\n  <div class="titulo">\n    <p>Informações Básicas.</p>\n  </div>\n  <ion-list>\n\n    <ion-item>\n      <ion-input\n        placeholder="Informe o seu nome completo"\n        [(ngModel)]="informacoesBasicasBC.nomeCompleto">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input\n        placeholder="Informe o seu email"\n        [(ngModel)]="informacoesBasicasBC.email"\n        type="email">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input\n        placeholder="Confirme o seu email"\n        [(ngModel)]="informacoesBasicasBC.emailConfirmacao"\n        type="email">\n      </ion-input>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/informacoes-basicas-bc/informacoes-basicas-bc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], InformacoesBasicasBcComponent);
    return InformacoesBasicasBcComponent;
}());

//# sourceMappingURL=informacoes-basicas-bc.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacoesBasicasBC; });
var InformacoesBasicasBC = /** @class */ (function () {
    function InformacoesBasicasBC() {
    }
    return InformacoesBasicasBC;
}());

//# sourceMappingURL=InformacoesBasicasBC.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntasComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__perguntas__ = __webpack_require__(794);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PerguntasComponentModule = /** @class */ (function () {
    function PerguntasComponentModule() {
    }
    PerguntasComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__perguntas__["a" /* PerguntasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__perguntas__["a" /* PerguntasComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__perguntas__["a" /* PerguntasComponent */]
            ]
        })
    ], PerguntasComponentModule);
    return PerguntasComponentModule;
}());

//# sourceMappingURL=perguntas.module.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerguntasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerguntasComponent = /** @class */ (function () {
    function PerguntasComponent(util, loginProvider, platform, toastCtrl) {
        this.util = util;
        this.loginProvider = loginProvider;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.respostaPerguntas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.perguntas = null;
    }
    PerguntasComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.events) {
            this.events.subscribe(function (source) {
                if (source === 'perguntas') {
                    _this.continuar();
                }
            });
        }
        console.log('está em preguntas component', this.perguntas);
        if (this.perguntas === undefined || Object.keys(this.perguntas).length <= 0) {
            this.getPerguntas();
        }
        else {
            console.log('passou aqui');
            this.arrayPerguntas = Object.keys(this.perguntas);
            console.log('arrayPerguntas', this.arrayPerguntas);
        }
    };
    PerguntasComponent.prototype.getPerguntas = function () {
        var _this = this;
        this.util.onLoading('Carregando perguntas...');
        if (!this.platform.is('cordova')) {
            this.perguntas = {
                pergunta1: {
                    codigo: "1",
                    pergunta: "Qual é o ano do seu nascimento?",
                    respostas: ["1980", "1981", "1982", "1983", "1984"]
                },
                pergunta2: {
                    codigo: "4",
                    pergunta: "Qual é o primeiro nome da sua mãe?",
                    respostas: ["JOANA", "MARIA", "MONICA", "REGINA", "GABRIELA"]
                },
                pergunta3: {
                    codigo: "2",
                    pergunta: "Qual é o seu mês de nascimento?",
                    respostas: ["JANEIRO", "FEVEREIRO", "ABRIL", "JULHO", "DEZEMBRO"]
                }
            };
            this.arrayPerguntas = Object.keys(this.perguntas);
        }
        else {
            this.loginProvider.inicializacaoKbaRFB(this.cpf, this.token).then(function (perguntas) {
                _this.util.endLoading();
                _this.perguntas = perguntas;
                _this.arrayPerguntas = Object.keys(_this.perguntas);
            }).catch(function (error) {
                console.log('retorno', error);
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 4000
                }).present();
            });
        }
    };
    PerguntasComponent.prototype.selecionarResposta = function (keyResposta, resposta) {
        switch (keyResposta) {
            case 'pergunta1': {
                this.resposta1 = resposta;
                break;
            }
            case 'pergunta2': {
                this.resposta2 = resposta;
                break;
            }
            case 'pergunta3': {
                this.resposta3 = resposta;
                break;
            }
        }
    };
    PerguntasComponent.prototype.continuar = function () {
        var _this = this;
        if (this.resposta1 && this.resposta2 && this.resposta3) {
            this.util.onLoading('Enviando respostas...');
            var respostas = {
                "resposta1": this.resposta1,
                "resposta2": this.resposta2,
                "resposta3": this.resposta3
            };
            this.loginProvider.finalizacaoKbaRFB(this.cpf, this.token, respostas).then(function (response) {
                _this.util.endLoading();
                _this.respostaPerguntas.emit(response.emailOfuscado);
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 4000
                }).present();
            });
        }
        else {
            this.util.endLoading();
            this.toastCtrl.create({
                message: 'Você precisa responder as perguntas .',
                position: 'top',
                duration: 2500
            }).present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PerguntasComponent.prototype, "cpf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PerguntasComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PerguntasComponent.prototype, "respostaPerguntas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PerguntasComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], PerguntasComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PerguntasComponent.prototype, "perguntas", void 0);
    PerguntasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'perguntas-component',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/perguntas/perguntas.html"*/'<ion-content class="content-perguntas">\n  <div class="step">\n    <div><hr width="100%" align="left" class="hr-left"></div>\n    <button ion-button outline round color="secondary">{{step}}</button>\n    <div><hr width="100%" align="right" class="hr-right"></div>\n  </div>\n\n  <div class="titulo" *ngIf="arrayPerguntas?.length > 0">\n    <p>Para validarmos os dados que você enviou, responda às perguntas abaixo:</p>\n  </div>\n\n  <div *ngFor="let keyPergunta of arrayPerguntas; let index = index">\n    <div class="container-questoes">\n      <p class="questao-titulo" [innerHTML]="perguntas[keyPergunta].pergunta"></p>\n      <ion-item no-lines>\n        <ion-row>\n          <ion-col tappable col-6 *ngFor="let resposta of perguntas[keyPergunta].respostas">\n            <div class="resposta" [ngClass]="{\'selecionada\': (index === 0 ? resposta1 === resposta : index === 1 ? resposta2 === resposta : resposta3 === resposta)}" (tap)="selecionarResposta(keyPergunta, resposta)">{{resposta}}</div>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/perguntas/perguntas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["t" /* ToastController */]])
    ], PerguntasComponent);
    return PerguntasComponent;
}());

//# sourceMappingURL=perguntas.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmaPinComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirma_pin__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmaPinComponentModule = /** @class */ (function () {
    function ConfirmaPinComponentModule() {
    }
    ConfirmaPinComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__confirma_pin__["a" /* ConfirmaPinComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__confirma_pin__["a" /* ConfirmaPinComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__confirma_pin__["a" /* ConfirmaPinComponent */]
            ]
        })
    ], ConfirmaPinComponentModule);
    return ConfirmaPinComponentModule;
}());

//# sourceMappingURL=confirma-pin.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmaPinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmaPinComponent = /** @class */ (function () {
    function ConfirmaPinComponent(platform, toastCtrl, util, loginProvider) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.util = util;
        this.loginProvider = loginProvider;
        this.respostaPin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.recuperarSenha = false;
    }
    ConfirmaPinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe(function (source) {
            if (source === 'pin') {
                _this.continuar();
            }
        });
        if (!this.platform.is('cordova')) {
            this.emailOfuscado = 'p**********@mba***********';
        }
    };
    ConfirmaPinComponent.prototype.continuar = function () {
        var _this = this;
        if (!this.pin) {
            this.toastCtrl.create({
                message: 'PIN é obrigatório.',
                position: 'top',
                duration: 2500
            }).present();
            return;
        }
        this.util.onLoading('Confirmando PIN...');
        if (!this.recuperarSenha) {
            this.loginProvider.confirmacaoIdentidade(this.cpf, this.token, this.pin).then(function () {
                _this.util.endLoading();
                _this.respostaPin.emit(true);
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 4000
                }).present();
            });
        }
        else {
            this.loginProvider.confirmacaoRSIdentidade(this.cpf, this.token, this.pin).then(function () {
                _this.util.endLoading();
                _this.respostaPin.emit(true);
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 4000
                }).present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmaPinComponent.prototype, "emailOfuscado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ConfirmaPinComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmaPinComponent.prototype, "cpf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ConfirmaPinComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ConfirmaPinComponent.prototype, "respostaPin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], ConfirmaPinComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ConfirmaPinComponent.prototype, "recuperarSenha", void 0);
    ConfirmaPinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'confirma-pin-component',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/confirma-pin/confirma-pin.html"*/'<ion-content class="content-pin">\n  <div class="step">\n    <div><hr width="100%" align="left" class="hr-left"></div>\n    <button ion-button outline round color="secondary">{{step}}</button>\n    <div><hr width="100%" align="right" class="hr-right"></div>\n  </div>\n\n  <div class="titulo">\n    <p *ngIf="!recuperarSenha">Enviamos um PIN ao seu e-mail, para você continuar o seu cadastro.</p>\n    <p *ngIf="recuperarSenha">Enviamos um PIN ao seu e-mail, para você continuar a recuperar o acesso.</p>\n  </div>\n\n  <div class="email">{{emailOfuscado}}</div>\n  <ion-list>\n    <ion-item>\n      <ion-input\n        placeholder="Insira seu PIN"\n        [(ngModel)]="pin"\n        type="number">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/confirma-pin/confirma-pin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_ionic_util__["a" /* IonicUtilProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__["a" /* LoginProvider */]])
    ], ConfirmaPinComponent);
    return ConfirmaPinComponent;
}());

//# sourceMappingURL=confirma-pin.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaSenhaComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cria_senha__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CriaSenhaComponentModule = /** @class */ (function () {
    function CriaSenhaComponentModule() {
    }
    CriaSenhaComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cria_senha__["a" /* CriaSenhaComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__cria_senha__["a" /* CriaSenhaComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__cria_senha__["a" /* CriaSenhaComponent */]
            ]
        })
    ], CriaSenhaComponentModule);
    return CriaSenhaComponentModule;
}());

//# sourceMappingURL=cria-senha.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriaSenhaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CriaSenhaComponent = /** @class */ (function () {
    function CriaSenhaComponent(toastCtrl, loginProvider, util) {
        this.toastCtrl = toastCtrl;
        this.loginProvider = loginProvider;
        this.util = util;
        this.recuperarSenha = false;
        this.respostaSenha = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CriaSenhaComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.events) {
            this.events.subscribe(function (source) {
                if (source === 'senha') {
                    _this.continuar();
                }
            });
        }
    };
    CriaSenhaComponent.prototype.continuar = function () {
        var _this = this;
        this.verificarSenhaInvalida();
        this.util.onLoading('Cadastrando senhas ...');
        if (!this.recuperarSenha) {
            var obj = {
                "senha": this.senha,
                "senhaConfirmacao": this.confirmacaoSenha
            };
            this.loginProvider.finalizacao(this.cpf, this.token, obj).then(function () {
                _this.util.endLoading();
                _this.respostaSenha.emit(true);
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 2500
                }).present();
            });
        }
        else {
            var obj = {
                "senhaNova": this.senha,
                "senhaNovaConfirmacao": this.confirmacaoSenha
            };
            this.loginProvider.finalizacaoRS(this.cpf, this.token, obj).then(function () {
                _this.util.endLoading();
                _this.respostaSenha.emit(true);
            }).catch(function (error) {
                _this.util.endLoading();
                _this.toastCtrl.create({
                    message: error.descricao,
                    position: 'top',
                    duration: 2500
                }).present();
            });
        }
    };
    CriaSenhaComponent.prototype.verificarSenhaInvalida = function () {
        if (!this.senha || this.senha.length < 8) {
            this.toastCtrl.create({
                message: 'Senha deve conter no mínimo 8 caracteres.',
                position: 'top',
                duration: 2500
            }).present();
            return true;
        }
        if (this.senha.length > 12) {
            this.toastCtrl.create({
                message: 'Senha não deve ultrapassar 12 caracteres.',
                position: 'top',
                duration: 2500
            }).present();
            return true;
        }
        if (this.confirmacaoSenha !== this.senha) {
            this.toastCtrl.create({
                message: 'Senha de confirmação não confere.',
                position: 'top',
                duration: 2500
            }).present();
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CriaSenhaComponent.prototype, "step", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CriaSenhaComponent.prototype, "cpf", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CriaSenhaComponent.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], CriaSenhaComponent.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CriaSenhaComponent.prototype, "recuperarSenha", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CriaSenhaComponent.prototype, "respostaSenha", void 0);
    CriaSenhaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cria-senha-component',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/cria-senha/cria-senha.html"*/'<ion-content class="content-senha">\n  <div class="step">\n    <div><hr width="100%" align="left" class="hr-left"></div>\n    <button ion-button outline round color="secondary">{{step}}</button>\n    <div><hr width="100%" align="right" class="hr-right" *ngIf="!recuperarSenha"></div>\n  </div>\n\n  <div class="titulo">\n    <p>Sua nova senha deve ter entre 8 (oito) e 12 (doze) caracteres</p>\n  </div>\n\n  <ion-list>\n    <ion-item>\n      <ion-input\n        placeholder="Nova senha"\n        type="password"\n        [(ngModel)]="senha"\n        maxlength="12">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input\n        placeholder="Confirme a senha"\n        type="password"\n        [(ngModel)]="confirmacaoSenha"\n        maxlength="12">\n      </ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/cria-senha/cria-senha.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_provider__["a" /* LoginProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_ionic_util__["a" /* IonicUtilProvider */]])
    ], CriaSenhaComponent);
    return CriaSenhaComponent;
}());

//# sourceMappingURL=cria-senha.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescricaoDoCasoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__descricao_do_caso__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DescricaoDoCasoModule = /** @class */ (function () {
    function DescricaoDoCasoModule() {
    }
    DescricaoDoCasoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__descricao_do_caso__["a" /* DescricaoDoCasoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__descricao_do_caso__["a" /* DescricaoDoCasoComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__descricao_do_caso__["a" /* DescricaoDoCasoComponent */]
            ]
        })
    ], DescricaoDoCasoModule);
    return DescricaoDoCasoModule;
}());

//# sourceMappingURL=descricao-do-caso.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescricaoDoCasoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DescricaoDoCasoComponent = /** @class */ (function () {
    function DescricaoDoCasoComponent(events) {
        this.events = events;
        this.situacaoNotificada = [
            { 'descricao': 'Caso suspeito de doença de notificação imediata', 'checked': false },
            { 'descricao': 'Caso suspeito de doença ou agravo de causa desconhecida', 'checked': false },
            { 'descricao': 'Surto ou agregado de casos com sinais e sintomas semelhantes, independente da doença', 'checked': false },
            { 'descricao': 'Doença ou morte de animais por causa desconhecida (aves, cavalos, morcegos, etc)', 'checked': false }
        ];
        this.casosSuspeitosEConfirmados = [
            { 'descricao': 'Total de casos suspeitos (vivos):', 'valor': 0 },
            { 'descricao': 'Total de casos suspeitos (óbitos):', 'valor': 0 },
            { 'descricao': 'Total de casos confirmados (vivos):', 'valor': 0 },
            { 'descricao': 'Total de casos confirmados (óbitos):', 'valor': 0 }
        ];
        this.descricaoSituacao = '';
        this.principaisSuspeitasOpt = ['Botulismo', 'Cólera', 'Doença com suspeita de disseminação intencional (antraz pneumônico, tularemia ou varíola)', 'Doença pelo vírus arenavírus', 'Doença pelo vírus ebola', 'Doença pelo vírus lassa', 'Doença pelo vírus marburg', 'Eventos adversos graves ou óbitos pós-vacinação', 'Febre amarela', 'Febre de chikungunya', 'Febre do nilo ocidental e outras arboviroses de importância em saúde pública', 'Febre maculosa e outras riquetsioses', 'Febre purpúrica brasileira', 'Influenza humana por novo subtipo viral', 'Malária na região extra amazônica', 'Óbito por dengue', 'Peste', 'Poliomielite por poliovírus selvagem', 'Raiva humana', 'Rubéola ou Síndrome da Rubéola Congênita', 'Sarampo', 'Síndrome da paralisia flácida aguda', 'Síndrome respiratória aguda grave associada ao coronavírus (MERS-CoV e SARS-CoV)'];
    }
    DescricaoDoCasoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('get-descricao-do-caso', function (dados) {
            if (dados && dados.descricao) {
                _this.situacaoNotificada.some(function (sit) {
                    if (sit.descricao == dados.descricao.situacaoNotificadaChecked)
                        sit.checked = true;
                    return sit.descricao == dados.descricao.situacaoNotificadaChecked;
                });
                _this.situacaoNotificadaChecked = dados.descricao.situacaoNotificadaChecked;
                _this.casosSuspeitosEConfirmados = dados.descricao.casosSuspeitosEConfirmados;
                _this.principalSuspeita = dados.descricao.principalSuspeita;
                _this.descricaoSituacao = dados.descricao.descricaoSituacao;
            }
            else {
                _this._getDados();
            }
        });
    };
    DescricaoDoCasoComponent.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('get-descricao-do-caso');
    };
    DescricaoDoCasoComponent.prototype.updateCheckbox = function (item) {
        this.situacaoNotificada.forEach(function (sit) { return sit.checked = false; });
    };
    DescricaoDoCasoComponent.prototype.subtraiCaso = function (item) {
        if (item.valor != 0)
            item.valor = item.valor - 1;
        if (item.valor < 0)
            item.valor = 0;
    };
    DescricaoDoCasoComponent.prototype.somaCaso = function (item) {
        item.valor = item.valor + 1;
    };
    DescricaoDoCasoComponent.prototype._getDados = function () {
        var _this = this;
        if (this.situacaoNotificada.filter(function (value) {
            if (value.checked == true)
                _this.situacaoNotificadaChecked = value.descricao;
            return value.checked == true;
        }).length != 1) {
            this.events.publish('slideToast', 0, 'Situação que será notificada', 'situacaoNotificada');
            return;
        }
        if (this.descricaoSituacao == '') {
            this.events.publish('slideToast', 0, 'Descrever a situação', 'descrevaSituacao');
            return;
        }
        this.events.publish('set-descricao-do-caso', {
            'situacaoNotificadaChecked': this.situacaoNotificadaChecked,
            'casosSuspeitosEConfirmados': this.casosSuspeitosEConfirmados,
            'principalSuspeita': this.principalSuspeita,
            'descricaoSituacao': this.descricaoSituacao
        });
    };
    DescricaoDoCasoComponent.prototype.focusItem = function (item) {
        this.events.publish('scrollToItem', item);
    };
    DescricaoDoCasoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'descricao-do-caso',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/descricao-do-caso/descricao-do-caso.html"*/'<!-- <ion-content class="descricao-do-caso"> -->\n  <p class="title" style="margin-bottom: 0; font-weight: bold;">DESCRIÇÃO DO CASO</p>\n  <ion-grid>\n\n    <!-- Primeira pergunta -->\n    <ion-row id="situacaoNotificada">\n      <ion-col col-12><p class="title">Situação que será notificada*</p></ion-col>\n      <div class="checkbox-box">\n        <ion-item no-lines *ngFor="let item of situacaoNotificada; let i index" >\n          <ion-label text-wrap>{{item.descricao}}</ion-label>\n          <ion-checkbox color="orange" [(ngModel)]="item.checked" (tap)="updateCheckbox(item)"></ion-checkbox>\n        </ion-item>\n      </div>\n    </ion-row>\n\n  <!-- Segunda pergunta -->\n  <ion-row>\n      <ion-col col-12><p class="title">Em caso de doença de notificação compulsória imediata nacional (marque a suspeita principal)</p></ion-col>\n      <ion-item>\n        <ion-select [(ngModel)]="principalSuspeita" [cancelText]="\'Cancelar\'" [okText]="\'Confirmar\'">\n          <!-- <ion-option value="Selecione" selected>Selecione</ion-option> -->\n          <ion-option value="{{item}}" *ngFor="let item of principaisSuspeitasOpt" >{{item}}</ion-option>\n        </ion-select>\n      </ion-item>\n  </ion-row>\n\n    <!-- Terceira pergunta -->\n    <ion-row *ngFor="let item of casosSuspeitosEConfirmados" class="casos-suspeitos-e-confirmados">\n      <ion-col col-7>\n        <p class="title">{{item.descricao}}</p>\n      </ion-col>\n      <ion-col col-5 style="display: flex;">\n          <ion-col col-4 class="align-items"><button ion-button color="orange" class="orange-buttons" (tap)="subtraiCaso(item)">-</button></ion-col>\n          <ion-col col-4 class="align-items"><ion-input type="number" [(ngModel)]="item.valor" class="checkbox-box input-numero-casos" disabled="true"></ion-input></ion-col>\n          <!-- (ionChange)="onChangeCasos(item)"  -->\n          <ion-col col-4 class="align-items"><button ion-button color="orange" class="orange-buttons" (tap)="somaCaso(item)">+</button></ion-col>\n      </ion-col>\n      <p class="description">0(zero) caso este campo não se aplique.</p>\n    </ion-row>\n\n    <!-- Quarta pergunta -->\n    <ion-row id="descrevaSituacao">\n      <ion-col col-12><p class="title">Descrever a situação (tempo, pessoa e lugar)*: </p>\n        <p class="description">Incluir o máximo de informação disponível, se for um ou pouco casos, informe a nacionalidade, se é viajante, contatos, aspectos clínicos entre outras informações que julgar importantes.</p>\n      </ion-col>\n      <ion-col col-12>\n          <textarea id="descrevaSituacaoTextArea" (ionFocus)="focusItem(\'descrevaSituacaoTextArea\')" type="text" class="input-descricao-situacao" placeholder="Digite aqui..." [(ngModel)]="descricaoSituacao" [ngClass]="{\'input-descricao-situacao-white\': ( descricaoSituacao != \'\')}" ></textarea>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/descricao-do-caso/descricao-do-caso.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Events */]])
    ], DescricaoDoCasoComponent);
    return DescricaoDoCasoComponent;
}());

//# sourceMappingURL=descricao-do-caso.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__localizacao__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LocalizacaoModule = /** @class */ (function () {
    function LocalizacaoModule() {
    }
    LocalizacaoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__localizacao__["a" /* LocalizacaoComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__localizacao__["a" /* LocalizacaoComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__localizacao__["a" /* LocalizacaoComponent */]
            ]
        })
    ], LocalizacaoModule);
    return LocalizacaoModule;
}());

//# sourceMappingURL=localizacao.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizacaoComponent; });
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


var LocalizacaoComponent = /** @class */ (function () {
    function LocalizacaoComponent(events) {
        this.events = events;
        this.localOcorrencia = '';
        this.municipioDaOcorrencia = '';
        this.estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    }
    LocalizacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events.subscribe('get-localizacao', function (dados) {
            if (dados && dados.localizacao) {
                _this.localOcorrencia = dados.localizacao.localOcorrencia;
                _this.estadoDaOcorrencia = dados.localizacao.estadoDaOcorrencia;
                _this.municipioDaOcorrencia = dados.localizacao.municipioDaOcorrencia;
            }
            else
                _this._getDados();
        });
    };
    LocalizacaoComponent.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('get-localizacao');
    };
    LocalizacaoComponent.prototype._getDados = function () {
        if (this.localOcorrencia == '') {
            this.events.publish('slideToast', 1, 'Local de ocorrência', 'content-notificacao');
            return;
        }
        if (this.estadoDaOcorrencia == 'Selecione' || typeof this.estadoDaOcorrencia == 'undefined') {
            this.events.publish('slideToast', 1, 'Estado', 'content-notificacao');
            return;
        }
        if (this.municipioDaOcorrencia == '') {
            this.events.publish('slideToast', 1, 'Município', 'content-notificacao');
            return;
        }
        this.events.publish('set-localizacao', {
            'localOcorrencia': this.localOcorrencia,
            'estadoDaOcorrencia': this.estadoDaOcorrencia,
            'municipioDaOcorrencia': this.municipioDaOcorrencia
        });
    };
    LocalizacaoComponent.prototype.focusItem = function (item) {
        this.events.publish('scrollToItem', item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], LocalizacaoComponent.prototype, "content", void 0);
    LocalizacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'localizacao',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/localizacao/localizacao.html"*/'<!-- <ion-content class="localizacao-componente"> -->\n<p class="title" id="content-notificacao" style="margin-bottom: 0; font-weight: bold;">LOCALIZAÇÃO</p>\n<ion-grid>\n  <ion-row>\n    <ion-col col-12>\n      <p class="title">Local de ocorrência ou identificação do evento*</p>\n      <p class="description">Exemplo: aeroporto, porto, escola, creche...</p>\n      <ion-input id="localOcorrencia" (ionFocus)="focusItem(\'localOcorrencia\')" type="text" class="input-perguntas" [(ngModel)]="localOcorrencia" [ngClass]="{\'input-descricao-situacao-white\': ( localOcorrencia != \'\')}" ></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row id="estado1">\n    <ion-col col-12>\n      <p class="title">Estado*</p>\n      <ion-item>\n        <ion-select [(ngModel)]="estadoDaOcorrencia" [cancelText]="\'Cancelar\'" [okText]="\'Confirmar\'">\n          <!-- <ion-option value="Selecione" selected>Selecione</ion-option> -->\n          <ion-option value="{{item}}" *ngFor="let item of estados">{{item}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row id="municipio1">\n    <ion-col col-12>\n      <p class="title">Município*</p>\n      <ion-input id="municipioOcorrencia" (ionFocus)="focusItem(\'municipioOcorrencia\')" type="text" class="input-perguntas" [(ngModel)]="municipioDaOcorrencia" [ngClass]="{\'input-descricao-situacao-white\': ( municipioDaOcorrencia != \'\')}" ></ion-input>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<!-- </ion-content> -->\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/localizacao/localizacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], LocalizacaoComponent);
    return LocalizacaoComponent;
}());

//# sourceMappingURL=localizacao.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosNotificadorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dados_notificador__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DadosNotificadorModule = /** @class */ (function () {
    function DadosNotificadorModule() {
    }
    DadosNotificadorModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__dados_notificador__["a" /* DadosNotificadorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__dados_notificador__["a" /* DadosNotificadorComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__dados_notificador__["a" /* DadosNotificadorComponent */]
            ]
        })
    ], DadosNotificadorModule);
    return DadosNotificadorModule;
}());

//# sourceMappingURL=dados-notificador.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DadosNotificadorComponent; });
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


var DadosNotificadorComponent = /** @class */ (function () {
    function DadosNotificadorComponent(events) {
        var _this = this;
        this.events = events;
        this.outraOrigem = '';
        this.nomeNotificador = '';
        this.profissaoOcupacaoNotificador = '';
        this.municipioNotificador = '';
        this.telefoneNotificador = '';
        this.emailNotificador = '';
        this.origemNotificacaoOpt = ['Secretaria Estadual de Saúde (vigilância)', 'Secretaria Municipal de Saúde (vigilância)', 'Serviço de saúde pública', 'Serviço de saúde privada', 'Profissional de saúde autônomo', 'Laboratório público', 'Laboratório privado', 'População'];
        this.estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
        this.firstFocus = true;
        this.events.subscribe('get-notificador', function (dados) {
            if (dados && dados.dadosNotificador) {
                _this.origemNotificacao = dados.dadosNotificador.origemNotificacao;
                _this.outraOrigem = dados.dadosNotificador.outraOrigem;
                _this.nomeNotificador = dados.dadosNotificador.nomeNotificador;
                _this.profissaoOcupacaoNotificador = dados.dadosNotificador.profissaoOcupacaoNotificador;
                _this.estadoNotificador = dados.dadosNotificador.estadoNotificador;
                _this.municipioNotificador = dados.dadosNotificador.municipioNotificador;
                _this.telefoneNotificador = dados.dadosNotificador.telefoneNotificador;
                _this.emailNotificador = dados.dadosNotificador.emailNotificador;
            }
            else
                _this._getDados();
        });
    }
    DadosNotificadorComponent.prototype.ngOnDestroy = function () {
        this.events.unsubscribe('get-notificador');
    };
    DadosNotificadorComponent.prototype._getDados = function () {
        if (this.origemNotificacao == 'Selecione' || typeof this.origemNotificacao == 'undefined') {
            this.events.publish('slideToast', 2, 'Origem da notificação', 'origemNotificacao');
            return;
        }
        if (this.nomeNotificador == '') {
            this.events.publish('slideToast', 2, 'Nome', 'nomeNotificador');
            return;
        }
        if (this.profissaoOcupacaoNotificador == '') {
            this.events.publish('slideToast', 2, 'Profissão ou ocupação', 'profissaoNotificador');
            return;
        }
        if (this.estadoNotificador == 'Selecione' || typeof this.estadoNotificador == 'undefined') {
            this.events.publish('slideToast', 2, 'Estado', 'estadoNotificador');
            return;
        }
        if (this.municipioNotificador == '') {
            this.events.publish('slideToast', 2, 'Município', 'municipioNotificadorInput');
            return;
        }
        if (this.telefoneNotificador == '') {
            this.events.publish('slideToast', 2, 'Telefone', 'telefoneNotificadorInput');
            return;
        }
        if (this.emailNotificador == '') {
            this.events.publish('slideToast', 2, 'E-mail', 'emailNotificadorInput');
            return;
        }
        this.events.publish('set-notificador', {
            'origemNotificacao': this.origemNotificacao,
            'outraOrigem': this.outraOrigem,
            'nomeNotificador': this.nomeNotificador,
            'profissaoOcupacaoNotificador': this.profissaoOcupacaoNotificador,
            'estadoNotificador': this.estadoNotificador,
            'municipioNotificador': this.municipioNotificador,
            'telefoneNotificador': this.telefoneNotificador,
            'emailNotificador': this.emailNotificador
        });
        this.events.publish('changeSlide', true);
    };
    DadosNotificadorComponent.prototype.focusItem = function (item) {
        if (this.firstFocus) {
            var activeElement = document.activeElement;
            activeElement && activeElement.blur && activeElement.blur();
            this.firstFocus = false;
        }
    };
    DadosNotificadorComponent.prototype.changeSelect = function () {
        this.firstFocus = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('outraOrigem'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], DadosNotificadorComponent.prototype, "outraOrigemInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DadosNotificadorComponent.prototype, "dadosNotificador", void 0);
    DadosNotificadorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dados-notificador',template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/dados-notificador/dados-notificador.html"*/'<p class="title" style="margin-bottom: 0; font-weight: bold;">DADOS DO NOTIFICADOR</p>\n<p class="title" id="origemNotificacao">Origem da notificação*</p>\n<ion-item>\n  <ion-select (ionChange)="changeSelect()" [(ngModel)]="origemNotificacao" [cancelText]="\'Cancelar\'" [okText]="\'Confirmar\'">\n    <ion-option value="{{item}}" *ngFor="let item of origemNotificacaoOpt" >{{item}}</ion-option>\n    <ion-option value="outras">Outras</ion-option>\n  </ion-select>\n</ion-item>\n\n<p *ngIf="origemNotificacao == \'outras\'" class="title">Se outra origem especifique</p>\n<ion-input *ngIf="origemNotificacao == \'outras\'" type="text" [(ngModel)]="outraOrigem" class="input-perguntas" [ngClass]="{\'input-descricao-situacao-white\': ( outraOrigem != \'\')}" ></ion-input>\n\n<p class="title" id="nomeNotificador">Nome*</p>\n<ion-input id="nomeNotificadorInput" (ionFocus)="focusItem(\'nomeNotificadorInput\')" type="text" [(ngModel)]="nomeNotificador" class="input-perguntas" [ngClass]="{\'input-descricao-situacao-white\': ( nomeNotificador != \'\')}" ></ion-input>\n\n<p class="title" id="profissaoNotificador">Profissão ou ocupação*</p>\n<ion-input id="profissaoNotificadorInput" (ionFocus)="focusItem(\'profissaoNotificadorInput\')" type="text" [(ngModel)]="profissaoOcupacaoNotificador" class="input-perguntas" [ngClass]="{\'input-descricao-situacao-white\': ( profissaoOcupacaoNotificador != \'\')}" ></ion-input>\n\n<p class="title" id="estadoNotificador">Estado*</p>\n<ion-item>\n  <ion-select (ionChange)="changeSelect()" [(ngModel)]="estadoNotificador" [cancelText]="\'Cancelar\'" [okText]="\'Confirmar\'">\n    <!-- <ion-option value="Selecione" selected>Selecione</ion-option> -->\n    <ion-option value="{{item}}" *ngFor="let item of estados">{{item}}</ion-option>\n  </ion-select>\n</ion-item>\n\n<p class="title" id="municipioNotificadorInput">Município*</p>\n<ion-input  (ionFocus)="focusItem(\'municipioNotificadorInput\')" type="text" class="input-perguntas" [(ngModel)]="municipioNotificador" [ngClass]="{\'input-descricao-situacao-white\': ( municipioNotificador != \'\')}" ></ion-input>\n\n<p class="title" id="telefoneNotificadorInput" >Telefone de contato com DDD*</p>\n<ion-input (ionFocus)="focusItem(\'telefoneNotificadorInput\')" type="text" class="input-perguntas" [(ngModel)]="telefoneNotificador" [ngClass]="{\'input-descricao-situacao-white\': ( telefoneNotificador != \'\')}" [brmasker]="{phone: true}"></ion-input>\n\n<p class="title" id="emailNotificadorInput" >E-mail*</p>\n<ion-input type="text" class="input-perguntas" [(ngModel)]="emailNotificador" [ngClass]="{\'input-descricao-situacao-white\': ( emailNotificador != \'\')}" ></ion-input>\n'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/components/dados-notificador/dados-notificador.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
    ], DadosNotificadorComponent);
    return DadosNotificadorComponent;
}());

//# sourceMappingURL=dados-notificador.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_membro_registro_membro__ = __webpack_require__(525);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__registro_membro_registro_membro__["a" /* RegistroMembroComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__registro_membro_registro_membro__["a" /* RegistroMembroComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__registro_membro_registro_membro__["a" /* RegistroMembroComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dica_dica__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_device__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__campanhas_campanhas__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registros_registros__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(device) {
        this.device = device;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__mapa_mapa__["a" /* MapaPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__dica_dica__["a" /* DicaPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__campanhas_campanhas__["a" /* CampanhasPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__registros_registros__["a" /* RegistrosPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__perfil_perfil__["a" /* PerfilPage */];
        this.btnDisable = false;
        this.isIphoneX = false;
        if (this.device.model === 'iPhone10,3' || this.device.model === 'iPhone10,6' || this.device.model === 'x86_64') {
            this.isIphoneX = true;
        }
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["s" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/tabs/tabs.html"*/'<ion-tabs #mainTabs\n          [selectedIndex]="0">\n  <ion-tab [root]="tab1Root"\n           tabTitle="Mapa"\n           tabIcon="dds-map"></ion-tab>\n  <ion-tab [root]="tab2Root"\n           tabTitle="Dicas"\n           tabIcon="dds-grid"></ion-tab>\n  <!-- <ion-tab [root]="tab4Root"\n           tabTitle="Diário"\n           tabIcon="dds-report"></ion-tab> -->\n  <ion-tab [root]="tab3Root"\n           tabTitle="Notícias"\n           tabIcon="dds-doc"></ion-tab>\n  <!-- <ion-tab [root]="tab5Root"\n           tabTitle="Perfil"\n           tabIcon="dds-profile"></ion-tab> -->\n</ion-tabs>'/*ion-inline-end:"/Users/leonardobarroeta/Downloads/ms_diario_saude-coronavirus/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_device__["a" /* Device */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaudeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registros__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ubs_provider__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// declare var Parse: any;
//import * as _ from 'underscore';
var SaudeProvider = /** @class */ (function () {
    function SaudeProvider(globals, registros, events, ubsProvider) {
        this.globals = globals;
        this.registros = registros;
        this.events = events;
        this.ubsProvider = ubsProvider;
        this.init();
    }
    SaudeProvider.prototype.init = function () {
        __WEBPACK_IMPORTED_MODULE_2_parse__["initialize"](this.globals.parseAppId, this.globals.parseJsId, this.globals.masterKey);
        __WEBPACK_IMPORTED_MODULE_2_parse__["serverURL"] = this.globals.serverURL;
    };
    SaudeProvider.prototype.getLocations = function (location) {
        var _this = this;
        var message1 = {};
        message1["geoPoint"] = (_a = {},
            _a["latitude"] = location.latitude,
            _a["longitude"] = location.longitude,
            _a);
        return new Promise(function (resolve, reject) {
            _this.ubsProvider.get(location.latitude, location.longitude).subscribe(function (ubs) {
                resolve(JSON.parse(JSON.stringify(ubs)));
            });
            // Parse.Cloud.run('listapontos',message1).then((pontos)=> {
            //     resolve(JSON.parse(JSON.stringify(pontos)));
            //   });
        });
        var _a;
    };
    SaudeProvider.prototype.getUsers = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_parse__["Cloud"].run('getUsers').then(function (users) {
                resolve(JSON.parse(JSON.stringify(users)));
            });
        });
    };
    SaudeProvider.prototype.getUserById = function (user) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_parse__["Cloud"].run('getUserById', user).then(function (users) {
                resolve(JSON.parse(JSON.stringify(users)));
            });
        });
    };
    SaudeProvider.prototype.createPonto = function (ponto) {
        return new Promise(function (resolve, reject) {
            var Saude = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend("saude");
            var saude = new Saude();
            var date = new Date();
            var point = new __WEBPACK_IMPORTED_MODULE_2_parse__["GeoPoint"]({ latitude: ponto.latitude, longitude: ponto.longitude });
            saude.set("localizacao", point);
            saude.set("data", date);
            saude.set("sintomas", ponto.sintomas);
            saude.set("estou_bem", ponto.estou_bem);
            saude.set("device", ponto.device);
            saude.set("cpfUsuarioLogado", ponto.cpfUsuarioLogado);
            saude.set("paises", ponto.paises);
            saude.set("foraPais", ponto.foraPais);
            saude.set("contatoConfirmado", ponto.contatoConfirmado);
            saude.set("contatoSuspeito", ponto.contatoSuspeito);
            saude.save().then(function (object) {
                resolve(object);
            }, function (error) {
                reject(error);
            });
        });
    };
    SaudeProvider.prototype.createRegistro = function (registro) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.registros.getCPF().then(function (cpf) {
                            if (cpf != 'err') {
                                return new Promise(function (resolve, reject) {
                                    var Registros = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend("registros");
                                    var registros = new Registros();
                                    var Sintomas = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend("saude");
                                    var Membros = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend("membros");
                                    var pointerSintomas = new Sintomas();
                                    var pointerMembros = new Membros();
                                    pointerMembros.id = registro.membros.objectId;
                                    if (registro.sintomas) {
                                        pointerSintomas.id = registro.sintomas.id;
                                        registros.set("sintomas", pointerSintomas);
                                    }
                                    registros.set("cpfUsuarioLogado", cpf);
                                    registros.set("membros", pointerMembros);
                                    registros.set("temperatura", registro.temperatura);
                                    registros.set("duracao", registro.duracao);
                                    registros.set("medicacao", registro.medicacao);
                                    registros.set("dataInicio", registro.dataInicio);
                                    registros.set("dataFim", registro.dataFim);
                                    registros.save().then(function (object) {
                                        _this.getNovoRegistroParse(object.id);
                                        resolve(object);
                                    }, function (error) {
                                        reject(error);
                                    });
                                });
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SaudeProvider.prototype.getNovoRegistroParse = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var registros, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        registros = __WEBPACK_IMPORTED_MODULE_2_parse__["Object"].extend("registros");
                        query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Query"](registros);
                        query.equalTo("objectId", id);
                        return [4 /*yield*/, query.find({
                                success: function (results) {
                                    _this.events.publish('update-registros', JSON.parse(JSON.stringify(results[0])));
                                },
                                error: function (error) {
                                    console.log('error', error);
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SaudeProvider.prototype.updateUser = function (user) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_parse__["Cloud"].run('updateUser', user).then(function (users) {
                resolve(JSON.parse(JSON.stringify(users)));
            });
        });
    };
    SaudeProvider.prototype.deleteUser = function (user) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_parse__["Cloud"].run('deleteUser', user).then(function (users) {
                resolve(JSON.parse(JSON.stringify(users)));
            });
        });
    };
    SaudeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_4__registros__["a" /* RegistrosProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__ubs_provider__["a" /* UbsProvider */]])
    ], SaudeProvider);
    return SaudeProvider;
}());

//# sourceMappingURL=saude.provider.js.map

/***/ })

},[530]);
//# sourceMappingURL=main.js.map