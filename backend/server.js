import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Importe os arquivos de rota que vamos criar
import authRoutes from "./src/api/auth-routes.js";
import userRoutes from "./src/api/user-routes.js"; // Criaremos este para as rotas de usuário

// Carrega as variáveis de ambiente
dotenv.config();

const app = express();

// Middlewares globais
app.use(express.json());
app.use(cors());

// --- DELEGAÇÃO DE ROTAS ---
// Qualquer requisição que começar com /auth será gerenciada pelo authRoutes
app.use("/auth", authRoutes);
// Qualquer requisição que começar com /users será gerenciada pelo userRoutes
app.use("/users", userRoutes);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});