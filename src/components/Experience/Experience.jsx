// import React from "react";

// import styles from "./Experience.module.css";
// import skills from "../../data/skills.json";
// import history from "../../data/history.json";
// import { getImageUrl } from "../../utils";

// export const Experience = () => {
//   return (
//     <section className={styles.container} id="experience">
//       <h2 className={styles.title}>Experience</h2>
//       <div className={styles.content}>
//         <div className={styles.skills}>
//           {skills.map((skill, id) => {
//             return (
//               <div key={id} className={styles.skill}>
//                 <div className={styles.skillImageContainer}>
//                   <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                 </div>
//                 <p>{skill.title}</p>
//               </div>
//             );
//           })}
//         </div>
//         {/* <ul className={styles.history}>
//           {history.map((historyItem, id) => {
//             return (
//               <li key={id} className={styles.historyItem}>
//                 <img
//                   src={getImageUrl(historyItem.imageSrc)}
//                   alt={`${historyItem.organisation} Logo`}
//                 />
//                 <div className={styles.historyItemDetails}>
//                   <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
//                   <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
//                   <ul>
//                     {historyItem.experiences.map((experience, id) => {
//                       return <li key={id}>{experience}</li>;
//                     })}
//                   </ul>
//                 </div>
//               </li>
//             );
//           })}
//         </ul> */}
//       </div>
//     </section>
//   );
// };
import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

// Manually import images
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import reactImg from "../../assets/skills/react.png";
import nodeImg from "../../assets/skills/node.png";
import graphqlImg from "../../assets/skills/graphql.png";
import mongodbImg from "../../assets/skills/mongodb.png";
import figmaImg from "../../assets/skills/figma.png";
import cppImg from "../../assets/skills/cpp1.png";
import pythonImg from "../../assets/skills/python.jpeg";
import cImg from "../../assets/skills/c.png";
import javaImg from "../../assets/skills/java.png";
import javascriptImg from "../../assets/skills/javascript.svg";
import dsaImg from "../../assets/skills/dsa.png";
import mysqlImg from "../../assets/skills/mysql.png";

// Create a mapping object
const imageMap = {
  "skills/html.png": htmlImg,
  "skills/css.png": cssImg,
  "skills/react.png": reactImg,
  "skills/node.png": nodeImg,
  "skills/graphql.png": graphqlImg,
  "skills/mongodb.png": mongodbImg,
  "skills/figma.png": figmaImg,
  "skills/c.png":cImg,
  "skills/cpp1.png":cppImg,
  "skills/java.png":javaImg,
  "skills/dsa.png":dsaImg,
  "skills/python.jpeg":pythonImg,
  "skills/javascript.svg":javascriptImg,
  "skills/mysql.png":mysqlImg
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={imageMap[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
