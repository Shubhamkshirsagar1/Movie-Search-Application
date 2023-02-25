import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import MoviesIMDB from "./components/MoviesIMDB/MoviesIMDB";
import Page404 from "./components/Page404/Page404";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/movies/:imdbID" element={<MoviesIMDB />} />
        <Route path="*" element={<Page404  />} />
      </Routes>
    </div>
  );
}

export default App;
