import React from "react";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";

const Balance = () => {
  const transactions = useSelector((state) => state.finance.transactions);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <Box sx={{ textAlign: "center", my: 4 }}>
      <Typography variant="h5" sx={{ color: balance >= 0 ? "green" : "red" }}>
        Balance: ${balance.toFixed(2)}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        (Income: ${totalIncome.toFixed(2)} - Expenses: $
        {totalExpenses.toFixed(2)})
      </Typography>
    </Box>
  );
};

export default Balance;
