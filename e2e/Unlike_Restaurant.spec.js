const assert = require('assert');

Feature('Reverse Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item .restaurant-info a', 10);
  I.seeElement('.restaurant-item .restaurant-info a');

  const restaurant = locate('.restaurant-item .restaurant-info a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-info', 20);
  I.seeElement('.restaurant-info');
  const firstLikedRestoran = locate('.restaurant-item .restaurant-info a').first();
  const firstLikedRestoranTitle = await I.grabTextFrom(firstLikedRestoran);
  assert.strictEqual(restaurantTitle, firstLikedRestoranTitle);

  I.click(firstLikedRestoran);
  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.dontSeeElement('.restaurant-info');
});
