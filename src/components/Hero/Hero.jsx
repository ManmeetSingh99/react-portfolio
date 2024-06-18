import React, { useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, <br />
          I'm Manmeet Singh
        </h1>
        <p className={styles.description}>
          "A Front-end Developer skilled in creating dynamic and responsive
          applications using React.js and Vue.js.
          <br /> Passionate about building seamless user experiences and
          efficient code.
          <br />
          Currently enhancing my skill set by exploring backend development to
          become a more versatile developer."
        </p>
        <div className={styles.buttons}>
          <a className={styles.contactBtn} href="#contact">
            Contact Me
          </a>
          <a
            className={styles.resumeBtn}
            href="./Resume_ManmeetSingh.pdf"
            download="Manmeet_Singh_Resume.pdf"
          >
            My Resume
          </a>
        </div>
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
