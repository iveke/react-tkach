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

export const titleOnChange = (value) => {
  return {
    type: "form/title",
    payload: value,
  };
};
export const levelOnChange = (value) => {
    return {
      type: "form/level",
      payload: value,
    };
  };
