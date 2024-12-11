import React, { useState } from 'react';

interface CommentBoxProps {
  onAddComment: (message: string, username: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onAddComment }) => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onAddComment(message, username.trim() ? username : 'Anonymous');
    setMessage('');
    setUsername('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-3/5">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md z-[20] text-[--secondary-color5] font-[HappyMonkey] text-xl"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        className="p-2 border border-gray-300 rounded-md z-[20] text-[--secondary-color5] font-[HappyMonkey] text-xl"
        placeholder="Add a comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="bg-[--primary-color2] text-[--secondary-color2] px-4 py-2 rounded-md hover:bg-[--primary-color3] z-20">
        Post Comment
      </button>
    </form>
  );
};

export default CommentBox;