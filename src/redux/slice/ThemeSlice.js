export const themeReducer = (state = { color: "white" }, action) => {
  console.log(action);
  switch (action.type) {
    case "theme/switch":
      return {
        ...state,
        color: action.payload,
      };
    default:
      break;
  }
  return state;
};

export const switchTheme = (value) => {
  return {
    type: "theme/switch",
    payload: value,
  };
};
