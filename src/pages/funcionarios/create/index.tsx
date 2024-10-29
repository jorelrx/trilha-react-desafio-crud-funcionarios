import { Funcionario } from '@/types/funcionario';
import funcionarioService from '@/services/funcionarioService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Form, Button } from '../styles';
import { useRouter } from 'next/router';
import InputField from '@/components/InputField';

const schema = yup.object().shape({
  nome: yup.string().nullable().required('Nome é obrigatório'),
  endereco: yup.string().nullable(),
  ramal: yup.string().nullable(),
  emailProfissional: yup.string().email('Email inválido').nullable(),
  departamento: yup.string().nullable(),
  salario: yup.number().typeError('Salário deve ser um número').required('Salário é obrigatório').positive('Salário deve ser positivo'),
  dataAdmissao: yup.string().nullable(),
});

const NovoFuncionarioPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Funcionario>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const router = useRouter();

  const onSubmit = async (data: Funcionario) => {
    try {
      await funcionarioService.create(data);
      router.push('/funcionarios');
    } catch (error) {
      console.error('Erro ao adicionar funcionário:', error);
    }
  };

  return (
    <Container>
      <h1>Adicionar Funcionário</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputField 
          label="Nome" 
          placeholder="Nome" 
          register={register} 
          name="nome" 
          errorMessage={errors.nome?.message} 
        />
        
        <InputField 
          label="Endereço" 
          placeholder="Endereço" 
          register={register} 
          name="endereco" 
        />
        
        <InputField 
          label="Ramal" 
          placeholder="Ramal" 
          register={register} 
          name="ramal" 
        />
        
        <InputField 
          label="Email Profissional" 
          placeholder="Email Profissional" 
          register={register} 
          name="emailProfissional" 
          errorMessage={errors.emailProfissional?.message} 
        />
        
        <InputField 
          label="Departamento" 
          placeholder="Departamento" 
          register={register} 
          name="departamento" 
        />
        
        <InputField 
          label="Salário" 
          type="number" 
          placeholder="Salário" 
          register={register} 
          name="salario" 
          errorMessage={errors.salario?.message} 
        />
        
        <InputField 
          label="Data de Admissão" 
          type="date" 
          register={register} 
          name="dataAdmissao" 
        />
        
        <Button type="submit">Salvar Funcionário</Button>
      </Form>
    </Container>
  );
};

export default NovoFuncionarioPage;
