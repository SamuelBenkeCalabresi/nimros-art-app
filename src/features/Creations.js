import React from "react";
import { Link } from "react-router-dom";
import styles from "./Creations.module.css";
import StripeContainer from "./StripeContainer";

function Creations() {
  return (
    <div className={styles.container}>
      <Link to="/creations" className={styles.headerLink}>
        <h1 className={styles.title}>Creazioni</h1>
      </Link>
      <h3>Rituali degli elementi</h3>
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

      <button className={styles.button} id={styles.button}>
        <div id={styles.circle}></div>
        <span>Prenota</span>
      </button>

      <h3>Rituali di passaggio</h3>
      <p>
        Ci sono momenti con una fondamentale valenza fisica: nascita, cambio
        della dentizione, primo sangue e seme, esperienza sessuale, menopausa e
        andropausa, morte. Tutti questi eventi li riconosciamo come riti di
        passaggio qualsiasi sia il nostro contesto culturale. Cambia molto i
        modi in cui viverli personalmente e nel nostro spazio di relazioni Anche
        il periodo dell’adolescenza, il ruolo e lavoro che scegliamo nella
        società, i “ lutti&quot; che viviamo alla fine di amicizie e relazioni
        di coppia sono riti di passaggio che in modo più o meno consapevole
        viviamo nell’arco della vita. Possiamo facilmente sentire la mancanza di
        uno o più di questi passaggi. Sono molto felice di vedere come esseri
        umani luminosi si stiano prendendo cura di aiutare questi passaggi in
        diversi ambiti e tradizioni. Trovo fondamentale che si possa fare questi
        riti per il nostro percorso personale e sociale. I rituali che propongo
        hanno delle caratteristiche chiave ma hanno una preparazione particolare
        per ogni singola persona, proprio per evidenziare l’unicità di ognuno.
        Contemporaneamente alle risorse preziose delle sue relazioni. Non siamo
        mai soli nei passi della vita. Gli strumenti che metto a disposizione
        sono quelli della mediazione guidata, il viaggio sciamanico dedicato ad
        animali, piante, Antenati ed Elementi, la divinazione con Tarocchi,
        Rune, Astrologia e non ultimo la guida in cerchi di parola. Secondo le
        affinità che possono essere messe in risalto ad arricchire la bellezza e
        profondità del rituale che si verrà a creare.
      </p>
      <button className={styles.button} id={styles.button}>
        <div id={styles.circle}></div>
        <span>Prenota</span>
      </button>
      {/* <StripeContainer /> */}
    </div>
  );
}

export default Creations;
