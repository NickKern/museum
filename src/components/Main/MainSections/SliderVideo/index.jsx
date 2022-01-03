import React, { useState, useEffect, cloneElement, Children } from "react";

import { VectorStrokeRightSvg, VectorStrokeSvg } from "../../../../assets";

import "./SliderVideo.css";

export default function SliderVideo({ children }) {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState([]);
  const [countImg, setCountImg] = useState(1);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `452px`,
            maxWidth: `254px`,
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
      const newOffset = currentoffset + 484;
      return Math.min(newOffset, 0);
    });
  };
  const handleRight = () => {
    setCountImg((currentCountImg) => {
      const newCountImg = currentCountImg + 1;
      return Math.min(newCountImg, 3);
    });
    setOffset((currentoffset) => {
      const newOffset = currentoffset - 484;
      const maxOffset = -(484 * (pages.length - 3));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <div className='main-container2'>
      <div className='window2'>
        <div
          className='all-pages-container2'
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {pages}
        </div>
      </div>
      <div className='scroll'>
        <button onClick={handleLeft} className='vector-left'>
          <img src={VectorStrokeSvg} alt='vector' />
        </button>
        <label className='scroll-container'>
          <input checked={countImg === 1} type='radio' name='radio-scroll-1' />
          <span className='scroll-checkmark'></span>
        </label>
        <label className='scroll-container'>
          <input checked={countImg === 2} type='radio' name='radio-scroll-2' />
          <span className='scroll-checkmark'></span>
        </label>
        <label className='scroll-container'>
          <input checked={countImg === 3} type='radio' name='radio-scroll-3' />
          <span className='scroll-checkmark'></span>
        </label>
        <button onClick={handleRight} className='vector-right'>
          <img src={VectorStrokeRightSvg} alt='vector' />
        </button>
      </div>
    </div>
  );
}
