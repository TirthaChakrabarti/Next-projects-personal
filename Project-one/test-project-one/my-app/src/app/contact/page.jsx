import React from "react";
import styles from "./page.module.css";
import Button from "../components/Button/button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img
            src="./contact-page/contact.jpg"
            alt="Hero Section Image"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="Message"
            cols={30}
            id=""
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
