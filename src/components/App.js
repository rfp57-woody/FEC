import React, { useState, useEffect } from "react";
import axios from "../apis/atelier";
import ProductDetails from "./ProductDetails/ProductDetails";
import RelatedItems from "./RelatedItems/index.jsx";
import QAapp from "../components/QandA/QAindex.jsx";
import RRIndex from "./Review/RRIndex.jsx";
import { AppContext } from "./context";

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchCurrentProduct();
  }, []);

  const fetchCurrentProduct = async () => {
    const { data: products } = await axios.get("products");
    const { data: initialProductDetail } = await axios.get(
      `products/${products[0].id}`
    );
    setCurrentProduct(initialProductDetail);
  };

  const styles = {
    fontFamily: "Montserrat, sans-serif",
    // display: "grid",
  };

  return (
    <main style={styles}>
      <AppContext.Provider value={{ currentProduct, setCurrentProduct }}>
        <ProductDetails />
        <RelatedItems />
        <QAapp />
        <RRIndex />
      </AppContext.Provider>
    </main>
  );
};

export default App;
