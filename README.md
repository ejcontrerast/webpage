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

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/ejcontrerast/myportfolio.git


2. **Navigate to the project directory**

cd myportfolio

3. **Install dependencies**

npm install

## Usage
1. Start the development server

npm run dev

2. Open the application

Navigate to http://localhost:5173 in your browser to view the portfolio.

## Deployment
The project is deployed using GitHub Pages. To deploy your own version:

1. Build the project

npm run build

2. **Deploy using GitHub Pages**

npm run deploy

Ensure the homepage field in package.json is set to https://<your-username>.github.io/<your-repo-name>/.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository

2. Create a new branch

git checkout -b feature/YourFeature

3. Commit your changes

git commit -m "Add your feature"

4. Push to the branch

git push origin feature/YourFeature

5. Open a Pull Request
