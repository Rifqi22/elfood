import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import './component/hero-bar';
import './component/app-bar';
// import main from './views/main.js';

import swRegister from './utils/sw-register';
import App from './views/app';
import WebSocketInitiator from './utils/websocket-initiator';
import FooterToolsInitiator from './utils/footer-tools-initiator';
import CONFIG from './globals/config';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

// Initialize footer tools
FooterToolsInitiator.init({
  subscribeButton: document.querySelector('#subscribePushNotification'),
  unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
});

// document.addEventListener('DOMContentLoaded', main);
