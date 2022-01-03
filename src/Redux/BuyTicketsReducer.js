import {
  INCREASE_BASIC,
  DECREASE_BASIC,
  INCREASE_SENIOR,
  DECREASE_SENIOR,
  TICKET_TYPE,
} from "./types";

export default function (
  state = { countBasic: 0, countSenior: 0, total: 0, ticketType: 0, id: 1 },
  action
) {
  switch (action.type) {
    case TICKET_TYPE: {
      switch (action.selectId) {
        case "1": {
          {
            return {
              ...state,
              id: action.id,
              ticketType: 20,
              total: state.countBasic * 20 + state.countSenior * 10,
            };
          }
        }
        case "2": {
          return {
            ...state,
            id: action.id,
            ticketType: 25,
            total: state.countBasic * 25 + state.countSenior * 12.5,
          };
        }
        case "3": {
          return {
            ...state,
            id: action.id,
            ticketType: 40,
            total: state.countBasic * 40 + state.countSenior * 20,
          };
        }
      }
    }
    case INCREASE_BASIC: {
      if (state.countBasic === 20) {
        return { ...state, countBasic: 20 };
      }
      return {
        ...state,
        countBasic: state.countBasic + 1,
        total:
          (state.countBasic + 1) * state.ticketType +
          state.countSenior * (state.ticketType / 2),
      };
    }
    case DECREASE_BASIC: {
      if (state.countBasic === 0) {
        return { ...state, countBasic: 0 };
      }
      return {
        ...state,
        countBasic: state.countBasic - 1,
        total:
          (state.countBasic - 1) * state.ticketType +
          state.countSenior * (state.ticketType / 2),
      };
    }
    case INCREASE_SENIOR: {
      if (state.countSenior === 20) {
        return { ...state, countSenior: 20 };
      }
      return {
        ...state,
        countSenior: state.countSenior + 1,
        total:
          state.countBasic * state.ticketType +
          (state.countSenior + 1) * (state.ticketType / 2),
      };
    }
    case DECREASE_SENIOR: {
      if (state.countSenior === 0) {
        return { ...state, countSenior: 0 };
      }
      return {
        ...state,
        countSenior: state.countSenior - 1,
        total:
          state.countBasic * state.ticketType +
          (state.countSenior - 1) * (state.ticketType / 2),
      };
    }
    default:
      return state;
  }
}
