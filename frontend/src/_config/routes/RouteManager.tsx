import React, { useState, useEffect, useRef } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import api from "../../services/api";
import Root from "../../components/root/Root";
import Choose from "../../pages/choose/Choose";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";

export default function App() {

    const [users, setUsers] = useState([]);

    const inputEmail = useRef();
    const inputPassword = useRef();

    async function getUsers(){
        const userFromApi = await api.get("/usuarios");
        setUsers(userFromApi.data); 
    }

    useEffect(() => {
        getUsers();
    }, [])

    // async function postUsers() {
    //     await api.post("/login", {
    //         email: input
    //     })
    // }

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="choose" element={<Choose />}/>
            <Route path="login" element={<Login users={users} refUserEmail={} refUserPassword={}/>}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
        </Route>
    ))

  return <RouterProvider router={router}/>
}
