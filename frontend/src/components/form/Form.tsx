import React, { FormEvent, useState, forwardRef, useImperativeHandle } from "react";

import styles from "./Form.module.css"
import Button from "../button/Button";
import { FormPropsInterface } from "../../_config/interfaces/Interface";

export interface FormHandle {
    clear: () => void;
}

const Form = forwardRef<FormHandle, FormPropsInterface>(({ onSubmit, children }, ref) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ email, password });
    }

    const clearInput = () => {
        setEmail('');
        setPassword('');
    };

    useImperativeHandle(ref, () => ({
        clear: clearInput,
    }));

    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email">Email:</label>
                <input 
                    type="email"
                    value={email}
                    placeholder="Write your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    value={password}
                    placeholder="Write your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            <Button typeButton="submit">
                {children}
            </Button>
        </form>
    );
});

export default Form;


