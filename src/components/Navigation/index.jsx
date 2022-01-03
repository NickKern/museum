import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Navigation(props) {
  const [navigation, setNavigation] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/NickKern/fake-json-museum/db")
      .then((response) => {
        setNavigation(response.data.navigation);
      });
  }, []);

  return (
    <nav>
      <ul className={props.className}>
        {navigation.map((item) => {
          return (
            <div key={item.id} className='item'>
              <a href={item.href}>{item.text}</a>
            </div>
          );
        })}
      </ul>
    </nav>
  );
}
