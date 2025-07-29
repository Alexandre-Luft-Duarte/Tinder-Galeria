import React from "react";

import styles from "./Choose.module.css";
import PhotoStage from "../../components/photoStage/PhotoStage";

export default function Choose() {
    return(
        <div className={styles.chooseContainer}>
            <PhotoStage />
        </div>
    );
}