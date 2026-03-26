import { useState } from "react";



function App() {

  const [film, setFilm] = useState([])
  const [search, setSearch] = useState('')

  const API_KEY = import.meta.env.VITE_API_KEY

  const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(search.trim())}`


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


  return (
    <>
      <header>
        <nav>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button onClick={searchFilm}>Search Film</button>
        </nav>
      </header>

      <main>
        {film.map((singleFilm) => (
          <div key={singleFilm.id}>
            <h2>{singleFilm.title}</h2>
            <p>{singleFilm.original_title}</p>
            <p>{singleFilm.original_language}</p>
            <p>{singleFilm.vote_average}</p>
          </div>
        ))}
      </main>



    </>
  )
}

export default App
