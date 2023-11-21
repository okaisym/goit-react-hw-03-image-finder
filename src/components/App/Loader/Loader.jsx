import React from 'react';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader">
      <Circles type="Puff" color="#00BFFF" height={100} width={100}/>
    </div>
  );
};