import React from 'react';
import { InputFieldProps } from './types';
import { ErrorMessage, InputContainer, InputStyled, Label } from './styles';

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, register, name, errorMessage }) => {
    return (
        <InputContainer>
            <Label>{label}</Label>
            <InputStyled type={type} placeholder={placeholder} {...register(name)} hasError={!!errorMessage} />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
    );
};

export default InputField;
