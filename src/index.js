import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import Helmet from 'react-helmet';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="https://minesweeper.sinners.be/icons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="https://minesweeper.sinners.be/icons/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="https://minesweeper.sinners.be/icons/favicon-16x16.png"/>
      <link rel="manifest" href="https://minesweeper.sinners.be/icons/site.webmanifest"/>
      <link rel="mask-icon" href="https://minesweeper.sinners.be/icons/safari-pinned-tab.svg" color="#ff5757"/>
      <link rel="shortcut icon" href="https://minesweeper.sinners.be/icons/favicon.ico"/>
      <meta name="msapplication-TileColor" content="#252525"/>
      <meta name="msapplication-config" content="https://minesweeper.sinners.be/icons/browserconfig.xml"/>
      <meta name="theme-color" content="#ffffff"/>
      <title>Minesweeper</title>
    </Helmet>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
