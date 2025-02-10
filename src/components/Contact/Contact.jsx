import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    const LinkIcon = new URL("../../assets/contact/linkedinIcon.png", import.meta.url)
    .href;
    const mailIcon = new URL("../../assets/contact/emailIcon.png", import.meta.url)
    .href;
    const gitIcon = new URL("../../assets/contact/githubIcon.png", import.meta.url)
    .href;
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's build something great together. Reach out for collaborations, discussions, or just to say hi!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={mailIcon} alt="Email icon" />
          <a href="mailto:s.vijayagayathri@gmail.com">s.vijayagayathri@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={LinkIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/gayathri-vijaya-lakshmi-7b4475250/">linkedin.com/Gayathri-Vijaya-Lakshmi</a>
        </li>
        <li className={styles.link}>
          <img src={gitIcon} alt="Github icon" />
          <a href="https://github.com/GayathriVijaya">github.com/GayathriVijaya</a>
        </li>
      </ul>
    </footer>
  );
};