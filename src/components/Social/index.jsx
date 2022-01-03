import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Social() {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/NickKern/fake-json-museum/db")
      .then((response) => {
        setSocials(response.data.socials);
      });
  }, []);

  return (
    <ul className='social-sites'>
      {socials.map((social) => {
        return (
          <li key={social.id} className='round'>
            <a href={social.href}>
              <img src={social.src} alt={social.alt} className='icon-ss' />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
