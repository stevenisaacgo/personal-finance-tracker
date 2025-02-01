import React from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const FinanceChart = () => {
  const transactions = useSelector((state) => state.finance.transactions);

  const categories = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: "Amount",
        data: Object.values(categories),
        backgroundColor: [
          "#4caf50",
          "#f44336",
          "#2196f3",
          "#ff9800",
          "#9c27b0",
          "#00bcd4",
        ],
      },
    ],
  };

  return (
    <Box sx={{ width: 300, height: 300, justifySelf: "center" }}>
      <Doughnut data={data} />
    </Box>
  );
};

export default FinanceChart;