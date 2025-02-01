// src/App.js
import React from "react";
import { Container, Typography } from "@mui/material";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import FinanceChart from "./components/FinanceChart";
import Balance from "./components/Balance"; 

function App() {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Personal Finance Tracker
      </Typography>
      <Balance />
      <AddTransaction />
      <FinanceChart />
      <TransactionList />
    </Container>
  );
}

export default App;