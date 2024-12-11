import React from 'react';
import { Comment as CommentType } from '../types/comment';

interface CommentProps {
  comment: CommentType;
  onReply: (message: string, parentId: string) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, onReply }) => {
  const handleReply = () => {
    const replyMessage = prompt('Enter your reply:');
    if (replyMessage) {
      onReply(replyMessage, comment.id);
    }
  };

  return (
    <div className="w-full p-4 border border-gray-200 rounded-md shadow-sm my-8 [-webkit-text-stroke:0px_#47492e] z-[110]">
      <h3 className="font-semibold text-[--secondary-color2] [-webkit-text-stroke:0.5px_#47492e] z-[1]">{comment.username}</h3>
      <p className="font-[HappyMonkey] text-[--secondary-color1] font-bold z-[1]">{comment.message}</p>
      <small className="text-[--primary-color1] font-[HappyMonkey]">{new Date(comment.timestamp).toLocaleString()}</small>

      <button
        onClick={handleReply}
        className="mt-2 mb-5 ml-5 text-[--primary-color2] [-webkit-text-stroke:0.5px_#47492e] hover:underline z-[100] relative"
      >
        Reply
      </button>

      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-6 m-4 border-l-2 border-gray-200">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
