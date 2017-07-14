import { DuanPage } from './app.po';

describe('duan App', function() {
  let page: DuanPage;

  beforeEach(() => {
    page = new DuanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
