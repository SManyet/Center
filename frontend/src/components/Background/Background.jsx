import React from 'react';

const Background = () => {
  const url = `https://picsum.photos/${window.innerWidth}/${window.innerHeight}`;

  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    />
  );
};

export default Background;
