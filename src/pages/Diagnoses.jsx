import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const diagnoses = [
  "Sportskador (fingerledsvrickningar)",
  "Arbetsrelaterade skador (musarm)",
  "Nervskador, kompression/avskärning (karpaltunnelsyndrom)",
  "Tendinit (tendovaginit-triggerfinger)",
  "Frakturer (Distal radius fraktur)",
  "Senskador",
  "Ligamentskador (skidåkaretumme)",
  "Mjukdelsskador",
  "Reumatoid artrit",
  "Osteoartrit",
  "Ledplastiker/ledproteser (tumbas utslitning)",
  "Brännskador",
  "CRPS- smärtsyndrom",
  "Dupuytrens kontraktur (knutor i handflatan)",
  "Triangular Fibro Cartilage Complex (ligamentskada i handleden)"
];

function Diagnoses() {
  return (
    <PageLayout title="Diagnoser">
      <p className="page-intro">Det finns många olika sjukdomar och skador som kan påverka funktion i hand/arm. För att få den rätta behandling är det viktig att få den rätt ställda diagnosen.</p>

      <section
        className="services-list-section"
        aria-labelledby="diagnoses-heading"
      >
        <h2 id="diagnoses-heading">Diagnoslista</h2>
        <ul className="services-list">
          {diagnoses.map((diagnosis) => (
            <li key={diagnosis}>{diagnosis}</li>
          ))}
        </ul>
      </section>

      <section
        className="services-contact"
        aria-labelledby="diagnoses-contact-heading"
      >
        <h2 id="diagnoses-contact-heading">Har du frågor om diagnoser?</h2>
        <Link className="button button--arrow" to="/kontakt">
          Kontakta oss
        </Link>
      </section>
    </PageLayout>
  );
}

export default Diagnoses;
