import React from "react";
import whiteEarth from "../assets/images/white-earth.svg";
import styles from "./GlobeDelimeter.module.css";

function GlobeDelimeter() {
  return (
    <div>
      <div className={styles.delimeter}></div>
      <img className={styles.whiteEarth} src={whiteEarth} alt="white earth" />
    </div>
  );
}

export default GlobeDelimeter;
