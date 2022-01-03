import React, { useState, useEffect, useContext } from 'react';
import axios from '../../../../apis/atelier';
import Style from './Style';
import { StylesContext, CurrentStyleContext } from '../../ProductDetails';
import { CurrentSizeContext, CurrentSkuContext } from '../../ProductDetails';
import { CurrentQuantityContext, CurrentIndexContext } from '../../ProductDetails';
import { CurrentImageContext, CurrentStylePhotosContext } from '../../ProductDetails';

const StyleSelector = () => {
  const styles = useContext(StylesContext);
  const { currentStyle, setCurrentStyle } = useContext(CurrentStyleContext);
  const { currentSize, setCurrentSize } = useContext(CurrentSizeContext);
  const { currentSku, setCurrentSku } = useContext(CurrentSkuContext);
  const { setCurrentQuantity } = useContext(CurrentQuantityContext);
  const { currentIndex } = useContext(CurrentIndexContext);
  const { setCurrentImage } = useContext(CurrentImageContext);
  const { setCurrentStylePhotos } = useContext(CurrentStylePhotosContext);

  const styleClickHandler = (style) => {
    setCurrentStyle(style);
    setCurrentStylePhotos(style.photos);
    setCurrentSize(null);
    setCurrentSku(null);
    setCurrentQuantity(null);
    setCurrentImage(style.photos[currentIndex].thumbnail_url);
  };

  const thumbnailsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <div>
      <h4>Current Style: {currentStyle.name}</h4> <br></br>
      <div style={thumbnailsStyle}>
        {styles.map((style) => {
          return (
            <Style
              style={style}
              key={style.style_id}
              currentStyle={currentStyle}
              styleClickHandler={styleClickHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
