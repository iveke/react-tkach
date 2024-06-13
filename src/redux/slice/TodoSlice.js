export const todoReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case "todos/upload":
      return {
        ...state,
        list: action.payload,
      };
    case "todos/delete":
      return {
        ...state,
        todos: {
          ...state,
          list: state.todos.list.filter((item) => item.id !== action.payload),
        },
      };
    default:
      break;
  }
  return state;
};

export const changeList = (value) => {
  return {
    type: "todos/upload",
    payload: value,
  };
};
export const deleteItemList = (value) => {
  return {
    type: "todos/delete",
    payload: value,
  };
};
