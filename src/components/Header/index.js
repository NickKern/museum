import React from "react";

import Navigation from "../Navigation";

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <div className='icon'></div>
          <h1>Louvre</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
