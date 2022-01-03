import React from "react";

import {
  Galery6Png,
  Galery9Png,
  Galery12Png,
  Galery8Png,
  Galery11Png,
  Galery3Png,
  Galery10Png,
  Galery2Png,
  Galery5Png,
  Galery1Png,
  Galery4Png,
  Galery7Png,
} from "../../../assets";

export default function Gallary() {
  return (
    <section className='gallery' id='gallery'>
      <div className='container'>
        <h2 className='gallery-title'>Art Gallery</h2>
        <div className='slide-1'>
          <img src={Galery1Png} className='png1' alt='galery' />
          <img src={Galery4Png} className='png1' alt='galery' />
          <img src={Galery7Png} className='png1' alt='galery' />
          <div className='shadow'>
            <img src={Galery10Png} className='png1' alt='galery' />
          </div>
        </div>
        <div className='slide-1 slide-2'>
          <img src={Galery2Png} className='png1' alt='galery' />
          <img src={Galery5Png} className='png1' alt='galery' />
          <img src={Galery8Png} className='png1' alt='galery' />
          <div className='shadow'>
            <img src={Galery11Png} className='png1' alt='galery' />
          </div>
        </div>
        <div className='slide-1 slide-3'>
          <img src={Galery3Png} className='png1' alt='galery' />
          <img src={Galery6Png} className='png1' alt='galery' />
          <img src={Galery9Png} className='png1' alt='galery' />
          <div className='shadow'>
            <img src={Galery12Png} className='png1' alt='galery' />
          </div>
          <div className='black-l'></div>
        </div>
      </div>
    </section>
  );
}
