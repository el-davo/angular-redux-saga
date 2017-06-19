import { AngularReduxSagaPage } from './app.po';

describe('angular-redux-saga App', () => {
  let page: AngularReduxSagaPage;

  beforeEach(() => {
    page = new AngularReduxSagaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
