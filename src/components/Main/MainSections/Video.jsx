import React from "react";

import SliderVideo from "./SliderVideo";

export default function Video() {
  return (
    <section className='video' id='video'>
      <div className='container'>
        <h2 className='h2-visiting'>Video journey</h2>
        <div className='video-art'>
          Enter and visit one of the most famous museums in the world and enjoy
          masterpieces such as Mona Lisa or Hammurabi's Code
        </div>
        <div className='block-video'>
          <iframe
            className='big-video'
            width='1440'
            height='650'
            src='https://www.youtube.com/embed/zp1BXPX8jcU'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
          <SliderVideo>
            <iframe
              width='452'
              height='254'
              src='https://www.youtube.com/embed/zp1BXPX8jcU'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              width='452'
              height='254'
              src='https://www.youtube.com/embed/Vi5D6FKhRmo'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              width='452'
              height='254'
              src='https://www.youtube.com/embed/NOhDysLnTvY'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              width='452'
              height='254'
              src='https://www.youtube.com/embed/aWmJ5DgyWPI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              width='452'
              height='254'
              src='https://www.youtube.com/embed/2OR0OCr6uRE'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </SliderVideo>
        </div>
      </div>
    </section>
  );
}
