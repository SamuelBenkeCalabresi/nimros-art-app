import React from "react";
import styles from "./Footer.module.css";
import whiteEarth from "../assets/images/white-earth.svg";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>© 2020-2021 Nimros.art</p>
      </footer>
    </div>
  );
}

export default Footer;
