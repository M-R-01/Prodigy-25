import React, { useState } from "react";
import styles from "./navbar.module.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.prodigy}>Prodigy</div>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
        <li><a href="#" className={styles.active}>HOME</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">ACCOMMODATION</a></li>
        <li><a href="#">WORKSHOPS</a></li>
        <li><a href="#">GUEST LECTURERS</a></li>
        <li><a href="#">OUR TEAM</a></li>
        <li className={styles.socialIcons}>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;