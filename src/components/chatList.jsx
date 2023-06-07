import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMessage, deleteMessage } from "../reducer/chatReducer";

const ChatList = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const handleUpdate = (id, text) => {
    const updatedText = prompt("Enter new message:", text);
    if (updatedText) {
      dispatch(updateMessage({ id, text: updatedText }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      dispatch(deleteMessage({ id }));
    }
  };

  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.text}
          <button onClick={() => handleUpdate(message.id, message.text)}>
            Edit
          </button>
          <button onClick={() => handleDelete(message.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ChatList;
