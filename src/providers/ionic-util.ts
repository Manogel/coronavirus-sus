import { Injectable } from '@angular/core';
import { Platform, LoadingController, ToastController, AlertController } from 'ionic-angular';
// import * as _ from 'underscore';

declare var navigator: any;
declare var Connection: any;

@Injectable()
export class IonicUtilProvider {
    private _loading: any;
    public cordova: boolean = false;
    public _widthPlatform: any;
    public _heightPlatform: any;
    private maxWidth: number = 640;

    constructor(private platform: Platform,
                private loadingCtrl: LoadingController,
                private toastCtrl: ToastController,
                private alertCtrl: AlertController) {

        this.cordova = platform.is( 'cordova' );

        console.log('Cordova', this.cordova);

        platform.ready().then(() => {
            this._widthPlatform = platform.width() <= this.maxWidth ? platform.width() : this.maxWidth;
            this._heightPlatform = platform.height();
        });

    }

    isOnline(): boolean {
        if (this.cordova && navigator.connection) {
            return navigator.connection.type !== Connection.NONE;
        } else {
            return navigator.onLine;
        }
    }

    isOffline() {
        if (this.cordova && navigator.connection) {
            let networkState = navigator.connection.type;
            return networkState === Connection.NONE;
        } else {
            return !navigator.onLine;
        }
    }

    onLoading(message: string = '', duration?): void {

        if(duration > 0){
            this._loading = this.loadingCtrl.create({ content: message, duration: duration });
        }else{
            this._loading = this.loadingCtrl.create({ content: message });
        }
        this._loading.present();
    }

    endLoading(): void {
        this._loading.dismiss();
    }

    toast(message: string): void {
        let toast = this.toastCtrl.create({
            message: message,
            position: 'top',
            duration: 3000,
        });
        toast.present();
    }

    tryConnect() {
        return new Promise((resolve, reject) => {
            let confirm = this.alertCtrl.create({
                title: 'OffLine',
                message: 'Tentar Novamente?',
                buttons: [
                    {
                        text: 'Tentar',
                        handler: () => {
                            resolve();
                        }
                    },
                    {
                        text: 'Cancelar',
                        handler: () => {
                            reject();
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
}
