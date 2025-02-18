import Movie from "./Movie";

function MovieList({ movies,onSelectMovie }) {

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie onSelectMovie={onSelectMovie} movie={movie} key={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
