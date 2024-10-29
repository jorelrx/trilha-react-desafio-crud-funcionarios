import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import InputField from '@/components/InputField';
import funcionarioService from '@/services/funcionarioService';
import { Funcionario } from '@/types/funcionario';
import { Container, Form, Button } from '../styles'; // Importe seus estilos

const schema = yup.object().shape({
  nome: yup.string().nullable().required('Nome é obrigatório'),
  endereco: yup.string().nullable(),
  ramal: yup.string().nullable(),
  emailProfissional: yup.string().email('Email inválido').nullable(),
  departamento: yup.string().nullable(),
  salario: yup.number().typeError('Salário deve ser um número').required('Salário é obrigatório').positive('Salário deve ser positivo'),
  dataAdmissao: yup.string().nullable(),
});

const EditarFuncionarioPage = () => {
  const router = useRouter();
  const { id } = router.query; // Obtém o ID da URL
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Funcionario>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchFuncionario = async () => {
      if (id) {
        const data = await funcionarioService.getOne(id as string);
        setValue('nome', data.nome);
        setValue('endereco', data.endereco);
        setValue('ramal', data.ramal);
        setValue('emailProfissional', data.emailProfissional);
        setValue('departamento', data.departamento);
        setValue('salario', data.salario);
        setValue('dataAdmissao', data.dataAdmissao);
      }
    };

    fetchFuncionario();
  }, [id]);

  const onSubmit = async (data: Funcionario) => {
    try {
      await funcionarioService.update(id as string, data);
      router.push('/funcionarios');
    } catch (error) {
      console.error('Erro ao atualizar funcionário:', error);
    }
  };

  return (
    <Container>
      <h1>Editar Funcionário</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField label="Nome" placeholder="Nome" register={register} name="nome" errorMessage={errors.nome?.message} />
        <InputField label="Endereço" placeholder="Endereço" register={register} name="endereco" />
        <InputField label="Ramal" placeholder="Ramal" register={register} name="ramal" />
        <InputField label="Email Profissional" placeholder="Email Profissional" register={register} name="emailProfissional" errorMessage={errors.emailProfissional?.message} />
        <InputField label="Departamento" placeholder="Departamento" register={register} name="departamento" />
        <InputField label="Salário" type="number" placeholder="Salário" register={register} name="salario" errorMessage={errors.salario?.message} />
        <InputField label="Data de Admissão" type="date" register={register} name="dataAdmissao" />
        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
};

export default EditarFuncionarioPage;
