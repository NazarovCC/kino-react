import React, { useEffect, useState } from 'react';

const PosterBg = ({ imageUrl }) => {
  const [compStyle, setCompStyle] = useState({
    backgroundImage:
      'linear-gradient(45deg, rgb(0,3,38)0%, rgb(82,15,117)100%)',
  });
  useEffect(() => {
    if (imageUrl) {
      setCompStyle({ backgroundImage: `url('${imageUrl}')` });
    } else {
      setCompStyle({
        backgroundImage:
          'linear-gradient(45deg, rgb(0,3,38)0%, rgb(82,15,117)100%)',
      });
    }
  }, [imageUrl]);
  return <div className="poster-page-bg" style={compStyle}></div>;
};

export default PosterBg;
