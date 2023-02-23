import React from "react";
import More from "../img/more.png";
import Input from "./Input";
import Messages from "./Messages";
const Chat = () => {
    return (
        <div className="chat">
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={More} alt="" className="src" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

export default Chat;
