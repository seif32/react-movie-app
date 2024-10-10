import { useState, useEffect } from "react";

function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(function () {
    const localWatched = localStorage.getItem(key);
    return localWatched ? JSON.parse(localWatched) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
