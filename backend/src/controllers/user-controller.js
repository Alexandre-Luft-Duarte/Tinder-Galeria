import { getAllUsersService, updateUserService, deleteUserService } from "../services/user-service.js";

export async function getAllUsersController(req, res) {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados dos usuários" });
    }
}

export async function updateUserController(req, res) {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedUser = await updateUserService(id, data);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: "Erro ao editar dados do usuário" });
    }
}

export async function deleteUserController(req, res) {
    try {
        const { id } = req.params;
        await deleteUserService(id);
        res.status(200).json({ message: "Usuário excluído com sucesso!" });
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar usuário" });
    }
}