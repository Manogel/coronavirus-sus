import { Animation } from 'ionic-angular/animations/animation';
import { PageTransition } from 'ionic-angular/transitions/page-transition';

export class FadeTransition extends PageTransition {
  init() {
    super.init();

    const enteringView = this.enteringView;
    const leavingView = this.leavingView;

    if ( enteringView && enteringView.pageRef() ) {

      const ele = enteringView.pageRef().nativeElement;
      const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

      wrapper.fromTo('transform', 'scale(1)', 'scale(1)', false);
      wrapper.fromTo('opacity', 0, 1, false);

      this
        .element(enteringView.pageRef())
        .duration(500)
        .easing('cubic-bezier(.1, .7, .1, 1)')
        .add(wrapper);
    }

    if ( leavingView && leavingView.pageRef() ) {

      const ele = leavingView.pageRef().nativeElement;
      const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

      wrapper.fromTo('transform', 'scale(1)', 'scale(1)', true);
      wrapper.fromTo('opacity', 1, 0, true);

      this
        .element(leavingView.pageRef())
        .duration(500)
        .easing('cubic-bezier(.1, .7, .1, 1)')
        .add(wrapper);
    }
  }
}
