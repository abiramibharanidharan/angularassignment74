import { AAssignment74Page } from './app.po';

describe('a-assignment74 App', function() {
  let page: AAssignment74Page;

  beforeEach(() => {
    page = new AAssignment74Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
