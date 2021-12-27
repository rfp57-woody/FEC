import React, { useState, useEffect } from "react";
import axios from "../../apis/atelier.js";
import RelatedItemsContainer from "./RelatedItemsContainer";

const RelatedItems = () => {
  const [item, setItem] = useState("40344");
  const [relatedItems, setRelatedItems] = useState(null);

  useEffect(() => {
    useFetch();
  }, []);

  const useFetch = async () => {
    const { data: relatedIds } = await axios.get(`/products/${item}/related`);

    const promiseArray = relatedIds.map(async (productId) => {
      const productDetails = await axios.get(`products/${productId}`);
      const productStyles = await axios.get(`products/${productId}/styles`);
      const { data: productReviews } = await axios.get(`reviews`, {
        params: { count: 100, product_id: productId },
      });
      const finalProduct = productDetails.data;
      finalProduct.styles = productStyles.data.results;
      finalProduct.avgRating =
        productReviews.results.reduce((acc, cur) => acc + cur.rating, 0) /
        productReviews.results.length;

      return finalProduct;
    });

    const productArray = await Promise.all(promiseArray);
    setRelatedItems(productArray);
  };

  return (
    <>
      <h3>Related Items</h3>
      <RelatedItemsContainer items={relatedItems} />
    </>
  );
};

export default RelatedItems;
