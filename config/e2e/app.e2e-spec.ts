import { AngularRouteRc5TestPage } from './app.po';

describe('angular-route-rc5-test App', function() {
  let page: AngularRouteRc5TestPage;

  beforeEach(() => {
    page = new AngularRouteRc5TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
