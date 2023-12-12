import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
            <h1 id="title-page">Loading data....</h1>
            <div id='likeButtonContainer' tabindex="0"></div>
            <div class='restaurant-item' id='item'></div>
            
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let detailData = '';
    let categoryMenu = '';
    let foodMenu = '';
    let drinkMenu = '';
    let reviewList = '';
    const data = await RestaurantSource.detailRestaurant(url.id);

    // eslint-disable-next-line no-shadow
    data.restaurant.categories.forEach((data) => {
      categoryMenu += `${data.name} `;
    });

    // eslint-disable-next-line no-shadow
    data.restaurant.menus.foods.forEach((data) => {
      foodMenu += `<li tabindex="0">${data.name}</li>`;
    });

    // eslint-disable-next-line no-shadow
    data.restaurant.menus.drinks.forEach((data) => {
      drinkMenu += `<li tabindex="0">${data.name}</li>`;
    });

    if (Array.isArray(data.restaurant.customerReviews)) {
      data.restaurant.customerReviews.forEach((review) => {
        reviewList += `
              <div class='review' tabindex="0">
                <div class="review_user_container" tabindex="0">
                  <img class="review_user lazyload" data-src="./images/heros/icon/user.png" tabindex="0" alt="User Image">
                </div>
                <p class="review_name" tabindex="0">${review.name}<span tabindex="0" style="font-size: 10px; display:block">[${review.date}]</span></p>
                <p tabindex="0">"${review.review}"</p>
              </div>
              `;
      });
    } else {
      reviewList += '<p tabindex="0">No reviews available</p>';
    }

    detailData += `
              <div class="restaurant-info" tabindex="0">
                <div class="main_data" tabindex="0">
                  <h2 class="name" tabindex="0">${data.restaurant.name} | ${data.restaurant.rating}⭐️</h2>
                  <h3 class="address" tabindex="0"> ⟟ ${data.restaurant.address}, ${data.restaurant.city}</h3>
                  <img class="restaurant-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL + data.restaurant.pictureId}" alt="${data.restaurant.name}" title="${data.restaurant.name}" tabindex="0" crossorigin="anonymous">
                  <p class="description" tabindex="0">${data.restaurant.description}</p>
                </div>

                <div class="support_data" tabindex="0">
                  <div class="menu-container" tabindex="0">
                    <h2 tabindex="0">Menu</h2>
                      <div class="category" tabindex="0">Kategori: ${categoryMenu}</div>
                        <div class="menu" tabindex="0">                    
                          <div tabindex="0">
                            <h3 tabindex="0">Makanan</h3>
                            ${foodMenu}
                          </div>
                          <div tabindex="0">
                            <h3 tabindex="0">Minuman</h3>
                          ${drinkMenu}
                          </div>
                        </div>

                  </div>
                </div>
              </div>
              <div class="review-info" tabindex="0">
                <h2 tabindex="0">Review</h2>
                <p tabindex="0">Bagaimana pendapat mereka?</p>
                <div class="review_list" tabindex="0">${reviewList}</div> 
              </div>

                    
                    `;

    document.querySelector('#title-page').innerHTML = 'Detail Restoran';
    document.querySelector('.restaurant-item').innerHTML = detailData;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        description: data.restaurant.description,
        rating: data.restaurant.rating,
        pictureId: data.restaurant.pictureId,
        city: data.restaurant.city,
        address: data.restaurant.address,
      },
    });
  },
};

export default Detail;
