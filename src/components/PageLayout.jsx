import "./PageLayout.css";

function PageLayout({ title, children, className = "" }) {
  return (
    <main className={`page-layout ${className}`}>
      <div className="page-layout-container">
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
