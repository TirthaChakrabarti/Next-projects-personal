"use client";

import Link from "next/link";
import React from "react";

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
    <div className="container">
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
          {link.title}
        </Link>
      ))}
      <button onClick={() => console.log("Logged in")}>Login</button>
      <button onClick={() => console.log("Logged out")}>Logout</button>
    </div>
  );
};

// Above onClick events (or other such events) need this Navbar component to be client-side-rendered
// We have added 'use client' at the top to ensure this

export default Navbar;
