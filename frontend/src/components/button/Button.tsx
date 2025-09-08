import React from "react";

import { ButtonProps } from "../../_config/interfaces/Interface";
import styles from "./Button.module.css";

export default function Button({ children, typeButton, onClick, className }: ButtonProps) {
    return(
        <div className={styles.containerButton}>
            <button type={typeButton} onClick={onClick} className={className}>
                {children}
            </button>
        </div>
    );
}