import { Routes, Route } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import moviesList from "../../utils/moviesList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="/movies"
          element={<Movies moviesList={moviesList.slice(0, 15)} />}
        ></Route>
        <Route
          path="/saved-movies"
          element={<SavedMovies moviesList={moviesList.slice(0, 3)} />}
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
