import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  increaseBasic,
  decreaseBasic,
  increaseSenior,
  decreaseSenior,
} from "../../../../Redux/actions";

export default function BuyTickets() {
  const dispatch = useDispatch();
  const countBasic = useSelector((state) => state.BuyTicketsReducer).countBasic;
  const countSenior = useSelector(
    (state) => state.BuyTicketsReducer
  ).countSenior;

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
    <div className='box-age'>
      <div className='radioo'>Basic 18+</div>
      <div className='block-age'>
        <button
          className='minus'
          name='basic'
          type='button'
          onClick={onSubHandler}
        >
          –
        </button>
        <input
          name='basic'
          type='number'
          value={countBasic}
          readOnly
          className='number'
        />
        <button
          className='plus'
          name='basic'
          type='button'
          onClick={onAddHandler}
        >
          +
        </button>
      </div>
      <div className='radioo'>Senior 65+</div>
      <div className='block-age'>
        <button
          className='minus'
          name='senior'
          type='button'
          onClick={onSubHandler}
        >
          –
        </button>
        <input
          name='senior'
          type='number'
          value={countSenior}
          readOnly
          className='number'
        />
        <button
          className='plus'
          name='senior'
          type='button'
          onClick={onAddHandler}
        >
          +
        </button>
      </div>
    </div>
  );
}
