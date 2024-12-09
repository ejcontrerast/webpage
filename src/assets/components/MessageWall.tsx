import React, { useState } from "react";

const MessageWall = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addMessage = () => {
    if (input) {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <section id="messages" className="p-10">
      <h2 className="text-3xl font-bold mb-4">Birthday Wishes</h2>
      <input
        type="text"
        className="p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a message..."
      />
      <button className="ml-2 px-4 py-2 bg-blue-600 text-white" onClick={addMessage}>
        Add
      </button>
      <ul className="mt-4">
        {messages.map((msg, idx) => (
          <li key={idx} className="mt-2 bg-gray-800 p-2 rounded">{msg}</li>
        ))}
      </ul>
    </section>
  );
};

export default MessageWall;

