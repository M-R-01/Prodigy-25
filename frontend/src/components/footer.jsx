import React from "react";
import styles from "./footer.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.gradientLine}></div>
      <h2 className={styles.consultHeading}>WE ARE READY TO CONSULT YOU</h2>
      <div className={styles.gradientLine1}></div>
      <div className={styles.formContainer}>
        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label>My Name is</label>
            <input type="text" placeholder="name" />
          </div>
          <div className={styles.inputGroup}>
            <label>I Am Interested In</label>
            <input type="text" placeholder="Meesage" />
          </div>
          <button type="submit" className={styles.sendButton}>SEND</button>
        </form>
      </div>
      <h2 className={styles.mobileHeading}>CONNECT WITH ME</h2>
      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <FaPhoneAlt className={styles.icon} />
          <span>+91 455478112</span>
        </div>
        <div className={styles.contactItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>National Institute Of Technology</span>
        </div>
        <div className={styles.contactItem}>
          <FaEnvelope className={styles.icon} />
          <span>prodigy@gmail.com</span>
        </div>
      </div>

      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaInstagram />
        <FaLinkedinIn />
      </div>

      <button className={styles.scrollButton} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Go Back to the Top
      </button>
    </div>
  );
};

export default Contact;