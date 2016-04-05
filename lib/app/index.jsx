import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app.jsx';

function main() {
  ReactDOMServer.renderToString(<App />, document.getElementById('app'));
}

main();

ReactDOMServer.renderToString(<App />);
