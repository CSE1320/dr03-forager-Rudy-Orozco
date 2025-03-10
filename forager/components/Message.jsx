import React from 'react';

const Message = ({msg}) => {
    console.log(msg)
    return (
        // Background Color
        <div
            className="message rounded-xl text-sm w-full max-w-md font-medium text-white px-4 py-2 mx-auto"
            style={{ backgroundColor: msg.color }}>

            {/* Message Content */}
            <div className="header flex items-center">
                <img width="27px" height="27px" className="" src={msg.icon} />
                <h1 className="uppercase">{msg.header}</h1>
            </div>
            <p>{msg.message}</p>
        </div>
    );
};

export default Message;