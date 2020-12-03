import React from 'react';
import PropTypes from 'prop-types';

const Background = ({ url }) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      width: window.innerWidth,
      height: window.innerHeight,
    }}
  />
);

Background.propTypes = {
  url: PropTypes.string,
};

Background.defaultProps = {
  url: 'http://localhost:8080',
};

export default Background;
