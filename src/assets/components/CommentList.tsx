import React from 'react';
import { Comment as CommentType } from '../types/comment';
import Comment from './Comment';

interface CommentListProps {
  comments: CommentType[];
  onReply: (message: string, parentId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({ comments, onReply }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReply={onReply} />
      ))}
    </div>
  );
};

export default CommentList;
