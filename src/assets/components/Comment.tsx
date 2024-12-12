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
    <div className="flex flex-col justify-center items-start content-wish w-full mx-auto md:w-3/5 p-4 border border-gray-200 rounded-md shadow-sm my-8 [-webkit-text-stroke:0px_#47492e] z-[110]">
      <h3 className="font-semibold text-[--secondary-color2] [-webkit-text-stroke:0.5px_#47492e] z-[1]">{comment.username}</h3>
      <p className="font-[HappyMonkey] text-[--secondary-color1] font-bold z-[1] text-xl md:text-2xl lg:text-3xl">{comment.message}</p>
      <div className='flex justify-between items-center w-full'>
        <small className="text-[--primary-color1] font-[HappyMonkey] text-sm md:text-xl">{new Date(comment.timestamp).toLocaleString()}</small>
        <button
          onClick={handleReply}
          className="text-xl md:text-2xl lg:text-4xl text-[--primary-color2] [-webkit-text-stroke:0.5px_#47492e] hover:underline z-[1] relative"
        >
          Reply
        </button>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-6 m-4 border-l-2 border-gray-200 z-[1]">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} onReply={onReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
