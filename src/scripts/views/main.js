import RestaurantSource from '../data/restaurants-source';
import '../component/restaurant-list';

const main = () => {
  // const searchElement = document.querySelector('search-bar');
  const restaurantListElement = document.querySelector('restaurant-list');
  // eslint-disable-next-line no-unused-expressions
  restaurantListElement.restaurants;

  const renderRestaurant = async () => {
    try {
      const result = await RestaurantSource.searchRestaurant();
      // eslint-disable-next-line no-use-before-define
      renderResult(result);
    } catch (message) {
      // eslint-disable-next-line no-use-before-define
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    restaurantListElement.restaurants = results;
  };

  const fallbackResult = (message) => {
    restaurantListElement.renderError(message);
  };

  renderRestaurant();
};

export default main;
