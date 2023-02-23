import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Sandesh Chat</span>
            <div className="user">
                <img
                    src="https://images.pexels.com/photos/14589717/pexels-photo-14589717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt=""
                />
                <span>John</span>
                <button>Log Out</button>
            </div>
        </div>
    );
};

export default Navbar;
