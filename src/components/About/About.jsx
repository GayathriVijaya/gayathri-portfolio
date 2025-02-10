import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const aboutImage = new URL(
    "../../assets/about/aboutImage.png",
    import.meta.url
  ).href;
  const cursorIcon = new URL(
    "../../assets/about/cursorIcon.png",
    import.meta.url
  ).href;
  const serverIcon = new URL(
    "../../assets/about/serverIcon.png",
    import.meta.url
  ).href;
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I’m pursuing a 5-year Integrated Engineering degree and am
                passionate about web and app development, with a keen interest
                in AI/ML. I continuously enhance my coding skills by exploring
                new technologies and working on hands-on projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web & App Development & AI/ML Enthusiast </h3>
              <p>
                I like building websites and apps that are smooth and
                user-friendly. I’m also passionate about AI/ML and working on
                projects to deepen my understanding.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Academic Achievements</h3>
              <p>
                I have consistently secured top position in academics with a
                strong CGPA. Additionally, I actively participate in hackathons,
                gaining practical experience and expanding my knowledge in
                real-world applications.
                
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
