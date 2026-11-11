import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const services = [
  "Handrehabilitering",
  "Arbetsterapi",
  "Handträning",
  "Orteser och individuella hjälpmedel",
  "Ärrbehandling",
  "Smärtrehabilitering",
  "Behandling vid överbelastningsbesvär",
  "Rehabilitering efter operation",
  "Stöd vid nervskador",
  "Råd och anpassningar i vardag och arbete",
  "Uppföljning och omhändertagande",
];

function Services() {
  return (
    <PageLayout title="Tjänster" className="services-page">
      <p className="services-intro">
        Behandling av hand-arm skador krävs en fördjupad kunskap i armens anatomi och fysiologi samt kreativitet och fingertoppskänsla vid tillverkning av ortoser.
      </p>

      <section className="services-list-section" aria-labelledby="services-heading">
        <h2 id="services-heading">Våra tjänster</h2>
        <ul className="services-list">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="services-contact" aria-labelledby="services-contact-heading">
        <h2 id="services-contact-heading">Har du frågor om våra tjänster?</h2>
        <Link className="button button--arrow" to="/kontakt">
          Kontakta oss
        </Link>
      </section>
    </PageLayout>
  );
}

export default Services;
