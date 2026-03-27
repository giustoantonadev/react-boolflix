import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";


function App() {

  const [film, setFilm] = useState([])
  const [serie, setSerie] = useState([])
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_API_KEY
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search.trim())}&language=it-IT`
  const api_url_series = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT&query=${encodeURIComponent(search.trim())}`

  const popular_films_url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=it-IT`;
  const popular_series_url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=it-IT`;

  function homePageLoad() {
    fetch(popular_films_url)
      .then(res => res.json())
      .then(data => setFilm(data.results));

    fetch(popular_series_url)
      .then(res => res.json())
      .then(data => setSerie(data.results));
  }
  useEffect(() => {
    homePageLoad();
  }, []);
  function searchFilm() {
    if (search.trim() === '') return

    fetch(api_url)
      .then(res => res.json())
      .then(data => {
        /* console.log(data.results); */
        setFilm(data.results.filter(film => film.poster_path))
      })
  }
  function searchSerie() {
    if (search.trim() === '') return

    fetch(api_url_series)
      .then(res => res.json())
      .then(data => {
        /*  console.log(data.results); */
        setSerie(data.results.filter(film => film.poster_path))
      })
  }
  function handleHome() {
    setSearch('')
    homePageLoad()
    navigate('/')
  }
  function handleSearch(e) {
    e.preventDefault()
    if (search.trim() === '') return;
    searchFilm();
    searchSerie();
  }


  return (
    <>
      <AppHeader search={search} setSearch={setSearch} handleSearch={handleSearch} handleHome={handleHome} />

      <Routes>
        <Route path='/' element={<AppMain film={film} serie={serie} />} />
        <Route path='/search' element={<AppMain film={film} serie={serie} />} />
        <Route path='/movie/:id' element={<MoviePage film={film} />} />
        <Route path='/tv/:id' element={<TvPage serie={serie} />} />
      </Routes>

    </>
  )
}

export default App
