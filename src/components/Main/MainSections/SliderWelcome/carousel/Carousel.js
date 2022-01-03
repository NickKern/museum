import "./Carousel.css";
import React, { useState, useEffect, cloneElement, Children } from "react";

import { ArrowLeftSvg } from "../../../../../assets";

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState([]);
  const [countImg, setCountImg] = useState(1);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `1000px`,
            maxWidth: `1000px`,
          },
        });
      })
    );
  }, []);

  const handleLeft = () => {
    setCountImg((currentCountImg) => {
      const newCountImg = currentCountImg - 1;
      return Math.max(newCountImg, 1);
    });
    setOffset((currentoffset) => {
      const newOffset = currentoffset + 1000;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setCountImg((currentCountImg) => {
      const newCountImg = currentCountImg + 1;
      return Math.min(newCountImg, 5);
    });
    setOffset((currentoffset) => {
      const newOffset = currentoffset - 1000;
      const maxOffset = -(1000 * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <div className='main-container'>
      <div className='window'>
        <div
          className='all-pages-container'
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <div className='slide-bar'>
        <div className='item1'>
          <span className='current-page'>0{countImg}</span>
          <span className='delimiter'>|</span>
          <span className='end-page'>05</span>
        </div>
        <div className='item2'>
          <label className='square'>
            <input checked={countImg === 1} type='radio' name='radio-square' />
            <span className='checkmark'></span>
          </label>
          <label className='square'>
            <input checked={countImg === 2} type='radio' name='radio-square' />
            <span className='checkmark'></span>
          </label>
          <label className='square'>
            <input checked={countImg === 3} type='radio' name='radio-square' />
            <span className='checkmark'></span>
          </label>
          <label className='square'>
            <input checked={countImg === 4} type='radio' name='radio-square' />
            <span className='checkmark'></span>
          </label>
          <label className='square'>
            <input checked={countImg === 5} type='radio' name='radio-square' />
            <span className='checkmark'></span>
          </label>
        </div>
        <div className='item3'>
          <button onClick={handleLeft} className='item3-button left-arrow'>
            <img src={ArrowLeftSvg} alt='arrow' />
          </button>
          <button onClick={handleRight} className='item3-button right-arrow'>
            <img src={ArrowLeftSvg} alt='arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};
