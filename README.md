# HPB Vegeta

## Overview
HPB Vegeta is a web application built with React, TypeScript, and Vite. It is designed to celebrate a special occasion, specifically a birthday, with interactive and engaging features. The application includes various components such as a quiz, a message wall, a masonry grid of images and videos, and more. The project leverages Tailwind CSS for styling and Supabase for backend services.

## Key Components
1. **Header**: Displays the navigation bar with links to different sections of the application.
2. **Hero**: The main hero section with a welcoming message.
3. **About**: Provides information about the occasion and the person being celebrated.
4. **MessageWall**: Allows users to post and view birthday messages. It uses Supabase to store and retrieve comments.
5. **GameQuiz**: An interactive quiz that determines which version of a character (Vegeta) the user is most like.
6. **MasonryGrid**: Displays a grid of images and videos related to the occasion.
7. **Footer**: Contains a footer with a special message and an interactive image.

## Styling
The project uses Tailwind CSS for styling, providing a utility-first approach to design. Custom styles are defined in `src/index.css`, and Tailwind's configuration is set up in `tailwind.config.js`.

## Backend
The backend is set up using Supabase, a backend-as-a-service platform. The `src/config/supabaseClient.ts` file configures the Supabase client with the necessary credentials. The backend handles storing and retrieving comments for the message wall.

## Deployment
The project is configured for deployment on Vercel. The `.vercel` directory contains configuration files for Vercel, and environment variables are set up in the Vercel project settings.

## Usage
To run the project locally, follow these steps:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in the `.env` file.
4. Start the development server using `npm run dev`.
5. Open the application in your browser at `http://localhost:3000`.

## Conclusion
This project is a comprehensive web application designed to celebrate a special occasion with interactive features and engaging content. It leverages modern web development technologies and best practices to provide a seamless user experience.

## Footer Component
The footer component displays a special message and an interactive image. Here is the code for the `Footer.tsx` component:

```tsx
import HoverImage from "./HoverImage";

const Footer = () => {
  return (
    <footer className="bg-[#1d1d1d] text-white text-center p-8 w-full z-10">
      <div className='flex flex-row justify-center items-center text-xl md:text-3xl '>
        <div>
          <p>Made with ❤️</p> 
          <p>by Karen and Ernesto for</p>
          <p className="font-[HappyMonkey] text-sm">(Click on Luis 🥳)</p>
        </div>
        <HoverImage src="static/memories/sticker.png" alt="Luis upsidedown" soundSrc="static/sounds/raqueltrap.mp3"/>
      </div>
    </footer>
  );
};

export default Footer;
