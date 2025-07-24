import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer";
import Login from "../../pages/login/Login";

export default function Root() {
    return(
        <>
            <Outlet />
        </>
    );
}

