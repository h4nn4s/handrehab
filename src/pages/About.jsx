import heroImage from "../assets/hero.png";

function About() {
  return (
    <main className="hero about-hero" aria-labelledby="about-title">
      <h1 id="about-title">Om oss</h1>
      <p className="hero-description">
        Förnamn Efternamn
        <br /><em>Leg Arbetsterapeut / Handterapeut</em>
        <br /><br />Jag är leg arbetsterapeut med specialistkompetens i handrehabilitering. Jag har gjort min universitetsutbildning i Australien och arbetat med handrehabilitering i Australien och Storbritannien mellan 1995-2000.
        <br /><br />2002-2009  arbetade jag på handkirurgiska kliniken, Sahlgrenska Universitets Sjukhuset. Sedan sept. 2009 har jag arbetat heltid med mitt eget företag, HandRehab Göteborg.

        <br /><br />Jag har vidareutbildat mig i handrehabilitering vid Lunds Universitet (15p masters nivå) och har varit delaktig i forskning i bland annat Mallet finger skador, Tumbasartros (CMC-l artelon spacer) och Sentransfereringar hos barn med Cerebral Pares.
      </p>
      <img className="about-hero-image" src={heroImage} alt="" />
    </main>
  );
}

export default About;
