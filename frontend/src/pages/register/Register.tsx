import React from "react";
import styles from "./Register.module.css";

import { registerUsers } from "../../services/api";

import Form from "../../components/form/Form";
import { FormInput } from "../../components/form/formInput/FormInput";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

export default function Register() {
    
    // 1. Defina o formato e os valores iniciais do seu formulário.
    const formInitialValues = {
        name: '',
        email: '',
        password: '',
    };

    const navigate = useNavigate();

    // 2. A função de submit agora sabe exatamente o formato dos dados que vai receber.
    const handleLoginSubmit = async (formData: typeof formInitialValues) => {
        try {
            await registerUsers(formData);
            alert('Usuário criado!');
            navigate("/login");
            // A lógica para limpar o form pode ser adicionada no hook futuramente.
        } catch(error) {
            console.log("Erro ao criar usuário", error);
            alert("Erro ao criar usuário.");
        }
    };

 return (
    <div>
        <h2 className={styles.titleRegistercontainer}>
            Register
        </h2>
        
        {/* 3. Passe os valores iniciais para o Form. Isso ativa toda a tipagem genérica. */}
        <Form onSubmit={handleLoginSubmit} initialValues={formInitialValues}>
            <FormInput 
                name="name"
                label="Nome"
                type="text"
                placeholder="Seu nome completo"
            />
            <FormInput 
                name="email"
                label="Email"
                type="email"
                placeholder="Seu melhor email"
            />
            <FormInput 
                name="password"
                label="Senha"
                type="password"
                placeholder="Crie uma senha"
            />
            <Button typeButton="submit">
                Sign up
            </Button>
       </Form>
    </div>
 );
}