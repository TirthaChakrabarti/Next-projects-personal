import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>All Rights Reserved</div>
      <div className={styles.logos}>
        {/* <Image
          src="./footer-logos/fb-logo.webp"
          width={15}
          height={15}
          alt="MyApp"
        /> */}
        <img
          src="./footer-logos/fb-logo.webp"
          alt="Facebook Logo"
          width={30}
          height={30}
        />
        <img
          src="./footer-logos/x-logo.webp"
          alt="X Logo"
          width={30}
          height={30}
        />
        <img
          src="./footer-logos/youtube.png"
          alt="Youtube Logo"
          width={30}
          height={30}
        />
        <img
          src="./footer-logos/whatsapp.png"
          alt="Whatsapp Logo"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default Footer;
