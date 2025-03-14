/** @format */

import React from "react";
import { useState, useEffect } from "react";
import styles from "../pages/home.module.css";
import axios from "axios";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Card from "../components/card.jsx";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={`${styles.section} ${styles.centreAlign}`}>
        <h2 className={styles.heading}>About Us</h2>
        <p>Welcome to the official web page of Prodigy NIT Trichy.</p>
      </div>

      <div className={styles.menu}>
        <div className={styles.menuItem}>Paper Submissions</div>
        <div className={styles.dot}></div>
        <div className={styles.menuItem}>Guest Lectures</div>
        <div className={styles.dot}></div>
        <div className={styles.menuItem}>Workshops</div>
        <div className={styles.dot}></div>
        <div className={styles.menuItem}>Events</div>
      </div>

      <div className={`${styles.section} ${styles.leftAlign}`}>
        <h2 className={styles.heading}>Events</h2>
        <div className={styles.events}>
          <Card title='Prodigy25 Hackathon' image='images/' />
        <Card title='Prodigy25 Hackathon' image='images/' />
        </div>
        
      </div>

      <div className={`${styles.section} ${styles.rightAlign}`}>
        <h2 className={styles.heading}>Workshops</h2>
        <div className={styles.events}>
          <Card title='Prodigy25 Hackathon' image='placeholder.jpeg' />
        <Card title='Prodigy25 Hackathon' image='images/' />
        </div>
      </div>

      <div className={`${styles.section} ${styles.centreAlign}`}>
        <h2 className={styles.heading}>Guest Lectures</h2>
        <div className={styles.events}>
          <Card title='Prodigy25 Hackathon' image='images/' />
        <Card title='Prodigy25 Hackathon' image='images/' />
        </div>
      </div>

      <div className={`${styles.section} ${styles.centreAlign}`}>
        <h2 className={styles.heading}>Meet our Team</h2>
        <p>Space for sth if needed</p>
      </div>

      <div className={`${styles.section} ${styles.leftAlign}`}>
        <h3 className={styles.heading}>Excomms</h3>
        <p>Space for sth if needed</p>
      </div>

      <div className={`${styles.section} ${styles.rightAlign}`}>
        <h3 className={styles.heading}>Core</h3>
        <p>Space for sth if needed</p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
