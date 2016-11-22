import { SsoPage } from './app.po';

describe('sso App', function() {
  let page: SsoPage;

  beforeEach(() => {
    page = new SsoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
