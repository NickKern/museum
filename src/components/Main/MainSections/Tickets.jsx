import React from "react";

import { TicketPng } from "../../../assets";

import { useDispatch, useSelector } from "react-redux";
import { openByTicketForm } from "../../../Redux/actions";

import BookingTickets from "./BookingTickets";
import BuyTickets from "./Tickets/BuyTickets";
import TicketsType from "./Tickets/TicketsType";

export default function Tickets() {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.BuyTicketsReducer).total;
  const openForm = useSelector((state) => state.FormReducer).openForm;

  return (
    <section className='tickets' id='tickets'>
      <div className='container'>
        {!openForm && <div className='overlay-container' />}
        {openForm && (
          <div className='overlay-container active-overlay-container'>
            <BookingTickets />
          </div>
        )}

        <h2 className='h2-visiting'>Buy tickets</h2>
        <div className='line'></div>
        <picture className='ticket-pic'>
          <img src={TicketPng} className='ticket-pic1' alt='ticket' />
        </picture>
        <TicketsType />
        <h4 className='amount'>Amount</h4>
        <BuyTickets />
        <h4 className='total'>Total €{total}</h4>
        <button
          onClick={() => dispatch(openByTicketForm())}
          className='buy-now'
        >
          Buy Now
        </button>
        <div id='form-container'>
          <form role='form' autoComplete='off' method='POST'>
            <label>booking tickets</label>
            <input type='text' name='nameReq' />
            <button type='submit'>Book</button>
            <script src='./js.js'></script>
          </form>
        </div>
      </div>
    </section>
  );
}
