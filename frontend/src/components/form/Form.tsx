import React, { createContext, useContext } from 'react';

import { useForm } from '../../_config/hooks/useForm';
import { FormProps, UseFormReturnType } from '../../_config/interfaces/Interface';
import styles from "./Form.module.css"

// O Context precisa ser capaz de guardar um hook de qualquer tipo, por isso <any>.
const FormContext = createContext<UseFormReturnType | null>(null);

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext deve ser usado dentro de um componente Form");
    }
    return context;
};

// O Form é genérico (<T>) e passa o tipo e os valores para o useForm.
export default function Form<T extends Record<string, any>>({ onSubmit, children, initialValues }: FormProps<T>) {
  // O hook é inicializado com os valores e o tipo corretos.
  const formMethods = useForm<T>(initialValues);

  return (
    <FormContext.Provider value={formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className={styles.formContainer}>
        {children}
      </form>
    </FormContext.Provider>
  );
}