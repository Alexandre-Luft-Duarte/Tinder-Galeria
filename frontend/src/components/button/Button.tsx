import React from "react";
import { ButtonProps } from "../../_config/interfaces/Interface";

export default function Button({ children, typeButton }: ButtonProps) {
    return(
        <div>
            <button>{children}</button>
        </div>
    );
}