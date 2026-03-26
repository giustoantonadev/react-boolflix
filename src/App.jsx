import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AppHeader from "./components/AppHeader";



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

  const getFlag = (lang) => {

    const langToFlag = {
      en: 'gb',
      ja: 'jp',
      he: 'il',
      zh: 'cn',
      ko: 'kr'
    };

    const flagCode = langToFlag[lang] || lang;
    const supportedFlags = ['it', 'gb', 'fr', 'es', 'de', 'jp', 'us', 'pt', 'cn', 'kr'];

    if (supportedFlags.includes(flagCode)) {
      return <span className={`fi fi-${flagCode}`}></span>;
    }
    return <span>{lang}</span>;
  };

  const showStars = (vote) => {
    const rating = Math.ceil(vote / 2)
    const stars = []

    for (let i = 1; i <= 5; i++) {

      const starClass = i <= rating ? "fa-solid fa-star" : "fa-regular fa-star"
      stars.push(
        <i key={i} className={starClass} style={{ color: "#FFD43B" }}></i>
      );
    }
    return stars
  }


  return (
    <>

      <AppHeader search={search} setSearch={setSearch} handleSearch={handleSearch} />

      <main>
        <div className="container">
          <div className="row">
            {film.map((singleFilm) => (
              <div className="col-4" key={singleFilm.id}>
                <h2>{singleFilm.title}</h2>
                <p>{singleFilm.original_title}</p>
                <p> <img src={`https://image.tmdb.org/t/p/w342${singleFilm.poster_path}`} alt="film poster" /></p>
                <p>{getFlag(singleFilm.original_language)}</p>
                <p>{showStars(singleFilm.vote_average)}</p>
              </div>
            ))}
          </div>
        </div >

        <div className="container">
          <div className="row">
            {serie.map((singleSerie) => (
              <div className="col-4" key={singleSerie.id}>
                <h2>{singleSerie.name}</h2>
                <p>{singleSerie.original_name}</p>
                <p> <img src={`https://image.tmdb.org/t/p/w342${singleSerie.poster_path}`} alt="serie poster" /></p>
                <p>{getFlag(singleSerie.original_language)}</p>
                <p>{showStars(singleSerie.vote_average)}</p>
              </div>
            ))}
          </div>
        </div >
      </main>



    </>
  )
}

export default App
