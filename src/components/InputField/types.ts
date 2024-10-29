import { UseFormRegister } from 'react-hook-form';

export interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>; // Substitua `any` pelo seu tipo de formulário
  name: string;
  errorMessage?: string;
}
