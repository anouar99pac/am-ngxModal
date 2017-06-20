import { NgxModalPage } from './app.po';

describe('ngx-modal App', () => {
  let page: NgxModalPage;

  beforeEach(() => {
    page = new NgxModalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
