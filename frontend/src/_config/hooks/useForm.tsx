import { useState } from 'react';

type FormErrors = Record<string, string>;

// O hook agora é genérico (<T>). Ele pode gerenciar um estado de qualquer formato.
export const useForm = <T extends Record<string, any>>(initialValues: T) => {
  // O estado 'values' é fortemente tipado com o tipo genérico T.
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // A função de callback agora também espera o tipo genérico T.
  const handleSubmit = (onSubmitCallback: (data: T) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // Lógica de validação...
      if (Object.values(values).some(value => !value)) {
        alert("Por favor, preencha todos os campos.");
        // Lógica de erro mais detalhada pode ser adicionada aqui
      } else {
        setErrors({});
        onSubmitCallback(values);
      }
    };
  };

  return { values, errors, handleInputChange, handleSubmit };
};