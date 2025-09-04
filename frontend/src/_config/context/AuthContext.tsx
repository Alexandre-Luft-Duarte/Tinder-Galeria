import React, { createContext, ReactNode, useContext, useState } from "react";

import { AuthContextProps } from "../interfaces/Interface";


const AuthContext = createContext<AuthContextProps  | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}