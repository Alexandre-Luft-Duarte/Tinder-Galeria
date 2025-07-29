import React from "react";

import styles from "./PhotoStage.module.css";
import Icons from "../icon/Icons";

export default function PhotoStage() {
    return(
        <div>
            <div>
                <Icons icon="arrowLeft"/>
            </div>
            <div className={styles.photoContainer}>
                <p></p>
            </div>
            <div>
                <Icons icon="arrowRight"/>
            </div>
        </div>

    );
}