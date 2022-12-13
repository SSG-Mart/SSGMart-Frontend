import React from 'react'

export default function notification_message(props) {
    const click = () => {
        props.toggleNotification(!props.style)
    }
  return (
    <div onClick={click} style={props.style ? {display: "flex", position: "absolute", top: "70px", right: "0", padding: "20px", background: props.color, borderRadius: "7px 0 0 7px", fontFamily: "arial", color: "#fff", cursor: "pointer"} : {display: "none"}}>
        <p>{props.msg}</p>
    </div>
  )
}
