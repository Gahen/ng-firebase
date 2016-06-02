export class NgFirebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-firebase-app h1')).getText();
  }
}
