export class Angular2socketPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2socket-app h1')).getText();
  }
}
