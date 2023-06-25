class Api {
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  }

  _handleRes(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  _request(url, options) {
    const headers = {
      ...this._headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return fetch(url, { ...options, headers }).then(this._handleRes);
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    });
  }

  updateUserInfo(name, email) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    });
  }

  getMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      credentials: "include",
      headers: this._headers,
    });
  }

  saveMovie(movie) {
    return this._request(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
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
      }),
    });
  }

  deleteMovie(id) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    });
  }
}

const api = new Api({
  // baseUrl: "http://api.hero-movies.nomoredomains.rocks",
  baseUrl: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
