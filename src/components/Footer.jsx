const phoneNumber = "";
const emailAddress = "";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">HandRehab Göteborg</h2>

        <address className="footer-contact">
          <ul className="footer-contact-list">
            <li>[Besöksadress]</li>
            <li>
              {phoneNumber ? (
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              ) : (
                "[Telefonnummer]"
              )}
            </li>
            <li>
              {emailAddress ? (
                <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              ) : (
                "[E-postadress]"
              )}
            </li>
          </ul>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
