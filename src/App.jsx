import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";


function App() {

  const [film, setFilm] = useState([])
  const [search, setSearch] = useState('')

  const API_KEY = import.meta.env.VITE_API_KEY
  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search.trim())}&language=it-IT`


  /*   useEffect(() => {
      fetch(api_url)
        .then(res => res.json())
        .then(data => {
          console.log(data.results);
          setFilm(data.results)
        })
  
    }, []) */

  function searchFilm() {
    if (search === '') return

    fetch(api_url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setFilm(data.results)
      })
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



  return (
    <>
      <header>
        <navbar>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className="btn btn-primary" onClick={searchFilm}>Search Film</button>
        </navbar>
      </header>

      <main>
        <div className="container">
          <div className="row">
            {film.map((singleFilm) => (
              <div className="col-4" key={singleFilm.id}>
                <h2>{singleFilm.title}</h2>
                <p>{singleFilm.original_title}</p>
                <p>{getFlag(singleFilm.original_language)}</p>
                <p>{singleFilm.vote_average}</p>
              </div>
            ))}
          </div>
        </div >
      </main>



    </>
  )
}

export default App
