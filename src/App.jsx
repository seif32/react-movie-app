/* eslint-disable no-unused-vars */
import { useState } from "react";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Results from "./components/Results";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SelectedMovie from "./components/SelectedMovie";
import useMovies from "./hooks/useMovies";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [query, setQuery] = useState("");
  const [movieSelectedID, setMovieSelectedID] = useState(null);

  const { movies, isError, isLoading } = useMovies(query, handleMovieClose);
  const [watched, setWatched] = useLocalStorage([], "watched");

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  function handleMovieSelect(id) {
    setMovieSelectedID((movieSelectedID) =>
      movieSelectedID === id ? null : id
    );
  }
  function handleMovieClose(id) {
    setMovieSelectedID(null);
  }

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isError ? (
            <ErrorMessage message={isError} />
          ) : isLoading ? (
            <Loader />
          ) : (
            <MovieList onSelectMovie={handleMovieSelect} movies={movies} />
          )}
        </Box>
        <Box>
          {movieSelectedID ? (
            <SelectedMovie
              watched={watched}
              onCloseMovie={handleMovieClose}
              selectedID={movieSelectedID}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
