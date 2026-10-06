import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import "./App.css";

import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import FinanceSummary from "./components/FinanceSummary";
import Transactions from "./pages/Transactions";

import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Bell,
  Search,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


// ==========================================
// ANALYTICS DATA
// ==========================================

const spendingData = [
  {
    name: "Food",
    value: 8500,
  },
  {
    name: "Shopping",
    value: 6200,
  },
  {
    name: "Travel",
    value: 5200,
  },
  {
    name: "Bills",
    value: 6800,
  },
  {
    name: "Entertainment",
    value: 5050,
  },
];


const monthlyData = [
  {
    month: "May",
    income: 48000,
    expenses: 29000,
  },
  {
    month: "Jun",
    income: 50000,
    expenses: 31000,
  },
  {
    month: "Jul",
    income: 49000,
    expenses: 28500,
  },
  {
    month: "Aug",
    income: 52000,
    expenses: 33000,
  },
  {
    month: "Sep",
    income: 51000,
    expenses: 30000,
  },
  {
    month: "Oct",
    income: 52000,
    expenses: 31750,
  },
];


// ==========================================
// DASHBOARD
// ==========================================

function Dashboard() {

  const navigate = useNavigate();

  return (
    <>
      {/* TOP BAR */}

      <header className="topbar">

        <div className="search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search transactions..."
          />

        </div>


        <button className="notification">

          <Bell size={20} />

          <span></span>

        </button>

      </header>


      {/* DASHBOARD */}

      <section className="dashboard">


        {/* WELCOME */}

        <div className="welcome">

          <div>

            <p className="eyebrow">
              PERSONAL FINANCE
            </p>

            <h1>
              Good evening, Jeevitha 👋
            </h1>

            <p>
              Here's what's happening with your money today.
            </p>

          </div>


          <button
            className="add-button"
            onClick={() =>
              navigate("/transactions")
            }
          >
            + Add Transaction
          </button>

        </div>


        {/* SUMMARY CARDS */}

        <div className="cards">

          <SummaryCard
            title="Total Balance"
            amount="₹84,250"
            change="↗ 8.4% this month"
            icon={<Wallet size={20} />}
            type="balance"
          />


          <SummaryCard
            title="Total Income"
            amount="₹52,000"
            change="↗ 12.6% this month"
            icon={<ArrowUpRight size={20} />}
          />


          <SummaryCard
            title="Total Expenses"
            amount="₹31,750"
            change="↘ 4.2% this month"
            icon={<ArrowDownRight size={20} />}
          />


          <div className="card">

            <div className="card-top">

              <span>
                Savings Rate
              </span>

              <Target size={20} />

            </div>


            <h2>
              40.9%
            </h2>


            <div className="progress">

              <div className="progress-fill"></div>

            </div>


            <small>
              Great! You're above your goal.
            </small>

          </div>

        </div>


        {/* MAIN CONTENT */}

        <div className="content-grid">


          {/* SPENDING OVERVIEW */}

          <div className="panel spending">

            <div className="panel-header">

              <div>

                <h3>
                  Spending Overview
                </h3>

                <p>
                  Monthly income vs expenses
                </p>

              </div>


              <select>

                <option>
                  Last 6 months
                </option>

                <option>
                  This year
                </option>

              </select>

            </div>


            <div className="chart-placeholder">

              <div className="chart-line line-one"></div>

              <div className="chart-line line-two"></div>


              <div className="chart-bars">

                <div style={{ height: "45%" }}></div>

                <div style={{ height: "65%" }}></div>

                <div style={{ height: "50%" }}></div>

                <div style={{ height: "80%" }}></div>

                <div style={{ height: "60%" }}></div>

                <div style={{ height: "90%" }}></div>

              </div>


              <div className="months">

                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>

              </div>

            </div>

          </div>


          {/* RECENT TRANSACTIONS */}

          <div className="panel transactions">

            <div className="panel-header">

              <div>

                <h3>
                  Recent Transactions
                </h3>

                <p>
                  Your latest activity
                </p>

              </div>


              <button
                className="view-all"
                onClick={() =>
                  navigate("/transactions")
                }
              >
                View all
              </button>

            </div>


            <div className="transaction">

              <div className="transaction-icon food">
                🍔
              </div>

              <div className="transaction-info">

                <strong>
                  Food & Dining
                </strong>

                <span>
                  Today, 2:30 PM
                </span>

              </div>

              <strong className="expense">
                -₹850
              </strong>

            </div>


            <div className="transaction">

              <div className="transaction-icon shopping">
                🛍️
              </div>

              <div className="transaction-info">

                <strong>
                  Shopping
                </strong>

                <span>
                  Yesterday, 6:15 PM
                </span>

              </div>

              <strong className="expense">
                -₹2,400
              </strong>

            </div>


            <div className="transaction">

              <div className="transaction-icon salary">
                💰
              </div>

              <div className="transaction-info">

                <strong>
                  Salary
                </strong>

                <span>
                  Oct 1, 9:00 AM
                </span>

              </div>

              <strong className="income">
                +₹52,000
              </strong>

            </div>


            <div className="transaction">

              <div className="transaction-icon travel">
                ✈️
              </div>

              <div className="transaction-info">

                <strong>
                  Travel
                </strong>

                <span>
                  Sep 29, 4:45 PM
                </span>

              </div>

              <strong className="expense">
                -₹3,200
              </strong>

            </div>

          </div>

        </div>


        {/* SMART INSIGHT */}

        <div className="insight">

          <div className="insight-icon">
            ✨
          </div>


          <div>

            <strong>
              Smart Spending Insight
            </strong>

            <p>
              You spent 18% more on dining this month.
              Reducing food expenses by ₹1,500 could help
              you reach your savings goal faster.
            </p>

          </div>


          <button
            onClick={() =>
              navigate("/analytics")
            }
          >
            View Analytics →
          </button>

        </div>


        {/* CLASS COMPONENT */}

        <FinanceSummary
          income={52000}
          expenses={31750}
        />

      </section>

    </>
  );
}


// ==========================================
// ANALYTICS PAGE
// ==========================================

function Analytics() {

  return (

    <div className="page">


      {/* PAGE HEADER */}

      <div className="page-header">

        <div>

          <p className="eyebrow">
            FINANCIAL INSIGHTS
          </p>

          <h1>
            Analytics
          </h1>

          <p>
            Understand where your money is going.
          </p>

        </div>

      </div>


      {/* ANALYTICS SUMMARY CARDS */}

      <div className="cards">


        <div className="card">

          <div className="card-top">

            <span>
              Monthly Spending
            </span>

          </div>

          <h2>
            ₹31,750
          </h2>

          <small>
            Total expenses this month
          </small>

        </div>


        <div className="card">

          <div className="card-top">

            <span>
              Top Category
            </span>

          </div>

          <h2>
            Food
          </h2>

          <small>
            Highest spending category
          </small>

        </div>


        <div className="card">

          <div className="card-top">

            <span>
              Savings Rate
            </span>

          </div>

          <h2>
            40.9%
          </h2>

          <small>
            You're doing great!
          </small>

        </div>

      </div>


      {/* CHART GRID */}

      <div className="analytics-grid">


        {/* PIE CHART */}

        <div className="panel analytics-panel">

          <div className="panel-header">

            <div>

              <h3>
                Spending by Category
              </h3>

              <p>
                Where your money goes
              </p>

            </div>

          </div>


          <div className="analytics-chart">

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={spendingData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={55}
                  paddingAngle={3}
                >

                  {spendingData.map(
                    (entry, index) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={[
                          "#6C5CE7",
                          "#8E7CFF",
                          "#A99CFF",
                          "#C0B8FF",
                          "#D6D1FF",
                        ][index]}
                      />

                    )
                  )}

                </Pie>


                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* BAR CHART */}

        <div className="panel analytics-panel">

          <div className="panel-header">

            <div>

              <h3>
                Income vs Expenses
              </h3>

              <p>
                Monthly comparison
              </p>

            </div>

          </div>


          <div className="analytics-chart">

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart
                data={monthlyData}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis
                  dataKey="month"
                />

                <YAxis />

                <Tooltip />

                <Legend />


                <Bar
                  dataKey="income"
                  name="Income"
                  fill="#6C5CE7"
                  radius={[6, 6, 0, 0]}
                />


                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="#E45757"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>


      {/* FINANCIAL INSIGHT */}

      <div className="insight analytics-insight">

        <div className="insight-icon">
          💡
        </div>

        <div>

          <strong>
            Financial Insight
          </strong>

          <p>
            Your income has remained higher than your
            expenses over the last six months. Food and
            bills are currently your largest spending areas.
          </p>

        </div>

      </div>

    </div>

  );
}


// ==========================================
// BUDGETS PAGE
// ==========================================

function Budgets() {

  return (

    <div className="page">

      <div className="page-header">

        <div>

          <p className="eyebrow">
            MONEY MANAGEMENT
          </p>

          <h1>
            Budgets
          </h1>

          <p>
            Keep your spending within your limits.
          </p>

        </div>


        <button className="add-button">
          + Create Budget
        </button>

      </div>


      <div className="cards">


        <div className="card">

          <div className="card-top">

            <span>
              Food & Dining
            </span>

          </div>

          <h2>
            ₹4,250 / ₹6,000
          </h2>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: "71%",
              }}
            ></div>

          </div>

          <small>
            ₹1,750 remaining
          </small>

        </div>


        <div className="card">

          <div className="card-top">

            <span>
              Shopping
            </span>

          </div>

          <h2>
            ₹2,400 / ₹5,000
          </h2>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: "48%",
              }}
            ></div>

          </div>

          <small>
            ₹2,600 remaining
          </small>

        </div>


        <div className="card">

          <div className="card-top">

            <span>
              Travel
            </span>

          </div>

          <h2>
            ₹3,200 / ₹8,000
          </h2>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: "40%",
              }}
            ></div>

          </div>

          <small>
            ₹4,800 remaining
          </small>

        </div>

      </div>

    </div>

  );
}


// ==========================================
// SAVINGS GOALS
// ==========================================

function SavingsGoals() {

  return (

    <div className="page">

      <div className="page-header">

        <div>

          <p className="eyebrow">
            FUTURE PLANS
          </p>

          <h1>
            Savings Goals
          </h1>

          <p>
            Build your savings one goal at a time.
          </p>

        </div>


        <button className="add-button">
          + New Goal
        </button>

      </div>


      <div className="cards">


        <div className="card">

          <div className="card-top">

            <span>
              Emergency Fund
            </span>

            <Target size={20} />

          </div>

          <h2>
            ₹45,000
          </h2>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: "75%",
              }}
            ></div>

          </div>

          <small>
            ₹60,000 target • 75% completed
          </small>

        </div>


        <div className="card">

          <div className="card-top">

            <span>
              New Laptop
            </span>

            <Target size={20} />

          </div>

          <h2>
            ₹30,000
          </h2>

          <div className="progress">

            <div
              className="progress-fill"
              style={{
                width: "60%",
              }}
            ></div>

          </div>

          <small>
            ₹50,000 target • 60% completed
          </small>

        </div>

      </div>

    </div>

  );
}


// ==========================================
// MAIN APP
// ==========================================

function App() {

  return (

    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="main">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/transactions"
              element={<Transactions />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/budgets"
              element={<Budgets />}
            />

            <Route
              path="/goals"
              element={<SavingsGoals />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>

  );
}


export default App;