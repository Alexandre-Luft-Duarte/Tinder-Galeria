import React from "react";

import { ShowUsersProps } from "../../_config/interfaces/Interface";

export default function ShowUsers( {users}: ShowUsersProps ) {
    return (
        <div>
            {users.map((user) => (
                <li key={user.id}>
                    {user.email}
                    {user.id}
                </li>
            ))}
        </div>
        );
}