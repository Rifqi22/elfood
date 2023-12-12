const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('like a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item .restaurant-info a', 10);
  I.seeElement('.restaurant-item .restaurant-info a');

  const restaurant = locate('.restaurant-item .restaurant-info a').first();
  const restaurantTitle = await I.grabTextFrom(restaurant);
  I.click(restaurant);

  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-info', 15);
  I.seeElement('.restaurant-info');
  const likedRestoranTitle = await I.grabTextFrom('.restaurant-item .restaurant-info a');

  assert.strictEqual(restaurantTitle, likedRestoranTitle);
});
