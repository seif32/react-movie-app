# usePopcorn

A comprehensive movie search application that allows users to explore and manage their favorite movies. Users can search for movies, view details, and keep track of watched films.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Movie Search**: Users can search for movies by title using the OMDB API.
- **Watched List**: Users can add movies to their watched list, which is stored in local storage.
- **Movie Details**: Users can view detailed information about each movie, including ratings and summaries.
- **Responsive Design**: The application is designed to work seamlessly across different devices.

## Technologies Used

- **Frontend**:
  - React
  - JavaScript
  - CSS
- **APIs**:
  - OMDB API for movie data
- **State Management**:
  - React Hooks (useState, useEffect)
  - Custom Hooks (useMovies, useLocalStorage)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/seif32/react-movie-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-movie-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000`.

## Usage

1. **Search for Movies**: Enter a movie title in the search bar and press Enter.
2. **View Movie Details**: Click on a movie to view its details.
3. **Add to Watched List**: Click the button to add a movie to your watched list.
4. **View Watched Movies**: The watched list displays the movies you've watched.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/YourFeatureName
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request.
