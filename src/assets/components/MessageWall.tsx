import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db } from './../firebase'; // 🔥 Import Firestore
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import { Comment } from '../types/comment';

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // 🟢 Load comments from Firestore when the component mounts
  useEffect(() => {
    const loadComments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'comments'));
        const commentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Comment[];
        setComments(commentsData);
      } catch (error) {
        console.error('Error loading comments:', error);
      }
    };

    loadComments();
  }, []);

  const handleAddComment = async (message: string, username: string) => {
    const newComment: Comment = {
      id: '',
      username,
      message,
      timestamp: new Date().toISOString(),
      replies: [],
    };

    try {
      // 🟢 Add new comment to Firestore
      const docRef = await addDoc(collection(db, 'comments'), {
        ...newComment,
        timestamp: serverTimestamp(), // Firestore handles the timestamp
      });

      newComment.id = docRef.id;
      setComments((prev) => [newComment, ...prev]);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleReply = async (message: string, parentId: string) => {
    const newReply: Comment = {
      id: '',
      username: 'Anonymous', // Set a user for replies (this can be dynamic)
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      // 🟢 Add reply as a subcollection to Firestore
      const parentDocRef = doc(db, 'comments', parentId);
      await updateDoc(parentDocRef, {
        replies: [...comments.find((c) => c.id === parentId)?.replies || [], newReply],
      });

      // Update the local state to reflect the new reply
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === parentId
            ? { ...comment, replies: [...(comment.replies || []), newReply] }
            : comment
        )
      );
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center max-w-full mx-auto p-4">
      <h1 className="text-6xl font-[SayanSans] text-[--secondary-color1] font-bold text-center mb-6 z-0">Shenron Wishes</h1>
      <CommentBox onAddComment={handleAddComment} />
      <CommentList comments={comments} onReply={handleReply} />
    </div>
  );
};

export default App;
