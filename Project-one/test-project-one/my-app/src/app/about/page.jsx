import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="./hero-section/about-banner.jpg" alt="" />
        <div>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <br />
          <br />
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus repellendus provident perspiciatis neque sequi iste
            est, architecto eum delectus natus aperiam reiciendis minus nobis
            omnis necessitatibus eius earum, accusamus dolor?
          </p>
        </div>
        <div>
          <h1 className={styles.title}>Who Are We?</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
