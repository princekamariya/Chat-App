import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Sandesh App</span>
                <span className="title">Login</span>
                <form action="">
                    <input type="email" placeholder="Enter an email" />
                    <input type="password" placeholder="Enter a password" />
                    <button>Sign In</button>
                </form>
                <p>You do have an account? Register</p>
            </div>
        </div>
    );
};

export default Login;
