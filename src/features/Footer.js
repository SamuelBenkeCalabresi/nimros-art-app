import React from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.socialMediaContainer}>
          <a
            href="https://www.facebook.com/druidnim/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/nimros.silmeril/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:nimros.sondar@gmail.com?subject=Mail from Nimros.art"
            className={styles.iconButton}
          >
            <MailIcon />
          </a>
        </div>
        {/* <div>
          <p className={styles.copyright}>© 2020-2021 Nimros.art</p>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
