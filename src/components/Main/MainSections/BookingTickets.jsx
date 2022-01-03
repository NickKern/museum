import React from "react";
import {
  Card1Png,
  TimeSvg,
  ChooseListSvg,
  TicketPicturePng,
  CloseSvg,
  LogoTicketsSvg,
  DateSvg,
} from "../../../assets";
import { useDispatch } from "react-redux";
import {
  changeType,
  decreaseBasic,
  decreaseSenior,
  increaseBasic,
  increaseSenior,
  openByTicketForm,
} from "../../../Redux/actions";
import { useSelector } from "react-redux";

export default function BookingTickets() {
  const total = useSelector((state) => state.BuyTicketsReducer).total;
  const countBasic = useSelector((state) => state.BuyTicketsReducer).countBasic;
  const countSenior = useSelector(
    (state) => state.BuyTicketsReducer
  ).countSenior;
  const ticketType = useSelector((state) => state.BuyTicketsReducer).ticketType;
  const id = useSelector((state) => state.BuyTicketsReducer).id;

  const dispatch = useDispatch();

  const onAddHandler = (event) => {
    event.target.name === "basic"
      ? dispatch(increaseBasic())
      : dispatch(increaseSenior());
  };

  const onSubHandler = (event) => {
    event.target.name === "basic"
      ? dispatch(decreaseBasic())
      : dispatch(decreaseSenior());
  };

  return (
    <div className='booking-tickets active-booking-tickets'>
      <button
        onClick={() => dispatch(openByTicketForm())}
        className='close-overlay'
        type='button'
      >
        <img src={CloseSvg} className='close' alt='close' />
      </button>
      <form className='form-tickets'>
        <div className='form-title'>
          <img src={LogoTicketsSvg} alt='logo' />
          <div className='header-form'>Booking tickets</div>
          <div className='ticket-tour'>Tour to Louvre</div>
          <hr className='form-line' />
        </div>
        <div className='ticket-date'>
          <img src={DateSvg} className='ticket-date-pic' alt='date' />
          <div className='ticket-date-text ticket-info'>Date</div>
          <img src={ChooseListSvg} className='ticket-choose' alt='choose' />
        </div>
        <div className='ticket-time'>
          <img src={TimeSvg} className='ticket-time-pic' alt='time' />
          <div className='ticket-time-text ticket-info'>Time</div>
          <img src={ChooseListSvg} className='ticket-choose' alt='choose' />
        </div>
        <div className='ticket-name'>
          <input
            type='text'
            id='name'
            className='ticket-info persone-name'
            placeholder='Name'
          />
        </div>
        <div className='ticket-email'>
          <input
            type='email'
            id='email'
            className='ticket-info persone-email'
            placeholder='E-mail'
          />
        </div>
        <div className='ticket-phone'>
          <input
            type='tel'
            id='phone'
            className='ticket-info persone-phone'
            placeholder='Phone'
          />
        </div>
        <div className='ticket-choose-container'>
          <select
            value={id}
            onChange={(event) => dispatch(changeType(event.target.value))}
            className='ticket-type-choose'
          >
            <option value='1' id='1' className='type-choice'>
              Permanent exhibition
            </option>
            <option value='2' id='2' className='type-choice'>
              Temporary exhibition
            </option>
            <option value='3' id='3' className='type-choice'>
              Combined exhibition
            </option>
          </select>
        </div>
        <div className='entry-ticket-block'>
          <div className='entry-ticket-title'>Entry ticket</div>
          <hr className='entry-ticket-line' />
          <div className='name-of-type-ticket'>Basic 18+ ({ticketType} €)</div>
          <div className='count-basic'>
            <button
              name='basic'
              onClick={onSubHandler}
              className='minimize'
              type='button'
            >
              –
            </button>
            <input
              type='number'
              value={countBasic}
              readOnly
              className='number-ticket'
            />
            <button
              name='basic'
              onClick={onAddHandler}
              type='button'
              className='maximize'
            >
              +
            </button>
          </div>
          <div className='name-of-type-ticket1'>
            Senior 65+ ({ticketType / 2} €)
          </div>
          <div className='count-basic1'>
            <button
              name='senior'
              onClick={onSubHandler}
              className='minimize'
              type='button'
            >
              –
            </button>
            <input
              type='number'
              value={countSenior}
              readOnly
              className='number-ticket'
            />
            <button
              onClick={onAddHandler}
              name='senior'
              type='button'
              className='maximize'
            >
              +
            </button>
          </div>
        </div>
        <article className='overview'>
          <div className='overview-title'>Overview</div>
          <div className='overview-pre-title'>Tour to Louvre</div>
          <div className='date-event'>Friday, August 19</div>
          <div className='time-event'>16 : 30</div>
          <div className='checked-event'>Temporary exhibition</div>
        </article>
        <img src={TicketPicturePng} className='booking-picture' alt='pic' />
        <div className='basic-number'>{countBasic}</div>
        <div className='basic-label'>Basic ({ticketType}€)</div>
        <div className='price-basic'>{ticketType * countBasic}€</div>
        <div className='senior-number'>{countSenior}</div>
        <div className='senior-label'>Senior({ticketType / 2}€)</div>
        <div className='price-senior'>{ticketType * countSenior} €</div>
        <hr className='overview-line' />
        <div className='overview-total'>Total:</div>
        <div className='total-price'>{total}€</div>
        <img src='./assets/img/Card 2.png' className='card2' alt='card2' />
        <img src={Card1Png} className='card1' alt='card1' />
        <button
          onClick={() => dispatch(openByTicketForm())}
          type='button'
          className='ticket-book'
        >
          Book
        </button>
      </form>
    </div>
  );
}
