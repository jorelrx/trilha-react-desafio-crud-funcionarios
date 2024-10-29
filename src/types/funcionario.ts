export interface Funcionario {
    id: number;
    nome?: string | null;
    endereco?: string | null;
    ramal?: string | null;
    emailProfissional?: string | null;
    departamento?: string | null;
    salario: number;
    dataAdmissao?: string | null;
  }
  