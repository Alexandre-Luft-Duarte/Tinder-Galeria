import React, { Dispatch, SetStateAction, FormEvent } from "react";

export interface IconInterface {
    icon: string;
    onClick?: () => void;
    title?: string;
    class?: string;
}

export interface FormPropsInterface {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}







