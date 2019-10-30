import React from 'react';

import viewPNG from '../assets/img/nodata.png';

const NoData = () => {
  return (
    <div className="no-data">
      <img src={viewPNG} alt="Loading ico" className="no-data-img" />
    </div>
  );
};

export default NoData;
