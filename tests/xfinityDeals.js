import homePage from '../pages/homePage';
import githubPage from '../pages/githubPage';
import searchModule from '../pages/searchModule';

// someday Testcafe will have a `beforeAll`
fixture `Xfinity Deals blog`.beforeEach(async t => {
  await homePage.goto();
});

test('should return search results', async t =>  {
    await homePage.search.forText('1555 suzy st, 441, 17046');
    await homePage.search.ShowDealsClick();
    await homePage.search.addToCartClick();
    await homePage.search.verifyURL("https://www.xfinity.com/buy/video-channels");
  });

