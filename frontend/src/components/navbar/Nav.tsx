import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Nav.module.css";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
    
    const navigate = useNavigate();
    const { logout } = useAuth();
    function handleClick(){
        logout();
        navigate("/login");
    }

    return(
        <div className={styles.containerNav}>
            <div className={styles.linksContainer}>
                <Link to="/about">About</Link> 
                <Link to="/contact">Contact</Link>
                <Link to="/login" onClick={handleClick}>LogOut</Link>
            </div>
            <div className={styles.titleContainer}>
                <p>TINDER DA GALERIA</p>
            </div>
        </div>
    );
}