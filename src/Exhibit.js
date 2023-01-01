import React from 'react';

const Exhibit = ({ heading, children }) => (
  <div>
    <h1>{heading}</h1>
    {children}
  </div>
);

export default Exhibit;
