import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/slices/financeSlice";

const categories = [
  { type: "income", name: "Job Income" },
  { type: "income", name: "Freelance Income" },
  { type: "expense", name: "Food" },
  { type: "expense", name: "Transport" },
  { type: "expense", name: "Entertainment" },
  { type: "expense", name: "Utilities" },
];

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState(categories[2].name); // Default to "Food"
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: Date.now(),
      description,
      amount: +amount,
      type,
      category,
    };
    dispatch(addTransaction(transaction));
    setDescription("");
    setAmount("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        sx={{ mr: 2 }}
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        sx={{ mr: 2 }}
      />
      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        sx={{ mr: 2 }}
      >
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="expense">Expense</MenuItem>
      </Select>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        sx={{ mr: 2 }}
      >
        {categories
          .filter((cat) => cat.type === type)
          .map((cat) => (
            <MenuItem key={cat.name} value={cat.name}>
              {cat.name}
            </MenuItem>
          ))}
      </Select>
      <Button type="submit" variant="contained" sx={{ ml: 2 }}>
        Add Transaction
      </Button>
    </Box>
  );
};

export default AddTransaction;