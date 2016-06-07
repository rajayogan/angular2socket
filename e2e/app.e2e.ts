import { Angular2socketPage } from './app.po';

describe('angular2socket App', function() {
  let page: Angular2socketPage;

  beforeEach(() => {
    page = new Angular2socketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2socket works!');
  });
});
