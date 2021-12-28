import React, { useState, useContext } from "react";
import { CurrentStyleContext } from "../ProductDetails";
const ProductPrice = () => {
  const { currentStyle } = useContext(CurrentStyleContext);

  const salePriceStyle = {
    color: "red",
  };
  const oldPriceStyle = {
    color: "black",
    textDecoration: "line-through",
  };

  return (
    <h4>
      Product Price:
      {currentStyle.sale_price ? (
        <span style={salePriceStyle}>
          {" "}
          {currentStyle.sale_price}
          <span style={oldPriceStyle}>{currentStyle.original_price} </span>
        </span>
      ) : (
        currentStyle.original_price
      )}
    </h4>
  );
};

export default ProductPrice;
