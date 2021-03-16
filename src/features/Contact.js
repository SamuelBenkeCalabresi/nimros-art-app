import React from "react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

function Contact() {
  return (
    <div className={styles.container}>
      <Link to="/contact" className={styles.headerLink}>
        <h1 className={styles.title}>Contact</h1>
      </Link>
      <FacebookIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <MailIcon />
      <main className={styles.main}></main>
    </div>
  );
}

export default Contact;
