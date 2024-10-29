// src/services/funcionarioService.ts
import { Funcionario } from '@/types/funcionario';
import { getAll, getOne, create, update, remove } from './api';

const ENDPOINT = '/Funcionario';

export const funcionarioService = {
  async getAll(): Promise<Funcionario[]> {
    return await getAll(ENDPOINT);
  },

  async getOne(id: string): Promise<Funcionario> {
    return await getOne(ENDPOINT, id);
  },

  async create(funcionario: Funcionario): Promise<Funcionario> {
    return await create(ENDPOINT, funcionario);
  },

  async update(id: string, funcionario: Funcionario): Promise<Funcionario> {
    return await update(ENDPOINT, id, funcionario);
  },

  async remove(id: string): Promise<void> {
    return await remove(ENDPOINT, id);
  },
};

export default funcionarioService;
