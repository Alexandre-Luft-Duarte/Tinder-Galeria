import { registerService, loginService } from "../services/auth-service.js";
import bcrypt from "bcrypt";

export async function registerController(req, res) {
        try {
            const { name, email, password } = req.body;
            const newUser = await registerService(name, email, password);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: "Erro ao criar usuário", error: error.message});
        }
}

export async function loginController(req, res) {
    try {
        const { email, password } = req.body;
        const login = await loginService( email, password);
        res.status(201).json(login);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
}