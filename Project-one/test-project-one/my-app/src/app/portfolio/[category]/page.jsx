"use client";

import React from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import Button from "@/app/components/Button/button";
import Image from "next/image";

const Category = ({ params }) => {
  params = useParams();
  console.log(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Test</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            incidunt accusamus deserunt minima natus, veritatis vitae,
            exercitationem eum totam similique doloribus eos beatae sunt,
            dolorum voluptatibus fugiat illo velit et.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          {/* <Image fill={true} src="./gallery/sample-illustration.jpg" /> */}
          <img src="https://img.freepik.com/free-vector/fox-family-illustration_114360-9688.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Category;
