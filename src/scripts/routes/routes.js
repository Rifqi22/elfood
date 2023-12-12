/* eslint-disable import/extensions */
import ListRestaurants from '../views/pages/list_restaurants.js';
import Detail from '../views/pages/detail.js';
import Like from '../views/pages/like.js';

const routes = {
  '/': ListRestaurants, // default page
  '/list-restaurants': ListRestaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
