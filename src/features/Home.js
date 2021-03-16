import React from "react";
import styles from "./Home.module.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.socialMediaContainer}>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <FacebookIcon />
          {/* <LinkedInIcon className={styles.socialIcon} fontSize="large" /> */}
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIconLink}
        >
          <MailIcon />
        </a>
      </div>
      <main className={styles.main}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          nunc vel urna facilisis dignissim. Nullam at aliquet nulla, id pretium
          velit. Pellentesque quis sodales lacus, at consectetur sem. Fusce
          tempus tortor leo, vitae lacinia elit varius vel. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec at libero non arcu vulputate accumsan id sed sem. Morbi
          elementum tortor et est gravida, eget tempus metus fringilla. Proin
          ultricies interdum est, vitae volutpat purus ultrices id. Duis eget
          pulvinar nulla.
        </p>
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
