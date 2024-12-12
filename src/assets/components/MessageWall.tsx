import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../supabaseClient';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Comment } from '../types/comment';

const MessageWall: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments from Supabase when component mounts
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('timestamp', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async (message: string, username: string) => {
    const newComment: Comment = {
      id: uuidv4(),
      username: username || 'Anonymous',
      message,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    try {
      const { error } = await supabase
        .from('comments')
        .insert([newComment]);

      if (error) throw error;
      setComments(prev => [newComment, ...prev]);
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleReply = async (message: string, parentId: string) => {
    const newReply: Comment = {
      id: uuidv4(),
      username: 'Anonymous',
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      const parent = comments.find(c => c.id === parentId);
      if (!parent) return;

      const updatedReplies = [...(parent.replies || []), newReply];
      
      const { error } = await supabase
        .from('comments')
        .update({ replies: updatedReplies })
        .eq('id', parentId);

      if (error) throw error;

      setComments(prev =>
        prev.map(comment =>
          comment.id === parentId
            ? { ...comment, replies: updatedReplies }
            : comment
        )
      );
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  return (
    <div id='messages' className="wishes flex flex-col justify-center items-center max-w-full mx-auto p-4">
      <h1 className="text-6xl font-[SayanSans] text-[--secondary-color1] font-bold text-center mb-6 z-0">
        Shenron Wishes
      </h1>
      <CommentBox onAddComment={handleAddComment} />
      <CommentList comments={comments} onReply={handleReply} />
    </div>
  );
};

export default MessageWall;