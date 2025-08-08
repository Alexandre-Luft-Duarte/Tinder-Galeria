import React, { useState, FormEvent, useRef } from "react";

import Form from "../../components/form/Form";
import styles from "./Login.module.css";
import ShowUsers  from "../../components/showUsers/ShowUsers";
import { LoginProps } from "../../_config/interfaces/Interface";
import { postUsers } from "../../services/api";

export default function Login({ users, getUsers }: LoginProps) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await postUsers({ email, password });
            setEmail('');
            setPassword('');
            await getUsers();    
        } catch(error) {
            console.log("Erro ao criar usuário");
        }
    }

 return (
    <div>
        <div className={styles.containerLogin}>
            <h2>Login</h2> 
            <Form 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                ref={emailInputRef}
            />
        </div>
        <div>
            <ShowUsers users={users}/>
        </div>

    </div>
 );
}
