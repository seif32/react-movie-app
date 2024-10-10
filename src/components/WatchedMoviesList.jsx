import WatchedMovie from "./WatchedMovie";

function WatchedMoviesList({ watched , onDeleteWatched}) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie} onDeleteWatched={onDeleteWatched}/>
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
