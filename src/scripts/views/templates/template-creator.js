import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
  <img class="restaurant-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
  <div class="restaurant-info">
    <h3 class="name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <div class="rating" tabindex="0">
    ⭐️
      <p tabindex="0">${restaurant.rating}</p>
    </div>
    <p class="city" tabindex="0">${restaurant.city}</p>
    <p class="description" tabindex="0">${restaurant.description}</p>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="sukai Restaurant ini" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="batalkan sukai Rastaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
