import React from "react";
import { FormInputProps } from "../../../_config/interfaces/Interface";
import { useFormContext } from "../Form";

export const FormInput = ({ name, label, ...rest }: FormInputProps) => {
    const { values, errors, handleInputChange } = useFormContext();

    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <input 
                id={name} 
                name={name}
                value={values[name] || ''}
                onChange={handleInputChange}
                {...rest}
            />
            {errors[name] && <p style={{ color: 'red', fontSize: '12px' }}>{errors[name]}</p>}
        </div>
    );
}