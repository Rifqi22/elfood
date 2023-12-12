class HeroBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>

            :host{
                display: block;
                width: 100%;
                height: 30%;
                background-color: #333;
                color: #fff;
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h1 {
                padding: 16px
                font-size: 36px;
                text-align: left;
                margin-left: 20px
            }

            .hero {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                text-align: center; 
              }
              .hero__inner {
                margin-top: 20px;
              }


            @media  (max-width: 550px) {
                h1 {
                    font-size: 20px;
                }
            }
            @media only screen and (max-width: 650px) {
              .hero {
                  background:url(./images/heros/hero-image_4-small.jpg);
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
              }
          }
          
          @media only screen and (min-width: 651px) {
              .hero {
                  background:url(./images/heros/hero-image_4-large.jpg);
                  background-size: cover;
                  background-position: center;
                  background-repeat: no-repeat;
              }
          }
        </style>

        <!-- HTML  -->
        <div class="hero">
        <div class="hero__inner">
          <h2 class="hero__title" tabindex="0">Let's Explore </h2>
          <p class="hero__tagline" tabindex="0">The test of delicious dishes around here.</p>
        </div>
      </div>

        `;
  }
}

customElements.define('hero-bar', HeroBar);
