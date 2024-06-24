import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './client';

const appMarkup = ReactDOMServer.renderToString(<App />);

export default appMarkup;