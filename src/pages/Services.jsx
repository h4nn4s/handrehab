import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const services = [
  "Handfunktionsbedömningar",
  "Tillverkning av statiska och dynamiska ortoser",
  "Utprovning av prefabricerade ortoser",
  "Ödem- kompressionsbehandling av svullnad",
  "Patient-/diagnosanpassade rörelse- och styrketräningsprogram",
  "Ärrbehandling",
  "Sensibilitetsträning",
  "Desensibilitetsträning/härdning",
  "Råd om ergomoni och hjälpmedel",
  "TENS/NMES",
  "Ledmobilisering"
];

function Services() {
  return (
    <PageLayout title="Tjänster" className="services-page">
      <p className="page-intro">
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
