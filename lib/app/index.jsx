'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

// main();
//
// function main() {
//     React.render(
//       <App />
//     , document.getElementById('app'));
// }

class MyComponent extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

ReactDOMServer.renderToString(<MyComponent />);
