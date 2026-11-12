
import PageLayout from "../components/PageLayout";

const references = [
  "Referens 1",
  "Referens 2",
  "Referens 3"
];

const links = [
  {
    title: "Svensk förening för handrehabilitering",
    url: "https://www.sfh.nu/"
  },
  {
    title: "Vår it-leverantör",
    url: "https://frontmind.com/"
  },
];


function References() {
  return (
    <PageLayout title="Referenser & länkar">
      <div className="references-columns">
        <section
          className="services-list-section"
          aria-labelledby="references-heading"
        >
          <h2 id="references-heading">Referenser</h2>
          <ul className="services-list references-list">
            {references.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </section>

        <section
          className="services-list-section"
          aria-labelledby="links-heading"
        >
          <h2 id="links-heading">Länkar</h2>
          <ul className="services-list references-list">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  );
}

export default References;
