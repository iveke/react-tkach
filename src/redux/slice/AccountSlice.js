import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// export const deposit = createAction("account/deposit");
// export const withdraw = createAction("account/withdraw");

// export const accountReducer = createReducer({ balance: 10 }, (builder) => {
//   builder
//     .addCase(deposit, (state, action) => ({
//       balance: state.balance + action.payload,
//     }))
//     .addCase(withdraw, (state, action) => ({
//       balance: state.balance - action.payload,
//     }));
// });
const AccountSlice = createSlice({
  name: "account",
  initialState: { balance: 10 },
  reducers: {
    deposit: {
      reducer(state, action) {
        state.balance += action.payload;
      },
      prepare(value) {
        return { payload: { value }, send: {} };
      },
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = AccountSlice.actions;
export const accountReducer = AccountSlice.reducer;
