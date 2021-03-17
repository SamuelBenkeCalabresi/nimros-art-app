import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header({ theme }) {
  console.log("theme >>>>", theme);
  return (
    <header className={styles.header}>
      <nav>
        {theme === "light" ? (
          <h1 className={`${styles.title} ${styles.light}`}>Nimros.art</h1>
        ) : (
          <h1 className={styles.title}>Nimros.art</h1>
        )}
        <ul className={styles.navigationContainer}>
          <li className={styles.link}>
            <Link to="/">home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/creations">creazioni</Link>
          </li>
          {/* <li className={styles.link}>
            <Link to="/bookings">prenotazioni</Link>
          </li> */}
          <li className={styles.link}>
            <Link to="/about">me</Link>
          </li>
          <li className={styles.link}>
            <Link to="/contact">contatti</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
