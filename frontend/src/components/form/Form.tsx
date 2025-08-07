import React, { forwardRef, useState } from "react";

import styles from "./Form.module.css"
import { FormPropsInterface } from "../../_config/interfaces/Interface";

const Form = forwardRef({ email, setEmail, password, setPassword, handleSubmit }: FormPropsInterface, ref) => {

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
                    refUserEmail={refUserEmail}
                />
            <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Write your password"
                    onChange={(e) => setPassword(e.target.value)}
                    refUserPassword={refUserPassword}
                />
            <button type="submit">Login</button>
        </form>
    );
})

export default Form;

