import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Background = (props) => {
  const [options, setOptions] = useState(0);

  useEffect(() => {
    fetch(props.url)
      .then((res) => res.json())
      .then((json) => {
        console.log('here');
        setOptions(json);
      });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(http://localhost:8080/${
          options[Math.floor(Math.random(options.length))]
        })`,
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    />
  );
};

Background.propTypes = {
  url: PropTypes.string,
};

Background.defaultProps = {
  url: 'http://localhost:8080',
};

export default Background;
