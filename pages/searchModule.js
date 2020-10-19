import { ClientFunction ,Selector as $, t } from 'testcafe';
import basePage from './basePage';


/**
 * search can exist on multiple pages so we make it a module
 * that we can then require on multiple pages
 */
  const searchModule = {
    url:          '?search',
    box:          $('#Address_SingleStreetAddress'),
    searchBtn:    $('[class="x-button--solid "]'),
    results:      $('[class="x-suggestions__item"]'),
    addtocart:    $('[class="x-flex__content x-offercard__addcart"]'),

  /**
   * Search blog posts
   * @param  {string}
   */
  async forText(text) {
    await t
    .maximizeWindow()
      .typeText(this.box, text)
      .click(this.results);       
  },
  
  async ShowDealsClick() {
   await t
    .wait(8000)
    .expect(this.searchBtn.visible).ok()
    .hover(this.searchBtn)
    .click(this.searchBtn);
  },

  async addToCartClick() {
    await t
    .wait(8000)
    .expect(this.addtocart.visible).ok()
    .hover(this.addtocart)
    .click(this.addtocart.nth(1)); 
  },
 
  async verifyURL(postTitle) {
    await t.wait(10000);
    return await $('a').withText(postTitle).exists;
  },
}
export default {...basePage, ...searchModule}