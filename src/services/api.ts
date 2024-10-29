// services/api.js
import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://desafios-dio.azurewebsites.net/',
  headers: {
    'Origin': 'http://localhost:3000', // Imitar a origem do navegador
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Método GET all - retorna todos os itens
export const getAll = async <T>(endpoint: string) => {
  try {
    const response: AxiosResponse<T[]> = await api.get(endpoint);
    console.log('Response:', response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar todos os dados:', error);
    throw error;
  }
};

// Método GET one - retorna um único item pelo ID
export const getOne = async <T>(endpoint: string, id: string) => {
  try {
    const response: AxiosResponse<T> = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o item:', error);
    throw error;
  }
};

// Método POST - cria um novo item
export const create = async <T, U>(endpoint: string, data: U) => {
  try {
    const response: AxiosResponse<T> = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar item:', error);
    throw error;
  }
};

// Método PUT - atualiza um item existente
export const update = async <T, U>(endpoint: string, id: string, data: U) => {
  try {
    const response: AxiosResponse<T> = await api.put(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar item:', error);
    throw error;
  }
};

// Método DELETE - exclui um item pelo ID
export const remove = async (endpoint: string, id: string) => {
  try {
    const response = await api.delete(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar item:', error);
    throw error;
  }
};

export default api;
