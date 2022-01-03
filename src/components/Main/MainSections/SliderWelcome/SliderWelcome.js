import {
  WelomeSlider1,
  WelomeSlider2,
  WelomeSlider3,
  WelomeSlider4,
  WelomeSlider5,
} from "../../../../assets";

import { Carousel } from "./carousel/Carousel";

export const SliderWelcome = () => {
  return (
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
  );
};
