const BASE_URL = "http://localhost:3000";

async function request(url, method, body, token) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options = {
    method,
    credentials: "include",
    headers,
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(`${BASE_URL}${url}`, options);
  if (!response.ok) {
    const message = await response.json();
    if (message.error) {
      throw new Error(message.error);
    } else if (message.message) {
      throw new Error(message.message);
    } else {
      throw new Error(`Request status:${response.status}`);
    }
  }

  return await response.json();
}

export const checkToken = (token) => {
  return request("/users/me", "GET", null, token);
};

export const register = (name, email, password) => {
  return request("/signup", "POST", { name, email, password });
};

export const login = (email, password) => {
  return request("/signin", "POST", { email, password });
};

export const signout = () => {
  return request("/signout", "GET");
};

export const getUserInfo = () => {
  return request("/users/me");
};

export const updateUserInfo = (email, name) => {
  return request("/users/me", "PATCH", { email, name });
};

export const saveMovie = (movie) => {
  return request("/movies", "POST", {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `https://api.nomoreparties.co/${movie.image.url}`,
    trailerLink: movie.trailerLink,
    thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  });
};

export const deleteMovie = (movieId) => {
  return request(`/movies/${movieId}`, "DELETE");
};

export const getMovies = () => {
  return request("/movies", "GET");
};
