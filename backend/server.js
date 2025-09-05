import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();


app.get("/usuarios", async (req, res) => {
    try {
        const users = await prisma.register.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados dos usuários" });   
    }
})

app.post("/usuarios", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await prisma.register.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        })
        res.status(201).json(req.body); 
    } catch (error) {
        console.log("Erro ao criar usuário", error);
        res.status(500).json({ error: "Erro ao buscar dados dos usuários" });
    }
})

app.put("/usuarios/:id", async (req, res) => {
    try {
        await prisma.register.update({
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
        res.status(500).json({ error: "Erro ao buscar dados dos usuários" });
    }
})

app.delete("/usuarios/:id", async (req, res) => {
    try {

        const id = req.params.id.toString().trim(); //remove espaços em branco e quebras de linha

        await prisma.register.delete({
            where: {
                id: id
            }
        })
        res.status(200).json({message: "Usuários excluido com sucesso!"});
    } catch (error) {
        console.log("Erro ao deleter usuário", error);
        res.status(400).json({error: "Erro ao deletar usuário"});
    }
})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.register.findUnique({
            where: {email: email},
        });

        if(!user) {
            return res.status(401).json({ message: "Credenciais inválidas!" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Credenciais inválidas!" });
        }

        const payload = {
            id: user.id,
            email: user.email
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json({ 
            message: "Login bem-sucedido!",
            user: userWithoutPassword,
            token: token
         })

    } catch(error) {
        res.status(500).json({message: "Ocorreu um erro no servidor"})
    }
})

app.listen(3000);