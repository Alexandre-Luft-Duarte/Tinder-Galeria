import React from "react";

import { LoginProps } from "../../_config/interfaces/Interface";

export default function ShowUsers( {users}: LoginProps ) {
    return (
        <div>
            {users.map((user) => (
                <li key={user.id}>
                    {user.email}
                    {user.password}
                    {user.id}
                </li>
            ))}
        </div>
        );
}