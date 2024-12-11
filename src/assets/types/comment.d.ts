export interface Comment {
    id: string;
    username: string;
    message: string;
    timestamp: string;
    replies?: Comment[]; // For nested replies
  }