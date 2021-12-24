import React, { useState, useEffect } from 'react';
import axios from '../apis/atelier';
import ProductDetails from './ProductDetails/ProductDetails;
import RelatedItems from './RelatedItems';


const App = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    axios.get('products').then(res => setTest(res.data));
  }, []);

  return (
    <div>
      <h2>Hi guys</h2>
      <h3>Date : {new Date().toDateString()}</h3>
      <ProductDetails />
      <RelatedItems />
    </div>
  );
};

export default App;
