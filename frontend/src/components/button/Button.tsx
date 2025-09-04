import React from "react";

import { ButtonProps } from "../../_config/interfaces/Interface";
import styles from "./Button.module.css";

export default function Button({ children, typeButton, onClick }: ButtonProps) {
    return(
        <div className={styles.containerButton}>
            <button type={typeButton} onClick={onClick}>
                {children}
            </button>
        </div>
    );
}