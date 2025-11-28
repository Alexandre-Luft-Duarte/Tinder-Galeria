import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import {useAuth} from "../../_config/context/AuthContext";
import {loginUsers} from "../../services/api";
import styles from "./Login.module.css";
import {FormInput} from "../form/formInput/FormInput";
import Button from "../button/Button";
import Form from "../form/Form";
import Register from "../register/Register";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showRegistration, setShowRegistration] = useState(false);
    const formInitialValuesLogin = {
        email: '',
        password: '',
    };

    const handleLoginSubmit = async (formData: typeof formInitialValuesLogin) => {
        try {
            const result = await loginUsers(formData);
            login(result.user, result.token);
            alert(result.message);
            navigate('/choose');
        } catch (error) {
            alert("Falha no home. Por favor verifique os seus dados");
        }
    };

    function handleRegister() {
        setShowRegistration(true);
    }

    return (
        <div>
            {!showRegistration && (
                <div>
                    { /* 3. Passe os valores iniciais para o Form. Isso ativa toda a tipagem genérica. */}
                        <Form  onSubmit={handleLoginSubmit} initialValues={formInitialValuesLogin}>
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
                            <Button typeButton="button" onClick={handleRegister}>
                                Sign Up
                            </Button>
                        </div>
                </div>
            )}

            {showRegistration && (
                <Register />
            )}
        </div>
    )
}