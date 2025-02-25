import React from "react";
import styles from "./about.module.css";
import Button from "../components/Button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/about-page/about.jpg" alt="" />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storyteller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus repellendus provident perspiciatis neque sequi iste
            est, architecto eum delectus natus aperiam reiciendis minus nobis
            omnis necessitatibus eius earum, accusamus dolor?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi
            odit itaque eveniet aperiam iste minus dolor ea quos eaque deleniti
            magnam architecto, expedita porro quam nesciunt nemo nihil
            voluptatibus?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            id error asperiores iusto doloremque amet dicta delectus blanditiis
            corrupti at! Expedita quasi, rerum modi commodi magni nesciunt
            placeat animi porro?
          </p>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            velit perferendis aut possimus, ullam molestias amet adipisci est
            quos, eius debitis accusamus, iste a illum aperiam inventore harum
            recusandae dignissimos?
          </p>
          <Button text="Contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
