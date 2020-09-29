import React, { useState } from 'react';

const UserLoginForm = props => {
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

    const handleSubmitHelper = (e) => {
        e.preventDefault();
        console.log("LoginForm Submitted")
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: { email: email, password: password } })
        }
        fetch("http://localhost:3000/api/v1/login", options).then(res=>res.json()).then(user => {
            // localStorage for MVP only
            localStorage.setItem("loggedIn", JSON.stringify(user.jwt));
            props.setToken(user.jwt);
        })
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
    );
}

export default UserLoginForm;