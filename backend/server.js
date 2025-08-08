import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());


app.get("/usuarios", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        console.log("Erro ao buscar dados dos usuários", error);
    }
})

app.post("/usuarios", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await prisma.user.create({
            data: {
                email: req.body.email,
                password: hashedPassword
            }
        })
        res.status(201).json(req.body); 
    } catch (error) {
        console.log("Erro ao criar usuário", error);
    }
})

app.put("/usuarios/:id", async (req, res) => {
    try {
        await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                email: req.body.email,
                password: req.body.password     
            }
        })
        res.status(200).json(req.body); 
    } catch (error) {
        console.log("Erro ao editar dados do usuário", error);
    }
})

app.delete("/usuarios/:id", async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({message: "Usuários excluido com sucesso!"});
    } catch (error) {
        console.log("Erro ao deleter usuário", error);
    }
})

app.listen(3000);