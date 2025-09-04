import axios from "axios";

import { DataUsers } from "../_config/interfaces/Interface";

const apiClient = axios.create({
    baseURL: "http://localhost:3000"
})

export default apiClient;


export const getUsers = async (): Promise<DataUsers[]> => {
    try {
        const response = await apiClient.get("/usuarios");
        return response.data;
    }  catch (error) {
        console.log("Erro ao resgatar dados dos usuários", error);
        throw error;
    }
};

export const registerUsers = async (userData: Omit<DataUsers, 'id'>): Promise<DataUsers[]> => {
    try {
        const response = await apiClient.post("/usuarios", userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário", error);
        throw error;
    }
};

export const deleteUsers = async (id: string): Promise<void> => {
    try {
        await apiClient.delete(`/usuarios/${id}`);
    } catch (error) {
        console.error("Erro ao deletar usuário", error);
        throw error;
    }
}

export const loginUsers = async (credentials: Omit<DataUsers, 'id' | 'name'>) => {
    try {
        const response = await apiClient.post('/login', credentials);
        return response.data;
    } catch (error) {
        console.log("Erro no serviço de login: ", error);
        throw error;
    }
}
    