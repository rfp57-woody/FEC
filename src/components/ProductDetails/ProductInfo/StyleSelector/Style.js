import React, { useState, useEffect, useContext } from "react";
import axios from "../../../../apis/atelier";
import { CurrentIndexContext } from "../../ProductDetails";

const Style = (props) => {
  const { currentIndex } = useContext(CurrentIndexContext);

  const thumbnailStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "100%",
    width: "20%",
    height: "100px",
    margin: "0px 10px 10px 10px",
  };

  const selectedStyle = {
    borderStyle: "solid",
    borderWidth: "5px",
    borderRadius: "100%",
    width: "20%",
    height: "100px",
    margin: "0px 10px 10px 10px",
  };

  return (
    <span>
      <img
        style={
          props.style === props.currentStyle ? selectedStyle : thumbnailStyle
        }
        src={props.style.photos[0].thumbnail_url}
        onClick={() => props.styleClickHandler(props.style)}
      ></img>
    </span>
  );
};

export default Style;
