import React, { Dispatch, SetStateAction, FormEvent, ReactNode } from "react";

export interface IconInterface {
    icon: string;
    onClick?: () => void;
    title?: string;
    class?: string;
}

export interface ConstIconInterface {
    name: string;
    src?: string;
    component?: ReactNode;
}

export interface FormPropsInterface {
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export interface DataUsers {
    id: string;
    email: string;
    password: string;
}

export interface LoginProps {
    users: DataUsers[];
    getUsers: () => Promise<void>;
}

export interface ShowUsersProps {
    users: DataUsers[];
}







