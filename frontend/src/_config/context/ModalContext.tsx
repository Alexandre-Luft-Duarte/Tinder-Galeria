import React, { createContext, ReactNode, useContext, useState } from "react";

import { ModalContextProps, ModalOptions } from "../interfaces/Interface";

const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const [modalTitle, setModalTitle] = useState<React.ReactNode | null>(null);
    const [modalActions, setModalActions] = useState({
        confirmText: 'Continuar',
        onConfirm: null as (() => void) | null,
        cancelText: 'Cancelar',
    })

    const showModal = (options: ModalOptions) => {
        setModalTitle(options.title);
        setModalContent(options.content);
        setIsOpen(true);
        setModalActions({
            confirmText: options.confirmText || 'Continuar',
            onConfirm: options.onConfirm || null,
            cancelText: options.cancelText || 'Cancelar',
        });
    };

    // const hideModal = () => {
    //     setIsOpen(false);
    //     setModalTitle('');
    //     setModalContent(null);
    // };

    const value = {
        isOpen,
        showModal,
        // hideModal,
        modalContent,
        modalTitle,
        setModalTitle,
        modalActions,
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