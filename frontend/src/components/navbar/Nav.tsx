import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Nav.module.css";
import { useAuth } from "../../_config/context/AuthContext";
import { useModal } from "../../_config/context/ModalContext";

export default function Nav() {

    const navigate = useNavigate();
    const { logout, isAuthenticated } = useAuth();
    const { showModal } = useModal();

    function handleClickLogout() {
        showModal({
            title: "Logout",
            content: <p>Deseja realmente sair da conta?</p>,
            confirmText: "Continuar",
            cancelText: "Cancelar",
            onConfirm: handleSaveChanges,
        })
    }

    function handleSaveChanges() {
        logout();
        navigate("/login");
    }

    return (
        <div className={styles.containerNav}>
            <div className={styles.linksContainer}>
                {isAuthenticated && (
                    <>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>   
                        <Link to="/login" onClick={handleClickLogout}>LogOut</Link>
                    </>
                )}
            </div>
            <div className={styles.titleContainer}>
                <p>TINDER DA GALERIA</p>
            </div>
            <div className={styles.rightContainer}>
            </div>
        </div>
    );
}