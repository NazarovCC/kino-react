import React from 'react';
import classes from './Loader.module.css'

const Loader = ({ isLoading }) => {
  return (
    isLoading?
    <div className={classes.loaderWrap}>
        <div className="text-light">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
    </div>
    : null

  );
};

export default Loader;
