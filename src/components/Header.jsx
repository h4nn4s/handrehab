import { NavLink } from "react-router-dom";

const navigationItems = [
  { label: "Hem", path: "/", end: true },
  { label: "Tjänster", path: "/tjanster" },
  { label: "Om oss", path: "/om-oss" },
  { label: "Diagnoser", path: "/diagnoser" },
  { label: "Referenser & länkar", path: "/referenser" },
  { label: "Kontakt", path: "/kontakt" },
];

function Header() {
  return (
    <header className="header">
      <div className="header-logo">HandRehab Göteborg</div>

      <nav className="navigation" aria-label="Huvudmeny">
        {navigationItems.map(({ label, path, end }) => (
          <NavLink
            to={path}
            key={path}
            end={end}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;