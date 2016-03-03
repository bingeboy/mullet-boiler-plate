'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

main();

function main() {
    ReactDOMServer.renderToString(
      <App />
    , document.getElementById('app'));
}

ReactDOMServer.renderToString(<App />);
