import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Modal } from "./Modal";

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <button onClick={handleOpenModal} className={styles.contactTitle}>
          Contact
        </button>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:manmeetsvirdi99@email.com">
            manmeetsvirdi99@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/manmeetsingh1699">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/manmeetsingh99">Github</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/instagram.png")}
            alt="Instagram icon"
          />
          <a href="https://www.instagram.com/mannnu1699/">Instagram</a>
        </li>
      </ul>
      <Modal show={showModal} onClose={handleCloseModal} />
    </footer>
  );
};
