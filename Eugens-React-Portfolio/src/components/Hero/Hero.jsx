import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div>
        <h1>Hi, I'm Eugen</h1>
     
      <p>
        I'm a front-end developer with 2 years of experience using React and Node.js.
        Reach out if you would like to work together.
      </p>
      <a href="mailto:bardhoshieugen2@gmail.com">Contact me</a>
      </div>
    <img src={getImageUrl("hero/eugens2 photo.jpg.png")} alt="hero" />
    </section>


  );
};
export default Hero;