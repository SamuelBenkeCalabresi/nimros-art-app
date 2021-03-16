import React from "react";
import styles from "./Home.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* <div className={styles.profession}></div> */}
      <div className={styles.socialMediaContainer}>
        <a
          href="https://www.facebook.com/druidnim/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/nimros.silmeril/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="mailto:nimros.sondar@gmail.com?subject=Mail from Nimros.art"
          className={styles.socialIconLink}
        >
          <MailIcon fontSize="large" />
        </a>
      </div>
      <main className={styles.main}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          nunc vel urna facilisis dignissim. Nullam at aliquet nulla, id pretium
          velit. Pellentesque quis sodales lacus, at consectetur sem.
        </p>
        <div className={styles.postLigthTheme}>
          <p className={styles.postLightThemeText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            nunc vel urna facilisis dignissim. Nullam at aliquet nulla, id
            pretium velit. Pellentesque quis sodales lacus, at consectetur sem.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
