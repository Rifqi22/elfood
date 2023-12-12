import './restaurant-item';

class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
          
        
        @media screen and (min-width: 700px){
          :host {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px 10px;
          }
        }
        
        @media screen and (min-width: 800px){
          .nav_list{
              max-width: 800px;
              margin: 0 auto;
          }
        }
        
        @media screen and (min-width: 900px){
          .headline{
              display: grid;
              grid-template-columns: repeat(2, 1fr);
        
          }
        
          .headline__content{
              padding: 16px 32px;
          }
        
          :host {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media screen and (min-width: 1200px){
          :host{
              margin: 0;
          }
        }
        </style>
        `;
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;
      this.shadowDOM.appendChild(restaurantItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
        restaurant-list > .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </>
        `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('restaurant-list', RestaurantList);
