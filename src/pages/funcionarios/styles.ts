// src/pages/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableHeader = styled.th`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const TableData = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

export const ActionButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:last-child {
    margin-right: 0;
  }
`;

// Estilos para o formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
