import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your ideas into reality. We bring together the teams from the
          global tech industry
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <img
          src="./hero-section/hero-image.jpg"
          alt="Hero Section Image"
          className={styles.img}
        />
      </div>
    </div>
  );
}
