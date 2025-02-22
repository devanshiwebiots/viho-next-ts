'use client';

import React, { Fragment, useState, useEffect } from 'react';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <Fragment>
      <div className={`loader-wrapper ${show ? '' : 'loderhide'}`}>
        <div className='theme-loader'>
          <div className='loader-p'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
