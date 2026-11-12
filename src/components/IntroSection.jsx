import "./IntroSection.css";

function IntroSection() {
  return (
    <section className="intro-section" aria-labelledby="intro-section-title">
      <div className="intro-section-content">
        <h2 id="intro-section-title">
          Rehabilitering med fokus på handens funktion
        </h2>
        <p className="intro-section-description">
          En kort introduktion till HandRehab Göteborg läggs till här.
        </p>
      </div>
      <div className="intro-section-image" aria-hidden="true" />
    </section>
  );
}

export default IntroSection;
