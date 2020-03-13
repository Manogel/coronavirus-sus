import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Config, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FadeTransition } from '../transition/fade';
import { APP_PAGES } from '../pages';
import { Providers } from '../providers/providers';
import { SintomasListProvider } from '../providers/sintomas-list.provider';
import { HttpClientModule } from '@angular/common/http';
import { FieldMask } from '../util/field-mask';
import { DiagnosticoProvider } from '../providers/diagnostico.provider';
import { HTTP } from '@ionic-native/http';
import { SpaceHeaderComponentModule } from '../components/space.header/space.header.module';
import { CaptchaComponentModule } from '../components/captcha/captcha.module';
import { InformacoesBasicasBcModule } from '../components/informacoes-basicas-bc/informacoes-basicas-bc.module';
import { PerguntasComponentModule } from '../components/perguntas/perguntas.module';
import { ConfirmaPinComponentModule } from '../components/confirma-pin/confirma-pin.module';
import { CriaSenhaComponentModule } from '../components/cria-senha/cria-senha.module';
import { DescricaoDoCasoModule } from '../components/descricao-do-caso/descricao-do-caso.module';
import { LocalizacaoModule } from '../components/localizacao/localizacao.module';
import { DadosNotificadorModule } from '../components/dados-notificador/dados-notificador.module';
import { ComponentsModule } from '../components/components.module';
import { Camera } from '@ionic-native/camera'
import { RegistrosProvider } from '../providers/registros';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { AppVersion } from '@ionic-native/app-version';
import { File } from '@ionic-native/file';
import { UbsProvider } from '../providers/ubs.provider';

@NgModule({
  declarations: [
    MyApp,
    APP_PAGES,
    FieldMask
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, { animate: false, scrollAssist: false, autoFocusAssist: false }),
    SpaceHeaderComponentModule,
    CaptchaComponentModule,
    InformacoesBasicasBcModule,
    PerguntasComponentModule,
    ConfirmaPinComponentModule,
    CriaSenhaComponentModule,
    DescricaoDoCasoModule,
    LocalizacaoModule,
    DadosNotificadorModule,
    ComponentsModule,
    BrMaskerModule,
    VirtualScrollerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    APP_PAGES
  ],
  providers: [
    AppVersion,
    Providers,
    StatusBar,
    HTTP,
    File,
    Network,
    Device,
    Geolocation,
    ScreenOrientation,
    InAppBrowser,
    SocialSharing,
    UbsProvider,
    GoogleAnalytics,
    SplashScreen,
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    SintomasListProvider,
    DiagnosticoProvider,
    DiagnosticoProvider,
    Camera,
    RegistrosProvider
  ]
})

export class AppModule {
  constructor(config: Config) {
    config.setTransition('fade-transition', FadeTransition);
  }
}
