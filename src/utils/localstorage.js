export function getLocalStorage(key) {
  try {
    const savedMovies = localStorage.getItem(key) ?? '[]';
    const parsedMovies = JSON.parse(savedMovies);
    return parsedMovies;
  } catch (error) {
    console.log(error.message);
  }
}

export function setLocalStorage(key, value) {
  try {
    const savedMovies = getLocalStorage(key);
    let newMovie;
    let isAdded;

    if (savedMovies.some(data => data.id === value.id)) {
      newMovie = savedMovies.filter(data => data.id !== value.id);
      isAdded = false;
    } else {
      newMovie = [...savedMovies, value];
      isAdded = true;
    }
    localStorage.setItem(key, JSON.stringify(newMovie));
    return isAdded;
  } catch (error) {
    console.log(error.message);
  }
}