import React from 'react';

const Banner = ({ title }) => (
  <div
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1 style={{ color: 'white', fontSize: '3rem' }}>{title}</h1>
  </div>
);

export default Banner;
