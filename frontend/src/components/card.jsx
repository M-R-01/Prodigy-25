/** @format */

import React from "react";
import styles from "./card.module.css";
import placeholder from "../assets/images/placeholder.jpeg";

const CircleArrowRight02Icon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"purple"}
    fill={"white"}
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 12L8 12M16 12C16 12.7002 14.0057 14.0085 13.5 14.5M16 12C16 11.2998 14.0057 9.99153 13.5 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Card = ({ title, image }) => {
  console.log(title, image);
  return (
      <div className={styles.container}>
      <div className={styles.gradient}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={placeholder} alt={title} className={styles.image} />
          </div>
        </div>
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>
          <CircleArrowRight02Icon />
        </div>
      </div>
  );
};

export default Card;
