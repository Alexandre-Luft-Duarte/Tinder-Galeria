import React from "react";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Root from "../../components/root/Root";
import Choose from "../../pages/choose/Choose";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import { AuthProvider } from "../context/AuthContext";
import { ModalProvider } from "../context/ModalContext";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import PublicRoute from "../../components/publicRoute/PublicRoute";
import Modal from "../../components/modal/Modal";

export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Navigate to="/login" replace />} />

            <Route element={<PublicRoute />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            {/* A regra <Route index ... /> de fato inicia uma "viagem" para a página de login. No entanto, o PublicRoute age como um posto de controle no meio do caminho. Graças ao estado loading, ele para o tráfego, verifica os documentos (AuthContext) e, ao ver que o usuário já tem um "passaporte" (isAuthenticated: true), ele o desvia para o destino correto (/choose) antes que ele chegue ao destino original (/login). */}

            <Route element={<ProtectedRoute />}>
                <Route path="choose" element={<Choose />} />
                <Route path="about" element={<About />} /> {/*tirar about e contact do componente Nav quando o user não estiver logado*/}
                <Route path="contact" element={<Contact />} />
            </Route>
        
        </Route>
    ))

    return (
        <AuthProvider>
            <ModalProvider>
                <RouterProvider router={router} />
                <Modal />
            </ModalProvider>
        </AuthProvider>
    );
}
