import React from "react";
import styles from "./Home.module.css";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";

function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>The personal website</p>
        <div className={styles.socialNetworksContainer}>
          <a
            href="https://www.linkedin.com/in/samuel-benke-calabresi-478a14a2/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            {/* <LinkedInIcon className={styles.socialIcon} fontSize="large" /> */}
          </a>
          <a
            href="https://github.com/SamuelBenkeCalabresi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            {/* <GitHubIcon className={styles.socialIcon} fontSize="large" /> */}
          </a>
          <a
            href="https://www.facebook.com/samuel.benke.5"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            {/* <FacebookIcon className={styles.socialIcon} fontSize="large" /> */}
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
