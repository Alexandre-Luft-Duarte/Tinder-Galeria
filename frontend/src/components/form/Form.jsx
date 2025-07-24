import React, { useState } from "react";

export default function Form({ email, setEmail, password, setPassword, handleSubmit }) {
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}