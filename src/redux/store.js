import { devToolsEnhancer } from "@redux-devtools/extension";
import { createStore } from "redux";

const initialStore = {
  account: {
    balance: 10,
  },
  todos: {
    list: [],
  },
  form: {
    title: "",
    level: "all",
  },
};

const rootReducer = (state = initialStore, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "form/title":
      return { ...state, form: { ...state.form, title: action.payload } };
    case "form/level":
      return { ...state, form: { ...state.form, level: action.payload } };
      case "account/deposit":
        return {
          ...state,
          account: {
            ...state.account,
            balance: state.account.balance + action.payload,
          },
        };
      case "account/withdraw":
        return {
          ...state,
          account: {
            ...state.account,
            balance: state.account.balance - action.payload,
          },
        };
    default:
      break;
  }
return state;

  //   switch (action.type) {
  //     case "account/deposit":
  //       return {
  //         ...state,
  //         account: {
  //           ...state.account,
  //           balance: state.account.balance + action.payload,
  //         },
  //       };
  //     case "account/withdraw":
  //       return {
  //         ...state,
  //         account: {
  //           ...state.account,
  //           balance: state.account.balance - action.payload,
  //         },
  //       };
  //       default:
  //         return state;
  //   }
//   return state;
};
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
