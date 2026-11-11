function PageLayout({ title, children }) {
  return (
    <main className="page-layout">
      <div className="page-layout-container">
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
}

export default PageLayout;
