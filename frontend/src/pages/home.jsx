import React from "react";
import { useState,useEffect } from "react";
import styles from "../pages/home.module.css";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get("http://localhost:5000")
        .then(res => {
             setData(res.data);
             console.log(res.data);
         })
    }, [])

    return (
        <div>
            <h1 className={styles.title}>Welcome to Home Page</h1>
            <p className={styles.events}>{data.Events}</p>
        </div>
    )
}

export default Home;