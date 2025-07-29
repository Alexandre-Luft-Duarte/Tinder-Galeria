import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../navbar/Nav";

export default function Root() {
    return(
        <div>
            <Nav />
            <Outlet /> {/* componente da rota filha */}
        </div>
    );
}

