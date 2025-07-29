import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Root from "../../components/root/Root";
import Choose from "../../pages/choose/Choose";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Login from "../../pages/login/Login";

export default function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="choose" element={<Choose />}/>
            <Route path="login" element={<Login />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
        </Route>
    ))

  return <RouterProvider router={router}/>
}
