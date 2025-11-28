import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Nav.module.css";
import { useAuth } from "../../_config/context/AuthContext";
import { useModal } from "../../_config/context/ModalContext";
import Button from "../button/Button";
import Login from "../login/Login";

export default function Nav() {

    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();
    const { showModal } = useModal();


    function handleLogin() {
        showModal({
            title: <p>Login</p>,
            content: <Login />,
            confirmText: "Continuar",
            cancelText: "Cancelar",
        })
    }

    return (
        <div className={styles.containerNav}>
            <div className={styles.aboutContainer}>
                <Link to="/about">About</Link>
            </div>
            <div className={styles.contactContainer}>
                <Link to="/contact">Contact</Link>
            </div>
            {isAuthenticated && (
                <div>
                    <Button>
                        Exit
                    </Button>
                </div>
            )}
            <div className={styles.loginContainer}>
                <Button onClick={handleLogin}>
                    Sign in
                </Button>
            </div>
        </div>
    )
}