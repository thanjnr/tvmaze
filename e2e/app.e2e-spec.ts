import { TvmazePage } from './app.po';

describe('tvmaze App', () => {
  let page: TvmazePage;

  beforeEach(() => {
    page = new TvmazePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
