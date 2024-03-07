import React from 'react'
import styles from './Contact.css'
import { getImageUrl } from '../../utils'


export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
          <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
              <a href="mailto:bardhoshieugen2@gmail.com">bardhoshieugen2@gmail.com</a>
            </li>
            <li className={styles.link}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
              />
              <a href="http://Www.linkedin.com/in/eugen-bardhoshi">Eugen Bardhoshi</a>
            </li>
            <li className={styles.link}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
              <a href="https://github.com/Eugeni77">Eugen Bardhoshi</a>
            </li>
        {/* Add the download link for your CV */}
        <li className={styles.link}>
          <a href="\assets\CV\Eugen__Bardhoshi Resume.pdf" download>Download CV</a>
        </li>
          </ul>
        </footer>
      );
    };

