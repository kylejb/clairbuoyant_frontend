import React, { useState } from 'react';

const UserLoginForm = props => {
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

    const handleSubmitHelper = (e) => {
        e.preventDefault();
        console.log("LoginForm Submitted")
    }

    return (
        <>
            <h2>LoginForm</h2>
            <form onSubmit={handleSubmitHelper}>
                <input type="text" placeholder="email address" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="submit" />
            </form>
        </>
    )
}

export default UserLoginForm;