import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navigationItems = [
  { label: "Hem", path: "/", end: true },
  { label: "Om oss", path: "/om-oss" },
  { label: "Tjänster", path: "/tjanster" },
  { label: "Diagnoser", path: "/diagnoser" },
  { label: "Referenser & länkar", path: "/referenser" },
  { label: "Kontakt", path: "/kontakt" },
];

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        HandRehab Göteborg
      </Link>
      
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