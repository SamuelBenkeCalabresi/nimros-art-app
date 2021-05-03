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
        {/* <BurgerMenu className={styles.burgerMenu} /> */}
        {/* <Radio /> */}

        {/* <ul className={styles.navigationContainer}>
          <li className={styles.listLink}>
            <Link to="/" className={styles.link}>
              home
            </Link>
          </li>
          <li className={styles.listLink}>
            <Link to="/creations" className={styles.link}>
              creazioni
            </Link>
          </li>
          <li className={styles.link}>
            <Link to="/bookings">prenotazioni</Link>
          </li>
          <li className={styles.listLink}>
            <Link to="/about" className={styles.link}>
              me
            </Link>
          </li>
          <li className={styles.listLink}>
            <Link to="/contact" className={styles.link}>
              contatti
            </Link>
          </li>
          <li className={styles.listLink}>
            <Link to="/drawer" className={styles.link}>
              contatti
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}

export default Header;
