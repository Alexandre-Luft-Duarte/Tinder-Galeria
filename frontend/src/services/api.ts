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


export const postUsers = async (userData: Omit<DataUsers, 'id'>): Promise<DataUsers[]> => {
    try {
        const response = await apiClient.post("/usuarios", userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar usuário", error);
        throw error;
    }
};
    