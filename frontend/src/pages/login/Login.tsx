import React, { useState, FormEvent } from "react";

import Form from "../../components/form/Form";
import styles from "./Login.module.css";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

 return (
    <div className={styles.containerLogin}>
        <h2>Login</h2>
        <Form 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}

        />
    </div>
 );

}
