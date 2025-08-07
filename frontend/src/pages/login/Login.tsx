import React, { useState, FormEvent, forwardRef } from "react";

import Form from "../../components/form/Form";
import styles from "./Login.module.css";
import ShowUsers  from "../../components/showUsers/ShowUsers";
import { LoginProps } from "../../_config/interfaces/Interface";

const Login = forwardRef(({ users }: LoginProps, ref) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
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
                ref={ref}

            />
        </div>
        <div>
            <ShowUsers users={users}/>
        </div>

    </div>
 );

})

export default Login;
