import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { ReactComponent as PatreonIcon } from "../assets/images/patreon-logo.svg";
import MailIcon from "@material-ui/icons/Mail";

function Contact() {
  return (
    <div className={styles.container}>
      <Link to="/contact" className="header-link-default">
        <h1 className="header-1-default">Contatti</h1>
      </Link>
      <p className={styles.contactText}>
        Ciao! Sono sempre felice di sentire proposte interessanti e
        collaborazioni. Sentiti libero di contattarmi tramite e-mail o social
        media.
      </p>
      <div className={styles.contactsContainer}>
        <a
          href="https://www.facebook.com/druidnim/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <FacebookIcon fontSize="large" />
          <p className={styles.socialTextLink}>Facebook</p>
        </a>
        <a
          href="https://www.instagram.com/nimros.silmeril/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <InstagramIcon fontSize="large" />
          <p className={styles.socialTextLink}>Instagram</p>
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <PatreonIcon className={styles.patreonIcon} />
          <p className={styles.socialTextLink}>Patreon</p>
        </a>
        <a
          href="mailto:nimros.sondar@gmail.com?subject=Mail from Nimros.art"
          className={styles.socialIconLink}
        >
          <MailIcon fontSize="large" />
          <p className={styles.socialTextLink}>Email me</p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
