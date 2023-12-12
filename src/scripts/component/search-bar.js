class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallbacks() {
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .search-box {
            text-align: center;
            margin-top: 40px;
        }

        .search-box > input {
            width: 80%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 16px;
        }

        .search-box > input:focus {
            outline: 0;
            border-bottom: 2px solid #B4B4B3;
          }

        .search-box > input:focus::placeholder {
            font-weight: bold;
          }
          
        .search-box >  input::placeholder {
            color: #B4B4B3;
            font-weight: normal;
          }

        .search-box > button {
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 18px;
            cursor: pointer;
        }

        @media screen and (max-width: 550px){
            .search-box{
                flex-direction: column;
            }
            .search-box > input {
                width: 100%;
                margin-bottom: 12px;
            }

            .search-box > button {
                width: 100%;
            }
        }
        </style>

        <div class="search-box">
            <h2>Search Restaurant </h2>
            <input id="searchElement" placeholder="Search for Restaurant ..." type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
