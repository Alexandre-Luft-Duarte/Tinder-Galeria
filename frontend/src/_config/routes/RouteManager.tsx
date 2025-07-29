import React, { useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from "../../pages/login/Login";
import Root from "../../components/root/Root";
import Choose from "../../pages/choose/Choose";

export default function App() {

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="login" element={<Login /> } />
            <Route path="choose" element={<Choose />}/>
        </Route>
    ))

  return <RouterProvider router={router}/>
}
