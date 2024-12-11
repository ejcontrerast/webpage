import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Comment } from '../types/comment';
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'http://localhost:5000/comments';

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // 🟢 Load comments from backend when the component mounts
  useEffect(() => {
    axios.get(API_URL)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error loading comments:', error));
  }, []);

  const handleAddComment = (message: string, username: string) => {
    const newComment: Comment = {
      id: uuidv4(),
      username,
      message,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    // 🟢 Send comment to the server
    axios.post(API_URL, newComment)
      .then((response) => setComments((prev) => [response.data, ...prev]))
      .catch((error) => console.error('Error posting comment:', error));
  };

  const handleReply = (message: string, parentId: string) => {
    const newReply: Comment = {
      id: uuidv4(),
      username: 'Anonymous', // Use the current username or handle it as needed
      message,
      timestamp: new Date().toISOString(),
    };

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === parentId
          ? { ...comment, replies: [...(comment.replies || []), newReply] }
          : comment
      )
    );

    // Optionally, you can update the server as well if you want to store replies.
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-full mx-auto p-4 ">
      <h1 className="text-6xl font-[SayanSans] text-[--secondary-color1] font-bold text-center mb-6 z-0">Shenron Wishes</h1>
      <CommentBox onAddComment={handleAddComment} />
      <CommentList comments={comments} onReply={handleReply} />
    </div>
  );
};

export default App;