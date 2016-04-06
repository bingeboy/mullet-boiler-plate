import React, { PropTypes } from 'react';

const App = ({ className, children }) => (
    <div className={className}>
      {children}
    </div>
  );

App.propTypes = {
  className: PropTypes.String,
  children: PropTypes.element,
};

export {
  App,
};
