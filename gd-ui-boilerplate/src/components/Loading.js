import React from 'react';

import viewGIF from '../assets/img/ico/loading-32.gif';

const Loading = () => {
  return (
      <div className="loading">
        <img src={viewGIF} alt="Loading ico" />
      </div>
  );
};

export default Loading;
