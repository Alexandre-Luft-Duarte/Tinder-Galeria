import React from "react";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
;

import Root from "../../components/root/Root";
import Choose from "../../pages/choose/Choose";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import { AuthProvider } from "../../components/context/AuthContext";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import PublicRoute from "../../components/publicRoute/PublicRoute";

export default function App() {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Navigate to="/login" replace />} />
            
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />}/>
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            <Route element={<ProtectedRoute />}>
                <Route path="choose" element={<Choose />} />
            </Route>

        </Route>
    ))

    return (
        <AuthProvider>
            <RouterProvider router={router}/>  
        </AuthProvider>
    );
}
