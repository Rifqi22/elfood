class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>

        :root {
          --primary-color: #fff45e;
          --secondary-color:  #fff;
          --tertiary-color: #1f1f1f;
        }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
          }
          
          .restaurant-img {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
          }
          

          .restaurant-info {
            padding: 32px;
          }


          .restaurant-info > .name{
            font-size: 32px;
            margin-bottom: 1em;
            color: var(--secondary-color);
          }

          .restaurant-info > .name:hover{
            color: gray;
            transition: 0.3s ;
          }



          .rating {
            display: flex;
            align-items: center;
            margin-bottom: 2em;
          }

          .rating p {
            font-size: 20px;
          }

          .star {
            width: 50px;
            height: 50px;
            background-image: url('./images/heros/star.png');
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            margin-right: 20px;
          }

          .restaurant-info a {
            text-decoration: none;
            color: black;
          }

          .restaurant-info .city {
            font-size: 20px;
            color: grey;
            margin-bottom: 2em;
          }
          
          .restaurant-info .description {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
            line-height: 2.5em;
            font-size: 20px;
          }


          @media screen and (min-width: 650px){

            .restaurant-info {
                padding: 2em;
            }

            .restaurant-info .name{
                font-size: 1.5em;
            }

            .restaurant-info .description{
                font-size: 1em;
                line-height: 2em;
            }
          }
                
          
          
        </style>

        <img class="restaurant-img" src="${this._restaurant.pictureId}" alt="Restaurant Image">
        <div class="restaurant-info">
          <h3 class="name"><a href="#">${this._restaurant.name}</a></h3>
          <div class="rating" tabindex="0">
            <div class="star"></div>
            <p tabindex="0">${this._restaurant.rating}</p>
          </div>
          <p class="city" tabindex="0">${this._restaurant.city}</p>
          <p class="description" tabindex="0">${this._restaurant.description}</p>
        </div>
      `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
