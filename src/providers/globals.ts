import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    public url: string;
    public parseAppId: string;
    public parseJsId: string;
    public serverURL: string;
    public parseRestKey: string;
    public facebookAPPID:string = "2110525809169655";
    public masterKey: string;

    constructor() {
        this.url = '';

        this.parseAppId = '123242d9f6164a2d1b6eb0266010f1b1';
        // this.parseJsId = 'W1ccHDYbSQSeSWJxrdzWGjrSbXxeYMyW5BDGIbVo';
       // this.serverURL = 'https://parseapi.back4app.com/';
        this.serverURL = 'http://mobileapps.saude.gov.br/coronavirus';
        // this.parseRestKey='KZYbBg9bwbEddiRzUCzDSROuij0eWgQUCO1PpaD7';
        this.masterKey = '8798c7b4a2b5ff83a167b072dee17421';
    }
}
