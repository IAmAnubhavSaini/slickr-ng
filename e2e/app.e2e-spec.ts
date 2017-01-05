import { SlickrPage } from './app.po';

describe('slickr App', function() {
  let page: SlickrPage;

  beforeEach(() => {
    page = new SlickrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
