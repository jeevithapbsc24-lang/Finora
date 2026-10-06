import { Component } from "react";

class FinanceSummary extends Component {
  render() {
    const { income, expenses } = this.props;

    const savings = income - expenses;

    return (
      <div className="finance-summary">
        <div>
          <p className="eyebrow">
            MONTHLY SUMMARY
          </p>

          <h3>Your Financial Snapshot</h3>

          <p>
            Here's a quick look at your money this month.
          </p>
        </div>

        <div className="summary-values">

          <div>
            <span>Income</span>
            <strong className="income">
              +₹{income.toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Expenses</span>
            <strong className="expense">
              -₹{expenses.toLocaleString()}
            </strong>
          </div>

          <div>
            <span>Savings</span>
            <strong>
              ₹{savings.toLocaleString()}
            </strong>
          </div>

        </div>
      </div>
    );
  }
}

export default FinanceSummary;