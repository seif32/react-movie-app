import { useState, useEffect } from "react";

const KEY = process.env.REACT_APP_OMDB_API_KEY;

function useMovies(query, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    callback?.();

    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setIsError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error(
            "There is an error happened and we couldn't fetch the movies :( "
          );
        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found");
        setMovies(data.Search);
        setIsError("");
      } catch (err) {
        if (err.name !== "AbortError") setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setIsError("");
      return;
    }
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isError, isLoading };
}

export default useMovies;
