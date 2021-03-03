import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container}>
      <Link to="/contact" className={styles.headerLink}>
        <h1 className={styles.title}>Contact</h1>
      </Link>
      <main className={styles.main}></main>
    </div>
  );
}

export default Contact;
