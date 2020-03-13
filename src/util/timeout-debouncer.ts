// import { Injectable } from '@angular/core';
//
// @Injectable()
export class TimeoutDebouncer {

    private wait: any;
    private timer: any;
    private callback: any;

    constructor (wait) {
        this.wait = wait;
        this.timer = null;
    }

    debounce (callback) {
        this.callback = callback;
        this.schedule();
    }

    schedule () {
        this.cancel();
        if (this.wait <= 0) {
            this.callback();
        }
        else {
            this.timer = setTimeout(this.callback, this.wait);
        }
    }

    cancel () {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }

}
