import { FORM_TICKET_BUY } from "./types";

export default function (state = { openForm: false }, action) {
  switch (action.type) {
    case FORM_TICKET_BUY: {
      return { ...state, openForm: !state.openForm };
    }
    default:
      return state;
  }
}
