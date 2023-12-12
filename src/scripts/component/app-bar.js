class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.drawerFunction();
    this.navbarFunction();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            :root {
                --primary-color: #fff45e;
                --secondary-color:  #fff;
                --tertiary-color: #1f1f1f;
            }
          
            :host{
                display: block;
                width: 100%;
                background: none;
                color: var(--secondary-color);
                padding: 20px;
                text-align: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            .title {
                font-size: 40px;
                text-align: left;
                margin-left: 20px;
            }
            .title a{
              text-decoration: none;
              color: var(--secondary-color);
            }
            .title a:hover{
              color: var(--primary-color);
            }
              .header__menu{
                font-size: 50px;
                margin: 10px auto;
                display: block;
                text-align: center;
                color: var(--secondary-color);
              }

              .header__menu:hover{
                color: var(--primary-color);
              }

              /* Responsive Media Query */
              /* Tablet & PC Design */
              @media screen and (min-width: 500px){
                .header__menu {
                    display: none;
                }
                /* flex container */
                .nav__list {
                    display: flex;
                    flex-flow: row;
                    justify-content: flex-end;
                    align-items: stretch;
    
                    background-color: var(--nav);
                    list-style-type: none;
                    margin: 0px;
                    padding: 0px;
                    height: 100%;
                    width: 100%
                }
                /* as flex item of nav ul container */
                /* but also as flex containfer for nav li a */
                .nav__item {
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                }
                /* flex item of nav li container */
                .nav__item a {
                    font-family: Helvetica, sans-serif;
                    font-size: 20px;
                    color: var(--secondary);
                    text-decoration: none;
    
                }
                .nav__item:hover {
                    font-weight: bold;
                    color: var(--primary-color);
                }

                .nav__list a:hover:not(.active){
                    color: var(--primary-color);
                    transition: .5s;
                  }
                  
                  .nav__list .active {
                    border-bottom: 4px solid var(--primary-color);
                    color: var(--primary-color);

                  }
                  
                  .nav__list > li > a.active:hover {
                    color: var(--secondary-color);
                    transition: .5s;
                  }
            }

            /* Handphone Design */
            @media screen and (max-width: 499px){
                /* ----------------------------- */
                /* Navigation Bar */
                    
                .nav {
                    margin-left: auto;
                    margin-right: auto;
                    width: 100vw;
                }
                
                .nav__list {
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    display: flex;
                    flex-flow: column;
                }
                
                .nav__item {
                    box-sizing: border-box;
                    display: inline-block;
                    text-align: center;
                    line-height: 24px;
                    text-transform: uppercase;
                }
                
                .nav a {
                    display: inline-block;
                    padding: 1.3em;
                    text-decoration: none;
                    color: var(--secondary-color);
                    width: 100%;
                    text-align: left;
                }
                
                .nav a:hover {
                    text-decoration: underline;
                    color: var(--primary-color);
                }
                .nav__item:hover {
                    font-weight: bold;
                    color: var(--primary-color);
                }

                .nav__list a:hover:not(.active){
                    color: var(--primary-color);
                    transition: .5s;
                  }
                  
                  .nav__list .active {
                    border-left: 4px solid var(--primary-color);
                    color: var(--primary-color);

                  }
                  
                  .nav__list > li > a.active:hover {
                    color: var(--secondary-color);
                    transition: .5s;
                  }
                .nav {
                    z-index: 10;
                    background-color: rgba(0, 0, 0, 0.9);

                    width: 300px;
                    position: absolute;
            
                    /*Drawer off canvas*/
                    -webkit-transform: translate(-300px, 0);
                    transform: translate(-300px, 0);
            
                    /*Animated Drawer*/
                    transition: transform 0.3s ease;
                }
            
                .open{
                    -webkit-transform: translate(0, 0);
                    transform: translate(0, 0);
                }

                .title {
                    grid-column-start: 1;
                    grid-column-end: 3;
                    text-align: center;
                    font-size: 3em;
                    padding: 0;
                    margin: 20px 20px 0 20px;
                    text-decoration: none;
                }
                .title a{
                  text-decoration: none;
                  color: var(--secondary-color);
                }
                .title a:hover{
                  color: var(--primary-color);
                }
                #menu{
                    grid-column-start: 1;
                    grid-column-end: 3;
                }
            }

            @media  (max-width: 250px) {
                .title {
                    font-size: 2em;
                    padding: 0;
                }
            }
              

        </style>

        <!-- HTML  -->

        <h1 class="title" tabindex="0"><a href="#/list-restaurants"> El Food </a></h1>
        <a id="menu" class="header__menu" href="#">☰</a>
        <nav id="drawer" class="nav">
          <ul class='nav__list'>
            <li class="nav__item active" id="home"><a href="#/list-restaurants">Home</a></li>
            <li class="nav__item" id="favorite"><a href="#/like">Favorite</a></li>
            <li class="nav__item" id="about"><a href='https://rifqi22.github.io/rifqi-portofolio.github.io/' target='_blank'>About Us</a></li>
          </ul>
        </nav>


        `;
  }

  navbarFunction() {
    const home = this.shadowDOM.querySelector('#home');
    const favorite = this.shadowDOM.querySelector('#favorite');

    home.addEventListener('click', (event) => {
      home.classList.toggle('active');
      event.stopPropagation();
      favorite.classList.remove('active');
    });

    favorite.addEventListener('click', (event) => {
      favorite.classList.toggle('active');
      event.stopPropagation();
      home.classList.remove('active');
    });
  }

  drawerFunction() {
    // Function to hide and show burger menu
    const drawer = this.shadowDOM.querySelector('#drawer');
    const menu = this.shadowDOM.querySelector('#menu');
    const hero = document.querySelector('hero-bar');
    const body = document.querySelector('body');

    menu.addEventListener('click', (event) => {
      drawer.classList.toggle('open');
      event.stopPropagation();
      // Menghindari supaya hamburger tidak mengarah ke root domain setiap diklik
      event.preventDefault();
    });

    hero.addEventListener('click', () => {
      drawer.classList.remove('open');
    });

    body.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
}

customElements.define('app-bar', AppBar);
