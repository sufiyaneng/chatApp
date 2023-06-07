import React from "react";
import ChatForm from "./components/chatForm";
import ChatList from "./components/chatList";

const App = () => {
  return (
    <div>
      <h1>Chat App</h1>
      <ChatForm />
      <ChatList />
    </div>
  );
};

export default App;
