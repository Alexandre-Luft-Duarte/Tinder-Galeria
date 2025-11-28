import React from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

import Form from "../../components/form/Form";
import { FormInput } from "../../components/form/formInput/FormInput";
import Button from "../../components/button/Button";
import { loginUsers } from "../../services/api";
import { useAuth } from "../../_config/context/AuthContext";

export default function Home() {

    return (
        <div>
            <p>oi</p>
        </div>
    );
}