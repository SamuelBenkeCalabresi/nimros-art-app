import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.container}>
      <Link to="/about" className={styles.headerLink}>
        <h1 className={styles.title}>Su di me</h1>
      </Link>
      <p>
        Nato il 1/5/1971 a Roma con il nome Riccardo Benke Calabresi, con
        origini venezuelane e ungheresi oltre che italiane. Ho avuto centinaia
        di sogni premonitori, a carattere personale, questo mi ha dato molta
        spinta e fiducia nel cammino spirituale. Ho frequentato decine di corsi
        e seminari da yoga kundalini, tai chi, aromaterapia, cristalloterapia,
        medicina cinese, tibetana e ayurveda, astrologia esoterica e karmica con
        Sir Douglas Becker, psicosintesi, cerchi di sciamanesimo di varie
        tradizioni, scuole di buddismo tibetano e giapponese per oltre un
        decennio, tradizioni wicca tra cui frequento il Tempio di Ara, sto
        terminando il percorso da druido con Ordine Bardi e Ovati e Druidi (
        Obod), frequento la tradizione dell&#39;Eish Shaok da 4 anni. Da 6 anni
        ho aggiunto il nome Nimros per le mie esperienze di sciamanesimo, eseguo
        letture di Rune, Tarocchi, Animali Totem, astrologia vedica e
        occidentale, conduco seminari e rituali.
      </p>
      <div className={styles.main}></div>
    </div>
  );
}

export default About;
