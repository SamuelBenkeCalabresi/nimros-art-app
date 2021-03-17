import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.container}>
      <Link to="/about" className={styles.headerLink}>
        <h1 className={styles.title}>About</h1>
      </Link>
      <Link to="/about" className={styles.headerLink}>
        <h3>Rituali degli elementi</h3>
      </Link>
      <p>
        Un rituale è allineare gesto, azione, attenzione e intenzione. Già solo
        questo crea una armonia, un senso di completezza. Come potrebbe essere
        danzando, cantando, facendo sport o facendo l&#39;amore. Un rituale con
        gli elementi è per armonizzare se stessi e come si intende nello
        sciamanesimo con &quot;tutte le nostre relazioni&quot;. Gli elementi
        sono gli &quot; Ingredienti &quot; di tutto. Scoprire come ne siamo
        fatti, come reagiamo, quali forze e intelligenze condividiamo ci aiuta a
        conoscere e apprezzare meglio. Quale terra sei? Cosa scorre in te come
        acqua? Cosa ti accende e brucia? Quale respiro ti concedi? Ogni rituale
        degli elementi può essere fatto come pratica personale o di gruppo, un
        solo elemento oppure un percorso con tutti.
      </p>
      <button>Solo su prenotazione</button>
      <div className={styles.main}></div>
    </div>
  );
}

export default About;
