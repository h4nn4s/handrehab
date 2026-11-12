import "./Contact.css";
import PageLayout from "../components/PageLayout";

function Contact() {
  return (
    <PageLayout title="Kontakt" className="contact-page">
      <div className="contact-columns">
        <div className="contact-column">
          <section className="contact-detail" aria-labelledby="contact-name-heading">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M5 21a7 7 0 0 1 14 0" />
            </svg>
            <div className="contact-detail-content">
              <h2 id="contact-name-heading">Namn</h2>
              <p>[Namn]</p>
            </div>
          </section>

          <section className="contact-detail" aria-labelledby="contact-phone-heading">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
            </svg>
            <div className="contact-detail-content">
              <h2 id="contact-phone-heading">Telefon</h2>
              <p>[Telefonnummer]</p>
            </div>
          </section>
        </div>

        <div className="contact-column">
          <section className="contact-detail" aria-labelledby="contact-email-heading">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <div className="contact-detail-content">
              <h2 id="contact-email-heading">Mail</h2>
              <p>[E-postadress]</p>
            </div>
          </section>

          <section className="contact-detail" aria-labelledby="contact-address-heading">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <div className="contact-detail-content">
              <h2 id="contact-address-heading">Adress</h2>
              <p>[Adress]</p>
            </div>
          </section>
        </div>
      </div>

      <section className="contact-map" role="img" aria-label="Plats för karta">
        Karta kommer snart
      </section>
    </PageLayout>
  );
}

export default Contact;