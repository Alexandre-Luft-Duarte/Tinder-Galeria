import prisma from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerService(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return prisma.register.create({
        data: { name, email, password: hashedPassword }
    });
}

export async function loginService(email, password) {
    const user = await prisma.register.findUnique({ where: { email } });
    if (!user) {
        const error = new Error("Credenciais inválidas.");
        error.statusCode = 401;
        throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        const error = new Error("Credenciais inválidas.");
        error.statusCode = 401;
        throw error;
    }

    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    const { password: _, ...userWithoutPassword } = user;

    return { message: "Login bem-sucedido!", user: userWithoutPassword, token };
}