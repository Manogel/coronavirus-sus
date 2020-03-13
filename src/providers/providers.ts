import { Usuario } from './usuario';
import { ConnectivityProvider } from './connectivity.provider';
import { MapProvider } from './map.provider';
import { SaudeProvider } from './saude.provider';
import { Globals } from './globals';
import { DicaProvider } from './dica.provider';
import { IonicUtilProvider } from './ionic-util'
import { LoginProvider } from './login.provider';
import { AbstractProvider } from './abstract.provider';

export const Providers: any[] = [
  Usuario,
  ConnectivityProvider,
  MapProvider,
  SaudeProvider,
  Globals,
  DicaProvider,
  IonicUtilProvider,
  LoginProvider,
  AbstractProvider
];
