import React from "react";
import Add from "../img/addAvatar.png";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Sandesh App</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="Enter Display Name" />
                    <input type="email" placeholder="Enter an email" />
                    <input type="password" placeholder="Enter a password" />
                    <input style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;
