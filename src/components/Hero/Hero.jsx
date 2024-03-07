import React from 'react';
import styles from './Hero.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm Eugen</h1>
      <p className={styles.description}>
        I'm a front end developer with 2 years of experience using React and
        NodeJS. Reach out if you'd like to learn more!
      </p>
      <a href="mailto:bardhoshieugen2@gmail.com" className={styles.contactBtn}>
        Contact Me
      </a>
    </div>
    <img
      src={getImageUrl("hero/eugens2 photo.jpg.png")}
      alt="Eugens Photo"
      className={styles.heroImg}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
  </section>


  );
};
export default Hero;