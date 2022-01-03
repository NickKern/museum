import React from "react";
import { Parallax } from "react-parallax";

import { ParallaxJpg } from "../../../assets";

export default function Panorama() {
  return (
    <section className='panorama'>
      <Parallax bgImage={ParallaxJpg} strength={700}>
        <h6 className='tran'>hi</h6>
      </Parallax>
    </section>
  );
}
