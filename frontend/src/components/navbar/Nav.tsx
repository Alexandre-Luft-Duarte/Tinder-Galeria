import React from "react";

import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div className={styles.containerNav}>
            <div className={styles.linksContainer}>
                <Link to="/about">About</Link> 
                <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.titleContainer}>
                <p>TINDER DA GALERIA</p>
            </div>
        </div>
    );
}