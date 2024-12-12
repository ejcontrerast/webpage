import React, { useState, useEffect } from 'react';
import supabase from '../supabaseClient';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Comment } from '../types/comment';
import { v4 as uuidv4 } from 'uuid';

const MessageWall: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // 🟢 Load comments from Supabase when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('timestamp', { ascending: false });

      if (error) {
        console.error('Error loading comments:', error);
      } else {
        setComments(data);
      }
    };

    fetchComments();
  }, []);

  const handleAddComment = async (message: string, username: string) => {
    const newComment: Comment = {
      id: uuidv4(),
      username,
      message,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    // 🟢 Send comment to Supabase
    const { data, error } = await supabase
      .from('comments')
      .insert([newComment]);

    if (error) {
      console.error('Error posting comment:', error);
    } else if (data) {
      setComments((prev) => [data[0], ...prev]);
    }
  };

  const handleReply = async (message: string, parentId: string) => {
    const newReply: Comment = {
      id: uuidv4(),
      username: 'Anonymous', // Use the current username or handle it as needed
      message,
      timestamp: new Date().toISOString(),
    };

    const { error } = await supabase
      .from('comments')
      .update({ replies: `replies || ${JSON.stringify([newReply])}::jsonb` })
      .eq('id', parentId);

    if (error) {
      console.error('Error posting reply:', error);
    } else {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === parentId
            ? { ...comment, replies: [...(comment.replies || []), newReply] }
            : comment
        )
      );
    }
  };

  return (
    <div id='messages' className="wishes flex flex-col justify-center items-center max-w-full mx-auto p-4 ">
      <h1 className="text-6xl font-[SayanSans] text-[--secondary-color1] font-bold text-center mb-6 z-0">Shenron Wishes</h1>
      <CommentBox onAddComment={handleAddComment} />
      <CommentList comments={comments} onReply={handleReply} />
    </div>
  );
};

export default MessageWall;