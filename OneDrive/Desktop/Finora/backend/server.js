const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Sample finance data
let transactions = [
  {
    id: 1,
    name: "Food & Dining",
    category: "Food",
    amount: 850,
    type: "expense",
    date: "Oct 6, 2026",
  },

  {
    id: 2,
    name: "Salary",
    category: "Income",
    amount: 52000,
    type: "income",
    date: "Oct 1, 2026",
  },

  {
    id: 3,
    name: "Shopping",
    category: "Shopping",
    amount: 2400,
    type: "expense",
    date: "Oct 5, 2026",
  },

  {
    id: 4,
    name: "Travel",
    category: "Travel",
    amount: 3200,
    type: "expense",
    date: "Sep 29, 2026",
  },
];


// GET transactions
app.get("/api/transactions", (req, res) => {
  res.json(transactions);
});


// ADD transaction
app.post("/api/transactions", (req, res) => {

  const newTransaction = {
    id: Date.now(),
    ...req.body,
  };

  transactions.push(newTransaction);

  res.status(201).json(newTransaction);
});


// DELETE transaction
app.delete("/api/transactions/:id", (req, res) => {

  const id = Number(req.params.id);

  transactions = transactions.filter(
    (transaction) => transaction.id !== id
  );

  res.json({
    message: "Transaction deleted successfully",
  });
});


// Test route
app.get("/", (req, res) => {
  res.send("Finora API is running!");
});


// Start server
app.listen(PORT, () => {
  console.log(
    `Finora backend running on http://localhost:${PORT}`
  );
});