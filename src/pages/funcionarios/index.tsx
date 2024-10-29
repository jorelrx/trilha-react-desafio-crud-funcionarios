import funcionarioService from '@/services/funcionarioService';
import { Funcionario } from '@/types/funcionario';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Table, TableRow, TableHeader, TableData, ActionButton, Container } from './styles';

const FuncionariosPage = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const data = await funcionarioService.getAll();
        setFuncionarios(data);
      } catch (err) {
        setError('Erro ao carregar funcionários');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionarios();
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir este funcionário?')) {
      try {
        await funcionarioService.remove(id.toString());
        // Atualiza a lista após a exclusão
        setFuncionarios((prev) => prev.filter(func => func.id !== id));
      } catch (error) {
        console.error('Erro ao excluir funcionário:', error);
      }
    }
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <h1>Lista de Funcionários</h1>
      <ActionButton onClick={() => router.push('/funcionarios/create')}>Adicionar Funcionário</ActionButton>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Email Profissional</TableHeader>
            <TableHeader>Ramal</TableHeader>
            <TableHeader>Ações</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <TableRow key={funcionario.id}>
              <TableData>{funcionario.nome}</TableData>
              <TableData>{funcionario.emailProfissional}</TableData>
              <TableData>{funcionario.ramal}</TableData>
              <TableData>
                <ActionButton onClick={() => router.push(`/funcionarios/details/${funcionario.id}`)}>Detalhes</ActionButton>
                <ActionButton onClick={() => router.push(`/funcionarios/update/${funcionario.id}`)}>Editar</ActionButton>
                <ActionButton onClick={() => handleDelete(funcionario.id)}>Excluir</ActionButton>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FuncionariosPage;
