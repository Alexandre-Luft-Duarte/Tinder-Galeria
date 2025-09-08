import React, { createContext, ReactNode, useContext, useState } from "react";

import { ModalContextProps, ModalOptions } from "../interfaces/Interface";

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const [modalTitle, setModalTitle] = useState('');
    const [modalActions, setModalActions] = useState({
        confirmText: 'Continuar',
        onConfirm: null as (() => void) | null,
        cancelText: 'Cancelar',
    })

    const showModal = ({ title, content, confirmText, onConfirm, cancelText }: ModalOptions) => {
        setModalTitle(title);
        setModalContent(content);
        setIsOpen(true);
        setModalActions({
            confirmText: confirmText || 'Continuar',
            onConfirm: onConfirm || null,
            cancelText: cancelText || 'Cancelar',
        });
    };

    const hideModal = () => {
        setIsOpen(false);
        setModalTitle('');
        setModalContent(null);
    };

    const value = {
        isOpen,
        showModal,
        hideModal,
        modalContent,
        modalTitle,
        modalActions
    };

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal deve ser usado dentro de ModalProvider!")
    }

    return context;
};