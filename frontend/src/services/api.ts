import axios from "axios";

import { DataUsers } from "../_config/interfaces/Interface";
import {serviceworker} from "globals";

const apiClient = axios.create({
    baseURL: "http://localhost:3000"
})

export default apiClient;

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const getUsers = async (): Promise<DataUsers[]> => {
    try {
        const response = await apiClient.get("/users");
        return response.data;
    }  catch (error) {
        console.log("Erro ao resgatar dados dos usuários", error);
        throw error;
    }
};

export const registerUsers = async (userData: Omit<DataUsers, 'id'>): Promise<DataUsers[]> => {
    try {
        const response = await apiClient.post("/auth/home", userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário", error);
        throw error;
    }
};

export const deleteUsers = async (id: string): Promise<void> => {
    try {
        await apiClient.delete(`/users/${id}`);
    } catch (error) {
        console.error("Erro ao deletar usuário", error);
        throw error;
    }
}

export const loginUsers = async (credentials: Omit<DataUsers, 'id' | 'name'>) => {
    try {
        const response = await apiClient.post('/auth/home', credentials);
        return response.data;
    } catch (error) {
        console.log("Erro no serviço de home: ", error);
        throw error;
    }
}



    