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

export interface DataUsers {
    id: string;
    email: string;
    password: string;
}

export interface FormPropsInterface {
    onSubmit: (data: Omit<DataUsers, 'id'>) => void;
    children: ReactNode;
}

export interface LoginProps {
    users: DataUsers[];
    getUsers: () => Promise<void>;
}

export interface ShowUsersProps {
    users: DataUsers[];
}

export interface ButtonProps {
    children: ReactNode;
    typeButton?: 'submit' | "button" | "reset";
}






