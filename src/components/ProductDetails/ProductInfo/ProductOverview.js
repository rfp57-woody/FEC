import React, { useState, useContext } from 'react';
import { AppContext } from '../../context';
const ProductOverview = () => {
  const { currentProduct } = useContext(AppContext);

  return currentProduct ? <h4>{currentProduct.description}</h4> : null;
};

export default ProductOverview;
