import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Popup from "../../shared/Popup/Popup";

import * as auth from "../../utils/AuthApi";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [moreCards, setMoreCards] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [tokenChecked, setTokenChecked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupError, setPopupError] = useState(false);

  const navigate = useNavigate();

  function handleLogin({ email, password }) {
    auth
      .login(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setLoggedIn(true);
        mainApi
          .getUserInfo()
          .then((user) => {
            setCurrentUser(user);
            getSavedMovies();
          })
          .catch((err) => console.log(err))
          .finally(() => {
            navigate("/movies");
            showPopup("Вы авторизованы.", false);
          });
      })
      .catch(() => {
        showPopup("Что-то пошло не так.", true);
      });
  }

  function handleRegister({ name, email, password }) {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
        setLoggedIn(true);
        showPopup("Вы зарегистрированы.", false);
      })
      .catch(() => {
        showPopup("Что-то пошло не так.", true);
      });
  }

  function handleSignOut() {
    auth
      .signout()
      .then(() => {
        setCurrentUser({});
        setLoggedIn(false);
        navigate("/");
        localStorage.removeItem("foundedMovies");
        localStorage.removeItem("shortsMovies");
        localStorage.removeItem("searchMovieName");
        localStorage.removeItem("token");
        showPopup("Вы вышли из системы.", false);
      })
      .catch(() => {
        showPopup("Что-то пошло не так.", true);
      });
  }

  const handleTokenCheck = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth
        .checkToken(token)
        .then(() => {
          setLoggedIn(true);
          mainApi
            .getUserInfo()
            .then((user) => {
              setCurrentUser(user);
              getSavedMovies();
            })
            .catch((err) => console.log(err))
            .finally(() => {
              setTokenChecked(true);
            });
        })
        .catch((err) => console.log(err));
    } else {
      setTokenChecked(true);
    }
  }, []);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  const showPopup = (message, isError) => {
    setPopupMessage(message);
    setPopupError(isError);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    if (popupVisible) {
      const timeout = setTimeout(() => {
        hidePopup();
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [popupVisible]);

  function searchMovie(movieName, isShortsMovies) {
    setIsLoading(true);
    moviesApi
      .getInitialCards()
      .then((movies) => {
        const searchedMovies = movies.filter((item) =>
          item.nameRU.toLowerCase().includes(movieName.toLowerCase())
        );
        const foundedMovies = isShortsMovies
          ? searchedMovies.filter((item) => item.duration <= 40)
          : searchedMovies;
        localStorage.setItem("foundedMovies", JSON.stringify(foundedMovies));
        localStorage.setItem("shortsMovies", isShortsMovies);
        localStorage.setItem("searchMovieName", movieName);
        handleResize();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }

  function handleShowMore() {
    const foundedMovies = JSON.parse(localStorage.getItem("foundedMovies"));
    setMovies(foundedMovies.slice(0, movies.length + moreCards));
  }

  function handleSearchMovie(movieName, isShortsMovies) {
    searchMovie(movieName, isShortsMovies);
  }

  const handleResize = useCallback(() => {
    const foundedMovies = JSON.parse(localStorage.getItem("foundedMovies"));
    if (foundedMovies === null) {
      return;
    }
    if (windowWidth >= 850) {
      setMovies(foundedMovies.slice(0, 12));
      setMoreCards(3);
    } else if (windowWidth > 480 && windowWidth < 1280) {
      setMovies(foundedMovies.slice(0, 8));
      setMoreCards(2);
    } else if (windowWidth <= 480) {
      setMovies(foundedMovies.slice(0, 5));
      setMoreCards(2);
    }
  }, [windowWidth]);

  function checkWindowWidth() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", checkWindowWidth);
    handleResize();
  }, [windowWidth, handleResize]);

  function handleUpdateUserInfo(name, email) {
    mainApi
      .updateUserInfo(name, email)
      .then((newData) => {
        setCurrentUser(newData);
        showPopup("Информация успешно обновлена.", false);
      })
      .catch(() => showPopup("Что-то пошло не так.", true));
  }

  function getSavedMovies() {
    mainApi
      .getMovies()
      .then((savedMovies) => {
        setSavedMovies(savedMovies);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function isSaved(card) {
    return savedMovies.some(
      (c) => c.movieId === card.id && c.owner._id === currentUser._id
    );
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((movieData) => {
        setSavedMovies([...savedMovies, movieData]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(card) {
    const deleteCard = savedMovies.find(
      (c) =>
        c.movieId === (card.id || card.movieId) &&
        c.owner._id === currentUser._id
    );
    if (!deleteCard) return;
    mainApi
      .deleteMovie(deleteCard._id)
      .then(() => {
        setSavedMovies(savedMovies.filter((c) => c._id !== deleteCard._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {tokenChecked && (
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />}></Route>

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  path="/movies"
                  element={Movies}
                  loggedIn={loggedIn}
                  cards={movies}
                  defaultSearchValue={
                    localStorage.getItem("searchMovieName") || ""
                  }
                  handleShowMore={handleShowMore}
                  handleSearchMovie={handleSearchMovie}
                  isLoading={isLoading}
                  isSaved={isSaved}
                  handleSaveMovie={handleSaveMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            ></Route>

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  path="/saved-movies"
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  cards={savedMovies}
                  isLoading={isLoading}
                  isSaved={isSaved}
                  handleDeleteMovie={handleDeleteMovie}
                />
              }
            ></Route>

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  path="/profile"
                  element={Profile}
                  loggedIn={loggedIn}
                  handleUpdateUserInfo={handleUpdateUserInfo}
                  handleSignOut={handleSignOut}
                />
              }
            ></Route>

            <Route
              path="/signup"
              element={
                <Register handleRegister={handleRegister} loggedIn={loggedIn} />
              }
            ></Route>
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} loggedIn={loggedIn} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        )}

        {popupVisible && (
          <Popup
            message={popupMessage}
            isError={popupError}
            onClose={hidePopup}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
