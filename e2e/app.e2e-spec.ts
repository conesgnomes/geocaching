import { GeocachingPage } from './app.po';

describe('geocaching App', () => {
  let page: GeocachingPage;

  beforeEach(() => {
    page = new GeocachingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
