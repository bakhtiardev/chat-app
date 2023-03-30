import { auth } from "../App";
import React from "react";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  //   console.log("photoURL", photoURL);
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
          alt="avatar"
        />
        <p>{text}</p>
      </div>
    </>
  );
}
export default ChatMessage;
