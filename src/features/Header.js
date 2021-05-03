import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
// import BurgerMenu from "./BurgerMenu";

function Header({ theme }) {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.titleContainer}>
          {theme === "light" ? (
            <h1 className={`${styles.title} ${styles.light}`}>Nimros.art</h1>
          ) : (
            <h1 className={styles.title}>Nimros.art</h1>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
