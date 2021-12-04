import React from 'react';


const Login = () => {
    const loginClick = () => {
        localStorage.setItem("Auth-Key", "ffffffsdfdessfafds")
        window.location.reload()
    }
        return (
            <div>
                <input placeholder="username" />
                <input placeholder="password" />
                <button onClick={loginClick}>Login</button>
            </div>
        );
    }



    export default Login;