import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  margin-bottom: 16px;
`;

export const InputStyled = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #0070f3; /* Cor do foco */
    outline: none;
  }

  ${({ hasError }: { hasError?: boolean }) => 
    hasError && `
      border-color: red;
      box-shadow: 0 0 5px red;
    `}
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;