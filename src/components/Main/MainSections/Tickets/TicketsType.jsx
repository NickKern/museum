import React, { useState, useEffect } from "react";
import axios from "axios";
import { changeType } from "../../../../Redux/actions";
import { useDispatch } from "react-redux";

export default function TicketsType() {
  const dispatch = useDispatch();
  const [ticketsType, setTicketsType] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Ann2206/fake-json/db")
      .then((response) => {
        setTicketsType(response.data.ticketsType);
      });
  }, []);
  return (
    <div className='ticket-type'>
      <h4>Ticket Type</h4>
      <ul>
        {ticketsType.map((ticket) => {
          return (
            <li key={ticket.id} className='radioo'>
              <input
                onClick={(event) => {
                  dispatch(changeType(event.target.id));
                }}
                type='radio'
                name='rb'
                id={ticket.idRb}
              />
              <label htmlFor={ticket.idRb}>{ticket.text}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
