import React, { ReactNode } from "react";
import { useForm } from "../hooks/useForm";

export interface DataUsers {
  id: string;
  name: string;
  email: string;
  password?: string;
}

// O tipo de retorno do nosso hook useForm. Usamos 'any' aqui para
// a definição inicial, pois o tipo real será definido dinamicamente com generics.
export type UseFormReturnType = ReturnType<typeof useForm<any>>;

// As props para o componente <Form>
// Ele é genérico (<T>) para aceitar qualquer formato de dados.
export interface FormProps<T> {
  onSubmit: (data: T) => void;
  children: ReactNode;
  initialValues: T; // O formulário precisa saber com quais valores começar.
}

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
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
  onClick?: () => void;
  className?: string; 
}

export interface AuthContextProps {
  login: (userData: DataUsers, token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: DataUsers | null;
  token: string | null;
  loading: boolean;
}

export interface ConstIconProps {
    icon: string;
    title?: string;
    src?: string;
    component?: ReactNode;
    className?: string;
    onClick?: () => void;
}

export interface ModalContextProps {
  showModal: (options: ModalOptions) => void;
  hideModal: () => void;
  isOpen: boolean;
  modalContent: ReactNode;
  modalTitle: string;
  modalActions: {
    confirmText?: string;
    onConfirm?: (() => void) | null;
    cancelText?: string;
  }
}

export interface ModalOptions {
  title: string;
  content: ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
  cancelText?: string;
}

export interface UploadProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export interface DeleteButtonProps {
  arrayUrls: string[];
  setArrayUrls: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  setCurrentUrlIndex: React.Dispatch<React.SetStateAction<number>>;
}

export type Stage = 'selecting' | 'previewing' | 'confirming';

