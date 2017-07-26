import { AngularGooglePage } from './app.po';

describe('angular-google App', () => {
  let page: AngularGooglePage;

  beforeEach(() => {
    page = new AngularGooglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
