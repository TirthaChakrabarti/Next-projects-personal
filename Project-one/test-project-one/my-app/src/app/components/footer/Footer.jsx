import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>All Rights Reserved</div>
      <div>
        {/* <Image
          src="./footer-logo/fb-logo.webp"
          width={15}
          height={15}
          alt="MyApp"
        /> */}
      </div>
    </div>
  );
};

export default Footer;
