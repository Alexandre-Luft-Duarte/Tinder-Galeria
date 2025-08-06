import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post("/usuarios", async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            password: req.body.password
        }
    })
    res.status(200).json(req.body);
})

app.listen(3000)