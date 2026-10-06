import { useEffect, useState } from "react";
import axios from "axios";
import {
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "Food",
    amount: "",
    type: "expense",
    date: "",
  });

  const [search, setSearch] = useState("");

  // GET transactions from backend
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/transactions"
      );

      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add transaction
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.amount || !formData.date) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions",
        {
          name: formData.name,
          category: formData.category,
          amount: Number(formData.amount),
          type: formData.type,
          date: formData.date,
        }
      );

      setTransactions([
        response.data,
        ...transactions,
      ]);

      setFormData({
        name: "",
        category: "Food",
        amount: "",
        type: "expense",
        date: "",
      });

      setShowForm(false);
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Could not add transaction.");
    }
  };

  // Delete transaction
  const deleteTransaction = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/transactions/${id}`
      );

      setTransactions(
        transactions.filter(
          (transaction) => transaction.id !== id
        )
      );
    } catch (error) {
      console.error("Error deleting transaction:", error);
      alert("Could not delete transaction.");
    }
  };

  // Search transactions
  const filteredTransactions =
    transactions.filter((transaction) =>
      transaction.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div className="page">

      {/* PAGE HEADER */}
      <div className="page-header">
        <div>
          <p className="eyebrow">
            FINANCIAL ACTIVITY
          </p>

          <h1>Transactions</h1>

          <p>
            Track and manage all your income and expenses.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(true)}
        >
          <Plus size={18} />
          Add Transaction
        </button>
      </div>

      {/* ADD TRANSACTION FORM */}
      {showForm && (
        <div className="form-panel">

          <div className="form-header">
            <div>
              <h2>Add Transaction</h2>

              <p>
                Enter the details of your transaction.
              </p>
            </div>

            <button
              className="close-button"
              onClick={() => setShowForm(false)}
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              {/* NAME */}
              <div className="form-group">
                <label>
                  Transaction Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Grocery Shopping"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* CATEGORY */}
              <div className="form-group">
                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Food">
                    Food
                  </option>

                  <option value="Shopping">
                    Shopping
                  </option>

                  <option value="Travel">
                    Travel
                  </option>

                  <option value="Bills">
                    Bills
                  </option>

                  <option value="Entertainment">
                    Entertainment
                  </option>

                  <option value="Income">
                    Income
                  </option>
                </select>
              </div>

              {/* AMOUNT */}
              <div className="form-group">
                <label>
                  Amount (₹)
                </label>

                <input
                  type="number"
                  name="amount"
                  placeholder="e.g. 1500"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>

              {/* TYPE */}
              <div className="form-group">
                <label>
                  Transaction Type
                </label>

                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="expense">
                    Expense
                  </option>

                  <option value="income">
                    Income
                  </option>
                </select>
              </div>

              {/* DATE */}
              <div className="form-group">
                <label>
                  Date
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* FORM BUTTONS */}
            <div className="form-actions">

              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-button"
              >
                Add Transaction
              </button>

            </div>

          </form>
        </div>
      )}

      {/* SEARCH */}
      <div className="transaction-toolbar">

        <div className="transaction-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      {/* TRANSACTION TABLE */}
      <div className="transactions-page-panel">

        <div className="table-header">
          <span>Transaction</span>
          <span>Category</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Action</span>
        </div>

        {filteredTransactions.length === 0 ? (

          <div className="empty-state">

            <h3>
              No transactions found
            </h3>

            <p>
              Try another search or add a new transaction.
            </p>

          </div>

        ) : (

          filteredTransactions.map(
            (transaction) => (

              <div
                className="table-row"
                key={transaction.id}
              >

                <div className="transaction-name">

                  <div
                    className={`transaction-icon ${
                      transaction.type === "income"
                        ? "salary"
                        : "food"
                    }`}
                  >
                    {transaction.type === "income"
                      ? "💰"
                      : "💳"}
                  </div>

                  <strong>
                    {transaction.name}
                  </strong>

                </div>

                <span>
                  {transaction.category}
                </span>

                <span>
                  {transaction.date}
                </span>

                <strong
                  className={
                    transaction.type === "income"
                      ? "income"
                      : "expense"
                  }
                >

                  {transaction.type === "income"
                    ? "+"
                    : "-"}

                  ₹
                  {transaction.amount.toLocaleString()}

                </strong>

                <button
                  className="delete-button"
                  onClick={() =>
                    deleteTransaction(
                      transaction.id
                    )
                  }
                >
                  <Trash2 size={17} />
                </button>

              </div>
            )
          )

        )}

      </div>

    </div>
  );
}

export default Transactions;