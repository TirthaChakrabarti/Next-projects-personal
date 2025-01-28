"use client";

import Link from "next/link";
import React from "react";

import styles from "./Navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        LOGO
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <button className={styles.login} onClick={() => console.log("Logged in")}>
        Login
      </button>
      <button
        className={styles.logout}
        onClick={() => console.log("Logged out")}
      >
        Logout
      </button>
    </div>
  );
};

// Above onClick events (or other such events) need this Navbar component to be client-side-rendered
// We have added 'use client' at the top to ensure this

export default Navbar;
