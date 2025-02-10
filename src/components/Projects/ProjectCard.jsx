// import React from "react";

// import styles from "./ProjectCard.module.css";
// import { getImageUrl } from "../../utils";

// export const ProjectCard = ({
//   project: { title, imageSrc, description, skills, demo, source },
// }) => {
//   return (
//     <div className={styles.container}>
//       <img
//         src={getImageUrl(imageSrc)}
//         alt={`Image of ${title}`}
//         className={styles.image}
//       />
//       <h3 className={styles.title}>{title}</h3>
//       <p className={styles.description}>{description}</p>
//       <ul className={styles.skills}>
//         {skills.map((skill, id) => {
//           return (
//             <li key={id} className={styles.skill}>
//               {skill}
//             </li>
//           );
//         })}
//       </ul>
//       <div className={styles.links}>
//         <a href={demo} className={styles.link}>
//           Demo
//         </a>
//         <a href={source} className={styles.link}>
//           Source
//         </a>
//       </div>
//     </div>
//   );
// };
import React from "react";
import styles from "./ProjectCard.module.css";

// Manually import images
import projectImg from "../../assets/projects/project.png";
import fImg from "../../assets/projects/food.svg";
import bImg from "../../assets/projects/bus.png";
import cImg from "../../assets/projects/chatfor.svg";
import pImg from "../../assets/projects/slide2.png";

// Create a mapping object
const imageMap = {
  "projects/project.png": projectImg,
  "projects/food.svg": fImg,
  "projects/bus.png": bImg,
  "projects/chatfor.svg": cImg,
  "projects/slide2.png": pImg,
};

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageMap[imageSrc]} // Get the correct image from the mapping
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          GitHub
        </a> */}
        <a href={source} className={styles.link}>
        GitHub
        </a>
      </div>
    </div>
  );
};
