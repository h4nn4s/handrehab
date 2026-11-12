import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">Välkommen</h1>
      <p className="hero-description">
        HandRehab Göteborg specialiserar i rehabilitering/behandling av hand, handled och armskador.
        <br /><br />HandRehab Göteborg har avtal med Euro Accident, Länsförsäkring samt Skandia och samarbetar med de flesta försäkringsbolag.
      </p>
      <Link className="button button--arrow hero-button" to="/kontakt">
        Kontakta oss
      </Link>
    </section>
  );
}

export default Hero;