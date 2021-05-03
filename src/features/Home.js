import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          nunc vel urna facilisis dignissim. Nullam at aliquet nulla
        </h1>
      </main>
    </div>
  );
}

export default Home;
