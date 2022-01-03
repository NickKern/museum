export const increaseBasic = () => {
  return {
    type: "INCREASE_BASIC",
  };
};

export const decreaseBasic = () => {
  return {
    type: "DECREASE_BASIC",
  };
};
export const increaseSenior = () => {
  return {
    type: "INCREASE_SENIOR",
  };
};

export const decreaseSenior = () => {
  return {
    type: "DECREASE_SENIOR",
  };
};

export const changeType = (id) => {
  return {
    type: "TICKET_TYPE",
    selectId: id,
  };
};

export const openByTicketForm = () => {
  return {
    type: "FORM_TICKET_BUY",
  };
};

export const selectTicketType = (id) => {
  return {
    type: "SELECT_TICKET_TYPE",
    selectId: id,
  };
};
