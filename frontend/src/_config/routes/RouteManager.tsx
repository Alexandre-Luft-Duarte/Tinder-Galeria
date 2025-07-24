import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Login from "../../pages/login/Login";
import Root from "../../components/root/Root";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<Root />}>
        <Route path="/login" element={<Login /> } />
    </Route>
))

export default function RouteManager() {
    return(
        <RouterProvider router={router}/>
    );
}