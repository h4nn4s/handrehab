const navigationItems = [
  "Hem",
  "Tjänster",
  "Om oss",
  "Diagnoser",
  "Referenser & länkar",
  "Kontakt",
];

function Header() {
  return (
    <header className="header">
      <div className="header-logo">HandRehab Göteborg</div>

      <nav className="navigation" aria-label="Huvudmeny">
        {navigationItems.map((item) => (
          <a
            href="#"
            key={item}
            className={item === "Hem" ? "active" : undefined}
            aria-current={item === "Hem" ? "page" : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;