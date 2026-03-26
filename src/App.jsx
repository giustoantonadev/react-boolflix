import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

function App() {

  const [film, setFilm] = useState([])
  const [serie, setSerie] = useState([])
  const [search, setSearch] = useState('')

  const API_KEY = import.meta.env.VITE_API_KEY
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search.trim())}&language=it-IT`

  const api_url_series = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT&query=${encodeURIComponent(search.trim())}`


  function searchFilm() {
    if (search === '') return

    fetch(api_url)
      .then(res => res.json())
      .then(data => {
        /* console.log(data.results); */
        setFilm(data.results)
      })
  }

  function searchSerie() {
    if (search === '') return

    fetch(api_url_series)
      .then(res => res.json())
      .then(data => {
        /*  console.log(data.results); */

        setSerie(data.results)
      })
  }

  function handleSearch(e) {
    e.preventDefault()
    if (search.trim() === '') return;
    searchFilm();
    searchSerie();
  }


  return (
    <>
      <AppHeader search={search} setSearch={setSearch} handleSearch={handleSearch} />

      <AppMain film={film} serie={serie} />



    </>
  )
}

export default App
