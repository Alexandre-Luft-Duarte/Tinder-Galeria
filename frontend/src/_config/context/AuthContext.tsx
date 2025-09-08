import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { AuthContextProps, DataUsers } from "../interfaces/Interface";


const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<{ user: DataUsers | null; token: string | null }>({
        user: null,
        token: null,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedToken = localStorage.getItem('authToken'); // getItem le os dados do localStorage
            const storedUser = localStorage.getItem('authUser');

            if (storedToken && storedUser) { // se os dados existirem, ele altera os dados do Auth com os dados do localStorage
                setAuth({ token: storedToken, user: JSON.parse(storedUser) });
            }
        } catch (error) {
            console.log("Falha ao carregar dados da autenticação", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {

        if (loading) {
            return
        };

        if (auth.token && auth.user) {
            localStorage.setItem('authToken', auth.token); // setItem salva os dados com seus valores no localStorage. 1 parâmetro é a key (nome) para o dado e 2 parâmetro é o dado em si (value)
            localStorage.setItem('authUser', JSON.stringify(auth.user));
        } else {
            localStorage.removeItem('authToken'); // setRemove remove os dados do localStorage
            localStorage.removeItem('authUser');
        }
    }, [auth, loading]);

    const login = (userData: DataUsers, token: string) => {
        setAuth({ user: userData, token: token });
    };

    const logout = () => {
        setAuth({ user: null, token: null });
    };

    const value = {
        user: auth.user,
        token: auth.token,
        isAuthenticated: !!auth.token,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}