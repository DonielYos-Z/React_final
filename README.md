# React Final Project - React VOD

This is the final assignment project for the React course. It is a React-based VOD (Video On Demand) style application that allows users to search for movies, view movie details, and navigate between different pages of the app.

## Project Structure

Final_Assignment_React/
│
├── public/                # Static files (index.html, manifest.json, favicon, etc.)
├── src/
│   ├── components/         # Reusable components (Header, MovieItem, etc.)
│   ├── pages/              # Main pages (Home, About, Movies, MovieInfo, Page404)
│   ├── App.js              # Main app with routing
│   ├── index.js            # Entry point
│   └── index.css           # Global CSS
│
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── .gitignore              # Ignored files for Git

## Features

- Navigation using React Router (react-router-dom).
- Search Movies via the OMDb API.
- Movies List Page that displays search results dynamically.
- Movie Info Page with detailed information about a selected movie.
- Responsive Layout using Bootstrap for styling.
- 404 Page for invalid routes.

## Dependencies

- React
- React Router DOM
- Axios
- Bootstrap
- Testing Library

## API

This project uses the OMDb API:  
http://www.omdbapi.com/

The API provides movie data such as posters, release year, plot, and ratings.

Search movies by title:  
https://www.omdbapi.com/?s=SEARCH_TERM&apikey=YOUR_KEY

Get movie details by ID:  
https://www.omdbapi.com/?i=MOVIE_ID&apikey=YOUR_KEY

## Installation and Setup

1. Clone the repository:
   git clone https://github.com/DonielYos-Z/React_final.git
   cd React_final

2. Install dependencies:
   npm install

3. Run the development server:
   npm start
   The app will be available at http://localhost:3000

4. Build for production:
   npm run build

## Pages

- Home Page (/): Contains a search bar and displays movie results dynamically.
- About Page (/about): Static information about the project.
- Movies Page (/movies): Displays movie results (based on search or default).
- Movie Info Page (/movies/:id): Shows detailed info about a selected movie.
- 404 Page (/*): Displays an error message for invalid routes.

## License

This project was created for educational purposes as part of a React course assignment. You are free to use it as a learning resource.
