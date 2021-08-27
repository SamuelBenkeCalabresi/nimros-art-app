import React from "react";
import styles from "./PostsContainer.module.css";
import { Link } from "react-router-dom";

function PostsContainer() {
  return (
    <aside className={styles.aside}>
      <Link to="/bookings" className={styles.postDarkTheme}>
        <h3 className={styles.postDarkThemeTitle}>
          Prenota online lezioni su sciamanesimo e druidismo
        </h3>
        <p className={styles.postDarkThemeText}>
          Il viaggio sciamanico dedicato ad animali, piante, Antenati ed
          Elementi, la divinazione con Tarocchi, Rune, Astrologia e non ultimo
          la guida in cerchi di parola.
        </p>
      </Link>
      <Link to="/creations" className={styles.postDarkTheme}>
        <h3 className={styles.postDarkThemeTitle}>
          Scopri di più sulle mie creazioni
        </h3>
        <img
          className={styles.postDarkThemeImg}
          src="https://images.unsplash.com/photo-1524455567005-adafed8a3f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="tarot cards"
        />
      </Link>
    </aside>
  );
}

export default PostsContainer;
