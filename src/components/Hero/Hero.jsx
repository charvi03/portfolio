import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Charvi</h1>
        <p className={styles.description}>
          Dedicated person with a problem-solving mindset, consistently
          recognized for exceptional performance and excellence in all endeavors
          and seeking opportunities to contribute meaningfully to innovative
          projects.
        </p>
        <a
          href="charvi.pdf"
          className={styles.contactBtn}
          download="Charvi_khurana_resume .pdf"
        >
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
