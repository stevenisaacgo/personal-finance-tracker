import { createSlice } from "@reduxjs/toolkit";
import db from "../../db";

const initialState = {
  transactions: [],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      db.transactions.add(action.payload);
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      db.transactions.delete(action.payload);
    },
  },
});

export const { setTransactions, addTransaction, deleteTransaction } =
  financeSlice.actions;

export const loadTransactions = () => async (dispatch) => {
  const transactions = await db.transactions.toArray();
  dispatch(setTransactions(transactions));
};

export default financeSlice.reducer;