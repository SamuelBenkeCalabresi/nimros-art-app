import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Fondatore di Il Canto degli Spiriti, scrittore, druido e sciamano.
          Contattami, prenota e scopri di più su letture di carte, rituali di
          passaggio e degli elementi.
        </h1>
      </main>
    </div>
  );
}

export default Home;
