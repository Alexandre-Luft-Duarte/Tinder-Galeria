import React, { useState } from "react";

import Form from "../../components/form/Form";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
    }

 return (
    <div>
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
