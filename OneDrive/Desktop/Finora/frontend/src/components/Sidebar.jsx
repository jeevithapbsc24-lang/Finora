import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  Wallet,
  Target,
  Settings,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "Transactions",
      icon: ArrowLeftRight,
      path: "/transactions",
    },
    {
      name: "Analytics",
      icon: PieChart,
      path: "/analytics",
    },
    {
      name: "Budgets",
      icon: Wallet,
      path: "/budgets",
    },
    {
      name: "Savings Goals",
      icon: Target,
      path: "/goals",
    },
  ];

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="logo">
        <div className="logo-icon">F</div>
        <span>Finora</span>
      </div>

      {/* NAVIGATION */}
      <nav className="nav">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            location.pathname === item.path;

          return (
            <button
              key={item.name}
              className={`nav-item ${
                isActive ? "active" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon size={19} />
              {item.name}
            </button>
          );
        })}

      </nav>

      {/* BOTTOM */}
      <div className="sidebar-bottom">

        <button className="nav-item">
          <Settings size={19} />
          Settings
        </button>

        <div className="profile">

          <div className="avatar">
            JP
          </div>

          <div>
            <strong>Jeevitha</strong>
            <span>Personal Account</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;