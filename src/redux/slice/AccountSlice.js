export const accountReducer = (
  state = {
    balance: 10,
  },
  action
) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      break;
  }
  return state;
};

export const deposit = (value) => {
  return {
    type: "account/deposit",
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "account/withdraw",
    payload: value,
  };
};
