import React from "react";

import {
  WelomeSlider1,
  WelomeSlider2,
  WelomeSlider3,
  WelomeSlider4,
  WelomeSlider5,
} from "../../../assets";

import { Carousel } from "./SliderWelcome/carousel/Carousel";

export default function Welcome() {
  return (
    <section className='welcome' id='welcome'>
      <div className='container'>
        <div className='welcome-head'>
          <h2>
            Welcome <br />
            to the Louvre
          </h2>
          <div className='welcome-text'>From the castle to the museum</div>
          <a href='https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736'>
            <div className='button'>
              <span className='btn-text'>Discover the Louvre</span>
            </div>
          </a>
        </div>
        <Carousel>
          <picture className='pic-welcome'>
            <img src={WelomeSlider1} alt='' />
          </picture>
          <picture className='pic-welcome'>
            <img src={WelomeSlider2} alt='' />
          </picture>
          <picture className='pic-welcome'>
            <img src={WelomeSlider3} alt='' />
          </picture>
          <picture className='pic-welcome'>
            <img src={WelomeSlider4} alt='' />
          </picture>
          <picture className='pic-welcome'>
            <img src={WelomeSlider5} alt='' />
          </picture>
        </Carousel>
      </div>
      <div className='shadow'>Thisioadhoip</div>
    </section>
  );
}
