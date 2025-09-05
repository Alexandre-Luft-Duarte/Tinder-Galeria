import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

import Form from "../../components/form/Form";
import { FormInput } from "../../components/form/formInput/FormInput";
import Button from "../../components/button/Button";
import { loginUsers } from "../../services/api";
import { useAuth } from "../../components/context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    // 1. Defina o formato e os valores iniciais do seu formulário.
    const formInitialValues = {
        email: '',
        password: '',
    };

    // 2. A função de submit agora sabe exatamente o formato dos dados que vai receber.
    const handleLoginSubmit = async (formData: typeof formInitialValues) => {
        try {
            const result = await loginUsers(formData);
            console.log(result)
            login(result.user, result.token);
            alert(result.message);
            navigate('/choose');
            // A lógica para limpar o form pode ser adicionada no hook futuramente.
        } catch (error) {
            alert("Falha no login. Por favor verifique os seus dados");
        }
    };

    function handleClick() {
        navigate('/register');
    }

    return (
        <div>
            <h2 className={styles.titleLoginContainer}>
                Login
            </h2>

            {/* 3. Passe os valores iniciais para o Form. Isso ativa toda a tipagem genérica. */}
            <Form onSubmit={handleLoginSubmit} initialValues={formInitialValues}>
                <FormInput
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="Write your email"
                />
                <FormInput
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Write your password"
                />
                <Button typeButton="submit">
                    Sign in
                </Button>
            </Form>

            <div className={styles.containerButtonSignUp}>
                <p>Don't have an account?</p>
                <Button onClick={handleClick} typeButton="button">
                    Sign Up
                </Button>
            </div>
        </div>
    );
}