import React, { useState, useContext, useEffect } from "react";
import QuantityOption from "./QuantityOption";
import { StylesContext, CurrentStyleContext } from "../../ProductDetails";
import { CurrentSkuContext, CurrentSizeContext } from "../../ProductDetails";
import { CurrentQuantityContext } from "../../ProductDetails";

const QuantitySelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle } = useContext(CurrentStyleContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { currentSize } = useContext(CurrentSizeContext);
  const { currentQuantity, setCurrentQuantity } = useContext(
    CurrentQuantityContext
  );
  console.log("currentQuantity:", currentQuantity);

  useEffect(() => {
    if (currentSku && currentSize) {
      for (let key in currentStyle.skus) {
        if (currentStyle.skus[key].size === currentSize) {
          setCurrentSku(key);
        }
      }
    }
  }, []);

  const handleQuantityChange = () => {
    setCurrentQuantity(event.target.value);
    console.log("currentQuantity:", currentQuantity);
  };

  const renderQuantity = () => {
    let content = [];
    let quantity = 1;

    console.log("currentStyle.skus:", currentStyle.skus);
    if (currentSku) {
      console.log(
        "currentStyle.skus[currentSku]:",
        currentStyle.skus[currentSku]
      );
      for (let i = 0; i < currentStyle.skus[currentSku].quantity; i++) {
        content.push(<QuantityOption quantity={quantity} key={quantity} />);
        quantity++;
      }
    }
    return content;
  };

  return (
    <div>
      <h4>Quantity Component</h4>
      Quantity:
      <select onChange={handleQuantityChange}>{renderQuantity()}</select>
    </div>
  );
};

export default QuantitySelector;
