import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import menuIcon from "../../assets/nav/menuIcon.png"; 

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuIcon = new URL("../../assets/nav/menuIcon.png", import.meta.url)
    .href;
    const closeIcon = new URL("../../assets/nav/closeIcon.png", import.meta.url)
    .href;

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      GV ✨
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? closeIcon
              : 
            // getImageUrl("nav/menuIcon.png")
            menuIcon
          }
          alt="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        />
   

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
