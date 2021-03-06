import React, { useState, useEffect, useReducer } from 'react';
import ProductBreakDown from './productBreakDown.jsx';

const BreakDown = (props) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  var ratingData = props.metaData.ratings;
  var totalStars = 0;
  var totalReviews = 0;
  for (var key in ratingData) {
    totalStars = totalStars + key * Number(ratingData[key]);
  }
  for (var key in ratingData) {
    totalReviews = totalReviews + Number(ratingData[key]);
  }
  var result = totalStars / totalReviews;

  var rounded = Math.round(result * 10) / 10;

  var summaryRating = rounded;

  var percentage = String((summaryRating / 5) * 100) + '%';

  var starFiler = (e) => {
    var number = Number(e.target.className[4]);
    var record = props.filterRecord;
    var filterdata = props.filterData;

    if (record[number] === true) {
      var result = [];
      for (var i = 0; i < filterdata.length; i++) {
        if (filterdata[i].rating !== number) {
          result.push(filterdata[i]);
        }
      }
      if (result.length !== 0) {
        props.setfilterData(result);
      } else {
        props.setfilterData(props.data);
      }
      delete record[number];
      props.setfilterRecord(record);
    } else {
      if (filterdata.length === props.data.length) {
        var result = [];
      } else {
        var result = filterdata;
      }
      for (var i = 0; i < props.data.length; i++) {
        if (props.data[i].rating === number) {
          result.push(props.data[i]);
        }
      }
      props.setfilterData(result);
      record[number] = true;
      props.setfilterRecord(record);
    }
  };

  var filterFuc = () => {
    var result = [];
    for (var key in props.filterRecord) {
      result.push(<div className="breakdown-filter">{key} star</div>);
    }
    return result;
  };

  var standardStyle = {
    color: 'grey',
    fontSize: '30px',
    position: 'relative',
    display: 'inline-block',
  };

  var ratingStarStyle = {
    color: 'white',
    position: 'absolute',
    width: percentage,
    top: '0',
    left: '0',
    overflow: 'hidden',
  };
  var starPercentage = (starNumber) => {
    return String((ratingData[starNumber] / totalReviews) * 100) + '%';
  };

  var ratingBarStyle = (starNumber) => {
    var percentage = starPercentage(starNumber);
    var style = { backgroundColor: 'green', height: '10px', width: percentage, borderRadius: '5px' };
    return style;
  };

  var breakDownStarStyle = {
    width: '100px',
    display: 'inline-block',
  };

  return (
    <div className="ratingSummary">
      <span id="numberSummary" style={{ fontSize: '100px' }}>
        {summaryRating}
      </span>
      <span className="star" style={standardStyle}>
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span style={ratingStarStyle}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </span>
      <div className="breakDownRatings">
        <h2>Rating Breakdown</h2>
        <div className="filter">
          {filterFuc()}
          {Object.keys(props.filterRecord).length === 0 ? null : (
            <div className="clearAll" onClick={props.clearAll}>
              clear all
            </div>
          )}
        </div>
        <div className="stars">
          <span className="star5" style={breakDownStarStyle} onClick={starFiler}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <div className="bar">
            <div className="breakdown-bar" style={ratingBarStyle(5)}></div>
          </div>
          <span className="review-rating-data">{ratingData[5]}</span>
        </div>
        <div className="stars">
          <span className="star4" style={breakDownStarStyle} onClick={starFiler}>
            &#9733;&#9733;&#9733;&#9733;
          </span>
          <div className="bar">
            <div className="breakdown-bar" style={ratingBarStyle(4)}></div>
          </div>
          <span className="review-rating-data">{ratingData[4]}</span>
        </div>
        <div className="stars">
          <span className="star3" style={breakDownStarStyle} onClick={starFiler}>
            &#9733;&#9733;&#9733;
          </span>
          <div className="bar">
            <div className="breakdown-bar" style={ratingBarStyle(3)}></div>
          </div>
          <span className="review-rating-data">{ratingData[3]}</span>
        </div>
        <div className="stars">
          <span className="star2" style={breakDownStarStyle} onClick={starFiler}>
            &#9733;&#9733;
          </span>
          <div className="bar">
            <div className="breakdown-bar" style={ratingBarStyle(2)}></div>
          </div>
          <span className="review-rating-data">{ratingData[2]}</span>
        </div>
        <div className="stars">
          <span className="star1" style={breakDownStarStyle} onClick={starFiler}>
            &#9733;
          </span>
          <div className="bar">
            <div className="breakdown-bar" style={ratingBarStyle(1)}></div>
          </div>
          <span className="review-rating-data">{ratingData[1]}</span>
        </div>
        <p style={{ fontSize: '20px', marginBottom: '10px', marginTop: '10px' }}>
          {' '}
          {Math.round((props.metaData.recommended.true / totalReviews) * 1000) / 10}% of reviews recommend this product
        </p>
      </div>
      <ProductBreakDown data={props.metaData.characteristics} />
    </div>
  ); //&#9733 is the star symbol
};

export default BreakDown;

// {color:'gold', position:'absolute', width:'50%', top:'0', left:'0', overflow:'hidden', display:'block'}
