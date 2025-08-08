import React, { useState, useEffect } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { getUsers } from "../../services/api";
import { DataUsers } from "../interfaces/Interface";

import Root from "../../components/root/Root";
import Choose from "../../pages/choose/Choose";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";

export default function App() {

    const [users, setUsers] = useState<DataUsers[]>([]);

    async function handleGetUsers(){
        try {
            const data = await getUsers();
            setUsers(data);
        } catch(error) {
            console.log("Falha ao buscar usuário", error);
        }
    }

    useEffect(() => {
        handleGetUsers();
    }, [])


    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="login" element={<Login users={users} getUsers={handleGetUsers}/>}/>
            <Route path="register" element={<Register />} />
            <Route path="choose" element={<Choose />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
        </Route>
    ))

  return <RouterProvider router={router}/>
}
