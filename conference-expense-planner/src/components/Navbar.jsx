import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShow, reset } from "../app/slices";

export default function Navbar() {
  const d = useDispatch();

  return (
    <header className="header">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "16px 24px",
        }}
      >
        {/* Logo/uzņēmuma nosaukums */}
        <Link
          to="/"
          className="logo"
          style={{
            fontWeight: 800,
            fontSize: "1.5rem",
            background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.025em",
          }}
        >
          Confex Co.
        </Link>

        {/* Navigācija + darbību pogas */}
        <nav className="nav-container">
          <div className="navlinks">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item ${isActive ? "nav-item--active" : ""}`
              }
            >
              Sākums
            </NavLink>
            <NavLink
              to="/select"
              className={({ isActive }) =>
                `nav-item ${isActive ? "nav-item--active" : ""}`
              }
            >
              Izvēle
            </NavLink>
          </div>

          {/* Darbību pogas */}
          <div className="nav-actions">
            <button className="nav-item nav-button" onClick={() => d(setShow(true))}>
              Rādīt detaļas
            </button>
            <button className="nav-item nav-button" onClick={() => d(reset())}>
              Atiestatīt
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}