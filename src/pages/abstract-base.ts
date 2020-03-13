import { GoogleAnalytics } from '@ionic-native/google-analytics';

export class AbstractBasePage {

  constructor(viewName,
              public analytics: GoogleAnalytics) {
    this.analytics.trackView(viewName);
  }

}
