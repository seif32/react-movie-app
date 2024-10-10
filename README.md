# usePopcorn

A React-based web application that replicates the core features of IMDb, allowing users to browse, search, and explore movie details, ratings, and more.

## Features

- **Search Movies and TV Shows**: Search for your favorite movies and TV shows.
- **Detailed Information**: View details like cast, ratings, and summaries.
- **Responsive Design**: Optimized for various screen sizes.
- **React Router**: Seamless navigation between pages.
- **API Integration**: Fetch data using a public movie API.

## Tech Stack

- **Frontend**: React, React Router, Context API for state management.
- **Styling**: CSS/SCSS, Material UI for user-friendly components.
- **Backend**: json-server for mock API data (for testing purposes).

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/seif32/react-movie-app.git
   cd react-movie-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

4. **Mock API Setup**:
   - Install json-server globally if not installed:
     ```bash
     npm install -g json-server
     ```
   - Run the json-server:
     ```bash
     json-server --watch db.json --port 5000
     ```

## Folder Structure

```
├── public/
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Main pages like Home, MovieDetail, etc.
│   ├── assets/       # Images, icons, and other assets
│   ├── services/     # API service files
│   ├── App.js        # Main App component
│   └── index.js      # Entry point
├── .gitignore
├── package.json
├── README.md
└── db.json           # Mock data for json-server
```

## Contributing

Feel free to open issues or make pull requests if you find any bugs or have feature suggestions.
