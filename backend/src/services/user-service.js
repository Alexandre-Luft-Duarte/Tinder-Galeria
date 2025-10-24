import prisma from "../config/prisma.js";
import bcrypt from "bcrypt"; // Necessário se for atualizar a senha

export async function getAllUsersService() {
    return prisma.register.findMany();
}

export async function updateUserService(id, data) {
    // Adicione lógica para criptografar a senha se ela for atualizada
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10);
    }
    return prisma.register.update({
        where: { id },
        data: data
    });
}

export async function deleteUserService(id) {
    return prisma.register.delete({
        where: { id: id.toString().trim() }
    });
}