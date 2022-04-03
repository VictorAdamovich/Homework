import React from 'react'
import classes from "./Message.module.css";


type MessageType = {
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:MessageType) {
    return (
        <div className={classes.Messages}>
            <div className={classes.userPic}>
                <img src={props.avatar} alt="UserAvatar"/>
            </div>
            <div className={classes.messagesBox}>
                <h5><a href="#">{props.name}</a></h5>
                <p>{props.message} <span>{props.time}</span></p>
            </div>


        </div>
    )
}

export default Message
