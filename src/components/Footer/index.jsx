import React from "react";

import Navigation from "../Navigation";
import Social from "../Social";

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='logo logo1'>
          <div className='icon'></div>
          <h2 className='logotip'>Louvre</h2>
        </div>
        <Navigation className='navigation' />
        <Social />
        <hr />
        <div className='links'>
          <div className='name'>© 2021</div>
          <div className='name name1'>The Rolling Scopes School</div>
          <div className='name'>Username</div>
        </div>
      </div>
    </footer>
  );
}
