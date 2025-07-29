import React, { useState } from "react";

import styles from "./Form.module.css"
import { FormPropsInterface } from "../../_config/interfaces/Interface";

export default function Form({ email, setEmail, password, setPassword, handleSubmit }: FormPropsInterface) {

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Write your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Write your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit">Login</button>
        </form>
    );
}

