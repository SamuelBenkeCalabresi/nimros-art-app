import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/images/logo-color.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <h1 className={styles.title}>Nimros.art</h1>
        <ul className={styles.navigationContainer}>
          <li className={styles.link}>
            <Link to="/">home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/about">about</Link>
          </li>
          <li className={styles.link}>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
