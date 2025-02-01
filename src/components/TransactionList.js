import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/slices/financeSlice";
import { List, ListItem, ListItemText, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TransactionList = () => {
  const transactions = useSelector((state) => state.finance.transactions);
  const dispatch = useDispatch();

  return (
    <List>
      {transactions.map((transaction) => (
        <ListItem
          key={transaction.id}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={() => dispatch(deleteTransaction(transaction.id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary={transaction.description}
            secondary={`${transaction.type === "expense" ? "-" : "+"}$${Math.abs(
              transaction.amount
            )} (${transaction.category})`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TransactionList;