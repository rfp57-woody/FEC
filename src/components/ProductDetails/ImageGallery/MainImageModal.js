import React from 'react';
import ReactDom from 'react-dom';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import Thumbnails from './Thumbnails';

const MainImageModal = ({ isOpen, setIsOpen, closeModal, currentImage, currentStyle, children }) => {
  const modalStyles = {
    position: 'fixed',
    width: '650px',
    height: '650px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    zIndex: 1000,
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 100,
  };

  const imgStyles = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  const buttonStyles = {
    position: 'fixed',
    top: 0,
    right: 0,
  };

  const leftArrowStyles = {
    position: 'fixed',
    marginTop: '325px',
  };

  const rightArrowStyles = {
    position: 'fixed',
    marginTop: '325px',
    right: 0,
  };

  const thumbnailStyles = {
    display: 'flex',
    position: 'fixed',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  if (!isOpen) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div
        style={overlayStyles}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div style={modalStyles}>
        <button style={buttonStyles} onClick={closeModal}>
          Close Modal
        </button>
        <LeftArrow isOpen={isOpen} style={leftArrowStyles} />
        <RightArrow isOpen={isOpen} style={rightArrowStyles} />
        <Thumbnails isOpen={isOpen} style={thumbnailStyles} currentStyle={currentStyle} />
        <img style={imgStyles} src={currentImage}></img>
        {/* <img style={imgStyles} src='../imgs/left'></img> */}
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default MainImageModal;
