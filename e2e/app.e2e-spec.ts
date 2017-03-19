import { GraniteAppPage } from './app.po';

describe('granite-app App', function() {
  let page: GraniteAppPage;

  beforeEach(() => {
    page = new GraniteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
