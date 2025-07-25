import React from "react";
import { Outlet } from "react-router-dom";

import Login from "../../pages/login/Login";

export default function Root() {
    return(
        <>
            <Outlet />
        </>
    );
}

