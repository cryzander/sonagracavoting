import { SoNaGracaVotingPage } from './app.po';

describe('so-na-graca-voting App', function() {
  let page: SoNaGracaVotingPage;

  beforeEach(() => {
    page = new SoNaGracaVotingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
