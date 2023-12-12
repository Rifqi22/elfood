import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Your Liked Restaurants</h2>
            <div id="restaurant-list" class="restaurant-list">
       
            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
