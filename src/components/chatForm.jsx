import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addMessage } from "../reducer/chatReducer";

const ChatForm = () => {
  const dispatch = useDispatch();
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      const newMessage = {
        id: uuid(),
        text: messageText
      };
      dispatch(addMessage(newMessage));
      setMessageText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;
