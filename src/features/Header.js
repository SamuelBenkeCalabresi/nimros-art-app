import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo-color.png";

function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Heptagram" className={styles.logo} />
      <h1 className={styles.title}>Nimros.art</h1>
      <img src={logo} alt="Heptagram" className={styles.logo} />
    </div>
  );
}

export default Header;
