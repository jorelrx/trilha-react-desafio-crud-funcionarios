// src/pages/detalhes/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import funcionarioService from '@/services/funcionarioService';
import { Funcionario } from '@/types/funcionario';
import { Container } from '../styles'; // Importe seus estilos

const DetalhesFuncionarioPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [funcionario, setFuncionario] = useState<Funcionario | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const data = await funcionarioService.getOne(id as string);
        setFuncionario(data);
      } catch (err) {
        setError('Erro ao carregar funcionário');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchFuncionario();
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <h1>Detalhes do Funcionário</h1>
      {funcionario && (
        <div>
          <p><strong>Nome:</strong> {funcionario.nome}</p>
          <p><strong>Endereço:</strong> {funcionario.endereco}</p>
          <p><strong>Ramal:</strong> {funcionario.ramal}</p>
          <p><strong>Email Profissional:</strong> {funcionario.emailProfissional}</p>
          <p><strong>Departamento:</strong> {funcionario.departamento}</p>
          <p><strong>Salário:</strong> {funcionario.salario}</p>
          <p><strong>Data de Admissão:</strong> {funcionario.dataAdmissao}</p>
        </div>
      )}
    </Container>
  );
};

export default DetalhesFuncionarioPage;
