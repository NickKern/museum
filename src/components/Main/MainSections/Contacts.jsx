import React from "react";

export default function Contacts() {
  return (
    <section className='contacts' id='contacts'>
      <div className='container'>
        <h2 className='h2-visiting'>Contacts</h2>
        <div className='line'></div>
        <div className='palais'>Palais Royal Musee du Louvre</div>
        <ul>
          <li>address: 75001 Paris, France</li>
          <li>phone: +33(0) 1 40 20 50 50</li>
          <li>mail: info@louvre.fr</li>
        </ul>
        <div className='map'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8739172815235!2d2.335455315537002!3d48.860614608504335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877937b0f%3A0xb975fcfa192f84d4!2z0JvRg9Cy0YA!5e0!3m2!1sru!2sby!4v1638199363105!5m2!1sru!2sby'
            title='Google map'
            style={{
              height: "100%",
              border: 0,
              allowfullscreen: "",
              width: "100%",
              loading: "lazy",
            }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
