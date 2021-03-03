import React from "react";
import styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.container}>
      <Link to="/about" className={styles.headerLink}>
        <h1 className={styles.title}>About</h1>
      </Link>
      <main className={styles.main}></main>
    </div>
  );
}

export default About;
