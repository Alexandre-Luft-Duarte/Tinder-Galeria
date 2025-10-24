import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({message: "Acesso negado, nenhum token recebido!"})
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message: "Token inválido ou expirado."});
        }
        req.user = decoded;
        next();
    })
}