function SummaryCard({ title, amount, change, icon, type }) {
  return (
    <div className={`card ${type === "balance" ? "balance-card" : ""}`}>

      <div className="card-top">
        <span>{title}</span>
        {icon}
      </div>

      <h2>{amount}</h2>

      <div className="card-change positive">
        {change}
      </div>

    </div>
  );
}

export default SummaryCard;