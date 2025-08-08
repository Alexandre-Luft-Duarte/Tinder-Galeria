import React, { FormEvent, useRef } from "react";

import Form, { FormHandle } from "../../components/form/Form";
import styles from "./Login.module.css";
import { DataUsers, LoginProps } from "../../_config/interfaces/Interface";
import { postUsers } from "../../services/api";

export default function Login({ getUsers }: LoginProps) {

    const formRef = useRef<FormHandle>(null); 

    const handleSubmit = async (formData: Omit<DataUsers, "id">) => {
        try {
            await postUsers(formData);
            alert('Usuário criado!');
            await getUsers();    
            formRef.current?.clear();
        } catch(error) {
            console.log("Erro ao criar usuário", error);
        }
    }

 return (
    <div>
        <div className={styles.containerLogin}>
            <h2>Login</h2> 
            <Form onSubmit={handleSubmit} ref={formRef}>
                Login
            </Form>
        </div>
    </div>
 );
}
