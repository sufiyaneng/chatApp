import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: []
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    updateMessage: (state, action) => {
      const { id, text } = action.payload;
      const message = state.messages.find((msg) => msg.id === id);
      if (message) {
        message.text = text;
      }
    },
    deleteMessage: (state, action) => {
      const { id } = action.payload;
      state.messages = state.messages.filter((msg) => msg.id !== id);
    }
  }
});

export const { addMessage, updateMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;
