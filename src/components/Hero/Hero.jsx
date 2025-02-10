import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const heroIcon = new URL("../../assets/hero/heroImage.png", import.meta.url)
    .href;
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hello, I'm Gayathri</h1>
        <p className={styles.description}>
          I'm a third-year engineering student  passionate about learning, innovation ,
          and building impactful projects 🚀. I enjoy exploring technologies
          and developing solutions!
        </p>
        <a href="mailto:s.vijayagayathri@gmail.com" className={styles.contactBtn}>
          Get in Touch
        </a>
      </div>
      <img src={heroIcon} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
// import React from "react";
// import Typed from "react-typed"; // Without curly braces



// import styles from "./Hero.module.css";

// export const Hero = () => {
//   const heroIcon = new URL("../../assets/hero/heroImage.png", import.meta.url).href;

//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>
//           Hello, I'm{" "}
//           <span className={styles.typedText}>
//             <Typed
//               strings={[
//                 "Gayathri",
//                 "an AI/ML Enthusiast 🤖",
//                 "a Web Developer 🌐",
//                 "an App Developer 📱",
//                 "a Passionate Engineer 🚀",
//               ]}
//               typeSpeed={100}
//               backSpeed={50}
//               loop
//             />
//           </span>
//         </h1>
//         <p className={styles.description}>
//           I'm a third-year engineering student passionate about learning, innovation, and building impactful projects 🚀. 
//           I enjoy exploring technologies and developing solutions!
//         </p>
//         <a href="mailto:s.vijayagayathri@gmail.com" className={styles.contactBtn}>
//           Contact Me
//         </a>
//       </div>
//       <img src={heroIcon} alt="Hero image of me" className={styles.heroImg} />
//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };
