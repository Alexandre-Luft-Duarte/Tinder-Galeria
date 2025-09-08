import React from "react";
import ReactDOM from 'react-dom';

import styles from "./Modal.module.css";
import { useModal } from "../../_config/context/ModalContext";
import Button from "../button/Button";

export default function Modal() {
    const { isOpen, hideModal, modalTitle, modalContent, modalActions } = useModal();

    if (!isOpen) {
        return null;
    }

    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        return null;
    }

    const handleConfirmClick = () => {
        if(modalActions.onConfirm) {
            modalActions.onConfirm();
        }
        hideModal();
    }

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                <h2>
                    {modalTitle}
                </h2>
                <div className={styles.modalContainerBody}>
                    {modalContent}
                </div>
                <div className={styles.modalActions}>
                    {modalActions.onConfirm ? (
                        <>
                            <Button typeButton="button" onClick={hideModal}>
                                {modalActions.cancelText}
                            </Button>
                            <Button typeButton="button" onClick={handleConfirmClick}>
                                {modalActions.confirmText}
                            </Button>
                        </>
                    ) : (
                        <Button typeButton="button" onClick={hideModal}>
                            Fechar
                        </Button>
                    )}
                </div>
            </div>
        </div>,
        modalRoot
    )
}